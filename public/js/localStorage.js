function saveData(titles){

  console.log("saveData");

  const serializeData = titles.join();

  localStorage.setItem("todo", serializeData );

}
function loadData(){
    
  const serializeData =  localStorage.getItem(storageKey);

  if (serializeData === null){
    return [];
  }
  
  return serializeData.split(",");
}