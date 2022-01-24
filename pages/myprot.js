import { useSession } from 'next-auth/react'
import AccessDenied from '../components/access-denied'

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  if (typeof window !== 'undefined' && loading) return null
  if (!session)
{ return (
    <AccessDenied />
  )}else{
   return (
     <>
       <h1>
       Thi is a protected area!
       </h1>
     </>
   )
  }
}