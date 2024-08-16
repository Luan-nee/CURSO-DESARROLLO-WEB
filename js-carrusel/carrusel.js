new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
  dots: '.indicador_carrusel',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});

// window.onresize = ()=>{
//   console.log(window.innerWidth)
// }

// console.log(window.innerWidth);