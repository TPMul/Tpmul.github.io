// Write our base functions
$(document).ready(function() {
$('.overlay').hide();
$('.details').hide();
$('#close-button').hide();
});

function showProduct(fing){
  var finger=Items [fing];
  $(".overlay").show();
  $('.details').show();
  $('#close-button').show();
  $('#detail-title').text(finger.title);
  $('#detail-image').attr('src', finger.image);
  $('#detail-price').text("$" + finger.price);
  $('#detail-description').text(finger.description);
  $('#detail-sizes').html(finger.sizes);
  $('#detail-color').html(finger.colors);
  $('#detail-upload').html(finger.upload);

  $("#checkout").on("click",function(){
   var quantity = parseInt ($("#finger-qty").val());
   addItem(product, quantity)
    });
};

function hideProduct() {
  $(".overlay").hide();
  $('.details').hide();
  $('#close-button').hide();

};

var cart = { };

function addItem (product, quantity){
  if(!cart[product]) { cart [product] = 0;}
  cart [product] += quantity;
  updateCart()
}

function updateCart (){
    
    var total = 0;
for(var product in cart) {
      var quantity = cart[product];
      var finger = Items[fing];
      var price = finger.price;
      var itemPrice = finger.price*quantity;
      total += itemPrice;
  }

    $("#cart").text("Currently have $" + total.toFixed(2) + " in your cart.");

    return total;
  
}

function checkOut() {
  var stripeKey = 'pk_test_V0SJ6QOh3rXO9s6Ysw0eHzzE';

  var description = $("#cart").text();
  var amount = updateCart() * 100;

  var handler = StripeCheckout.configure({
    key: stripeKey,
    image: 'images/checkout-icon.png',
    token: function(token, args) {
      $.post("/buy", {
        token: token.id,
        amount: amount,
        description: description
      },function(data) {
        alert(data.message);
      });
    }
  });


  handler.open({
    name: 'Foam Finger Fanatics',
    description: description,
    amount: amount
  });

}


// When the page loads, add in our event handlers
$(document).ready(function() {


  $('.product').click(function() {
    
    var fing=$(this).data("product-id");
  showProduct(fing);
});

   $('#close-button').click(function() {
  hideProduct();
});
 
//$('#fingers').click(function() {
  //hideProduct();
//});
 

  $("#add-to-cart").click(function () {
    
    addItems();
  });


});