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
	if(e.target==ranges[0])
		video.volume=e.target.value;
	if(e.target==ranges[1])
	vvideo.playBack=e.target.value;
})
skipButtons.addEventListener("click",(e)=>{
	if(e.target===skipButtons[0])
	{
		video.currentTime-=10;
	}
	if(e.target===skipButtons[1])
	{
		video.currentTime+=25;
	}
})


