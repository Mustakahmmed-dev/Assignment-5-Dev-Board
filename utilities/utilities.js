function getInnerTextByID(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
 }

 function setInnerTextByID(id, value){
    document.getElementById(id).innerText = value;

 }

 function disableButton(id){
    const btn = document.getElementById(id);
    btn.disabled = true;
 }

 function setHistory(activity){
    const activities = document.getElementById("activities-container");
    const p = document.createElement("p");
    p.classList.add("activity-bg");
    
    p.innerText = activity;
    activities.appendChild(p)
 }


// Hide Element By ID
function hideElementByID(id){
   document.getElementById(id).style.display = "none";


}
// Show element by id
function showElementByID(id){
   document.getElementById(id).style.display = "flex";
}
function showElementInBlock(id){
   document.getElementById(id).style.display = "block";
}