//create a SignUpForm component, and ensure it is the default export. For now, you can have it render a simple h2 with a message saying, "Sign Up".
import { useState } from "react";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
            method: "POST",
            body: JSON.stringify({ username, password })
        })
        const result = await response.json()
        console.log(result)
        setToken(result.token) //Pass the token property of our API response to setToken.
    }
    catch (error) {
        setError(error.message);
    }
}


  return (
    //Finally, pass this handleSubmit to the opening form tag's onSubmit property. 
    //Because the network request could fail, start by writing a try/catch block in our handleSubmit function. After you preventDefault delete your console.log and replace it with a try/catch. In your catch block, pass the error.message to your setError function. This way, we can store a server error in the application state and display it.
    <>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                Username:{" "}
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}  //8. Assign each value property of your input to its corresponding state value. Similarly, pass each onChange property to a callback function. These callback functions should be defined to take an event, and pass the event.tagert.value to the corresponding useState setter.
                />
            </label>
            <label>
                Password:{" "}
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit"/>
        </form>
    </>
)
//Nesting our inputs in this way helps eliminate the need to write name and for properties on our labels and inputs. 
}

//becasue we are creating a 'controlled' form, we will need to store our form input aclues in state variables

