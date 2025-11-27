import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ehshiiltihuftbyroole.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoc2hpaWx0aWh1ZnRieXJvb2xlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyMjIwMDIsImV4cCI6MjA3OTc5ODAwMn0.7hlQ_YRh8K7nW2c_cXiYS0tTEjZYeXbdEeNeFUKXzLE";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
