var bulbIcon = document.querySelector("#bulb");
var btn = document.querySelector("button");

var IsBulbOn = false;

btn.addEventListener("click", function () {
    if (IsBulbOn == false) {
        bulbIcon.style.backgroundImage = "url('./Bulb_On03.jpg')";
        btn.innerText = "OF";
        btn.style.color = "red";
        console.log("Bulb is ON");
        IsBulbOn = true;
    } else {
        bulbIcon.style.backgroundImage = "url('./Bulb_Of03.png')";
        btn.innerText = "ON";
        btn.style.color = "green";
        console.log("Bulb is OF");
        IsBulbOn = false;
    }
});
