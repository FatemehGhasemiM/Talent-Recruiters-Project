console.clear();
const singup = document.getElementById("singup");
const boxLogin = document.getElementById("box-login");
const boxSignup = document.getElementById("box-singup");
const formSing = document.getElementById("form-sing");
const passSing = document.getElementById("pass-sing");
// const repass = document.getElementById("repeat-pass");
// const invalidPass = document.getElementById("invalid-pass");
// invalidPass.classList.add("d-none");

boxSignup.classList.add("d-none");

formSing.addEventListener("submit", (e) => {
    window.open("./index.html");
});

singup.addEventListener("click", (e) => {
  boxLogin.classList.add("d-none");
  boxSignup.classList.remove("d-none");
});

boxLogin.addEventListener("submit", (e) => {
  window.open("./index.html");
});
