// 1. show, hide, toggle
$("#show").click(() => {
  $("#img").show(3000);
});

$("#hide").click(() => {
  $("#img").hide(3000);
});

$("#toggle").click(() => {
  $("#img").toggle(3000);
});

//2. fadeIn, fadeOut, fadeToggle, fadeTo

$("#fadeIn").click(() => {
  $("#img").fadeIn(3000);
});

$("#fadeOut").click(() => {
  $("#img").fadeOut(3000);
});

$("#fadeToggle").click(() => {
  $("#img").fadeToggle(3000);
});
$("#img").hover(
  function () {
    $(this).fadeTo(500, 0.5);
  }, // mouseenter
  function () {
    $(this).fadeTo(500, 1);
  } // mouseleave
);

//3. slideDown, slideUp, slideToggle

$(".menu").click((e) => {
  let content = $(e.target).next();
  /*
  if (content.css("display") === "none") {
    content.sliseDown(500);
  } else {
    content.slidrUp(500);
  }
*/
  //   content.slideToggle(500);
  $(".contents").slideUp();
  if (content.css("display") === "none") {
    content.slideDowm(500);
  }
});
