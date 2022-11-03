let add_to_cart_btns = document.getElementsByClassName('btn-primary');
let main_container = document.getElementsByTagName('tbody')[0];
let quantity_fields = document.getElementsByClassName('num')
let removeBtns = document.getElementsByClassName('uk-button-danger');

for(let i = 0; i < add_to_cart_btns.length; i++) {
    add_to_cart_btns[i].addEventListener('click', addToCart)
    }
function addToCart(event){
    let btn = event.target;
    let btn_parent = btn.parentElement;
    let btn_grandparent = btn.parentElement.parentElement;
    let itemName = btn_parent.children[0].innerText;
    let itemPrice = btn_parent.children[1].innerText;
    let itemImage = btn_grandparent.children[0].src;

    let itemContainer = document.createElement('tr')
    itemContainer.innerHTML = `<td><input class="uk-checkbox" type="checkbox"></td>
    <td><img class="uk-preserve-width uk-border-circle" src="${itemImage}" width="40" alt=""></td>
    <td class="uk-table-link">
        <h3 class = "item-name">${itemName}</h3>
    </td>
    <td class="uk-text-truncate item-price"><h3>${itemPrice}</h3></td>
    <td><input type = 'number' class = 'num' value = '1'></td>
    <td class="uk-text-truncate total-price"><h3>${itemPrice}</h3></td>
    <td><button class="uk-button uk-button-danger" type="button">Remove</button></td>`
   main_container.append(itemContainer);

   //loop throug quantities of items
for(let i = 0; i < quantity_fields.length; i++) {
    quantity_fields[i].addEventListener('change', updateTotal)
    }
    //remove option appears after adding to cart,thus for has to be here
for(let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', removeItem)
        }
    grandTotal(); //whenever we add cart,add price to grand total
    function updateTotal(event){
        number_of_items = event.target;
        number_of_items_parent = number_of_items.parentElement.parentElement;
        price_field = number_of_items_parent.getElementsByClassName('item-price')[0]; 
        total_field = number_of_items_parent.getElementsByClassName('total-price')[0];
        price_field_content = price_field.children[0].innerText.replace('$', '');
        total_field.children[0].innerText = '$' + number_of_items.value * price_field_content;
     //customer has to order at least one item

     if(isNaN(number_of_items.value) || number_of_items.value <= 0) {
         number_of_items.value = 1;
     }
     grandTotal();//increase number should update grandtotal
    }

   function grandTotal(event){
       let total = 0;
       let grand_total = document.getElementsByClassName('grand-total')[0];
       let total_price = document.getElementsByClassName('total-price');
       for(let i = 0; i < total_price.length; i++) {
       total_price_content = Number(total_price[i].innerText.replace('$', ''));
       total += total_price_content;
    }
    grand_total.children[0].innerText = '$' +total;//put cost into grand total
    grand_total.children[0].style.fontWeight = 'bold'
}
function removeItem(event){
    remove_btn = event.target//each rmv button we target,click on
    remove_btn_grandparent = remove_btn.parentElement.parentElement
    remove_btn_grandparent.remove();
    grandTotal();//whenever we remove item, grand total should lways be called to update
}   
} 