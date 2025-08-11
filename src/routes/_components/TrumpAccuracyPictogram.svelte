<script>
    import data from "../_data/trump_outcomes.csv"
    import { scaleLinear } from "d3-scale";

    let labelContainer;
    let labelWidth = 0;
    
    $: svg_width = 700  
    let svg_height = 400    

    let margins = {top: 40, bottom: 40, left: 100, right: 100}
    $: chartWidth = svg_width - margins.left - margins.right - labelWidth - 10 // Subtract label width and gap
    let chartHeight = svg_height - margins.top - margins.bottom

    // Helper to get group data
    function getGroupData(group) {
        let correct = data.find(d => d.trump_flag === group && d.correct_prediction === "Correct prediction");
        let incorrect = data.find(d => d.trump_flag === group && d.correct_prediction === "Incorrect prediction");
        let correct_n = correct ? +correct.n : 0;
        let incorrect_n = incorrect ? +incorrect.n : 0;
        let total = correct_n + incorrect_n;
        let correct_prop = total > 0 ? correct_n / total : 0;
        return {correct_n, incorrect_n, total, correct_prop};
    }

    // Grid settings
    let cols = 10;
    let rows = 5;
    let totalSquares = cols * rows;
    let gap = 3;
    $: squareHeight = 20;
    $: squareWidth = (chartWidth - (cols - 1) * gap) / cols; // Account for gaps between squares

    $: squareSize = squareWidth * squareHeight;
    $:  gridWidth = chartWidth;
    $:  gridHeight = rows * (squareHeight + gap) - gap;
    let gridSpacing = 100;

    // let cols = 10;
    // let rows = 5;
    // let totalSquares = cols * rows;
    // let squareSize = 20;
    // let gap = 3;
    // let gridWidth = cols * (squareSize + gap) - gap;
    // let gridHeight = rows * (squareSize + gap) - gap;
    // let gridSpacing = 100;


    // Calculate data for both groups
    $: trumpData = getGroupData("Political events\nmentioning Trump");
    $: otherData = getGroupData("Other\npolitical events");

    // Calculate number of green squares for each group
    $: trumpCorrectSquares = Math.round(trumpData.correct_prop * totalSquares);
    $: otherCorrectSquares = Math.round(otherData.correct_prop * totalSquares);

    // Generate square positions and colors for a grid
    $: generateGrid = function(correctSquares, yOffset) {
        let squares = [];
        let correctCount = 0;
        
        for (let col = 0; col < cols; col++) {
            for (let row = 0; row < rows; row++) {
                let x = col * (squareWidth + gap);
                let y = row * (squareHeight + gap) + yOffset;
                let isCorrect = correctCount < correctSquares;
                
                squares.push({
                    x,
                    y,
                    fill: isCorrect ? "#22c55e" : "#eeeeee"
                });
                
                correctCount++;
            }
        }
        return squares;
    }

    // Center the grids horizontally
    $: gridStartX = 0;
    $: trumpGridY = 20;
    $: otherGridY = trumpGridY + gridHeight + gridSpacing;

    $: trumpSquares = generateGrid(trumpCorrectSquares, trumpGridY);
    $: otherSquares = generateGrid(otherCorrectSquares, otherGridY);
</script>

<div class="chart-container" bind:offsetWidth={svg_width}>
    <div class="grid-section">
        <div class="grid-labels" bind:offsetWidth={labelWidth}>
            <div class="trump-label">
                <div class="grid-title">Political events mentioning Trump</div>
            </div>
            <div class="other-label">
                <div class="grid-title">Other political events</div>
            </div>
        </div>    
        
        <svg width={svg_width} height={svg_height}>
            <g transform="translate({margins.left}, {margins.top})">
                <!-- Trump events grid -->
                <g transform="translate({gridStartX}, 0)">
                    {#each trumpSquares as square}
                        <rect 
                            x={square.x} 
                            y={square.y} 
                            width={squareWidth} 
                            height={squareHeight} 
                            fill={square.fill}
                            stroke="#fff"
                            stroke-width="1"
                        />
                    {/each}
                </g>

                <!-- Other events grid -->
                <g transform="translate({gridStartX}, 0)">
                    {#each otherSquares as square}
                        <rect 
                            x={square.x} 
                            y={square.y} 
                            width={squareWidth} 
                            height={squareHeight} 
                            fill={square.fill}
                            stroke="#fff"
                            stroke-width="1"
                        />
                    {/each}
                </g>
            
            </g>
        </svg>
        

    </div>
</div>

<style>
.chart-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    max-width: 760px;
}

.grid-section {
    display: flex;
    align-items: flex-start;
    gap: 10px; /* Small gap between labels and chart */
}

.grid-labels {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 40px; 
    max-width: 100px;
}

.trump-label {
    height: 117px; /* Height of one grid (gridHeight) */
    display: flex;
    align-items: center;
    justify-content: flex-end; /* Right align */
    margin-bottom: 100px; /* gridSpacing to match chart gap */
}

.other-label {
    height: 117px; /* Height of one grid (gridHeight) */
    display: flex;
    align-items: center;
    justify-content: flex-end; /* Right align */
}

.grid-title {
    font-size: 16px;
    font-weight: bold;
    color: #374151;
    /* Remove white-space: nowrap to allow text wrapping */
    text-align: right;
    line-height: 1.2;
}

.accuracy-text {
    font-size: 14px;
    color: #6b7280;
}

.legend-title {
    font-size: 14px;
    font-weight: bold;
    color: #374151;
}

.legend-text {
    font-size: 12px;
    color: #6b7280;
}
</style>