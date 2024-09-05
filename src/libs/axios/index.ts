import axios from 'axios';

axios.interceptors.response.use(undefined, async function (error) {
  const { response } = error;

  if ([401, 403].includes(response?.status)) {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('userInfo');
      if (typeof window !== 'undefined') window.location.replace('/login');
    } else {
      console.error('sessionStorage is undefined');
    }
  } else {
    throw Error(error);
  }
});
