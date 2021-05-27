function FunTypeProps(props) {
  return (
    <div className="card">
      <div className="card-header">
        FunTypeProps
      </div>
      <div className="card-body">
        <div>name: {props.name}</div>
        <div>version: {props.version}</div>
        {props.children}
      </div>
    </div>
  );
}

export default FunTypeProps;