import { supabase } from './supabase';

// Database initialization and helper functions
export const initializeDatabase = async () => {
  try {
    // Create tables if they don't exist (this would typically be done via migrations)
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
};

// Seed sample data for development
export const seedSampleData = async () => {
  try {
    // Check if data already exists
    const { data: existingFloats } = await supabase
      .from('argo_floats')
      .select('id')
      .limit(1);

    if (existingFloats && existingFloats.length > 0) {
      console.log('Sample data already exists');
      return;
    }

    // Sample ARGO floats data
    const sampleFloats = [
      {
        float_id: 'ARGO_2901234',
        type: 'CORE' as const,
        status: 'Active' as const,
        latitude: 45.5,
        longitude: -125.3,
        last_profile_date: new Date().toISOString(),
      },
      {
        float_id: 'ARGO_2901235',
        type: 'BGC' as const,
        status: 'Active' as const,
        latitude: 40.2,
        longitude: -130.8,
        last_profile_date: new Date(Date.now() - 86400000).toISOString(),
      },
      {
        float_id: 'ARGO_2901236',
        type: 'CORE' as const,
        status: 'Inactive' as const,
        latitude: 35.7,
        longitude: -121.9,
        last_profile_date: new Date(Date.now() - 172800000).toISOString(),
      },
    ];

    const { error: floatsError } = await supabase
      .from('argo_floats')
      .insert(sampleFloats);

    if (floatsError) throw floatsError;

    // Sample profiles data
    const sampleProfiles = [
      {
        float_id: 'ARGO_2901234',
        profile_date: new Date().toISOString(),
        latitude: 45.5,
        longitude: -125.3,
        temperature_data: [15.2, 14.8, 14.1, 13.5, 12.9],
        salinity_data: [34.5, 34.6, 34.7, 34.8, 34.9],
        pressure_data: [10, 50, 100, 200, 500],
        depth_data: [10, 50, 100, 200, 500],
        quality_flags: [1, 1, 1, 1, 1],
      },
      {
        float_id: 'ARGO_2901235',
        profile_date: new Date(Date.now() - 86400000).toISOString(),
        latitude: 40.2,
        longitude: -130.8,
        temperature_data: [16.1, 15.7, 15.2, 14.8, 14.3],
        salinity_data: [34.2, 34.3, 34.4, 34.5, 34.6],
        pressure_data: [10, 50, 100, 200, 500],
        depth_data: [10, 50, 100, 200, 500],
        quality_flags: [1, 1, 1, 1, 1],
      },
    ];

    const { error: profilesError } = await supabase
      .from('argo_profiles')
      .insert(sampleProfiles);

    if (profilesError) throw profilesError;

    console.log('Sample data seeded successfully');
  } catch (error) {
    console.error('Error seeding sample data:', error);
    throw error;
  }
};

// Utility functions for data operations
export const getFloatById = async (floatId: string) => {
  const { data, error } = await supabase
    .from('argo_floats')
    .select('*')
    .eq('float_id', floatId)
    .single();

  if (error) throw error;
  return data;
};

export const getProfilesByFloat = async (floatId: string) => {
  const { data, error } = await supabase
    .from('argo_profiles')
    .select('*')
    .eq('float_id', floatId)
    .order('profile_date', { ascending: false });

  if (error) throw error;
  return data;
};

export const getRecentActivity = async (limit: number = 10) => {
  const { data, error } = await supabase
    .from('argo_profiles')
    .select(`
      *,
      argo_floats!inner(float_id, type)
    `)
    .order('profile_date', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data;
};

// Data export utilities
export const exportFloatData = async (floatIds: string[], format: 'json' | 'csv') => {
  const { data, error } = await supabase
    .from('argo_floats')
    .select(`
      *,
      argo_profiles(*)
    `)
    .in('float_id', floatIds);

  if (error) throw error;

  if (format === 'csv') {
    // Convert to CSV format
    return convertToCSV(data);
  }

  return data;
};

const convertToCSV = (data: any[]) => {
  if (!data.length) return '';
  
  const headers = Object.keys(data[0]);
  const csvContent = [
    headers.join(','),
    ...data.map(row => 
      headers.map(header => 
        JSON.stringify(row[header] || '')
      ).join(',')
    )
  ].join('\n');
  
  return csvContent;
};