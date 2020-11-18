document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const doodler = document.createElement('div')
  let platforms = []
  let doodlerBottomSpace = startPoint
  
  class Platform {
    constructor(newPlatBottom) {
      this.left = Math.random() * 315
      this.bottom = newPlatBottom
      this.visual = document.createElement('div')

     const visual = this.visual
      visual.classList.add('platform')
      visual.style.left = this.left + 'px'
      visual.style.bottom = this.bottom + 'px'
      grid.appendChild(visual)
    }
  }
  
  function createPlatforms() {
    for(let i =0; i < platformCount; i++) {
      let platGap = 600 / platformCount
      let newPlatBottom = 100 + i * platGap
      let newPlatform = new Platform (newPlatBottom)
      platforms.push(newPlatform)
      console.log(platforms)
    }
  }

  
  function createDoodler() {
    grid.appendChild(doodler)
    doodler.classList.add('doodler')
    doodlerLeftSpace = platforms[0].left
    doodler.style.left = doodlerLeftSpace + 'px'
    doodler.style.bottom = doodlerBottomSpace + 'px'
  }
  
  function jump() {
    clearInterval(downTimerId)
    isJumping = true
    upTimerId = setInterval(function () {
      console.log(startPoint)
      console.log('1', doodlerBottomSpace)
      doodlerBottomSpace += 20
      doodler.style.bottom = doodlerBottomSpace + 'px'
      console.log('2',doodlerBottomSpace)
      console.log('s',startPoint)
      if (doodlerBottomSpace > (startPoint + 200)) {
        fall()
        isJumping = false
      }
    },30)
  }
  
  function movePlatforms() {
    if (doodlerBottomSpace > 200) {
        platforms.forEach(platform => {
          platform.bottom -= 4
          let visual = platform.visual
          visual.style.bottom = platform.bottom + 'px'
          
          if(platform.bottom < 10) {
            let firstPlatform = platforms[0].visual
            firstPlatform.classList.remove('platform')
            platforms.shift()
            console.log(platforms)
            score++
            var newPlatform = new Platform(600)
            platforms.push(newPlatform)
          }
    }) 
    }
    
  }
  function createDoodler() {
    grid.appendChild(doodler)
    doodler.classList.add('doodler')
    doodlerLeftSpace = platforms[0].left
    doodler.style.left = doodlerLeftSpace + 'px'
    doodler.style.bottom = doodlerBottomSpace + 'px'
  }
  }
  start()
})
