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
    if(target.hash === "#foryou"){
      var idx = Math.floor((Math.random() * videos.length));
      cycleVideos(idx);
    }
    if(target.hash === "#work"){
      select($(nav_elem_list[1]), true);
      $('.work-contains').fadeIn();
      $('.code').show();
      $('.design').hide();
    } else {
      $('.project-info').hide();
      $('.projects').show();
      $('.work-contains').hide();
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
    $('#nav')[0].src = "images/hamburger.png";
    $('#nav')[0].alt = "Hamburger";
    if(target.hash === "#work"){ $('.work-contains').show();}
  }

};

function switchEducationContent(event) {
  sub_items = $('.sub-items').children();
  var target = event.target;
  select(target, true);
  console.log(target.hash);
  if(target.hash === sub_items[0].hash){
    $('.design').hide();
    $('.code').fadeIn();
    select(sub_items[0], true);
    select(sub_items[1], false);  
  } else {
    $('.code').hide();
    $('.design').fadeIn();
    select(sub_items[1], true);
    select(sub_items[0], false);  
  }
};

function switchWorkContent(event) {
  sub_items = $('.sub-items').children();
  var target = event.target;
  select(target, true);
  console.log(target.hash);
  if(target.hash === sub_items[0].hash){
    $('.design').hide();
    $('.code').fadeIn();
    select(sub_items[0], true);
    select(sub_items[1], false);  
  } else {
    $('.code').hide();
    $('.design').fadeIn();
    select(sub_items[1], true);
    select(sub_items[0], false);  
  }
};

function switchOtherContent(event) {
  sub_items = $('.sub-items').children();
  var target = event.target;
  select(target, true);
  console.log(target.hash);
  if(target.hash === sub_items[0].hash){
    $('.design').hide();
    $('.code').fadeIn();
    select(sub_items[0], true);
    select(sub_items[1], false);  
  } else {
    $('.code').hide();
    $('.design').fadeIn();
    select(sub_items[1], true);
    select(sub_items[0], false);  
  }
};

function showAll(event){
  var showNav = $('.items').children().slice(0, -2);
  if($('#nav')[0].alt === "Hamburger"){
    for(var i = 0; i < showNav.length; i++){
      $(showNav).show();
    }
    $('#nav')[0].src = "images/x.png";
    $('#nav')[0].alt = "Cross";
  } else {
    for(var i = 0; i < showNav.length; i++){
      $(showNav[i]).hide();
    }
    $(".active").show();
    $('#nav')[0].src = "images/hamburger.png";
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
  $('.project-info').hide();
  hideAllContent();
  $('.about').show();
  $('.design').hide();
  select($('.sub-items').children().first(), true);
  $('.work-contains').hide();
  var active = $('.items').children().first();
  select(active, true);

});