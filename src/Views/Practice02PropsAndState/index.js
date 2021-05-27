import { Route, Switch } from "react-router-dom";
import Exam01Props from "./Exam01Props";

function Practice02PropsAndState(props) {
  return (
    <div className="card">
      <div className="card-header">
        Practice02PropsAndState
      </div>
      <div className="card-body">
        <Switch>
          <Route path={`${props.match.url}/exam01`}  exact component={Exam01Props}/>
        </Switch>
      </div>
    </div>
  );
}

export default Practice02PropsAndState;