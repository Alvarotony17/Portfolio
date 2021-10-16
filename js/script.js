$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function () {

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click', function (e) {

    e.preventDefault();

    $('html, body').animate({

      scrollTop: $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});


function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function toggle(){
   var blur = document.getElementById('blur');
   blur.classList.toggle('active');
   var popup = document.getElementById('popup');
   popup.classList.toggle('active');
}

function togglePopup(){
  document.getElementById("popup-2").classList.toggle("active");
}


var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function(){
  modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function(){
  modalBg.classList.remove('bg-active');
});

// Expand code
var accordion = document.getElementsByClassName('contentBx');

for(i = 0; i< accordion.length; i++){
  accordion[i].addEventListener('click',function(){
    this.classList.toggle('active');
  })
}

// const btn = document.querySelector('.btnModal');
// const videoContainer = document.querySelector('.popup3-video-container');
// const close = document.querySelector('.close');


// btn.addEventListener('click',()=>{
//   videoContainer.classList.add('show');
// })

// close.addEventListener('click',() =>{
//   videoContainer.classList.remove('show');
// })