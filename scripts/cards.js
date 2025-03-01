

document.getElementById("btn-task-1").addEventListener("click", function(){
    const totalTasks = getInnerTextByID("total-tasks");
    const completedTasks = getInnerTextByID("completed-tasks");
    
    const remaining = totalTasks - 1;
    const sum = completedTasks + 1;

    setInnerTextByID("total-tasks", remaining)
    setInnerTextByID("completed-tasks", sum)
    alert("You have successfully completed the task!")

    disableButton("btn-task-1");

    if(remaining <= 0){
        alert("Congrats! You have completed all the tasks")
    }

    const now = new Date();
    const timeNow = now.toLocaleTimeString();
    const cardTitle = document.getElementById("task1").innerText;
    const activityText = `You have successfully completed the task "${cardTitle}" at  ${timeNow} `;
    setHistory(activityText);
   
})


document.getElementById("btn-task-2").addEventListener("click", function(){
    const totalTasks = getInnerTextByID("total-tasks");
    const completedTasks = getInnerTextByID("completed-tasks");
    
    const remaining = totalTasks - 1;
    const sum = completedTasks + 1;

    setInnerTextByID("total-tasks", remaining)
    setInnerTextByID("completed-tasks", sum)
    alert("Task completed successfully!")

    disableButton("btn-task-2");
    

    if(remaining <= 0){
        alert("Congrats! You have completed all the tasks")
    }

    const now = new Date();
    const timeNow = now.toLocaleTimeString();
    const cardTitle = document.getElementById("task2").innerText;
    const activityText = `You have successfully completed the task "${cardTitle}" at ${timeNow}`;
    setHistory(activityText);
})


document.getElementById("btn-task-3").addEventListener("click", function(){
    const totalTasks = getInnerTextByID("total-tasks");
    const completedTasks = getInnerTextByID("completed-tasks");
    
    const remaining = totalTasks - 1;
    const sum = completedTasks + 1;

    setInnerTextByID("total-tasks", remaining)
    setInnerTextByID("completed-tasks", sum)
    alert("Task completed successfully!")

    disableButton("btn-task-3");
    

    if(remaining <= 0){
        alert("Congrats! You have completed all the tasks")
    }

    const now = new Date();
    const timeNow = now.toLocaleTimeString();
    const cardTitle = document.getElementById("task3").innerText;
    const activityText = `You have successfully completed the task "${cardTitle}" at ${timeNow}`;
    setHistory(activityText);
})


document.getElementById("btn-task-4").addEventListener("click", function(){
    const totalTasks = getInnerTextByID("total-tasks");
    const completedTasks = getInnerTextByID("completed-tasks");
    
    const remaining = totalTasks - 1;
    const sum = completedTasks + 1;

    setInnerTextByID("total-tasks", remaining)
    setInnerTextByID("completed-tasks", sum)
    alert("Task completed successfully!")

    disableButton("btn-task-4");
    

    if(remaining <= 0){
        alert("Congrats! You have completed all the tasks")
    }

    const now = new Date();
    const timeNow = now.toLocaleTimeString();
    const cardTitle = document.getElementById("task4").innerText;
    const activityText = `You have successfully completed the task "${cardTitle}" at ${timeNow}`;
    setHistory(activityText);
})


document.getElementById("btn-task-5").addEventListener("click", function(){
    const totalTasks = getInnerTextByID("total-tasks");
    const completedTasks = getInnerTextByID("completed-tasks");
    
    const remaining = totalTasks - 1;
    const sum = completedTasks + 1;

    setInnerTextByID("total-tasks", remaining)
    setInnerTextByID("completed-tasks", sum)
    alert("Task completed successfully!")

    disableButton("btn-task-5");
    

    if(remaining <= 0){
        alert("Congrats! You have completed all the tasks")
    }

    const now = new Date();
    const timeNow = now.toLocaleTimeString();
    const cardTitle = document.getElementById("task5").innerText;
    const activityText = `You have successfully completed the task "${cardTitle}" at ${timeNow}`;
    setHistory(activityText);
})


document.getElementById("btn-task-6").addEventListener("click", function(){
    const totalTasks = getInnerTextByID("total-tasks");
    const completedTasks = getInnerTextByID("completed-tasks");
    
    const remaining = totalTasks - 1;
    const sum = completedTasks + 1;

    setInnerTextByID("total-tasks", remaining)
    setInnerTextByID("completed-tasks", sum)
    alert("Task completed successfully!")

    disableButton("btn-task-6");
    

    if(remaining <= 0){
        alert("Congrats! You have completed all the tasks")
    }

    const now = new Date();
    const timeNow = now.toLocaleTimeString();
    const cardTitle = document.getElementById("task6").innerText;
    const activityText = `You have successfully completed the task "${cardTitle}" at ${timeNow}`;
    setHistory(activityText);
})



// Clear history

document.getElementById("clear-history").addEventListener("click", function(event){
    
    const container = document.getElementById("activities-container");
    const paras = container.children;
    for(let para of paras){
        para.style.display = "none";
    }

})


// Setting up today's date and day

const todayDate = new Date();
// const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// const today = days[todayDate.getDay()];
// document.getElementById("today").textContent = today + ",";

document.getElementById("today-date").textContent = todayDate.toDateString();