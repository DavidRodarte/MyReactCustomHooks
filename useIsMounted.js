import { useState, useEffect } from "react"
import { useRouter } from "next/router"

/**
* useIsMounted hook for NextJS.
* I use this hook to know if the page has been completely loaded
* @returns loaded (Boolean)
*/
const useIsMounted = () => {
const router = useRouter()

const [loaded, setLoaded] = useState(false)

useEffect( () => {
 if(router.isReady) {
  setLoaded(true)
 }, [router.isReady] )

 return loaded
}

export default useIsMounted
