import "./knob"
import "./open-animation"
import "./srcoll"


function resizer(array, sizeWidth, sizePadding) {
  array.forEach( elem => {
    elem.style.width = ( elem.children.length * sizeWidth + (elem.children.length - 1) * sizePadding ) + 'px'
  })
}

resizer(document.querySelectorAll('.devices-list_align'), 200, 15)

resizer(document.querySelectorAll('.scroll-window__slider'), 630, 15)
