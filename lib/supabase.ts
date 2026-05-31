import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ncatwhzqqjsshfukifrf.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jYXR3aHpxcWpzc2hmdWtpZnJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3ODY5MDgsImV4cCI6MjA5NTM2MjkwOH0.JQVc7kbKmB6T31L1_XlpFaF6ZlC4psr39T65I-zg8rk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);