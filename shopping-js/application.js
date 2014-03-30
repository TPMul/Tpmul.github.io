// Write our base functions
$(document).ready(function() {
$('.overlay').hide();
$('.details').hide();
});

function showProduct(bot){
  var robot=Robots [bot];
  $(".overlay").show();
  $('.details').show();
  $('#detail-title').text(robot.title);
  $('#detail-image').attr('src', robot.image);
  $('#detail-price').text("$" + robot.price);
  $('#detail-description').text(robot.description);
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

var prices = robot.price;

};

// When the page loads, add in our event handlers
$(document).ready(function() {


	$('.product').click(function() {
    
    var bot=$(this).data("product-id");
	showProduct(bot);
});

   $('.overlay').click(function() {
	hideProduct();
});
 
  $("#add-to-cart").click(function () {
  	
  	addItems();
  });


});