 //search note
 let li = document.getElementById('ol').children;

 document.getElementById('search-input').addEventListener('keyup', function (e) {
     let search_input = e.target.value.toUpperCase();
     console.log(search_input);
     let liArray = Array.from(li);
     liArray.forEach(function (liarray) {

         let listValue = liarray.firstChild.value.toUpperCase();
         if (listValue.indexOf(search_input) != -1) {
             liarray.style.display = "block";
             console.log("value matched");

         } else {
             liarray.style.display = "none";
             console.log("not found");
             //                listValue.firstChild.style.display ="none";
         }
     });

 });

 //add note  

 let button = document.getElementById('addNote');
 let notesClass = document.querySelector('div.notes ol');
 let allNotes = [];

 function displayNotes(pushValue) {

     for (let i = pushValue - 1; i < allNotes.length; i++) {
         let li = document.createElement('li');
         let liId = li.setAttribute('id', i);
         li.innerHTML = `<input type='text' value='${allNotes[i]}' disabled > <span class='far fa-trash-alt' onclick='deleteNote(${i})'></span> <span class='far fa-edit' onclick='editNote(${i})'></span>`;
         notesClass.appendChild(li);
     }
 }

 button.addEventListener('click', function () {

     let maximumNotesLimit = 10;

     let newNote = document.getElementById('newNote').value;
     if (!newNote) {
         document.getElementsByClassName('show-message')[0].innerHTML = "<span style='color:red;margin-left:30px'>Note Could't Empty</span>";
     } else {

         if (allNotes.length < maximumNotesLimit) {

             document.getElementsByClassName('show-message')[0].innerHTML = "";
             let pushValue = allNotes.push(newNote);
             displayNotes(pushValue);

         } // end of if allNotes.length
         else {
             document.getElementsByClassName('show-message')[0].innerHTML = "<span style='color:red;margin-left:30px'>Maximum Notes Limit exceded</span>";
         }
     }
 });

 //delete note

 function deleteNote(id) {

     delete allNotes[id];
     document.getElementById(id).style = "display:none;";
     console.log("removed");
     // basically it doesn't delete note from allNotes[] array because doing that will become more tricky i am not wasting time to do that if you want then here is  way to delete the array element when we want index should not chhanged
     /* let deleteArrayValue= delete allNotes[id];
     if(deleteArrayValue){
        console.log(`item ${id} deleted`);    
        } */
 }

 //edit note

 function editNote(id) {

     let editInput = document.getElementById(id).firstChild;
     editInput.removeAttribute('disabled');
 }
