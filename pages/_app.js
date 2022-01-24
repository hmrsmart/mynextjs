
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
   <SessionProvider
      options={{
        staleTime: 0,
        refetchInterval: 0
      }}
      session={pageProps.session} >
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
