export default (function() {
  var knob = document.querySelector(".knob")
  var knobDisplay = knob.querySelector(".knob__display")
  var value = knob.querySelector(".window__value")
  var lines = []

  for (let index = 0; index < 93; index++) {
    lines.push(document.createElement("SPAN"))

    lines[index].className = "knob__line"
    knob.appendChild(lines[index])
  }

  function selectLine(amount) {
    for (let index = 0; index < amount; index++) {
      lines[index].className = "knob__line knob__line_selected"
    }
    for (let index = amount; index < 93; index++) {
      lines[index].className = "knob__line"
    }
  }


  knob.addEventListener("click", event => {
    event.preventDefault()
    if(event.target.dataset.temp !== undefined) {
      knobDisplay.innerText = event.target.dataset.temp
      // value.innerText = event.target.dataset.temp
      
      selectLine( (+event.target.dataset.temp + 3 ) * 3 )

      knobCursor.style.transform = "rotate(" + ( (+event.target.dataset.temp + 4 ) * 9  + start ) + "deg)"
    }
  })

  var move = function(event) {
    if(event.target.dataset.temp !== undefined && mousePress) {
      knobDisplay.innerText = event.target.dataset.temp
      // value.innerText = event.target.dataset.temp

      selectLine( (+event.target.dataset.temp + 3 ) * 3 )

      knobCursor.style.transform = "rotate(" + ( (+event.target.dataset.temp + 4 ) * 9  + start) + "deg)"
    }
  }

  var mousePress = false

  knob.addEventListener("mouseup", event => {
    event.preventDefault()

    mousePress = false
  })

  knob.addEventListener("mousemove", move)

  knob.addEventListener("mousedown", () => {
    event.preventDefault()

    mousePress = true
  })
  
  var knobCursor = knob.querySelector(".knob__cursor")
  var start = -150

  knobCursor.style.transform = "rotate(" + start + "deg)"
  knobCursor.style.transform = "rotate(" + 93 + "deg)"
  selectLine( 26 * 3)
}())