var HEIGHT = 100;
var WIDTH = 600;
var createShapes  = function(svg){

    svg.append('line')
        .attr('x1',0)
        .attr('y1',100)
        .attr('x2',100)
        .attr('y2',0)
        .attr('stroke','grey');

    svg.append('circle')
        .attr('cx',200)
        .attr('cy',50)
        .attr('r',48)
        .attr('stroke','red');

    svg.append('rect')
        .attr('width',100)
        .attr('height',100)
        .attr('x',300)
        .attr('stroke','steelblue')
        .attr('rx',5);

    svg.append('polygon')
        .attr('points','450,100 550,100 500,0')
        .attr('stroke','green');

}

var loadShapes = function(){
    var svg = d3.select('.container').append('svg')
        .attr('height',HEIGHT)
        .attr('width',WIDTH);
    createShapes(svg);
}

window.onload = loadShapes;