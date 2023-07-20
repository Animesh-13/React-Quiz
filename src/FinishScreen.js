function FinishScreen(points, maxPossiblePoints, highscore, dispatch) {
  const percentage = (points / maxPossiblePoints) * 100;

  //   let emoji;  Just for attractive......
  //   if(percentage === 100) emoji="😀"
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints}(
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button className="btn btn-ui" onClick={() => dispatch("restart")}>
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
