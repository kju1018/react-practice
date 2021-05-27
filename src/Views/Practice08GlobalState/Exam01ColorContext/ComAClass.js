import React from "react";
import ColorContext from "./ColorContext";

class ComAClass extends React.Component {

  static contextType = ColorContext;

  constructor(props){
    super(props);
    this.state = {}
  }

  handleChange = (event) => {
    this.context.setColor("red");
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          ComAClass
        </div>
        <div className="card-body">
          <button className="btn btn-info btn-sm mb-3" onClick={this.handleChange}>색상변경</button>
          <div style={{backgroundColor:this.context.color}}>
            내용
          </div>
        </div>
      </div>
    );
  }

}

export default ComAClass;