
$('.counter').countUp()

$(() => {
  $('.navbar-toggler').click(() => {
    $('body').toggleClass('noscroll')
  })
})

$(window).on('scroll', () => {
  const scroll = $(window).scrollTop()

  if (scroll >= 80)
    $('#site-header').addClass('nav-fixed')
  else
    $('#site-header').removeClass('nav-fixed')
})

$('.navbar-toggler').on('click', () => {
  $('header').toggleClass('active')
})
$(document).on('ready', () => {
  if ($(window).width() > 991)
    $('header').removeClass('active')

  $(window).on('resize', () => {
    if ($(window).width() > 991)
      $('header').removeClass('active')
  })
})
