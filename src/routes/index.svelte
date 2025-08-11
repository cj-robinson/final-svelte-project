<script>
  import TimelineBarChart from "./_components/TimelineBarChart.svelte";
  import TrumpAccuracyPictogram from "./_components/TrumpAccuracyPictogram.svelte";
  import TrumpLineChart from "./_components/TrumpLineChart.svelte";
  import Scroll from "./_components/Scrolly.svelte";

  let currentStep;

  const steps = [
    "<p>Our chart shows how Polymarket reacted to news as Trump ran for president. The red line indicates a 50% chance of winning.</p>",
    "<p>In July, Biden wirthdrew from the race and the market promptly reacted, increasing Trump's chances of winning to nearly 70%.</p>",
    "<p>The market settled back down once Kamala Harris was chosen to replace Biden.</p>",
    "<p>Probability spiked back up in October 2024, contrary to many polls.</p> <p>Does this predicting power go beyond the presidential election?</p>",
  ];
</script>

<section class="hero">
  <div class="hero-body">
    <a href="https://cj-robinson.github.io" style="color:transparent;">
      <h1
        class="title"
        style="font-family: -apple-system, BlinkMacSystemFont, 'helvetica neue', helvetica,arial, sans-serif; color: white; font-size: 2rem; margin: 0;"
      >
        C.J. Robinson
      </h1>
    </a>
  </div>
</section>
<div class="content">
  <div class="header">
    <h1>Know what Trump is going to do next? Willing to bet on it?</h1>
    <p class="subhead">
      An analysis of how accurate political betting markets can be in the age of
      Donald Trump
    </p>
  </div>
  <div class="byline">
    <p>By <a href="https://cj-robinson.github.io">C.J. Robinson</a></p>
  </div>
  <p>
    The rise of prediction markets like Polymarket over the past decade has
    given them large-scale legitimacy, especially after their correct prediction
    of the 2024 election. A new analysis reveals, however, that markets may have
    a harder time predicting Trump's actions compared to other political events.
  </p>

  <div class="section-container">
    <div class="steps-container">
      <div class="spacer" />
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
      <div class="spacer" />
      <div class="spacer" />
    </div>
    <div class="full-width sticky">
      <div class="chart-title">
        Polymarket's fame largely increased after it accurately predicted the
        presidential election
      </div>
      <div class="chart-subtitle">
        Likelihood Donald Trump would win the presidency, according to
        Polymarket.
      </div>
      <TrumpLineChart {currentStep} />
    </div>
  </div>

  <p>
    Proponents of these markets argue that since <a
      href="https://finance.yahoo.com/news/elon-musk-advocates-crypto-prediction-072206636.html"
      >money is on the line</a
    >, they can often lead to more powerful predictions. Users will buy or sell
    shares of a certain outcome, like whether Trump will end the war in Ukraine
    within 90 days of his presidency. Each possible outcome's price rises and
    falls in real time as users trade using real money.
  </p>
  <p>
    Utilizing the Polymarket to analyze each political event since 2024, the
    analysis found that large political betting markets not mentioning Trump
    correctly predicted outcomes almost 80% of the time. For markets dealing
    with Trump, that accuracy fell to 68%.
  </p>

  <div class="chart-title">
    With money on the line, predictions about Trump are less accurate
  </div>
  <div class="chart-subtitle">
    Proportion of Polymarket events where market correctly predicted outcome
    from January 2024 to March 2025
  </div>
</div>
<div class="full-width">
  <TrumpAccuracyPictogram />
</div>
<div class="content">
  <p>There may be several reasons for this discrepancy.</p>
  <p>
    First, markets may be influenced by decisions by external factors like
    political preference.
  </p>
  <p>
    Mattew Flynn, a professor at Texas State University, said these markets
    differ from the stock market in how they price information, and possibly
    their accuracy. He found that Polymarket can react more quickly than
    traditional markets to changes. Even still, investing in an individual's
    decisions rather than a corporation leads to differing incentives.
  </p>
  <p>
    “In some sense, it does ignore if you have some strong behavioral bias that
    might influence you to act a certain way,” Flynn said. “If you love the
    Mets, even though the Mets might not be good, you'd still bet on the Mets
    all the time.”
  </p>
  <p>
    <a
      href="https://finance.yahoo.com/news/polymarket-whale-actually-made-85-050139914.html"
      >Evidence of “whales”</a
    > who dumped large amounts of money into markets predicting the presidential
    election caused controversy in 2024 by those alleging market manipulation.
  </p>
  <p>
    Markets may have differing levels of trading volume. A less popular market
    predicting a specific action of Trump may be less accurate than a larger
    market predicting the actions of the Federal Reserve. The data shows that
    accuracy is largely unaffected by the amount of money in a market.
  </p>
  <p>
    Many of these markets involve President Trump, especially since his
    inauguration.
  </p>

  <div class="chart-title">
    In January 2025, Trump dominated political betting and prediction markets
  </div>
  <div class="chart-subtitle">
    Percentage of political Polymarket events mentioning Trump by month of
    market creation
  </div>
