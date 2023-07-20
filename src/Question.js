function Question({ questions, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div>
      <h4>{questions.question}</h4>
      {/* Kya yaha par index 0 based nahi hai? Doubt*/}
      <div className="options">
        {questions.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === questions.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            answer={answer}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
