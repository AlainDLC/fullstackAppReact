/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vpbtmyzloaqajwqijdwd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwYnRteXpsb2FxYWp3cWlqZHdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczMzA2NTEsImV4cCI6MjA0MjkwNjY1MX0.qVXz0aezOG8yQbxqwH8euQR1v8T7DsqBZ02OHhQSkB8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
