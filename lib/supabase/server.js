import { createClient } from "@supabase/supabase-js"

// This client is for server-side operations (e.g., Server Actions, API Routes)
// It uses the service role key for full access, or you can configure it
// to use the anon key if you're handling authentication on the client.
// For admin panel, you might use a service role key for certain operations,
// but for user-facing actions, you'd typically use the anon key with RLS.
export const createServerClient = () => {
  // Ensure environment variables are available
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error(
      "Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    )
  }

  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, // Use anon key for client-side, or service role key for full server access
    // For server-side, you might want to pass a cookie store for auth
    // {
    //   auth: {
    //     persistSession: false, // Sessions are managed by Next.js cookies
    //   },
    // }
  )
}
