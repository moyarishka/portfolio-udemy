import { useEffect } from 'react'
import { useRouter } from 'next/router'


const Redirect = ({ to, ssr }) => {
  const router = useRouter()

  useEffect(() => {
    ssr ? window.location.pathname = to : router.push(to)
  }, [])
  return null
}

export default Redirect
