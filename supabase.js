// supabase.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://ywbjijfivsihjulypbft.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3YmppamZpdnNpaGp1bHlwYmZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4MDc1OTAsImV4cCI6MjA3ODM4MzU5MH0.gxR-f3mY0DrcmzNT5CJVupHBjeV7A2TlEkuymyqSwz8"; // المفتاح العام
export const supabase = createClient(supabaseUrl, supabaseKey);
