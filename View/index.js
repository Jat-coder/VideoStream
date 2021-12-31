function reqListener(){
    let res = JSON.parse(this.responseText);
    let filesAvailable = res.filesAvailable;

    for(file in filesAvailable){
        node = document.getElementById(`videoPlayers`)
        node.insertAdjacentHTML('beforeend',`
            <h2>${filesAvailable[file]}</h2>
        <video class="videoPlayer" width="650" controls >
            <source src="/video/${filesAvailable[file]}" type="video/mp4"/>
        </video>
        <hr>
        `)
    }
}
const xhr = new XMLHttpRequest();
xhr.addEventListener('load',reqListener);
xhr.open('get','topVideos');
xhr.send();