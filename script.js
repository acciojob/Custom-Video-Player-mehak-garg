/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
video.addEventListener("timeupdate",()=>{
	let percent=(video.currentTime/video.duration)*100;
	progressBar.style.width=percent+"%";
})
toggle.addEventListener("click",()=>{
	if(video.play())
	{
		video.pause();
	
	}
	else{
		video.play();
	}
})
ranges.addEventListener("input",(e)=>{
	video.volume=e.target.value;
	video.playBack=e.target.value;
})

