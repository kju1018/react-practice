import React from "react";

class ClassTypeProps extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">
          ClassTypeProps
        </div>
        <div className="card-body">
          <div>name: {this.props.name}</div>
          <div>version: {this.props.version}</div>
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default ClassTypeProps;