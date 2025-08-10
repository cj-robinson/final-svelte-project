<script>
  import Scroll from "./_components/ScrollyD3.svelte"
  import Title from "./_components/Title.svelte"
  import { scaleLinear } from "d3-scale"
  import { tweened } from "svelte/motion"

  let dataA = [
    { x: 10, y: 5 },
    { x: 6, y: 2 },
    { x: 15, y: 20 },
    { x: 1, y: 9 },
    { x: 12, y: 3 },
  ]

  let dataB = [
    { x: 3, y: 20 },
    { x: 16, y: 2 },
    { x: 18, y: 8 },
    { x: 1, y: 19 },
    { x: 7, y: 3 },
  ]

  // let tweenedSet

  const setA = function () {
    // 
  }
  const setB = function () {
    // 
  }

  let width = 400
  let height = 400
  let margins = { top: 20, bottom: 20, left: 20, right: 20 }

  let chartWidth = width - margins.left - margins.right
  let chartHeight = height - margins.top - margins.bottom

  let xScale = scaleLinear().domain([0, 20]).range([0, chartWidth])
  let yScale = scaleLinear().domain([0, 20]).range([chartHeight, 0])

  let currentStep
  const steps = ["<p>Here's Dataset A</p>", "<p>Now here's Dataset B</p>", "<p>...and Dataset A again</p>"]

  $: if (currentStep == 0) {
    setA()
  } else if (currentStep == 1) {
    setB()
  } else if (currentStep == 2) {
    setA()
  }
</script>

<section>
  <div class="container">
    <Title title="Svelte scrollytelling" />

    <p class="body-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p class="body-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p class="body-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <div class="chart-container">
      <!-- The chart in the background, which is sticky thanks to CSS below -->
      <div class="chart">

      </div>

      <!-- The scrolling container which includes each of the text elements -->
      <Scroll bind:value={currentStep}>
        {#each steps as text, i}
          <div class="step" class:active={currentStep === i}>
            <div class="step-content">
              {@html text}
            </div>
          </div>
        {/each}
      </Scroll>
    </div>

    <p class="body-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p class="body-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p class="body-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</section>

<style>
  .body-text {
    max-width: 600px;
    margin: 0 auto;
    /* margin-top: 25px; */
    padding-bottom: 50px;
  }
  /* The fixed chart */
  .chart {
    background: whitesmoke;
    width: 400px;
    height: 400px;
    /* box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2); */
    position: sticky;
    top: 10%;
    margin: auto;
  }

  /* Scrollytelling CSS */
  .step {
    height: 80vh;
    display: flex;
    place-items: center;
    justify-content: center;
  }

  .step-content {
    background: whitesmoke;
    color: #ccc;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: background 500ms ease;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }

  .step.active .step-content {
    background: white;
    color: black;
  }

  .container {
    max-width: 600px;
    margin: 0 auto;
  }

  .chart-container {
    padding-top: 2em;
    padding-bottom: 2em;
  }
</style>
