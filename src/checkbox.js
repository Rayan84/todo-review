import {renderList} from './index.js';
export function checkboxFunctions(){
    let checkedItme = this.parentNode.parentNode.id;
    let existingEntries = JSON.parse(localStorage.getItem('todos'));
    let entry = existingEntries.find(obj => obj.index == checkedItme)
    if (this.checked == true){
        this.parentNode.nextSibling.className = 'completed description';
       entry.completed = true;
    }else {
        this.parentNode.nextSibling.className = 'description';
        entry.completed = false;
    }
    localStorage.setItem('todos', JSON.stringify(existingEntries));
 }        

export function retrieveLocalStorage() {
    if (localStorage.getItem('todos') !== null){
        let existingEntries = JSON.parse(localStorage.getItem('todos'));
        existingEntries.forEach(existingEntry => renderList(existingEntry, existingEntry.index));
        }else {
            localStorage.setItem('todos', '[]');
    }
}

export function saveToLocalStorage(obj){
    if (localStorage.getItem('todos') !== null){
      let existingEntries = JSON.parse(localStorage.getItem('todos'));
      existingEntries.push(obj);
      localStorage.setItem('todos', JSON.stringify(existingEntries));
    }else {
      let a = [];
      a.push(obj);
      localStorage.setItem('todos', JSON.stringify(a));
    }
}


export function saveChanges () {
    let changedItem = this.parentNode.id;
    let existingEntries = JSON.parse(localStorage.getItem('todos'));
    let entryIndex = existingEntries.indexOf(existingEntries.find(obj => obj.index == changedItem));
    existingEntries[entryIndex].description = this.textContent;
    localStorage.setItem('todos', JSON.stringify(existingEntries));
}