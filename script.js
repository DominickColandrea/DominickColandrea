$(function(){
let loc="DC";
$("#DC").click(function(){
	if (loc != "DC") {
		$(".link").removeClass("active");
		$(".container").hide().addClass("hidden-xs-up");
		$(".DC").fadeIn(700).removeClass("hidden-xs-up");
		location.replace("#DC");
		loc="DC";
	}//end if
})//end DC click

$("#projects").click(function(){
	if (loc !="projects") {
		$(".link").removeClass("active");
		$("#projects").addClass("active");
		$(".container").hide().addClass("hidden-xs-up");
		$(".projects").fadeIn(700).removeClass("hidden-xs-up");
		location.replace("#projects");
		loc="projects";
	}//end if
})//end contact click

$("#contact").click(function(){
if (loc != "contact") {
	$(".link").removeClass("active");
	$("#contact").addClass("active");
	$(".container").hide().addClass("hidden-xs-up");
	$(".contact").fadeIn(700).removeClass("hidden-xs-up");
	location.replace("#contact");
	loc="contact";
}//end if
})//end contact click

let container = document.getElementById('head');

let things = ["coding", "learning", "on the grind", "improving", "adapting", "moving forward", "a work in progress"];
let t = -1;
let thing = "";
let message = container.innerHTML;
let mode = "write";
let delay = 1000;

function updateText(txt) {
    container.innerHTML = txt;
}

function tick() {

    if(container.innerHTML.length == 0) {
        t++;
        thing = things[t];
        message = "";
        mode = "write";
        if (t==6) {
        	t=-1;
        }
    }

    switch(mode) {
        case "write" :
            message += thing.slice(0, 1);
            thing = thing.substr(1);

            updateText(message);

            if(thing.length === 0 && t === (things.length - 1)) {
                window.clearTimeout(timeout);
                return;
            }

            if(thing.length == 0){
                mode = "delete";
                delay = 1500;
            } else {
                delay = 32 + Math.round(Math.random() * 40);
            }

            break;

        case "delete" :
            message = message.slice(0, -1);
            updateText(message);

            if(message.length == 0)
            {
                mode = "write";
                delay = 1500;
            } else {
                delay = 32 + Math.round(Math.random() * 100);
            }
            break;
    }

    timeout = window.setTimeout(tick, delay);
}

let timeout = window.setTimeout(tick, delay);

    $(document).on('click', function(event){
      var $clickedOn = $(event.target),
          $collapsableItems = $('.collapse'),
          isToggleButton = ($clickedOn.closest('.navbar-toggle').length == 1),
          isLink = ($clickedOn.closest('a').length == 1),
          isOutsideNavbar = ($clickedOn.parents('.navbar').length == 0);

      if( (!isToggleButton && isLink) || isOutsideNavbar ) {
        $collapsableItems.each(function(){
          $(this).collapse('hide');
        });
      }
    });
})//end ready
