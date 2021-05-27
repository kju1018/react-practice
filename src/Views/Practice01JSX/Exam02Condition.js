function Exam02Condition() {
  const var1 = "리액트";
  const var2 = false;
  const var3 = "";
  let var4;
  let var5 = null;
  const var6 = 0;
  return (
    <div className="card">
      <div className="card-header">
        Exam02Condition
      </div>
      <div className="card-body">
        <h6 className="text-info">삼항 연산식을 이용한 선택 렌더링</h6>
        <div>
          <div>{var1 === "리액트"? <p>리액트가 맞음</p> : <p>리액트가 아님</p>}</div>
          <div>{var1 !== "리액트"? <p>리액트 아닌게 맞음</p> : <p>리액트 아닌게 아님</p>}</div>
        </div>

        <h6 className="text-info">&&을 이용한 선택 렌더링</h6>
        <div>{var1 === "리액트" && <p>내용3</p>}</div>
        {/* var1 === "리액트" 얘가 true이면 <p>내용3</p>이게됨 */}
        <div>{var2 && <p>내용4</p>}</div>
        <div>{var3 && <p>내용5</p>}</div>
        <div>{var4 && <p>내용4</p>}</div>
        <div>{var5 && <p>내용5</p>}</div>
        <div>{var6 && <p>내용6</p>}</div>
      </div>
    </div>
  );
}

export default Exam02Condition;