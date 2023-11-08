var select = document.querySelector('#options-type-select')

var glide = new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    focusAt:'center',
    autoplay: 3000,
    breakpoints: {
        1024: {
            perView: 2
        },
        600: {
            perView: 1
        }
    }
    // faire un bouton pause en utilisant glide.pause()
    // faire un bouton play en utilisant glide.play()
  })
  
  glide.mount()