
/* click functionality testing

$(document).ready(function() {
$('#overlay').hide();
$('.details').hide();
});

function showProduct(ourData){
  var player=Players [ourData];
  $("#overlay").show();
  $('.details').show();
  $('#player-name').text(player.username);
  $('#player-avatar').attr('src', avatar_url);
  $('#player-description').text(player.likes_received_count + " " + playerdraftees_count + " " + followers_count);
};

function hideProduct() {
  $("#overlay").hide();
  $('.details').hide();
};

$('.product').click(function() {
    
    var player=$(this).data(function(d) { return d.username});
	showProduct(bot);
});

   $('#overlay').click(function() {
	hideProduct();
});

*/

//mapping the data of the top 250 players with likes_received count

        function renderGraph(ourData) {
        console.log(ourData);

            var svg = d3.select("body")
                .append("svg")
                .attr("width", svgW)
                .attr("height", svgH);

            var svgW = 979;
            var svgH = 979;
	    
	    var height = 979;
	    var width = 979;

           var projection = d3.geo.equirectangular()
               .scale((width + 1) / 2 / Math.PI)
               .translate([width / 2, height / 2])
               .precision(.1);      

            svg.selectAll("circles.points")
            .data(ourData)
              .enter()
              .append("circle")
              .style("fill", function(d) {
              return d.likes_received_count > 50000 ? "rgba(37,205,207,0.9)" : 
                     d.likes_received_count > 10000 ? "rgba(255,234,91,0.5)" :
               "rgba(0,0,0,0.25)"
               })
              .attr("class", "players")
              .attr("data", function(d) { return d.username})
              .attr("r", function(d) { return d.draftees_count > 100 ? 5 :
              				      d.draftees_count > 50 ? 3 :
              				      d.draftees_count > 20 ? 2 :
              				      d.draftees_count > 5 ? 1);
              });
              				      
              .attr("transform", function(d) {
                return "translate(" + projection([d.longitude,d.latitude]) + ")";
              });

//tryin to add the land behind the mapping

var path = d3.geo.path()
    .projection(projection);

var graticule = d3.geo.graticule();

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);

d3.json("/mbostock/raw/4090846/world-50m.json", function(error, world) {
  svg.insert("path", ".graticule")
      .datum(topojson.feature(world, world.objects.land))
      .attr("class", "land")
      .attr("d", path);

  svg.insert("path", ".graticule")
      .datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
      .attr("class", "boundary")
      .attr("d", path);
});


d3.select(self.frameElement).style("height", height + "px");
}
