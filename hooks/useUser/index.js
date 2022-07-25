import { getAuth, onAuthStateChanged } from '../../lib/firebase';
import createPersistedState from 'use-persisted-state'

import { useEffect } from 'react'

const useUserState = createPersistedState('user')

export const useUser = () => {
  const [user, setUser] = useUserState(null)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      user && setUser(user);
    });

  }, [])

  return [user, setUser]
}