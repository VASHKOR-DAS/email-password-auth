import './App.css';

import { getAuth } from "firebase/auth";
import app from './firebase/firebase.init';

const auth = getAuth(app);

function App() {

  const handleRegister = (event) => {
    // Register button a click korle page refresh/onno page a jay seta jno na jay
    event.preventDefault()

    //email catch on click register
    console.log(event.target.email.value);
  }


  return (
    <div className="App">
      <form  onSubmit={handleRegister}>
        <input type="email" name="email" id="" placeholder='Your Email' />
        <br />
        <input type="password" name="password" id="" placeholder='Your Password' />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;