import { useState, useEffect } from 'react'
import { getAuthenticatedUser } from './functions'

export function useUser() {
  const [connectedUser, setConnectedUser] = useState(null)
  const [auth, setAuth] = useState(false)
  const [userLoading, setUserLoading] = useState(true)

  useEffect(() => {
    async function getUserDetails() {
      const { authenticated, user } = await getAuthenticatedUser()
      setConnectedUser(user)
      setAuth(authenticated)
      setUserLoading(false)
    }
    getUserDetails()
  }, [])

  return { connectedUser, auth, userLoading }
}
