let expert = document.querySelector("#expert");
let hour = document.querySelector("#hour");
let result = document.querySelector(".inp-btn");
let 연산 = 0;

result.addEventListener("click", () => {
  if (expert.value && hour.value) {
    if (document.querySelector(".hide-result").style.display != "block") {
      document.querySelector(".hide-result").style.display = "block";
    } else {
      document.querySelector(".hide-result").style.display = "none";
    }
  } else {
    alert("입력란을 작성해주세요");
  }
});

expert.addEventListener("change", function () {
  document.querySelector("#expert-come").innerHTML = expert.value;
});
hour.addEventListener("change", function () {
  if (hour.value < 1) {
    hour.value = 1;
  } else if (hour.value > 24) {
    hour.value = 24;
  }
  연산 = Math.ceil(10000 / hour.value);
  document.querySelector("#hour-come").innerHTML = 연산;
});
