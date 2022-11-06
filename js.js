function tryItnow() {
  let name = prompt("What's your name?");
  let email = prompt("What's your email?");
  let question = prompt("Did you eat sushi before?");
  if (question === "no") {
    alert("We'll send you our menu on your email!");
  } else {
    alert("Check our menu in your e-mail box ");
  }
}
let contactButton = document.querySelector("button");
contactButton.addEventListener("click", tryItnow);
