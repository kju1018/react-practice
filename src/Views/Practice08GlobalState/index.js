import { Route, Switch } from "react-router-dom";
import Exam01ColorContext from "./Exam01ColorContext";
import Exam03ColorRedux from "./Exam03ColorRedux";

function Practice08GlobalState(props) {
  return (
    <div className="card">
      <div className="card-header">
        Practice08GlobalState
      </div>
      <div className="card-body">
        <Switch>
          <Route path={`${props.match.url}/exam01`} exact component={Exam01ColorContext}/>
          <Route path={`${props.match.url}/exam03`} exact component={Exam03ColorRedux}/>
        </Switch>
      </div>
    </div>
  );
}

export default Practice08GlobalState;