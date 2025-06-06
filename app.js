let todo = [];

let req = prompt("please enter your choice");

while(true){
    if (req == "quit"){
        console.log("qutting app");
        break;
    }

    if(req == "list"){
        console.log("-------------");
        for(task of todo){
            console.log(task);
        }
        console.log("-------------");

    }else if (req == "add"){
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }else if (req == "delete"){
        let idx = prompt ("please enter the task index");
        todo.push(idx, 1);
        console.log("task added");
    }

    req = prompt("please enter your request");
}