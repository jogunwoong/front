function cangecolor(){
    const selColor = document.getElementById("selColor");

    //console.log(selColor.value);

    document.getElementById("area1").style.backgroundColor = selColor.value;
}
function halfSize(){
     const area2 = document.getElementById("area2");

     area2.style.width = "50px";
     area2.style.height = "50px";

}
function defaultSize(){
    const area2 = document.getElementById("area2");

    area2.style.width = "100px";
    area2.style.height = "100px";

}
function doubleSize(){

    const area2 = document.getElementById("area2");
    area2.style.width = "200px";
    area2.style.height = "200px";
}


function resize(w,h){
    const area2 = document.querySelector("#area2");
    area2.style.width = w + "px";
    area2.style.height = h + "px";

}
window.onload = function(){
    const area3 = document.getElementById("area3");

    area3.addEventListener("mouseenter", function(){
        this.style.backgroundColor = "red";
    });
    area3.addEventListener("mouseout", function(){
        this.style.backgroundColor = "black";
    });
}