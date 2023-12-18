console.log("Welcome to spotify");

//Initialize the variables
let songIndex=0;
let audioElement =new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songName:"Comethru - Jeremy Zucker", coverPath:"media/comthru.jpg", filePath:"songs/1.mp3"},
    {songName:"Until i found yo - Stephen Sanchez", coverPath:"media/until.jpg", filePath:"songs/2.mp3"},
    {songName:"Lovers - Tylor Swift", coverPath:"media/lover.jpg",filePath:"songs/3.mp3"},
    {songName:"Perfect - Ed Sheeran" , coverPath:"media/perfect.jpg", filePath:"songs/4.mp3"},
    {songName:"See you again - Wiz khalifa", coverPath:"media/seeyouagain.jpg", filePath:"songs/5.mp3"},
    {songName:"Satranga - Arijit Singh", coverPath:"media/satranga.jpg", filePath:"songs/6.mp3"},
    {songName:"A Thousand years - Christina Perri", coverPath:"media/athousand.jpg", filePath:"songs/7.mp3"},
    {songName:"Snowman - Sia", coverPath:"media/snowman.jpg", filePath:"songs/8.mp3"},
    {songName:"Dandelions - Ruth B.", coverPath:"media/dandelions.jpg", filePath:"songs/9.mp3"},
    {songName:"Death Bed - beabadoobee", coverPath:"media/coffeee.jpg", filePath:"songs/10.mp3"}
]

songItems.forEach((element,i) =>{
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
});

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused ||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //Update seekbar
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})

audioElement.addEventListener('timeupdate',()=>{
     if(audioElement.currentTime){
        curmins=Math.floor(audioElement.currentTime/60)
        cursecs=Math.floor(audioElement.currentTime-curmins*60)
        durmins=Math.floor(audioElement.duration/60)
        dursecs=Math.floor(audioElement.duration-durmins*60)
     if(curmins<10){
        curmins=0+curmins
     }
     if(cursecs<10){
        cursecs=0+cursecs;
     }
     if(durmins<10){
        durmins=0+durmins
     }
     if(dursecs<10){
        dursecs=0+dursecs;
     }
    ct.innerText=`${curmins}:${cursecs}`;
    dt.innerText=`${durmins}:${dursecs}`;
     }
})