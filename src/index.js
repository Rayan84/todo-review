import './style.css';
import {saveToLocalStorage} from './checkbox.js';
import {retrieveLocalStorage} from './checkbox.js';
import {checkboxFunctions} from './checkbox.js';
import {saveChanges} from './checkbox.js';
import { showTrashBin } from './add-and-remove.js';
import {deleteCompleted} from './add-and-remove.js';
import { countBy } from 'lodash'; // eslint-disable-line

export let renderList = (item, num) => {
  const listContainer = document.getElementById('list-container');
  let task = document.createElement('LI');
  let descriptionSpan = document.createElement('SPAN');
  descriptionSpan.innerHTML = item.description;
  descriptionSpan.contentEditable = 'true';
  descriptionSpan.setAttribute('class', 'description');
  descriptionSpan.addEventListener('keyup', saveChanges);
  let span = document.createElement('SPAN');
  let checkbox = document.createElement('INPUT');
  let span2 = document.createElement('SPAN');
  let span2Text = document.createTextNode('\u22ee');
  span2.addEventListener('click', showTrashBin);
  checkbox.setAttribute('type','checkbox');
  checkbox.setAttribute('class', 'checkbox');
  task.setAttribute('class', 'task');
  task.setAttribute('id', num);
      if (item.completed == true){
        descriptionSpan.setAttribute('class', 'completed description');
        checkbox.checked = true;
      }
      checkbox.addEventListener('change', checkboxFunctions);  
      span.appendChild(checkbox);
      task.appendChild(span);
      task.appendChild(descriptionSpan);
      span2.appendChild(span2Text);
      span2.setAttribute('class', 'ellipses');
      task.appendChild(span2);
      task.draggable = 'true'
      listContainer.appendChild(task);
}

const input = document.getElementById('input');
const enterButton = document.getElementById('enter-button');


let enter = () => {
  if (document.getElementById('input').value == ''){
    alert ("Please enter something");
    return false
  }
  addNewTask();
  document.getElementById('input').value = '';
}

enterButton.addEventListener('click', enter);
input.addEventListener('keypress', function (e){
  if (e.key === 'Enter') {
    enter();
  }
})

let addNewTask = () => {
  let indexing;
  if(localStorage.getItem('todos').length < 3){
    indexing = 0;
  }else {
    var arrayFromStroage = JSON.parse(localStorage.getItem("todos"));
    const lastItem = arrayFromStroage[arrayFromStroage.length - 1];
    indexing = lastItem.index + 1;
  }
  let newTask = {
  "index": indexing,
  "description": document.getElementById('input').value,
  "completed": false,
  }
  saveToLocalStorage(newTask);
  renderList(newTask, indexing);
}

document.getElementById('delete-completed').addEventListener('click', deleteCompleted);

window.addEventListener('load', retrieveLocalStorage);

