console.log("app.js loaded!");
let clicks = 0
document.getElementById("text-button").onclick = function() {
  clicks++;
    document.getElementById("clickstime").innerHTML = clicks;
  };