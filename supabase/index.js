import { createClient } from '@supabase/supabase-js'

const client = createClient(
  '',
  '',
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
