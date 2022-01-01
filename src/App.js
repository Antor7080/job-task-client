
import './App.css';

import AuthProvider from './Context/AuthProvider/AuthProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import Home from './Context/AuthProvider/Home';
import Profile from './pages/Profile/Profile';
import LernerSignup from './pages/Login/Signup/LernerSignup/LernerSignup'
import Header from './pages/Shared/Header/Header';
import RiderSignup from './pages/Login/Signup/RiderSignup/RiderSignup';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import ManageUser from './pages/ManageUser/ManageUser';
import AdminRoute from './pages/Login/AdminRoute/AdminRoute';

function App() {
  return (
    <AuthProvider>

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/profile'>
            <PrivateRoute> <Profile></Profile></PrivateRoute>
          </Route>
          <Route exact path='/lernerSignup'>
            <LernerSignup></LernerSignup>
          </Route>
          <Route exact path='/riderSignup'>
            <RiderSignup></RiderSignup>
          </Route>
          <Route exact path='/manageUsers'>
            <AdminRoute>
              <ManageUser></ManageUser>
            </AdminRoute>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>

    </AuthProvider>
  );
}

export default App;
