export const signup = (user) => (
  fetch('http://localhost:3000/api/users', {
  		 method: 'POST',
  		 headers: {
  			 'Accept': 'application/json',
  			 'Content-Type': 'application/json',
  		 },
  		 body: JSON.stringify( {user})
  	 })
  // $.ajax({
  //   method: 'POST',
  //   url: 'api/users',
  //   data: user
  // })
);

export const login = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: user
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
);
