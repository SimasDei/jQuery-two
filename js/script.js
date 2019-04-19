function submitAnswers() {
  const totalQ = 5;
  let score = 0;
  const answers = ["b", "a", "d", "b", "d"];
  const questions = {
    q1: document.forms["quizForm"]["q1"].value,
    q2: document.forms["quizForm"]["q2"].value,
    q3: document.forms["quizForm"]["q3"].value,
    q4: document.forms["quizForm"]["q4"].value,
    q5: document.forms["quizForm"]["q5"].value
  };

  if (
    !questions.q1 ||
    !questions.q2 ||
    !questions.q3 ||
    !questions.q4 ||
    !questions.q5
  ) {
    alert("Questions are Required");
    return false;
  }

  if (questions.q1 == answers[0]) {
    score++;
  }
  if (questions.q2 == answers[1]) {
    score++;
  }
  if (questions.q3 == answers[2]) {
    score++;
  }
  if (questions.q4 == answers[3]) {
    score++;
  }
  if (questions.q5 == answers[4]) {
    score++;
  }

  const results = document.querySelector("#results");
  results.innerHTML = `
    <h3>You scored ${score} out of ${total} questions</h3>
  `;

  return false;
}
