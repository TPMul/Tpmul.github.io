
//mapping the data of the top 250 players with likes_received count

        function renderGraph(ourData) {
        console.log(ourData);

            var svg = d3.select("body")
                .append("svg")
                .attr("width", svgW)
                .attr("height", svgH);
                
            var div = d3.select("body").append("div")
            	.attr("class","overlay")
            	.style("opacity", 0);

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
              return d.likes_received_count > 50000 ? "rgba(120,245,199,0.9)" : 
                     d.likes_received_count > 10000 ? "rgba(120,216,245,0.75)" :
                     d.likes_received_count > 5000 ? "rgba(120,139,245,0.5)" :
               "rgba(255,255,255,0.25)"
               })
              .attr("class", "players")
              .attr("data", function(d) { return d.username})
              .attr("r", function(d) { 
              			return d.draftees_count > 75 ? 11 :
              			       d.draftees_count > 35 ? 8 :
              			       d.draftees_count > 15 ? 5 :
              			       2 
              				      })
              .attr("transform", function(d) {
                return "translate(" + projection([d.longitude,d.latitude]) + ")"
             })
             
             .on("mouseover", function(d) {div.transition()
              				   .duration(200)
              				   .style("opacity", 1)
              				   div .html("<img src='"+ d.avatar_url + "'alt='user avatar'>" + "<br>" + "<h3>"+ d.username + "</h3>" + "has " + d.followers_count + " people following them" + "<br>" + "has drafted " + d.draftees_count + " Draftees." + "<br>" + "has received "+ d.likes_received_count + " likes on their shots." + "<br>" + "And lives in " + d.country)
              				   .style("left", (d3.event.pageX) + "px")
              				   .style("top", (d3.event.pageY-100) + "px")
                       })  

             .on("mouseout", function(d) { div.transition()
				           .duration(500)
				           .style("opacity", 0)
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
