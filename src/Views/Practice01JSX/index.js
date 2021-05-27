import { Route, Switch } from "react-router-dom";
import Exam01Expressions from "./Exam01Expressions";
import Exam02Condition from "./Exam02Condition";

function Practice01JSX(props) {
  return (
    <div class="card">
        <div class="card-header">
          Practice01JSX
        </div>
        <div class="card-body">
          <Switch>
            <Route path={`${props.match.url}/exam01`} exact component={Exam01Expressions}/>
            <Route path={`${props.match.url}/exam02`} exact component={Exam02Condition}/>
          </Switch>
        </div>
    </div>
  );
}

export default Practice01JSX;