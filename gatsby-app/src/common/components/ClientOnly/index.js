import { useState, useEffect } from "react"

function ClientOnly({ children }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  return isMounted ? children : null
}

export default ClientOnly
