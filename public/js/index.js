// Title animation
const titleAnimation = () => {
  anime({
    targets: '.staggering-grid .el',
    scale: [
      {value: 0, easing: 'easeOutSine', duration: 1200},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    delay: anime.stagger(300, {grid: [12, 12], from: 'center'})
  })
}
titleAnimation()

// Selection where to double click
const titleAnimationSelector = document.querySelector('.staggering-grid')

// Actives title animation on double click
titleAnimationSelector.addEventListener('dblclick', () => {
  titleAnimation()
})



// DOM Values
const verb1 = document.querySelector('.verb1')
const verb2 = document.querySelector('.verb2')
const verb3 = document.querySelector('.verb3')

// Sets square to -30rem x-axis
anime({
  targets: '.square1, .square2, .square3',
  translateX: {
    value: -300,
    duration: 900
  }
})

// Makes square visible with animation
verb1.addEventListener('mouseenter', () => {
  anime({
    targets: '.square1',
    background: '#FFC576',
    translateX: {
      value: 0,
      duration: 900
    },
    rotate: {
      value: 420,
      duration: 900,
      easing: 'easeInOutSine'
    },
    scale: {
      value: 1.2,
      duration: 900,
      easing: 'easeInOutQuart'
    }
  })
})

verb2.addEventListener('mouseenter', () => {
  anime({
    targets: '.square2',
    background: '#FFC576',
    translateX: {
      value: 0,
      duration: 900
    },
    rotate: {
      value: 420,
      duration: 900,
      easing: 'easeInOutSine'
    },
    scale: {
      value: 1.2,
      duration: 900,
      easing: 'easeInOutQuart'
    }
  })
})

verb3.addEventListener('mouseenter', () => {
  anime({
    targets: '.square3',
    background: '#FFC576',
    translateX: {
      value: 0,
      duration: 900
    },
    rotate: {
      value: 420,
      duration: 900,
      easing: 'easeInOutSine'
    },
    scale: {
      value: 1.2,
      duration: 900,
      easing: 'easeInOutQuart'
    }
  })
})

// Makes square not visible with animation
verb1.addEventListener('mouseleave', () => {
  anime({
    targets: '.square1',
    translateX: {
      value: -300,
      duration: 1200
    },
    rotate: {
      value: 0,
      duration: 1200,
      easing: 'easeInOutSine'
    },
    scale: {
      value: 0,
      duration: 1200,
      easing: 'easeInOutQuart'
    },
    background: {
      value: 'rgba(0, 0, 0, 0)',
      duration: 600
    }
  })
})

verb2.addEventListener('mouseleave', () => {
  anime({
    targets: '.square2',
    translateX: {
      value: -300,
      duration: 1200
    },
    rotate: {
      value: 0,
      duration: 1200,
      easing: 'easeInOutSine'
    },
    scale: {
      value: 0,
      duration: 1200,
      easing: 'easeInOutQuart'
    },
    background: {
      value: 'rgba(0, 0, 0, 0)',
      duration: 600
    }
  })
})

verb3.addEventListener('mouseleave', () => {
  anime({
    targets: '.square3',
    translateX: {
      value: -300,
      duration: 1200
    },
    rotate: {
      value: 0,
      duration: 300,
      easing: 'easeInOutSine'
    },
    scale: {
      value: 0,
      duration: 1200,
      easing: 'easeInOutQuart'
    },
    background: {
      value: 'rgba(0, 0, 0, 0)',
      duration: 600
    }
  })
})