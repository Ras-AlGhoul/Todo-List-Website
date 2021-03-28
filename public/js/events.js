function onAddTask(){
    const title = prompt("write your new task", "new task");
    if(title){
        const newListItem = createItem(title, onRemoveTask);

        titles.push(title);

        olList.appendChild(newListItem);

        console.log("titles array", titles);
        saveData(titles);
    }
}

function onRemoveTask(event){

   
    const listItemTriggered = event.target.closest("li");
    const nodes = Array.from(olList.children);
    const index = nodes.indexOf(listItemTriggered);

    titles.splice(index, 1);

    olList.removeChild(listItemTriggered);

    saveData(titles);


}