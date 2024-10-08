import {toast} from 'react-toastify';

export default async function googleAuth(){
    try{
		const url = `http://localhost:8000/api/o/google-oauth2/?redirect_uri=${
			process.env.NODE_ENV === 'production'
				? 'http://localhost:3000'
        : 'http://localhost:3000'
		}/auth/google`;

		const res = await fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
			credentials: 'include',
		});
		const data = await res.json();

		if (res.ok) {
			window.location.replace(data.authorization_url);
		} else {
			toast.error('Something went wrong');
		}
    }
    catch{
        toast.error('Something went wrong')
    }
}
