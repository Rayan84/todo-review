import {renderList} from './index.js';
import _ from 'lodash'; // eslint-disable-line
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
        for (let i = 0; i < existingEntries.length; i++ ){
            let indexing = (existingEntries[i].index);
            renderList(existingEntries[i], indexing);
         }
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