</div>

<div class="full-width">
  <TimelineBarChart />
</div>

<div class="content">
  <p>
    This presents an increasing risk to investors in these markets and casts
    doubt on the predictive power of these markets as a whole. Polymarket users
    have already invested more than $18 million on whether Trump will end the
    war in Ukraine by the end of his first 90 days (currently, a 30% chance of
    occurring, according to the bettors).
  </p>
</div>
<div class="footer">
  <p>
    Find the code and data for this project <a
      href="https://github.com/cj-robinson/polymarket-accuracy">here</a
    >

    <!-- Social Icons -->
  </p>
  <div class="social-icons mt-4">
    <a
      href="mailto:c.j.robinson@columbia.edu"
      class="icon is-medium mr-3"
      style="color:transparent;"
    >
      <i class="fas fa-envelope fa-lg" style="color:white;" />
    </a>
    <a
      href="https://bsky.app/profile/cj-robinson.bsky.social"
      class="icon is-medium mr-3"
      style="color:transparent;"
    >
      <i class="fa-brands fa-bluesky" style="color:white;" />
    </a>
    <a
      href="https://www.linkedin.com/in/christophercjrobinson"
      class="icon is-medium mr-3"
      style="color:transparent;"
    >
      <i class="fab fa-linkedin fa-lg" style="color:white;" />
    </a>
    <a
      href="https://github.com/cj-robinson"
      class="icon is-medium mr-3"
      style="color:transparent;"
    >
      <i class="fab fa-github fa-lg" style="color:white;" />
    </a>
  </div>
</div>

<style>
  * {
    box-sizing: border-box;
    /* Makes padding included in width calculations */
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

  :global(body) {
    margin: 0;
    overflow-x: hidden;
    width: 100%;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    text-rendering: optimizeLegibility;
  }
  .section-container {
    margin-top: 1em;
    text-align: center;
    transition: background 100ms;
    display: flex;
  }

  .hero {
    background-color: #a2a251;
    padding: 1.5rem;
    width: 100%;
    margin: 0;
    overflow-x: hidden;
  }

  .hero-body {
    width: 100%;
    margin: 0;
  }

  .section-container {
    flex-direction: column-reverse;
  }
  .sticky {
    width: 95%;
    margin: auto;
  }
  .content {
    max-width: 640px;
    margin: auto;
  }

  .header {
    padding: 3em 0;
    padding-bottom: 0em;
  }

  a {
    color: #95cb99;
  }

  .footer {
    background: #a2a251;
    text-align: center;
    font-size: 0.8em;
    margin-top: 4em;
    padding: 4em 0;
  }

  .spacer {
    height: 40vh;
  }
  figure {
    margin: 0;
    padding-bottom: 1.2em;
  }

  figcaption {
    font-size: 0.8em;
    text-align: center;
    margin-top: 0.5em;
    color: #666;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 3em;
    line-height: 1.1;
  }

  .subhead {
    font-family: "Lora", Georgia, serif;
  }

  iframe,
  img,
  video {
    max-width: 100%;
  }

  p {
    line-height: 1.6;
    margin: 0;
    padding-bottom: 1.2em;
  }

  ul {
    margin: 0;
    padding-bottom: 1em;
    line-height: 1.6;
  }

  iframe {
    padding-bottom: 1.2em;
  }

  code {
    font-family: "Courier New", monospace;
    background: #fffbaf;
    font-size: 0.85em;
  }

  .full-width figure {
    text-align: center;
  }

  .full-width {
    max-width: 760px;
    text-align: center;
    margin: auto;
  }

  .chart-title {
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 0.5em;
    margin-left: auto;
    margin-right: auto;
  }

  .chart-subtitle {
    font-size: 14px;
    text-align: left;
    margin-bottom: 0.5em;
  }

  .steps-container,
  .sticky {
    height: 100%;
  }

  .steps-container {
    flex: 1 1 40%;
    z-index: 10;
  }

  .sticky {
    position: sticky;
    top: calc(50vh - 200px); /* 50% of viewport height minus half the chart height */
    flex: 1 1 60%;
  }

  /* margin on mobile */
  @media (max-width: 640px) {
    body {
      font-size: 18px;
    }

    .content {
      padding-left: 0.5em;
      padding-right: 0.5em;
    }

    .hero {
      padding: 1rem;
    }

    .hero-body {
      width: 100%;
      margin: 0;
    }

    .footer {
      width: 100%;
    }
  }

  .container {
    max-width: 700px;
    margin: 0 auto;
    /* padding: 0 2em; */
    padding-bottom: 2em;
  }

  #shapes {
    margin: 0 auto;
  }

  .chart-container {
    max-width: 500px;
    height: 200px;
    margin: 0 auto;
  }

  p {
    max-width: 700px;
  }

  rect {
    transition: fill 1s;
  }

  rect:hover {
    fill: maroon;
  }
</style>
