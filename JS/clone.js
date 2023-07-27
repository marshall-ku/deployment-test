const moveAppstore = document.querySelector("#apple_store");
const movePlaystore = document.querySelector("#play_store");

function movetoApp(e) {
  location.href = "https://www.apple.com/kr/app-store/";
}

function movetoPlay(e) {
  location.href = "https://play.google.com/store/games?hl=ko";
}

moveAppstore.addEventListener("click", movetoApp);
movePlaystore.addEventListener("click", movetoPlay);
