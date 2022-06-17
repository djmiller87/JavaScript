//1.Print odds 1-20

function odds() {
    for(var i=1;i<=20;i++) {
        if(i%2!=0){
        console.log(i);
        }
    }
}

//2.Decreasing Multiples of 3

function multiplesof3() {
    for(var i=100;i>=0;i--){
        if(i%3==0){
            console.log(i);
        }
    }
}

//3.Print the Sequence

function sequence() {
    var i = 5.5;
    while(i>=-2){
        i-=1.5;
        console.log(i);
    }
}

//4.Sigma

function sigma() {
    var sum=0;
    for(var i=1;i<=100;i++){
        sum=sum+i;
        console.log(i);
        console.log("+");
    }
    console.log("= "+sum);
}

//5.Factorial

function factorial() {
    var product=1;
    for(var i=1;i<=12;i++){
        product=(product*i);   
        console.log(i);
        console.log("*");
    }
    console.log("= "+product);
}