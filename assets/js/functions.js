$(function() {
  smoothScroll(1000);
  workBelt();
  workLoad();
  setInterval(function(){articleTada()}, 4000);
});

function articleTada() {
  var randNum = Math.floor(Math.random() * $('.article-thumb').length) +1

  $('.article-thumb').eq(randNum).addClass('is-emph')
    .siblings().removeClass('is-emph');
}

//The smooth scroll function is defined from the document ready function
function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );

    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
}

function workBelt() {
  $('.thumb-unit').click(function() {
    $('.work-belt').css('left', '-100%');
    $('.work-container').show();
  });

  $('.work-return').click(function(){
    $('.work-belt').css('left', '0%');
    $('.work-container').hide(800);
  });
}

function workLoad() {
  $.ajaxSetup ({ cache: false });
  $('.thumb-unit').click(function(){
    var $this = $(this),
      newTitle = $this.find('strong').text(),
      newfolder = $this.data('folder'),
      newHTML = '/work/'+ newfolder +'.html';
    $('.project-load').load(newHTML);
    $('.project-title').text(newTitle)
  });
}
