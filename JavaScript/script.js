// slider functions
function rightSlider() {
	document.querySelector('.welcome-part').classList.add('forward');
	document.querySelector('.welcome-part').classList.remove('back');
	document.querySelector('.about').classList.remove('not-visible');
	document.querySelector('.about').classList.add('back');
	document.querySelector('.about').classList.remove('forward');
	document.querySelector('.right').classList.add('colored');
	document.querySelector('.left').classList.remove('colored');
}

function leftSlider() {
	document.querySelector('.welcome-part').classList.toggle('forward');
	document.querySelector('.welcome-part').classList.toggle('back');
	document.querySelector('.about').classList.toggle('forward');
	document.querySelector('.about').classList.toggle('back');
	document.querySelector('.right').classList.toggle('colored');
	document.querySelector('.left').classList.toggle('colored');
}

function toggleSlider(){
	if(document.querySelector('.right').classList.contains('colored')){
		leftSlider()
	}
	else{
		rightSlider()
	}
}

about_slider = null
init_slider()
function init_slider(){
	about_slider = setInterval(
		function() {
			toggleSlider()
		},
		ms_to_sec(10)
	);
}

function stopSlider() {
	clearInterval(about_slider);
	about_slider = null;
	init_slider()
}
document.querySelector('.right').addEventListener('click', function() {
	toggleSlider()
	stopSlider()
});

document.querySelector('.left').addEventListener('click', function() {
	toggleSlider()
	stopSlider()
});

function ms_to_sec(time){
	return time*1000;
}


//add function to showMore btn
$(".show-link").on( "click", function() {
    var $this = $(this); 
    var linkText = $this.text().toUpperCase();
	var hideAt = 3;
	var maxElement = 7;
	function triggEl(){
		for(var i = hideAt; i < maxElement; i++) {
			// Open
			if(document.querySelector(".project-" + i).style.display === "none") {
				document.querySelector(".project-" + i).style.display = "block";
				$(".more").addClass("toggle");
				$(".less").removeClass("toggle");
			}
			// Close
			else {
				document.querySelector(".project-" + i).style.display = "none";
				$(".more").removeClass("toggle");
				$(".less").addClass("toggle");
			}
		}
	}
    if(linkText === "SHOW MORE"){
		triggEl()
    } else {
		triggEl()
    };
});

// add function to mobile nav icons
document.querySelector('.nav-icon').addEventListener('click', function()  {
	document.querySelector('.menu').classList.add('opened');
	document.querySelector('.menu').classList.remove('closed');
	document.querySelector('.close').style.display = 'block';
});
document.querySelector('.close').addEventListener('click', function() {
	document.querySelector('.menu').classList.remove('opened');
	document.querySelector('.menu').classList.add('closed');
	document.querySelector('.close').style.display = 'none';
});

animate(document.getElementById("footer_copyright"));
function animate(element) {
    let elementWidth = element.offsetWidth;
    let parentWidth = element.parentElement.offsetWidth;
    let flag = 0;
  
    setInterval(() => {
        element.style.marginLeft = --flag + "px";
  
        if (elementWidth == -flag) {
            flag = parentWidth;
        }
    }, 5);
}
