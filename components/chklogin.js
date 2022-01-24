import { useSession } from 'next-auth/react'
import { signIn } from 'next-auth/react'

export default function AccessDenied () {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  if (typeof window !== 'undefined' && loading) return null
  if (!session)
{ return (
    <>
      <h1>Access Denied</h1>
      <p>
        <a href="/api/auth/signin"
           onClick={(e) => {
           e.preventDefault()
           signIn()
        }}>You must be signed in to view this page</a>
      </p>
    </>
  )}else{
   return true
  }

}