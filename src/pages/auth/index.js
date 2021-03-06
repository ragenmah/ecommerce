import { API } from "../../config";
// default export nagareko vayera

//for sign up
export const signup = (user) => {
  return fetch(`${API}/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user)
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
