import { createBrowserClient } from "@supabase/ssr";

const createClient = () => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );
};

const supabase = createClient();

export default supabase;
