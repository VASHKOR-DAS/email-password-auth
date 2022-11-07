import './App.css';

import { getAuth } from "firebase/auth";
import app from './firebase/firebase.init';

// React Bootstrap Component
import RegisterReactBootstrap from './components/RegisterReactBootstrap/RegisterReactBootstrap';

const auth = getAuth(app);

function App() {

  const handleRegister = (event) => {
    // Register button a click korle page refresh/onno page a jay seta jno na jay
    event.preventDefault()

    //email catch on click register
    console.log(event.target.email.value);
  }

  // every keypress catch data onChange handler
  const handleEmailOnChange = (event) => {
    console.log(event.target.value);
  }

  // catch data when focus change
  const handlePasswordOnBlur = (event) => {
    console.log(event.target.value);
  }


  return (
    <div className="">
      <RegisterReactBootstrap></RegisterReactBootstrap>
    </div>
  );
}

export default App;