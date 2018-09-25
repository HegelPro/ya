var darkWindow = {
  _elem: document.querySelector("#dark-window"),
  switch() {
    this._elem.classList.toggle("dark-window")
  }
}

export default (function() {
  function afterWinDisBlock(win, position,  listIteam, addParams) {
    var needChangeClass = [ "window__container",
                            "window__icon",
                            "window__name",
                            "window__state" ]

    needChangeClass = needChangeClass.concat(addParams)

    var winElemments = {}

    needChangeClass.forEach( elem => {
      winElemments[elem] = win.querySelector("." + elem)
    })

    win.classList.toggle("window-after-move")

    win.style.top = 20 + "px"
    win.style.left = 20 + "px"
    win.style.right = 20 + "px"
    win.style.bottom = 170 + "px"

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

    console.log(elem);
    

    winElemments[elem].classList.toggle( elem + "-after-move")
  })
    
    var closeWindow = () => {
      win.classList.toggle("window-after-move")
      needChangeClass.forEach( elem => { winElemments[elem].classList.toggle( elem + "-after-move") })
      btns[0].classList.toggle("window__btn-after-move")
      btns[1].classList.toggle("window__btn-after-move")

      win.style.top = position.top + "px"
      win.style.left = position.left + "px"
      win.style.bottom = position.bottom + "px"
      win.style.right = position.right + "px"

      win.style.opacity = 0

      darkWindow.switch()

      setTimeout(() => {
        win.style = {}
      }, 500) 

      listIteam.onclick = openWindow
    }

    var btns = [ win.querySelector(".window__btn_up"), win.querySelector(".window__btn_down") ]

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

      addParams = [ "window__range" ]
    } else if( /devices-list__iteam_temp/.test(listIteam.className) ) {
      win = document.querySelector(".window_temp")     

      addParams = [ "window__range" ]
    } else if( /devices-list__iteam_floor/.test(listIteam.className) ) {
      win = document.querySelector(".window_floor")    

      addParams = [ "window__knob" ]
    }


    darkWindow.switch()

    win.style.display = "block" 
    win.style.top = position.top + "px"
    win.style.left = position.left + "px"
    win.style.bottom = position.bottom + "px"
    win.style.right = position.right + "px"

    setTimeout(() => {afterWinDisBlock(win, position, listIteam, addParams)} , 100)
  }

  var devices = document.querySelectorAll(".devices-list__iteam_size_normal")

  devices.forEach( elem => {
    elem.onclick = openWindow
  }) 
}())