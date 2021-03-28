function createItem(stringTitle, functionToRemove){
   //create html tags using html
   const listItem = document.createElement("li");
   const checkbox = document.createElement("input");
   checkbox.setAttribute("type", "checkbox");
   const span = document.createElement("span");

//    modify html tags
checkbox.addEventListener("change", functionToRemove);
span.innerText = stringTitle;

// Add the checkbox span to the list
listItem.appendChild(checkbox);
listItem.appendChild(span);

return listItem;
}