// function myFunction(){
//     var num1 = document.getElementById('id').value;
//     var num2 = document.getElementById('name').value;
//     var num3 = document.getElementById('price').value;
//     var tbl="<table><tr><th> Sr No.</th><td id=td1></td></tr> <tr><th> Sr No.</th><td id=td2></td></tr><tr><th> Sr No.</th><td id=td3></td></tr>"
//     document.getElementById('td1').innerHTML= num1;
//     document.getElementById('td2').innerHTML= num2;
//     document.getElementById('td3').innerHTML= num3;
// }

let btnAdd = document.querySelector('button');
let table = document.querySelector('table');


let idInput = document.querySelector('#id');
let nameInput = document.querySelector('#name');
let priceInput = document.querySelector('#price');

btnAdd.addEventListener('click', () =>{
    let id = idInput.value;
    let name = nameInput.value;
    let price = priceInput.value;

    let template = `<tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${price}</td>
    </tr>`;
    table.innerHTML += template;

});

