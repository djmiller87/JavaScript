//1.Always Hungry

var yummy = [3.14,"food","pie",true,"food"];
var hungry = [4,1,5,7,2];

function alwayshungry(arr) {
    console.log("called")
    var yummycalled = 0
    for(var i=0;i<arr.length;i++){
        if(arr[i]=="food"){
            console.log("yummy");
            yummycalled++;
        }
    }  
    if(yummycalled == 0) {    
        console.log("I'm hungry");
    }   
}

//2.High Pass Filter
var oldarray = [6,8,3,10,-2,5,9];
var cut = 5;

function highpass(arr,cutoff) {
    var newarray = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>cutoff){
            newarray.push(arr[i]);
        }
    }
    console.log(newarray);
    return newarray;
}

//3.Better than Average

var average = [6,8,3,10,-2,5,9];

function betterthanaverage(arr){
    var sum = 0;
    var count = 0;
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
        }
    for(var x=0;x<arr.length;x++){
        if(arr[x]>(sum/arr.length)){
            count++;
        }
    }
    console.log(count);
    return count;
}

//4. Array Reverse

var  start = ["a","b","c","d","e"];

function reverse(arr) {
    var inverse =[];
    var i=arr.length-1;
    while(i>=0){
        inverse.push(arr[i]);
        i--;
    }
    console.log(inverse);
    return inverse;
}

//5. Fibonacci Array

function fibonacciarray(n) {
    var fibarr =[0,1];
    var sum = 0;
    for(var i=3;i<=n;i++){
        sum = fibarr[i-3] + fibarr[i-2];
        fibarr.push(sum);
    }
    console.log(fibarr);
    return fibarr;
}



