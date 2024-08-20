function order(){
    // 주문자 정보
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    document.getElementById('orderrer_info').innerHTML
     = "<ul>"
        + `<li> 주소: ${address.value}</li>`
        + `<li> 연락처: ${phone.value}</li>`
     + "</ul>";
    // 메뉴정보
    const main_menu = document.getElementById('main_menu').value;
    const toppings = document.getElementsByName('toppings').value;
    const side_menu = document.getElementsByName('side_menu').value;

    const ulEle = document.createElement('ul');
    const liEle1 = document.createElement('li');
    const liEle2 = document.createElement('li');
    const liEle3 = document.createElement('li');

    const txtNode1 = document.createTextNode(MainMenu.value);

    let selToping = [];
    for (let t of toppings){
        if(t.checked){
            selToping.push(t.value);
        }
    }
    const txtNode2 = document.createTextNode(selToping);

    let selSideMenu = [];
    for (let s of side_menu){
        if(s.checked){
            selSideMenu.push(s.value);
        }
    }
    const txtNode3 = document.createTextNode(selSideMenu);

    liEle1.appendChild(txtNode1);
    liEle2.appendChild(txtNode2);
    liEle3.appendChild(txtNode3);
    ulEle.appendChild(liEle1);
    ulEle.appendChild(liEle2);
    ulEle.appendChild(liEle3);

    const orderList = document.querySelector('#order_list');
    orderList.appendChild(ulEle);


}
function ddeleteOrder(){
    document.getElementById('order_info').innerHTML = '';

    //메뉴 정보 삭제
    const orderList = document.querySelector('#order_list > ul').remove;

}