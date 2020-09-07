import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const storageName = 'userData';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);
  const [userId, setUserId] = useState(null);
  const dispatch = useDispatch();

  const login = useCallback((jwtToken, id) => {
    dispatch(loadUser());
  }, []);


  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token) {
      login(data.token, data.userId);
    }
    setReady(true);
  }, [login]);


  return { login, logout, token, userId, ready };
}