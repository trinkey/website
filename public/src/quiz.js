x = document.createElement("div");
x.setAttribute("id", "testEngine");
document.querySelector("body div#container2").append(x);

function inputInit(val, index) {
  val.addEventListener("input", eval(`() => {
    answers[question] = ${Number(index)};
    dom("multiple-choice-engine-submit").removeAttribute("disabled");
  }`));
}

function setQuestion(q) {
  dom("multiple-choice-engine-questions").innerHTML = `<h3>${questions[q].question}</h3>`;
  for (let i = 0; i < questions[q].answers.length; i++) {
    dom("multiple-choice-engine-questions").innerHTML += `<div>
      <label class="container">
        <input type="radio" ${answers[q] == i ? "checked" : ""} name="multiple-choice-engine-input" data-index=${i} id="multiple-choice-engine-input-${i}">
        <span class="checkmark"></span>${questions[q].answers[i]}
      </label>
    </div>`;
  }
  [...document.querySelectorAll('[name="multiple-choice-engine-input"]')].forEach(inputInit);

  if (q === 0) { dom("multiple-choice-engine-back").setAttribute("disabled", ""); }
  else { dom("multiple-choice-engine-back").removeAttribute("disabled"); }
  if (q === questions.length - 1) { dom("multiple-choice-engine-submit").innerHTML = "Submit"; }
  else { dom("multiple-choice-engine-submit").innerHTML = "Next"; }
  if (answers[q] !== null) { dom("multiple-choice-engine-submit").removeAttribute("disabled"); }
  else { dom("multiple-choice-engine-submit").setAttribute("disabled", ""); }
}

dom("testEngine").innerHTML = `
  <h2>${title}</h2>
  <div id="multiple-choice-engine-questions"></div><br>
  <button id="multiple-choice-engine-back">Back</button>
  <button id="multiple-choice-engine-submit">Next</button>
`;

let answers = [];
let question = 0;
for (let i = 0; i < questions.length; i++) { answers.push(null); }

dom("multiple-choice-engine-back").addEventListener("click", () => {
  if (question !== 0) { --question; setQuestion(question); }
});

dom("multiple-choice-engine-submit").addEventListener("click", function() {
  if (this.getAttribute("disabled") === null) {
    if (this.innerHTML == "Next") {
      question++; setQuestion(question);
    } else {
      dom("multiple-choice-engine-questions").innerHTML = "Calculating...";
      dom("multiple-choice-engine-back").setAttribute("hidden", "");
      dom("multiple-choice-engine-submit").setAttribute("hidden", "");
      end();
    }
  }
});

setQuestion(question);
