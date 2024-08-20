function test() {
    window.alert("외부 파일에서 출력한다!");
}
window.onload = () => {

    let btn2 = document.getElementById("btn2");
    btn2.onclick = function() {
        console.log(" 외부 파일로 콘솔 출력 ! ");
    }
}