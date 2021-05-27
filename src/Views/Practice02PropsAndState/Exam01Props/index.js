const { default: ClassTypeProps } = require("./ClassTypeProps");
const { default: FunTypeProps } = require("./FunTypeProps");

function Exam01Props(props) {
  return (
    <div className="card">
      <div className="card-header">
        Exam01Props
      </div>
      <div className="card-body">
        <ClassTypeProps name="React" version={17}>
          <div>자식 내용입니다.</div>
        </ClassTypeProps>

        <FunTypeProps name="React" version={17}>
        <div>자식 내용입니다.</div>
        </FunTypeProps>
      </div>
    </div>
  );
}

export default Exam01Props;