$(function() {
	let loc ="DC";

	function DC(){
		$(".link").removeClass("active");
		$(".container").hide().addClass("hidden-xs-up");
		$(".DC").fadeIn(700).removeClass("hidden-xs-up");
		location.replace("#DC");
		loc = "DC";
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}//end DC

	function project(){
		$(".link").removeClass("active");
		$("#projects").addClass("active");
		$(".container").hide().addClass("hidden-xs-up");
		$(".projects").fadeIn(700).removeClass("hidden-xs-up");
		location.replace("#projects");
		loc = "projects";
		document.body.scrollTop = document.documentElement.scrollTop = 0;
}//end project

	function contact(){
		$(".link").removeClass("active");
		$("#contact").addClass("active");
		$(".container").hide().addClass("hidden-xs-up");
		$(".contact").fadeIn(700).removeClass("hidden-xs-up");
		location.replace("#contact");
		loc = "contact";
		document.body.scrollTop = document.documentElement.scrollTop = 0;
}//end contact


	$("#DC").click(function() {
		if (loc != "DC") {
			DC();
		} //end if
	}) //end DC click
	$("#projects").click(function() {
		if (loc != "projects") {
			project();
		} //end if
	}) //end contact click
	$("#contact").click(function() {
		if (loc != "contact") {
			contact();
		} //end if
	}) //end contact click

	if (window.location.href == "file:///C:/Users/Dom/Desktop/WebDev/1Portfolio/PortfolioSite/index.html" || window.location.href == "file:///C:/Users/Dom/Desktop/WebDev/1Portfolio/PortfolioSite/index.html#DC") {//change url on upload
		DC();
	}
	else if (window.location.href == "file:///C:/Users/Dom/Desktop/WebDev/1Portfolio/PortfolioSite/index.html#projects") {//change url on upload
		project();
	}
	else {
		contact();
	}


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
		if (container.innerHTML.length == 0) {
			t++;
			thing = things[t];
			message = "";
			mode = "write";
			if (t == 6) {
				t = -1;
			}
		}
		switch (mode) {
			case "write":
				message += thing.slice(0, 1);
				thing = thing.substr(1);
				updateText(message);
				if (thing.length === 0 && t === (things.length - 1)) {
					window.clearTimeout(timeout);
					return;
				}
				if (thing.length == 0) {
					mode = "delete";
					delay = 2000;
				} else {
					delay = 32 + Math.round(Math.random() * 40);
				}
				break;
			case "delete":
				message = message.slice(0, -1);
				updateText(message);
				if (message.length == 0) {
					mode = "write";
					delay = 1000;
				} else {
					delay = 32 + Math.round(Math.random() * 40);
				}
				break;
		}
		timeout = window.setTimeout(tick, delay);
	}
	let timeout = window.setTimeout(tick, delay);
	$(document).on('click', function(event) {
		var $clickedOn = $(event.target),
			$collapsableItems = $('.collapse'),
			isToggleButton = ($clickedOn.closest('.navbar-toggle').length == 1),
			isLink = ($clickedOn.closest('a').length == 1),
			isOutsideNavbar = ($clickedOn.parents('.navbar').length == 0);
		if ((!isToggleButton && isLink) || isOutsideNavbar) {
			$collapsableItems.each(function() {
				$(this).collapse('hide');
			});
		}
	});
}) //end ready
