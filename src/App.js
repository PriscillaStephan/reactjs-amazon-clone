import React, {useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue} from "./StateProvider";

function App() {
   const [{}, dispatch] = useStateValue();
  // this is a firebase listener to keep track of who is signed in
  useEffect(() => {
    //will only run once when the app component loads...
    auth.onAuthStateChanged(authUser =>{
      console.log('The User IS >>> ', authUser);

      //this kind of auth with firebase, even when u refresh the page it will actually log you back in.
      if(authUser){
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      }else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM naming convention
    <Router>
      <div className="app"> 
        <Switch>

          <Route path="/login">
           <Login />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>
          
          {/*Default Route should be always in 
          the buttom and i can have as many route as i want*/}
          <Route path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
