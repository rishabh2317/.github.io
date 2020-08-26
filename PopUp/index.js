let showed = false;
const show = () => {
   if (showed) return;
  
  if (
    document.cookie.split(";").filter((item) => {
      return item.includes("popup=");
    }).length
  ) {
    return;
  }
  
  else {
    console.log(
      document.cookie.split(";").filter((item) => {
        return item.includes("popup=")
      }).length
    )
    console.log(document.cookie.split(";"))
  }
   document.cookie = "popup=true;path=/;max-age=15768000"
  showed = true

  const element = document.querySelector("#popup")
  element.style.visibility = "visible"
  element.style.opacity = "1"
  element.style.transform = "scale(1)"
  element.style.transition = "0.4s, opacity 0.8s"
}
eventListener = document.addEventListener("click", function (clickEvent) {
  let el = clickEvent.target
  let inPopup = false
  if (el.id === 'popup') {
    inPopup = true
  }
  while (el = el.parentNode) { 
    if (el.id == "popup") {
      inPopup = true
    }
  }
  if (!inPopup) hide()
})
var span = document.getElementsByClassName("close")[0];

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mouseout", (event) => {
    if (!event.toElement && !event.relatedTarget) {
      setTimeout(() => {
        show()
      }, 1000)
    }
  })
})


const hide = () => {
  const element = document.querySelector("#popup")
  element.style.visibility = "hidden"
  element.style.opacity = "0"
  element.style.transform = "scale(0.5)"
  element.style.transition = "0.2s, opacity 0.2s, visibility 0s 0.2s"
}
if (eventListener) {
  document.removeEventListener(eventListener)
}
document.addEventListener("DOMContentLoaded", () => {
  document.onkeydown = event => {
    event = event || window.event
    if (event.keyCode === 27) {
      hide()
    }
  }
})
span.onclick = function() {
    popup.style.display = "none";
  }
  