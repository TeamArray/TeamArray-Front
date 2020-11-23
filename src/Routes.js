import {Switch,Route,Redirect} from "react-router-dom"
import PropTypes from "prop-types"
import Login from "./pages/Login"
import Main from "./pages/Main"
import SignUp from "./pages/SignUp"
const LoggedInRoutes = () => (
    <Switch>
      <Route exact path="/" component={Main} />
      <Redirect from="*" to="/" />
    </Switch>
  );
  
  const LoggedOutRoutes = () => (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp}  />
  
      <Redirect from="*" to="/" />
    </Switch>
  );
  
  const AppRouter = ({ isLoggedIn }) =>
    isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;
  
  AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  }
  
  export default AppRouter;