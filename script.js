const vedioELement = document.getElementById("video");
const buttonElement = document.getElementById("button");



// make  user to select mediastream area to display 
async function displayMediaStream(){
    try {
        const mediaStreamData = await navigator.mediaDevices.getDisplayMedia();
        console.log(mediaStreamData);
        vedioELement.srcObject = mediaStreamData;
        vedioELement.onloadedmetadata = ()=>{
            vedioELement.play()
        }
        
    } catch (error) {
        console.log(error.message);
    }
}


displayMediaStream();




// enabling picture in picture mode when the button is clicked
buttonElement.addEventListener("click" , async()=>{
    buttonElement.disabled = true;
    await vedioELement.requestPictureInPicture()
    buttonElement.disabled = false;
})