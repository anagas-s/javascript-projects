 //Selecting elements
 const addTitle = document.querySelector("#addTitle");
 const addText = document.querySelector("#addText");
 const addButton = document.querySelector("#addNote");
 const notesContainer = document.querySelector("#notes");


//Event Listeners
 addButton.addEventListener("click",addNotes);





 //Functions
 function addNotes(){
    const title = addTitle.value;
    const text=addText.value;
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
    // notesDiv.appendChild(notesText);
    notesDiv.appendChild(deletebtn);
    notesContainer.appendChild(notesDiv);









    // const noteObj = {
    //     title: addTitle.value,
    //     note: addText.value,
    // }
    // notes.push(noteObj);
 }

//  function showNotes(){
//     let notes = '';
//     for(let i=0;i<notes.length;i++){
        
//     }
//  }