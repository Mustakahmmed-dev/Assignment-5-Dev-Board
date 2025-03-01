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
    p.innerText = activity;
    activities.appendChild(p)
 }