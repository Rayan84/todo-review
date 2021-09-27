import { indexOf } from "lodash"; // eslint-disable-line

export function removeItem(obj){
    obj.remove();
    let existingEntries = JSON.parse(localStorage.getItem('todos'));
      let deletedItem = obj.id;
      let entry = existingEntries.find(obj => obj.index == deletedItem);
      existingEntries.splice(existingEntries.indexOf(entry), 1);
      localStorage.setItem('todos', JSON.stringify(existingEntries));
      changeIndexes();
}

export let deleteCompleted = () => {
  let completedTasks = document.querySelectorAll('.completed');
  let existingEntries = JSON.parse(localStorage.getItem('todos'));
  let deletedItems = existingEntries.filter(obj => obj.completed !== true);
  localStorage.setItem('todos', JSON.stringify(deletedItems));
  for (let i = 0; i < completedTasks.length; i++){
  completedTasks[i].parentElement.remove();
   }
   changeIndexes();
}

export let changeIndexes = () => {
  let lis = document.querySelectorAll('LI');
  let existingEntries = JSON.parse(localStorage.getItem('todos'));
  for (let i = 0; i < existingEntries.length; i++){
    existingEntries[i].index = i;
    lis[i].id = i;
  }
  localStorage.setItem('todos', JSON.stringify(existingEntries));
  //location.reload();
  
}

export function showTrashBin(){
    let trashCan = this;
  if (trashCan.textContent == '\u22ee'){
    trashCan.innerHTML = '&#128465;';
    setTimeout(function(){
      trashCan.innerHTML = '\u22ee';
    }, 3000);
  } else {
    removeItem(this.parentElement);
  }
}