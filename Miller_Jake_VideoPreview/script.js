console.log("page loaded...");

function mouseover(element) {
    console.log("mouse over");
    document.getElementById("video").play();
    document.getElementById("video").muted=true;
}

function mouseout(element) {
    console.log("mouse out");
    document.getElementById("video").pause();
}
