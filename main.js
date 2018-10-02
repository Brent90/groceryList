
 document.getElementById('thumbs-up').addEventListener("click", addItem);

 var itemWarning = document.getElementById('item-warning');
 var quantityWarning = document.getElementById('quantity-warning');
 var priceWarning = document.getElementById('price-warning');





listArray = [];


//var totalCost = 0;

function addItem() {


  var item = document.getElementById('add-item').value;
  var quantity = document.getElementById('quantity').value;
  var price = document.getElementById('price').value;


  if(item === ""  && quantity > 0 && price > 0  || item ===""){
    itemWarning.innerHTML = 'Please Fillout Field';
    quantityWarning.innerHTML = " ";
    priceWarning.innerHTML= " ";

  }else if(item === ""  && quantity == 0 && price > 0  || item ===""){
      itemWarning.innerHTML = 'Please Fillout Field';
      quantityWarning.innerHTML = " Quantity Must Be Greater Than Zero ";
      priceWarning.innerHTML= " ";

  }else if(quantity <= 0 && item !== "" && price > 0 || quantity <0) {
    quantityWarning.innerHTML = 'Quantity Must Be Greater Than Zero';
    itemWarning.innerHTML = " ";
    priceWarning.innerHTML= " ";

  }else if(price < 0 && item !== "" && price > 0 || price < 0) {
    priceWarning.innerHTML = 'Price Must Be Greater Than Zero';
    quantityWarning.innerHTML = " ";
    itemWarning.innerHTML= " ";

  }else{

  itemWarning.innerHTML = " ";
  quantityWarning.innerHTML = " ";
  priceWarning.innerHTML= " ";

  var items = {
    item: item,
    quantity: quantity,
    price : price

  }


    listArray.push(items);

    printItem();

    var price = items.price;
    var quantity = items.quantity;

    cost(price, quantity);


  }

}




function printItem() {

  var listOutput = document.getElementById('list-output');
  listOutput.innerHTML = " ";

  for(var i =0; i<listArray.length; i++) {

    var item = listArray[i].item;
    var quantity = listArray[i].quantity;

    listOutput.innerHTML += '<div class="well" id="well">' +
                            '<h4 id="well-heading" ondblclick="deleteItem(\''+item+'\')">' + item + '(' + quantity + ')' + '</h4>'  +
                            '<div>';

  }

  var removalTip = document.getElementById('removal-tip');
  removalTip.style.display = 'inline';


}




function deleteItem(item) {

  for(var i = 0; i<listArray.length; i++){
    if(listArray[i].item === item){
      listArray.splice(i,1);
    }
  }


minusCost(listArray);


}



function cost(price, quantity) {
var totalCost = 0

  var cost = document.getElementById('total-cost');

  if(price == 0){

    }

  else{

  for(var i =0; i < listArray.length; i++){


    totalCost += (parseFloat(listArray[i].quantity)*parseFloat(listArray[i].price));



  }
}

  cost.innerHTML = '$' + totalCost;


}



function minusCost(listArray) {

  var cost = document.getElementById('total-cost');
  totalCost = 0;



  for(var i =0; i < listArray.length; i++){
    if(listArray[i].price == 0){

    }else{
  totalCost = parseFloat(totalCost) + parseFloat(listArray[i].quantity)*parseFloat(listArray[i].price);
  }
 }

 cost.innerHTML = '$' + totalCost;


 printItem();



}
