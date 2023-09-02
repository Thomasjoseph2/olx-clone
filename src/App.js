import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/postContext';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { Route } from 'react-router-dom/cjs/react-router-dom';

function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
<Post>
     <Router>
     <Route exact path='/' >
     <Home />
     </Route>
     <Route path='/signup' >  
     <Signup />
     </Route>
     <Route path='/Login' >
     <Login />
     </Route>
     <Route path='/Create' >
     <Create />
     </Route>
     <Route path='/ViewPost' >
     <ViewPost />
     </Route>
     </Router>
</Post>
    </div>
  );
}

export default App;
