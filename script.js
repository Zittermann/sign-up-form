const body = document.body;

const passContainer = document.getElementById("pass-container");
const submitBtn = document.getElementById("create-account-btn");

const emptyPass = () => {
  let empty = document.createElement("p");
  empty.textContent = "* Passwords cannot be empty";
  empty.style.color = "red";

  passContainer.appendChild(empty);
  redBorder();
};

const verifyPass = (pass, cnfrmPass) => {
  if (pass != cnfrmPass) {
    let notMatch = document.createElement("p");
    notMatch.textContent = "* Passwords do not match";
    notMatch.style.color = "red";

    passContainer.appendChild(notMatch);
    redBorder();
  }
};

const redBorder = () => {

    let passInput = document.getElementById("password");
    let cnfrmPassInput = document.getElementById("confirm-password");

    passInput.style.borderColor = "red";
    cnfrmPassInput.style.borderColor = "red";

}

submitBtn.addEventListener("click", () => {
  let password = document.querySelector("#password").value;
  let cnfrmPass = document.querySelector("#confirm-password").value;

  password == "" || cnfrmPass == ""
    ? emptyPass()
    : verifyPass(password, cnfrmPass);
});
