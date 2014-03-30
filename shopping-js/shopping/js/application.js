// Write our base functions
$(document).ready(function() {

$('#overlay').hide();
$('#detail').hide();
});

function showProduct(finger){
  var productFinger=Fingers [finger];
  $("#overlay").show();
  $('#detail').show();
  $('#detail-title').text(productFinger.title);
  $('#detail-photo').attr('src', productFinger.image);
  $('#detail-price').text("$" + productFinger.price);
  $('#detail-descript').text(productFinger.description);
  $('#detail-color').
  $('#detail-sizes').
  $('#detail-upload').
};

function hideProduct() {
  $("#overlay").hide();
  $('#detail').hide();
};

function addItems() {
  var cart=0;
  cart += 1
   $('#cart').text(cart +" Item(s) in your cart.");

};

//function updateCart() {
//var cart = { "frog" : 1, "cat" : 4, "bird" : 1 }

//var prices = robot.price;

//};

// When the page loads, add in our event handlers
$(document).ready(function() {


	$('.product-listing').click(function() {
    
    var finger=$(this).data("finger-item");
	showProduct(finger);
});

   $('#overlay').click(function() {
	hideProduct();
});
 
  $("#add-to-cart").click(function () {
  	
  	addItems();
  });


});