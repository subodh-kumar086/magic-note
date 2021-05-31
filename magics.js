let noteArray = [];
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function () {
    let addTitleNote = document.getElementById("addTitleNote").value;
    let textareaNote = document.getElementById("textareaNote").value;
    let noteObj = { addTitleNote: addTitleNote, textareaNote: textareaNote };
    noteArray.push(noteObj);
    localStorage.setItem("Note", JSON.stringify(noteArray));
    //localStorage.Note = JSON.stringify(noteArray);
    addNoteElement(addTitleNote, textareaNote);
    clearForm();
});

//showLocalData();

function InitialiseCardData() {
    let noteElm = document.getElementById("notes");
    let NoteArray = JSON.parse(localStorage.Note);
    if (localStorage.Note) {
        
        console.log(NoteArray);
        console.log(NoteArray.length);
        for (let i = 0; i < NoteArray.length; i++) {
            let title1 = NoteArray[i].addTitleNote;
            let note1 = NoteArray[i].textareaNote;
            
            addNoteElement(title1, note1);
        }
    }

}


//showLocalData();

function clearForm()
{
    document.getElementById("addTitleNote").value ="";
    document.getElementById("textareaNote").value =""; 
}


function showLocalData() {
    let noteElm = document.getElementById("notes");
    //let NoteArray = JSON.parse(localStorage.Note);
    let noteObj = JSON.parse(localStorage.getItem("Note"));
    let title = noteObj[i].addTitleNote;
    let area = noteObj[i].textAreaNote;
    if (noteObj.length != 0) {
        for( let i = 0; i < noteObj.length; i++)
        {
            addNoteElement(title,area);
        }
       // return true;
    }
    else {
        noteElm.innerHTML = "Nothing to Show here!! Use Add Note Section to add you note Here";
    }
}





function addNoteElement(title, note) {
    let noteElm = document.getElementById("notes");
    // let noteDiv = document.createElement('div');
    // noteDiv.setAttribute("class","row container-fluid");

    let cardDiv = document.createElement('div');
    cardDiv.setAttribute("class", "noteCard my-2 mx-2 card");
    cardDiv.setAttribute("style", "width: 18rem;")


    let cardBodyDiv = document.createElement('div');
    cardBodyDiv.setAttribute("class", "card-body");

    let h5_text = document.createElement('h5');
    h5_text.setAttribute("class", "card-title");
    h5_text.innerHTML = title;

    let p_text = document.createElement('p');
    p_text.setAttribute("class", "card-text");
    p_text.innerHTML = note;

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute("class", "btn btn-primary");
    deleteButton.innerHTML = "Delete Note";
    deleteButton.addEventListener("click", deleteCard);

    noteElm.appendChild(cardDiv);
    cardDiv.appendChild(cardBodyDiv);
    cardBodyDiv.appendChild(h5_text);
    cardBodyDiv.appendChild(p_text);
    cardBodyDiv.appendChild(deleteButton);

   // console.log(noteElm);
}


function deleteCard() 
{
    var i = this.parentNode.parentNode.remove();
    console.log(i);
    NoteArray=JSON.parse(localStorage.Note);
    var length = NoteArray.length;
    NoteArray.splice(length - i,1);
    localStorage.Note=JSON.stringify(NoteArray);
}



let search = document.getElementById('searchinput');
searchinput.addEventListener("input",function(){
    
    let inputVal = search.value;
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element)
    {
        let h_text = element.getElementsByTagName("h5")[0].innerText;
        let p_text = element.getElementsByTagName("p")[0].innerText;
        if(h_text.includes(inputVal) || p_text.includes(inputVal))
        {
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";

        }
    })
})


InitialiseCardData();


