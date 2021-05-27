import { Redirect, Route, Switch } from "react-router-dom";
import Home from "Views/Home";
import Practice01JSX from "Views/Practice01JSX";
import Practice02PropsAndState from "Views/Practice02PropsAndState";
//jsconfig로 하면 src가 기본 경로로 되어있음

function AppRoute(props) {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/parctice1" component={Practice01JSX}/>
      <Route path="/parctice2" component={Practice02PropsAndState}/>
    </Switch>
  );
}

export default AppRoute;
