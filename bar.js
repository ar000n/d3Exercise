var randomGenerator = function () {
    var randomValues = [];
    for (var i = 0; i < 10; i++) {
        var newNumber = Math.random() * 300;
        randomValues.push(newNumber);
    }
    return randomValues;
}

var data = randomGenerator();
var color = d3.scaleLinear().domain([0,300]).range(['lightsteelblue','steelblue']);
var loadBarGraph = function () {

    var bars = d3.select('#container').selectAll('div').data(data,function (d) {
        return d;
    })
    bars.enter()
        .append('div')
        .attr('class', 'bar')
        .text(function (random) {
            return Math.floor(random);
        })
        .style('height', 30)
        .style('background-color',color)
        .style('width', function (randomValue) {
            return randomValue + "px";
        });
    bars.exit().remove();
};
var updateGrapgh = function () {
    data.shift();
    data.push(randomGenerator()[0])
    loadBarGraph();

}

window.onload = loadBarGraph;
setInterval(function () {
    updateGrapgh();
}, 1000);