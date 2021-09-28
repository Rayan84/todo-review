
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
  completedTasks.forEach(task => task.parentElement.remove());

   changeIndexes();
}

export let changeIndexes = () => {
  let lis = document.querySelectorAll('LI');
  let existingEntries = JSON.parse(localStorage.getItem('todos'));
  existingEntries.forEach((existingEntry, index) => existingEntry.index = index);
  lis.forEach((li, index) => li.id = index);

  localStorage.setItem('todos', JSON.stringify(existingEntries));
  
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