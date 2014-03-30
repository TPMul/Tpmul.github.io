 // Write our base functions
$(document).ready(function() {
$('.overlay').hide();
$('.details').hide();
});

function showProduct(finger){
  //var finger=Items [finger];
  $(".overlay").show();
  $('.details').show();
// $('#detail-title').text(finger.title);
// $('#detail-image').attr('src', finger.image);
//  $('#detail-price').text("$" + finger.price);
//  $('#detail-description').text(finger.description);
};

function hideProduct() {
  $(".overlay").hide();
  $('.details').hide();
};

// When the page loads, add in our event handlers
$(document).ready(function() {


	$('.product').click(function() {
    
    var finger=$(this).data("product-id");
	showProduct(finger);
});

   $('.overlay').click(function() {
	hideProduct();
});
 
  $("#add-to-cart").click(function () {
  	
  	addItems();
  });


});