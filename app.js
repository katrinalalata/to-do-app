let id = 0;

function onReady() {
   const toDos = [];
   const addToDoForm = document.getElementById('addToDoForm');

   function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
      if (!newToDoText.value) { return; }
      toDos.push({
      title: newToDoText.value,
      complete: false,
      id: 0++,
    });
      newToDoText.value = '';

      renderTheUI();
  }

  // add delete
  let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

// add delete
  deleteButton.addEventListener('click', event => {
    event.toDo.id();

    renderTheUI();
          })


  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

      toDoList.textContent = '';

      toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

        //add delete
      newLi.appendChild(deleteButton);
    });
}

window.onload = function() {
  onReady();
};
