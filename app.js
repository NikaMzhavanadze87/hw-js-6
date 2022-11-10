function showTime(){
    let date = new date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let period = "AM";
    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour - 12;
        period = "PM"
    }
    hour = (hour < 10) ?"0" + hour : hour;
    hour = (min < 10) ?"0" + min : min;
    hour = (sec < 10) ?"0" + sec : sec;
    document.getElementById('digital').innerHTML = hour + ":" + min + ":" + sec + period;
    
    setTimeout(showTime,1000);
}
showTime();




const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dotbtns = document.querySelectorAll(".dotbtn");
const startAutoSlider = document.querySelector(".start-auto-slider");
const stopAutoSlider = document.querySelector(".stop-auto-slider");

// console.log(slides);
let activeIndex = 0;
let sliderIntervalId = null;

function renderSliders() {
	slides.forEach((slide, index) => {
		// console.log(slide, index);

		if (activeIndex === index) {
			slide.classList.add("active");
		} else {
			slide.classList.remove("active");
		}
	});
   
}

function nextSlide() {
	// console.log("next slide");

	if (activeIndex === slides.length - 1) {
		activeIndex = 0;
	} else {
		activeIndex++;
	}

	renderSliders();
}

function prevSlide() {
	if (activeIndex === 0) {
		activeIndex = slides.length - 1;
	} else {
		activeIndex--;
	}

	renderSliders();
}


function startAutoSlidingFn() {
	sliderIntervalId = setInterval(nextSlide, 5000);
}

function stopAutoSlidingFn() {
	if (sliderIntervalId) {
		clearInterval(sliderIntervalId);
		sliderIntervalId = null;
	}
}


function keyBoardEvents() {
	document.addEventListener("keyup", (e) => {
		// console.log(e);

		if (e.code === "ArrowRight") {
			nextSlide();
		}
		if (e.code === "ArrowLeft") {
			prevSlide();
		}
	});
}

function initSlider() {
	renderSliders();

	next.addEventListener("click", nextSlide);
	prev.addEventListener("click", prevSlide);

	startAutoSlider.addEventListener("click", startAutoSlidingFn);
	stopAutoSlider.addEventListener("click", stopAutoSlidingFn);

	keyBoardEvents();
	// startAutoSlidingFn();
}

initSlider();