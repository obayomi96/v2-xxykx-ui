//  Auth api calls

import http, { setToken } from '../utils/http'

class AuthService {

  userLogin = async (credentials, history) => {
    try {
      const response = await http.post('login', { user: { ...credentials }})
      if (response.status === 200) {
        const { user } = response.data;
        localStorage.setItem('user_token', user.token)
        setToken(user.token)
        history.push('/comments')
        return user
      }
    } catch(error) {
      return error
    }
  }

  userSignup = async (credentials, history) => {
    try {
      const response = await http.post('register', { user: { ...credentials }})
      if (response.status === 201) {
        const { user } = response.data;
        localStorage.setItem('user_token', user.token)
        setToken(user.token)
        history.push('/comments')
        return user
      }
    } catch(error) {
      return error
    }
  }

}

export default AuthService;

