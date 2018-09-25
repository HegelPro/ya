export default (function() {
  var darkWindow = {
    _elem: document.querySelector("#dark-window"),
    switch() {
      this._elem.classList.toggle("dark-window")
    }
  }

  function afterWinDisBlock(win, position,  listIteam, needChangeClass) {
    var winElemments = {}

    needChangeClass.forEach( elem => {
      winElemments[elem] = win.querySelector("." + elem)
    })

    // win.classList.toggle("window-after-move")

    win.style.top = 50 + "%";
    win.style.left = 50 + "%";

    needChangeClass.forEach( elem => {       
      if (elem === "window__icon") {
        if( /devices-list__iteam_icon_sun_1/.test(listIteam.className) ) winElemments[elem].src = "../../assets/icon_sun@2x.png"
        else if( /devices-list__iteam_icon_sun_2/.test(listIteam.className) ) winElemments[elem].src = "../../assets/icon_sun_2@2x.png"
        else if( /devices-list__iteam_icon_temp_1/.test(listIteam.className) ) winElemments[elem].src = "../../assets/icon_temperature@2x.png"
        else if( /devices-list__iteam_icon_temp_2/.test(listIteam.className) ) winElemments[elem].src = "../../assets/icon_temperature_2@2x.png"
        else if( /devices-list__iteam_icon_cloud/.test(listIteam.className) ) winElemments[elem].src = "../../assets/cloud-drizzle.png"
      } else if (elem === "window__name") {
        winElemments[elem].innerText = listIteam.querySelector(".devices-list__iteam__name").innerText
      } else if (elem === "window__state") {
        winElemments[elem].innerText = listIteam.querySelector(".devices-list__iteam__state").innerText
      }

      winElemments[elem].classList.toggle( elem + "-after-move")
    })

    var closeWindow = () => {
      needChangeClass.forEach( elem => { winElemments[elem].classList.toggle( elem + "-after-move") })
      btns[0].classList.toggle("window__btn-after-move")
      btns[1].classList.toggle("window__btn-after-move")

      win.style.top = position.top + "px"
      win.style.left = position.left + "px"

      win.style.opacity = 0

      darkWindow.switch()

      setTimeout(() => {
        win.style = {}
      }, 500) 

      listIteam.onclick = openWindow
    }

    var btns = win.querySelectorAll(".window__btn")
    btns[0].classList.toggle("window__btn-after-move")
    btns[1].classList.toggle("window__btn-after-move")

    btns[0].onclick = closeWindow
    btns[1].onclick = closeWindow
  }

  var openWindow = event => {
    var listIteam = event.target;
    while(listIteam.tagName !== "LI") {
      listIteam = listIteam.parentNode
    } 

    var position = listIteam.getBoundingClientRect()
    var win
    var addParams

    if( /devices-list__iteam_light/.test(listIteam.className) ) {
      win = document.querySelector(".window_light")

      addParams = [ "window__settings",
                    "window__display_light",
                    "window__range-container_light",
                    "window__range_light",
                    "window__container_light",
                    "window__icon",
                    "window__text_temp",
                    "window__name",
                    "window__state",
                    "window__range" ]
    } else if( /devices-list__iteam_temp/.test(listIteam.className) ) {
      win = document.querySelector(".window_temp")     
      let range = win.querySelector(".window__range_temp")
      let valueTemp = win.querySelector(".window__value_temp")

      addParams = [ "window__settings",
                    "window__display_temp",
                    "window__range-container_temp",
                    "window__range_temp",
                    "window__container_temp",
                    "window__icon",
                    "window__text_temp",
                    "window__name",
                    "window__state",
                    "window__value",
                    "window__range" ]

      
      range.addEventListener("input",() => {
        if(range.value > 0) valueTemp.innerText = "+" + range.value
        else valueTemp.innerText = range.value
      })
    } else if( /devices-list__iteam_floor/.test(listIteam.className) ) {
      win = document.querySelector(".window_floor")    

      addParams = [ "window__display_floor",
                    "window__container_floor",
                    "window__icon",
                    "window__text_temp",
                    "window__name",
                    "window__state",
                    "window__value",
                    "window__knob" ]
    }

    darkWindow.switch()
    
    win.style.display = "block"
    win.style.top = position.top + "px"
    win.style.left = position.left + "px"
 
    setTimeout(() => {afterWinDisBlock(win, position, listIteam, addParams)} , 100)
  }

  var devices = document.querySelectorAll(".devices-list__iteam_size_normal")

  devices.forEach( elem => {
    elem.onclick = openWindow
  }) 
}())