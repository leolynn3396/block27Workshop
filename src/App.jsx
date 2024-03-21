import { useState } from 'react'
import './App.css'
import Authenticate from './components/Authenitcate';
import SignUpForm from './components/SignUpForm';
 function App() {
  //create token and setToken variables with useState. Set its initial value to null.
  const [token, setToken] = useState(null);

  return (
    //we need to pass these values to each component. Pass the setToken function to your SignUpForm component, and then pass the token value to your Authenticate component. This will allow us to set the token with our API response, and read/send the token back in our Authenticate component.
    <>
    <SignUpForm setToken={setToken} />
    <Authenticate token={token} />
  </>
  )
}

export default App