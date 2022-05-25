window.onload = init;

function init() {
    let addButton = document.getElementById("addButton");
    let deleteButton = document.getElementById("deleteButton");

    addButton.onclick = addButtonListener;
    deleteButton.onclick = deleteButtonListener;

    loadPlaylist();
}

function prepareString() {
    const regex = /\s+/g;
    let textInput = document.getElementById("songTextInput");
    
    return textInput.value.trim().replace(regex, " ");
}

function addButtonListener() {
    const songName = prepareString();
    const pos = getSavedSongs().indexOf(songName);

    console.log(songName);

    if(songName && pos === -1){
        let li = document.createElement("li");
        li.innerHTML = songName;
        let ul = document.getElementById("playlist");
        ul.appendChild(li);   
        save(songName);
    } else {
        alert(songName ? "This song already exists" : "Enter right song");
    }
}

function deleteButtonListener() {
    let songsArray = getSavedSongs();
    let idx = songsArray.indexOf(prepareString());

    if(idx !== -1) {
        songsArray.splice(idx, 1);
        let ulItems = document.getElementById("playlist");
        ulItems.removeChild(ulItems.childNodes[idx]);

        localStorage.setItem("playlist", JSON.stringify(songsArray));
    } else {
        alert("Nothing to delete");
    }
}