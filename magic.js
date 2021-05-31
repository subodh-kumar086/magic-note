console.log("Just for checking");
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTitleNote = document.getElementById("addTitleNote");
    let textareaNote = document.getElementById("textareaNote");
    let notes = localStorage.getItem("notes");
    
    let notesTitle = localStorage.getItem("notesTitle");
    let noteArea = localStorage.getItem("noteArea");

   // let noteObj = {"Title " : }
    
    //let noteTitleArray = [];
    //let noteAreaArray = [];

   if (notesTitle == null && noteArea == null) {
        noteTitleArray = [];
        noteAreaArray = [];
    }
    else {
        noteTitleArray = JSON.parse(noteTitleArray);
        noteAreaArray = JSON.parse(noteAreaArray);
    }
    noteTitleArray.push(addTitleNote.value);
    noteAreaArray.push(textareaNote.value);

    localStorage.setItem("notesTitle :", JSON.stringify(noteTitleArray));
    localStorage.setItem("noteArea :", JSON.stringify(noteAreaArray));
  
    addTitleNote.value = "";
    textareaNote.value = "";
    console.log(noteTitleArray);
    console.log(noteAreaArray);
})

function insertNoteData(title,note)
{
    
}



function ViewNotesData() {
    let notesTitle = localStorage.getItem("notesTitle");
    let noteArea = localStorage.getItem("noteArea");

    if (notesTitle == null && noteArea == null) {
        noteTitleArray = [];
        noteAreaArray = [];
    }
    else {
        noteTitleArray = JSON.parse(notesTitle);
        noteAreaArray = JSON.parse(noteArea);
    }


    let card = "";
    
        for(let i=0; i < noteTitleArray.length; i++ )
        {
        card += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title" id="noteTitle">$(noteTitleArray[i].value)</h5>
                        <p class="card-text" id="noteArea">$(noteAreaArray[i].value)</p>
                        <button href="#" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
    };   
    let notesItem = document.getElementById("notes");


}
