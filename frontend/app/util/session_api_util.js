export const signup = (user) => (
  fetch('http://localhost:3000/api/users', {
  		 method: 'POST',
  		 headers: {
  			 'Accept': 'application/json',
  			 'Content-Type': 'application/json',
  		 },
  		 body: JSON.stringify({
         user
       })
  	 })
);

export const login = (user) => (
  fetch('http://localhost:3000/api/session', {
  		 method: 'POST',
  		 headers: {
  			 'Accept': 'application/json',
  			 'Content-Type': 'application/json',
  		 },
  		 body: JSON.stringify({
         user
       })
  	 })
);

export const logout = () => (
  fetch('http://localhost:3000/api/session', {
  		 method: 'DELETE',
  		 headers: {
  			 'Accept': 'application/json',
  			 'Content-Type': 'application/json',
  		 },
  		 body: JSON.stringify({
       })
  	 })
);

export const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  };
