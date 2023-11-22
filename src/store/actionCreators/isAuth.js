import { AUTH, UNAUTH } from '../actions/isAuth';

export const AUTH_ACTION = (value) => {
	localStorage.setItem('auth', JSON.stringify(true))
	localStorage.setItem('token', value)
	return {
		type: AUTH,
		value
	}
}

export const UNAUTH_ACTION = () => {
	localStorage.clear()
	return {
		type: UNAUTH
	}
}

