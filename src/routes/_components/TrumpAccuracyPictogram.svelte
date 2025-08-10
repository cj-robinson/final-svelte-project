<script>
    import data from "../_data/trump_outcomes.csv"
    import { scaleLinear } from "d3-scale";

    let svg_width = 700
    let svg_height = 400    

    let margins = {top: 40, bottom: 40, left: 100, right: 100}
    $: chartWidth = svg_width - margins.left - margins.right
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
    let squareSize = 20;
    let gap = 3;
    let gridWidth = cols * (squareSize + gap) - gap;
    let gridHeight = rows * (squareSize + gap) - gap;
    let gridSpacing = 100;

    // Calculate data for both groups
    $: trumpData = getGroupData("Political events\nmentioning Trump");
    $: otherData = getGroupData("Other\npolitical events");

    // Calculate number of green squares for each group
    $: trumpCorrectSquares = Math.round(trumpData.correct_prop * totalSquares);
    $: otherCorrectSquares = Math.round(otherData.correct_prop * totalSquares);

    // Generate square positions and colors for a grid
    function generateGrid(correctSquares, yOffset) {
        let squares = [];
        let correctCount = 0;
        
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                let x = col * (squareSize + gap);
                let y = row * (squareSize + gap) + yOffset;
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
    $: gridStartX = (chartWidth - gridWidth) / 2;
    $: trumpGridY = 20;
    $: otherGridY = trumpGridY + gridHeight + gridSpacing;

    $: trumpSquares = generateGrid(trumpCorrectSquares, trumpGridY);
    $: otherSquares = generateGrid(otherCorrectSquares, otherGridY);
</script>

<div class="chart-container" bind:offsetWidth={svg_width}>
    <div class="grid-section" >
        <div class="grid-labels">
            <div class="trump-label">
                <div class="grid-title">Political events mentioning Trump</div>
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
                            width={squareSize} 
                            height={squareSize} 
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
                            width={squareSize} 
                            height={squareSize} 
                            fill={square.fill}
                            stroke="#fff"
                            stroke-width="1"
                        />
                    {/each}
                </g>
                
                <!-- Legend -->
                <g transform="translate({gridStartX}, {otherGridY + gridHeight + 40})">
                    <text x="0" y="0" class="legend-title">Legend:</text>
                    <rect x="0" y="10" width="15" height="15" fill="#22c55e" stroke="#fff" stroke-width="1"/>
                    <text x="20" y="22" class="legend-text">Correct prediction</text>
                    <rect x="150" y="10" width="15" height="15" fill="#ef4444" stroke="#fff" stroke-width="1"/>
                    <text x="170" y="22" class="legend-text">Incorrect prediction</text>
                </g>
            </g>
        </svg>
        
        <div class="grid-labels">
            <div class="other-label">
                <div class="grid-title">Other political events</div>
            </div>
        </div>
    </div>
</div>

<style>
.chart-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.grid-section {
    position: relative;
    display: flex;
    align-items: center;
}

.grid-labels {
    position: absolute;
    left: -250px;
    width: 200px;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.trump-label {
    position: absolute;
    top: 80px; 
    left: calc(180%);
    text-align: right;
}

.other-label {
    position: absolute;
    top: 300px;
    left: calc(200%);
    text-align: right;
}

.grid-title {
    font-size: 16px;
    font-weight: bold;
    fill: #374151;
}

.accuracy-text {
    font-size: 14px;
    fill: #6b7280;
}

.legend-title {
    font-size: 14px;
    font-weight: bold;
    fill: #374151;
}

.legend-text {
    font-size: 12px;
    fill: #6b7280;
}
</style>