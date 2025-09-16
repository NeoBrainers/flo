import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hyqgmqmfbbykvixxqfmh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5cWdtcW1mYmJ5a3ZpeHhxZm1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwNDI1MTIsImV4cCI6MjA3MzYxODUxMn0.R3XAD_wuMeLi4T9ABIR171Kjj4oh2sGutMJwSO0tf0A'

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