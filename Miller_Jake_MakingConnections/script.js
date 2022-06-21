function namechange(id){
    document.getElementById(id).innerHTML = "John Deere";
    console.log("John");
}   

function remove(id) {
    console.log("remove");
    document.getElementById(id).remove(id);
}

function countdown(id) {
    console.log("minus")
    document.getElementById(id).innerHTML--;
}

function countadd(id) {
    console.log("add")
    document.getElementById(id).innerHTML++;
}