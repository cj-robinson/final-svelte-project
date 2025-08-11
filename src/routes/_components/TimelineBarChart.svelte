<script>
    // import { LayerCake, Svg } from 'layercake';
    import data from "../_data/month_df.csv"
    import * as d3 from "d3"
    // import { scaleBand } from 'd3-scale';

    // import Bar from './Bar.svelte';

    // const xKey = 'vol_perc';
    // const yKey = 'date';

    // data.forEach(d => {
    //     d[xKey] = +d[xKey];
    // });

    let svg_width =600
    let svg_height = 600

    let margins = {top:20, bottom:50, left:40, right:20}
    $: chartWidth = svg_width - margins.left - margins.right
    $: chartHeight = svg_height - margins.top - margins.bottom

    const parseDate = d3.timeParse("%Y-%m-%d")

    data.forEach(function (d) {
        d.dateObj = parseDate(d.date); // keep original string and parsed date
        d.dateStr = d.date; // original string for xScale
        d.vol_perc = +d.vol_perc;
    })

    let yMax = d3.max(data, d => d.vol_perc)

    // Use scaleBand for bar charts. It's for discrete domains.
    $: xScale = d3.scaleBand()
        .domain(data.map(d => d.dateStr))
        .range([0, chartWidth])
        .padding(0.1); // Adds a little space between bars

    $: yScale = d3.scaleLinear().domain([0, yMax]).range([chartHeight, 0])

    // Axis generators
    $: xAxis = d3.axisBottom(xScale)
        .tickFormat((d) => {
            // d is a string date, parse to Date for formatting
            const dt = parseDate(d);
            return d3.timeFormat("%b %Y")(dt);
        });

    $: yAxis = d3.axisLeft(yScale).tickFormat(d3.format(".0%"))

    // Function to render axes 
    // We pass in the g element here
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

<div class="chart-container" bind:offsetWidth={svg_width}>
  <svg width = {svg_width} height = {svg_height}>
    <g class="chart" transform="translate({margins.left}, {margins.top})">
        <g class="bar-group">
            {#each data as month}
                <rect
                    x={xScale(month.dateStr)}
                    y={yScale(month.vol_perc)}
                    width={xScale.bandwidth()}
                    height={yScale(0) - yScale(month.vol_perc)}
                    fill="green"
                />
            {/each}
        </g>
      <g bind:this={xAxisNode} transform={`translate(0, ${chartHeight})`} />
      <g bind:this={yAxisNode} />
    </g>
  </svg>
</div>

<style>
  /*
    The wrapper div needs to have an explicit width and height in CSS.
    It can also be a flexbox child or CSS grid element.
    The point being it needs dimensions since the <LayerCake> element will
    expand to fill it.
  */
  .chart-container {
    width: 100%;
    font-family: sans-serif;
  }    

  :global(.chart .tick text) {
    font-size: 12px;
  }

  :global(.chart .domain, .chart .tick line) {
    stroke: #ccc;
  }

</style>