//Properties
const storageKey = "todo";
const titles = [];
const olList = document.getElementById("ol-list");
const button = document.getElementById("button-list");

//Init
Start();

//Methods
function Start(){

    button.addEventListener("click", onAddTask);

    const data = loadData();

    titles.push(...data);

    displayListItems();
    

}

function displayListItems(){
  
    for (let i =0; i< titles.length; i++){

       const listItem = createItem(titles[i], onRemoveTask);

       olList.appendChild(listItem);
    }
}