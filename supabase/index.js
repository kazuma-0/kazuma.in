import { createClient } from '@supabase/supabase-js'

const client = createClient(
  'https://idsrylwzfaptxhtwytfw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlkc3J5bHd6ZmFwdHhodHd5dGZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDk5MzkyNjksImV4cCI6MTk2NTUxNTI2OX0.vCSpo2uhmi5_WAsMqsy1SHkQQhg3h0PsLOqpk6DgcNc',
  {
    autoRefreshToken: true,
  }
)
export const login = async (email) => {
  console.log(email)
  return await client.auth.signIn({
    email,
  })
}
export const getUser = () => {
  return client.auth.user()
}
export const logOut = _ =>{
  return client.auth.signOut()
}
