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


// When the page loads, add in our event handlers

$(document).ready(function() {


  $('.product').click(function() {
    
    var bot=$(this).data("product-id");
  showProduct(bot);
});

   $('.overlay').click(function() {
  hideProduct();
});
 


});