const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
let load = 0

let int = setInterval(blurring, 90)

function blurring() {
    load++

    loadText.innerText = `${load}%`

    if (load > 99) {
        clearInterval(int)
    }

      loadText.innerText = `${load}%`                   
      loadText.style.opacity = scale(load, 0, 100, 1, 0)
      bg.style.filter = `blur(${scale(load, 0, 100, 10, 0)}px)`
     }
      const scale = (num, in_min, in_max, out_min, out_max) => {
          return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
      }

