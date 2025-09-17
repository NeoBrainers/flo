import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase, ArgoFloat, ArgoProfile } from '@/lib/supabase';
import { toast } from '@/hooks/use-toast';

// Hook for fetching ARGO floats
export const useArgoFloats = (filters?: {
  type?: 'CORE' | 'BGC';
  status?: 'Active' | 'Inactive';
  limit?: number;
}) => {
  return useQuery({
    queryKey: ['argo-floats', filters],
    queryFn: async () => {
      let query = supabase
        .from('argo_floats')
        .select('*')
        .order('created_at', { ascending: false });

      if (filters?.type) {
        query = query.eq('type', filters.type);
      }
      if (filters?.status) {
        query = query.eq('status', filters.status);
      }
      if (filters?.limit) {
        query = query.limit(filters.limit);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as ArgoFloat[];
    },
  });
};

// Hook for fetching ARGO profiles
export const useArgoProfiles = (floatId?: string, limit?: number) => {
  return useQuery({
    queryKey: ['argo-profiles', floatId, limit],
    queryFn: async () => {
      let query = supabase
        .from('argo_profiles')
        .select('*')
        .order('profile_date', { ascending: false });

      if (floatId) {
        query = query.eq('float_id', floatId);
      }
      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as ArgoProfile[];
    },
  });
};

// Hook for real-time float updates
export const useRealtimeFloats = () => {
  const queryClient = useQueryClient();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const subscription = supabase
      .channel('argo_floats_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'argo_floats',
        },
        (payload) => {
          console.log('Float update received:', payload);
          
          // Invalidate and refetch float queries
          queryClient.invalidateQueries({ queryKey: ['argo-floats'] });
          
          if (payload.eventType === 'INSERT') {
            toast({
              title: "New Float Detected",
              description: `Float ${payload.new.float_id} has been added to the system.`,
            });
          }
        }
      )
      .subscribe((status) => {
        setIsConnected(status === 'SUBSCRIBED');
      });

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [queryClient]);

  return { isConnected };
};

// Hook for dashboard metrics
export const useDashboardMetrics = () => {
  return useQuery({
    queryKey: ['dashboard-metrics'],
    queryFn: async () => {
      const [floatsResult, profilesResult, bgcFloatsResult] = await Promise.all([
        supabase.from('argo_floats').select('*', { count: 'exact' }),
        supabase.from('argo_profiles').select('*', { count: 'exact' }),
        supabase.from('argo_floats').select('*', { count: 'exact' }).eq('type', 'BGC'),
      ]);

      return {
        totalFloats: floatsResult.count || 0,
        activeFloats: floatsResult.data?.filter(f => f.status === 'Active').length || 0,
        totalProfiles: profilesResult.count || 0,
        bgcFloats: bgcFloatsResult.count || 0,
        dataVolume: '12.5TB', // This would be calculated from actual data
      };
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });
};

// Mutation for creating new floats
export const useCreateFloat = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (floatData: Omit<ArgoFloat, 'id' | 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from('argo_floats')
        .insert([floatData])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['argo-floats'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard-metrics'] });
      toast({
        title: "Float Created",
        description: "New ARGO float has been successfully added.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error Creating Float",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};

// Hook for searching floats
export const useSearchFloats = (searchTerm: string, filters: any) => {
  return useQuery({
    queryKey: ['search-floats', searchTerm, filters],
    queryFn: async () => {
      let query = supabase.from('argo_floats').select('*');

      if (searchTerm) {
        query = query.or(`float_id.ilike.%${searchTerm}%`);
      }

      if (filters.type && filters.type !== 'all') {
        query = query.eq('type', filters.type);
      }

      if (filters.status && filters.status !== 'all') {
        query = query.eq('status', filters.status);
      }

      if (filters.dateRange?.from) {
        query = query.gte('last_profile_date', filters.dateRange.from);
      }

      if (filters.dateRange?.to) {
        query = query.lte('last_profile_date', filters.dateRange.to);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as ArgoFloat[];
    },
    enabled: searchTerm.length > 0 || Object.keys(filters).length > 0,
  });
};