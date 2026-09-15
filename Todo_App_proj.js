let todo = [];

let req = prompt("please enter your request");

while(true) {
    if(req == "quit") {
        console.log("quitting app");
        break;
    }
    if(req == "list") {
        console.log("this is your todo list");
        for(let i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("end of list");
    } else if(req == "add") {
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }else if(req == "delete") {
        let index = prompt("please enter the index you want to delete");
        todo.splice(index, 1);
        console.log("task deleted");
    } else {
        console.log("wrong request");
    }
    req = prompt("please enter your request");
}