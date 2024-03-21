//In your Authenitcate.jsx file, create an Authenticate component, and ensure it is the default export. Have it render a simple h2 with a message saying, "Authenticate".
import { useState } from "react";
export default function Authenticate(props) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [loggedInUser, setLoggedInUser] = useState("");
    const [error, setError] = useState(null);


    async function handleClick() {  //because this is an asycnchronous network request, we will start with a Try/Catch block
      try {
        const response = await fetch(
          "https://fsa-jwt-practice.herokuapp.com/authenticate",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${props.token}`,
            },
          }
        );
        const result = await response.json();
        console.log(result.data)
        console.log(result)
        setSuccessMessage(result.message);
        //api not returning username on response, instead showing iat for example
        setLoggedInUser(result.data.iat)
      } catch (error) {
        setError(error.message);
      }
    }
  
    return (
      <div>
        <h2>Authenticate</h2>
        {successMessage && <p>{successMessage}</p>}
        {loggedInUser && <p>{loggedInUser}</p>}
        {error && <p>{error}</p>} 
        <button onClick={handleClick}>Authenticate Token!
        </button>
      </div> //7. Create a button, which onClick sends a request to the API and passes the token in an Authentication header. Underneath your h2 create a button element with text saying "Authenticate Token" or something similar.


    );
  }