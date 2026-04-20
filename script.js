function askAI() {
  let q = document.getElementById("question").value.toLowerCase();
  let ans = document.getElementById("answer");

  if (q.includes("skills")) {
    ans.innerText = "I know HTML, CSS, JavaScript basics.";
  } 
  else if (q.includes("education")) {
    ans.innerText = "I am pursuing BCA.";
  } 
  else if (q.includes("career")) {
    ans.innerText = "I am aiming for a Web Developer role.";
  } 
  else if (q.includes("hire")) {
    ans.innerText = "I am hardworking and quick learner.";
  } 
  else {
    ans.innerText = "Ask about skills, education, or career.";
  }
}
const suggestions = ["skills", "education", "career", "hire"];

document.getElementById("question").addEventListener("input", function() {
  let input = this.value.toLowerCase();
  let box = document.getElementById("suggestions");
  box.innerHTML = "";

  suggestions.forEach(item => {
    if (item.startsWith(input) && input !== "") {
      let div = document.createElement("div");
      div.innerText = item;
      div.style.cursor = "pointer";
      div.onclick = () => {
        document.getElementById("question").value = item;
        box.innerHTML = "";
      };
      box.appendChild(div);
    }
  });
});
function askQuestion() {
  const questions = [
    "Tell me about yourself",
    "What are your strengths?",
    "Why should we hire you?",
    "Explain your project"
  ];

  let random = Math.floor(Math.random() * questions.length);
  document.getElementById("questionBox").innerText = questions[random];
}
