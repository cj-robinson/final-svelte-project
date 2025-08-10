<script>
  import data from "../_data/pres_daily.csv"
  import * as d3 from "d3"
  import { onMount } from 'svelte'

  export let currentStep = 0
  
  let pathElement
  let height = 600
  let width = 600

  let margin = { top: 10, bottom: 100, left: 60, right: 30 }

  $: chartWidth = width - margin.left - margin.right
  let chartHeight = height - margin.top - margin.bottom

  // Parse the date format from your CSV (MM-DD-YYYY)
  const parseDate = d3.timeParse("%m-%d-%Y")

  // Process the data
  const processedData = data.map(d => ({
    Date: parseDate(d["Date (UTC)"].split(" ")[0]), // Extract date part and parse
    TrumpValue: +d["Donald Trump"]
  })).filter(d => d.Date && !isNaN(d.TrumpValue)) // Filter out invalid data

  // Find the extent of Trump values
  const trumpExtent = d3.extent(processedData, d => d.TrumpValue)

  // Reactive scales
  $: xScale = d3
    .scaleTime()
    .domain(d3.extent(processedData, d => d.Date))
    .range([0, chartWidth])

  $: yScale = d3
    .scaleLinear()
    .domain([.3, .7])
    .nice()
    .range([chartHeight, 0])

  // Line generator
  $: line = d3
    .line()
    .x(d => xScale(d.Date))
    .y(d => yScale(d.TrumpValue))
    .curve(d3.curveMonotoneX) // Smooth the line

  $: pathData = line(processedData)

  // Axis generators
  $: xAxis = d3.axisBottom(xScale).tickFormat(d3.timeFormat("%b %Y"))
  $: yAxis = d3.axisLeft(yScale).tickFormat(d3.format(".0%"))

  // Calculate animation progress based on currentStep
  // Assuming 3 steps (0, 1, 2) - adjust based on your actual steps
  $: animationProgress = Math.max(0, Math.min(1, currentStep / 2))

  $: if (pathElement && pathData) {
    // Animate based on currentStep progress
    const totalLength = pathElement.getTotalLength();
    const dashOffset = totalLength * (1 - animationProgress);
    
    d3.select(pathElement)
      .attr('stroke-dasharray', totalLength)
      .transition()
      .duration(800)
      .attr('stroke-dashoffset', dashOffset);
  }  

    $: renderXAxis = (node) => {
        if (node && xScale) {
            d3.select(node).call(xAxis)
                .selectAll("text")
                .style("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", ".15em")
                .attr("transform", "rotate(-45)");
        }
    }

    $: renderYAxis = (node) => {
        if (node && yScale) {
            d3.select(node).call(yAxis);
        }
      }
    // Force axis re-rendering when scales change
    let xAxisNode, yAxisNode;
    
    $: if (xAxisNode && xScale && xAxis) {
        renderXAxis(xAxisNode);
    }
    
    $: if (yAxisNode && yScale && yAxis) {
        renderYAxis(yAxisNode);
    }   
</script>

<div id="trump-line-chart" bind:offsetHeight={width}>
  <svg {width} {height}>
    <g class="chart" transform="translate({margin.left}, {margin.top})">
      <path
        d={pathData}
        stroke="#dc2626"
        stroke-width="2"
        fill="none"
        bind:this={pathElement}
      />
      <line
        x1={0}
        x2={chartWidth}
        y1={yScale(0.5)}
        y2={yScale(0.5)}
        stroke="red"
        stroke-width="2"
        stroke-dasharray="4,2"
      />      
      <g use:renderXAxis transform={`translate(0, ${chartHeight})`} />
      <g use:renderYAxis />
    </g>
  </svg>
</div>

<style>
  #trump-line-chart {
    font-family: Arial, sans-serif;
  }
  
  :global(.chart text) {
    font-size: 11px;
    fill: #333;
  }
  
  :global(.chart .domain) {
    stroke: #333;
  }
  
  :global(.chart .tick line) {
    stroke: #ccc;
  }
</style>
