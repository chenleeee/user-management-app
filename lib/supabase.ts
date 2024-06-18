import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eiheysreuspcrfisbeym.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpaGV5c3JldXNwY3JmaXNiZXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzMjE5NTYsImV4cCI6MjAzMzg5Nzk1Nn0.34mBeJRG1LZQzz90YAyD9S_mBxq9loPQT9l35TZcR6g'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})