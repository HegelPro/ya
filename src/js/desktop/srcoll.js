export default (function() {
  function moveTo(event, direction, moveValue, speed, scroll, scrollBar) {
    var counter = 0

    var timeID = setTimeout( function func() {
      counter += speed

      if(direction === "top") scrollBar.scrollTop += speed
      else if(direction === "bottom") scrollBar.scrollTop -= speed
      else if(direction === "left") scrollBar.scrollLeft += speed
      else if(direction === "right") scrollBar.scrollLeft -= speed

      if(counter >= moveValue) clearTimeout(timeID)
      else timeID = setTimeout( func, 5 )
    }, 5) 
  }

  var scroll1 = document.querySelector("#scroll-num-1") 
  var scrollBar1 = document.querySelector("#scroll-bar-num-1") 

  scroll1.children[0].addEventListener("click", (event) => {
    moveTo(event, "top", 100, 2.5, scroll1, scrollBar1)
  })
  scroll1.children[1].addEventListener("click", (event) => {
    moveTo(event, "bottom", 100, 2.5, scroll1, scrollBar1)
  })


  var scroll2 = document.querySelector("#scroll-num-2") 
  var scrollBar2 = document.querySelector("#scroll-bar-num-2") 

  scroll2.children[0].addEventListener("click", (event) => {
    moveTo(event, "right", 645, 5, scroll2, scrollBar2)
  })
  scroll2.children[1].addEventListener("click", (event) => {
    moveTo(event, "left", 645, 5, scroll2, scrollBar2)
  })

  
  var scroll3 = document.querySelector("#scroll-num-3") 
  var scrollBar3 = document.querySelector("#scroll-bar-num-3") 

  scroll3.children[0].addEventListener("click", (event) => {
    moveTo(event, "right", 200, 2.5, scroll3, scrollBar3)
  })
  scroll3.children[1].addEventListener("click", (event) => {
    moveTo(event, "left", 200, 2.5, scroll3, scrollBar3)
  })
  
}())