
 var svg = d3.select("body").append("svg");

    svg.attr("width", 960)
       .attr("height", 500);


    var renderGraph = function(data) {

      var projection = d3.geo.albersUsa();

      svg.selectAll("circles.points")
      .data(data)
      .enter()
      .append("circle")
      .style("fill",function(d) {
        return d.followers_count > 1000 ? "rgba(255,0,0,0.25)" : 
               d.followers_count > 100 ? "rgba(0,255,0,0.25)" :
               "rgba(0,0,0,0.10)"
      })
      .attr("r",3)
      .attr("transform", function(d) {
        return "translate(" + projection([d.longitude,d.latitude]) + ")";
      });
      
    }
