import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database schema for ARGO platform
export type ArgoFloat = {
  id: string
  float_id: string
  type: 'CORE' | 'BGC'
  status: 'Active' | 'Inactive'
  latitude: number
  longitude: number
  last_profile_date: string
  created_at: string
  updated_at: string
}

export type ArgoProfile = {
  id: string
  float_id: string
  profile_date: string
  latitude: number
  longitude: number
  temperature_data: number[]
  salinity_data: number[]
  pressure_data: number[]
  depth_data: number[]
  quality_flags: number[]
  created_at: string
}

export type UserProfile = {
  id: string
  email: string
  full_name?: string
  organization?: string
  access_level: 'basic' | 'researcher' | 'admin'
  created_at: string
  updated_at: string
}