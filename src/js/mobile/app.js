import "./open-animation"
import "./knob"
// let burger = document.getElementById("burger-button");

// burger.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.body.classList.toggle("open");
//   burger.classList.toggle("open");
// });

function resizer(array) {
  array.forEach( elem => {
    elem.style.width = ( elem.children.length * 200 + (elem.children.length - 1) * 15 ) + 'px'
  })
}

var array = document.querySelectorAll('.devices-list_align')

resizer(array)

