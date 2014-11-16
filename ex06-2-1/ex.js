window.addEventListener("DOMContentLoaded", function() {
  if(window.hasOwnProperty("ondevicelight"))
    window.addEventListener("devicelight", showLux);
  else
    alert("Your browser doesn't support DeviceLightEvent");

  function showLux(e) {
    var elm = document.querySelector("#lux");
    console.log(e.value);
    if(elm.hasOwnProperty("innerText"))
      elm.innerText = e.value;
    else
      elm.textContent = e.value;
  }
});
