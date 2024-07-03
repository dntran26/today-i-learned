import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kyhmxpcgreprgmzlshyr.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5aG14cGNncmVwcmdtemxzaHlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4ODIwODcsImV4cCI6MjAzMjQ1ODA4N30.KmxBKpbQC0a3RP4k2TjsRUoe22jfIROMNI9EljzLONc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
