 //Selecting elements
 const addTitle = document.querySelector("#addTitle");
 const addText = document.querySelector("#addText");
 const addButton = document.querySelector("#addNote");
 const notesContainer = document.querySelector("#notes");
 
//Event Listeners
 addButton.addEventListener("click",addNotes);
 notesContainer.addEventListener("click",deleteNotes);



 //Functions
 function addNotes(){
    let title = addTitle.value;
    let text=addText.value;
    if(text === ""){
        alert("Add your note");
        return;
    }

    const notesDiv = document.createElement("div");
    notesDiv.classList.add("note");
    const contentDiv = document.createElement("div");
    const notesTitle = document.createElement("div");
    notesTitle.classList.add("title");
    const notesText = document.createElement("div");
    notesText.classList.add('text');
    contentDiv.appendChild(notesTitle);
    contentDiv.appendChild(notesText);
    const deletebtn = document.createElement("button");
    deletebtn.innerText= "DELETE";
    deletebtn.classList.add("del-btn");
    notesTitle.innerText = title;
    notesText.innerText = text;
    notesDiv.appendChild(contentDiv);
    notesDiv.appendChild(deletebtn);
    notesContainer.appendChild(notesDiv);
    addTitle.value = "";
    addText.value = "";
}

function deleteNotes(e){
    const item = e.target;
   const note = item.parentElement;
   note.remove();
}