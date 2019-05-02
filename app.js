function onReady() {
     const addToDoForm = document.getElementById('addToDoForm');
     const newToDoText = document.getElementById('newToDoText');
     const toDoList = document.getElementById('toDoList');

        addToDoForm.addEventListener('submit', event => {
          event.preventDefault();

          deleteButton.addEventListener('click', function(event){
        // console.log(event);
         // this.parentElement
            toDoList.removeChild(this.parentElement);
          })

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // delete to-do
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // delete
    newLi.appendChild(deleteButton);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

  });
 }


window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
