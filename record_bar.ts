import { Component, OnInit ,OnChanges, ViewChild, 
  ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import 'rxjs/add/operator/map';;

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent implements OnInit {

  data = [10, 5, 12, 15, 30];
  width = 800; 
  scaleFactor = 20; 
  barHeight = 30;

  constructor() { }

  ngOnInit() {
    
    var graph = d3.select("body")
       .append("svg")
       .attr("width", this.width)
       .attr("height", this.barHeight * this.data.length);
    
    var bar = graph.selectAll("g")
       .data(this.data)
       .enter()
       .append("g")
       .attr("transform", function(d, i) {
          return "translate(0," + i * 30 + ")";
       });
    bar.append("rect").attr("width", function(d) {
       return d * 20;
      })
    .attr("height", this.barHeight - 1)
    .style("fill","red");
    
    bar.append("text")
       .attr("x", function(d) { return (d*20); })
       .attr("y", this.barHeight / 2)
       .attr("dy", "0.35em")
       .text(function(d) { return d+"%"; })
       .style("color","blue");
  }

}

