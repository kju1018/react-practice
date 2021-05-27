function fun() {
  return "동작"
}

function Exam01Expressions() {
  const name = "리액트";

  const fun2 = () => {
    return "동작2"
  }

  return (
    <div className="card">
      <div className="card-header">
        Exam01Expressions
      </div>
      <div className="card-body">
        <p>Hello, {name}</p>
        <p>Hello, {fun()}</p>
        <p>Hello, {fun2()}</p>
        <p>{2+3}</p>
      </div>
    </div>
  );
}

export default Exam01Expressions;