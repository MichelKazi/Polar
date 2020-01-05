import Cookies from 'js-cookie';
const jwt = require('jwt');

export const setSession = (token) => {
	try{
		const validatedToken = jwt.verify(token, process.env.REACT_APP_JWT_KEY)
		return Cookies.set('_session', token, {expires: 180})
	}catch(err){ console.log(err) }	
}

export const getSession = () => {
	const token = Cookies.get('_session')
  let session
  try {
    if (token) {
			session = jwt.decode(token)
    }
  } catch (error) {
    console.log(error)
  }
  return session
}
export const logOut = () => {
  Cookies.remove('_session')
}
