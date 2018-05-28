function determineContent(elem, should_hide){
  if(should_hide){
    $(elem).hide();
  } else {
    $(elem).fadeIn(500);
  }
};

function hideAllContent(){
  var content_list = $('.main-content').children();
  for(var i = 0; i < content_list.length; i++){
    determineContent(content_list[i], true);
  }
};

function select(elem, sel){
  if(sel){
    $(elem).children('.off').hide();
    $(elem).children('.on').show();
  } else {
    $(elem).children('.on').hide();
    $(elem).children('.off').show();
  }
};

function hideNav(){
  var nav_elem_list = $('.items').children();
  for(var i = 0; i < nav_elem_list.length; i++){
    var temp_elem = nav_elem_list[i];
    select(temp_elem, false);
  }
};

function goHome(event){
  hideNav();
  $('.education-contains').hide();
  hideAllContent();
  select($('.items').children().first(), true);
  $('.about').fadeIn();
  if($(window).width() <= 500){
    $('.active').removeClass("active");
    var nav = $('.items').children().slice(0,-2);
    $(nav[0]).first().addClass("active");
    $('#nav')[0].src = "img/hamburger.png";
    $('#nav')[0].alt = "Hamburger";
    $(nav[0]).show();
    for(var i = 1; i < nav.length; i++){
      $(nav[i]).hide();
    }
  }
};

function changeContent(event){
  hideNav();
  var nav_elem_list = $('.items').children();
  select($('.sub-items').children().first(), true);
  var target = event.target;
  hideAllContent();
  select(target, true);
  var content_list = $('.main-content').children();
  for(var i = 0; i < content_list.length; i++){
    if(target.hash === ("#"+content_list[i].id)){
      determineContent(content_list[i], false);
    }

    if(target.hash === "#education"){
      select($(nav_elem_list[1]), true);
      $('.education-contains').fadeIn();
      $('.school').show();
      $('.coursework').hide();
    } else {
      // $('.project-info').hide();
      // $('.projects').show();
      $('.education-contains').hide();
    }
  }
  if($(window).width() <= 500){
    $('.active').removeClass("active");
    $(target).addClass("active");
    for(var i = 0; i < nav_elem_list.length-2; i++){
      if( nav_elem_list[i] != target){
        $(nav_elem_list[i]).hide();
      }
    }
    $('#nav')[0].src = "img/hamburger.png";
    $('#nav')[0].alt = "Hamburger";
    if(target.hash === "#education"){ $('.education-contains').show();}
  }

};

function switchEducationContent(event) {
  sub_items = $('.sub-items').children();
  var target = event.target;
  select(target, true);
  console.log(target.hash);
  if(target.hash === sub_items[0].hash){
    $('.coursework').hide();
    $('.school').fadeIn();
    select(sub_items[0], true);
    select(sub_items[1], false);  
  } else {
    $('.school').hide();
    $('.coursework').fadeIn();
    select(sub_items[1], true);
    select(sub_items[0], false);  
  }
};

// function cancel(event) {
//   $('.project-info').hide();
//   $('.projects').fadeIn();
// };

// function showDetail(event){
//   var detailsList = $('.project-info').children().slice(1);
//   var target = event.target;
//   $('.projects').hide();
//   $('.project-info').fadeIn();
//   for(var i = 0; i < detailsList.length; i++){
//     var title_text = $(detailsList[i]).children().find('h3').text();
//     if(target.alt === title_text) {
//       $(detailsList[i]).children().show();
//     } else {
//       $(detailsList[i]).children().hide();
//     }
//   }
// };

function showAll(event){
  var showNav = $('.items').children().slice(0, -2);
  if($('#nav')[0].alt === "Hamburger"){
    for(var i = 0; i < showNav.length; i++){
      $(showNav).show();
    }
    $('#nav')[0].src = "img/x.png";
    $('#nav')[0].alt = "Cross";
  } else {
    for(var i = 0; i < showNav.length; i++){
      $(showNav[i]).hide();
    }
    $(".active").show();
    $('#nav')[0].src = "img/hamburger.png";
    $('#nav')[0].alt = "Hamburger";
  }
};

$(document).ready(function () {
  if($(window).width() <=500){
    var nav_elem_list = $('.items').children();
    $(nav_elem_list[0]).first().addClass("active");
    for(var i = 1; i < nav_elem_list.length - 2; i++){
      $(nav_elem_list[i]).hide();
    }
  }
  $('.on').hide();
  // $('.project-info').hide();
  hideAllContent();
  $('.about').show();
  $('.coursework').hide();
  select($('.sub-items').children().first(), true);
  $('.education-contains').hide();
  var active = $('.items').children().first();
  select(active, true);
});