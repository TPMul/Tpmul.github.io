// Write our base functions
$(document).ready(function() {
$('.overlay').hide();
$('.details').hide();
});

function showProduct(fing){
  var finger=Items [fing];
  $(".overlay").show();
  $('.details').show();
  $('#detail-title').text(finger.title);
  $('#detail-image').attr('src', finger.image);
  $('#detail-price').text("$" + finger.price);
  $('#detail-description').text(finger.description);
  $('#detail-color').html(finger.colors);
  $('#detail-upload').html(finger.upload);
};

function hideProduct() {
  $(".overlay").hide();
  $('.details').hide();
};

function addItems() {
  var cart=0;
  cart += 1
   $('#cart').text(cart +" Item(s) in your cart.");

};

function updateCart() {
var cart = { "frog" : 1, "cat" : 4, "bird" : 1 }

var prices = finger.price;

};

// When the page loads, add in our event handlers
$(document).ready(function() {


  $('.product').click(function() {
    
    var fing=$(this).data("product-id");
  showProduct(fing);
});

   $('.overlay').click(function() {
  hideProduct();
});
 
  $("#add-to-cart").click(function () {
    
    addItems();
  });


});