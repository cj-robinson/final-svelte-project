import { c as create_ssr_component, a as add_attribute, e as escape, b as each, v as validate_component } from "../../chunks/index-13c0de55.js";
import * as d3 from "d3";
import "d3-scale";
var data$2 = [
  {
    trump_flag: "Trump mentioned",
    date: "2024-01-01",
    vol: "11156236.572519999",
    vol_perc: "0.09298544204918217"
  },
  {
    trump_flag: "Trump mentioned",
    date: "2024-02-01",
    vol: "4739847.865817",
    vol_perc: "0.2193680126358217"
  },
  {
    trump_flag: "Trump mentioned",
    date: "2024-03-01",
    vol: "473156.33549700095",
    vol_perc: "0.0012429879017480392"
  },
  {
    trump_flag: "Trump mentioned",
    date: "2024-04-01",
    vol: "3695927.338777",
    vol_perc: "0.029634981316558"
  },
  {
    trump_flag: "Trump mentioned",
    date: "2024-05-01",
    vol: "15298015.425613",
    vol_perc: "0.11441912317470768"
  },
  {
    trump_flag: "Trump mentioned",
    date: "2024-06-01",
    vol: "80125642.68805902",
    vol_perc: "0.44962157533745656"
  },
  {
    trump_flag: "Trump mentioned",
    date: "2024-07-01",
    vol: "36569929.39424901",
    vol_perc: "0.11734646613841601"
  },
  {
    trump_flag: "Trump mentioned",
    date: "2024-08-01",
    vol: "29563294.729385007",
    vol_perc: "0.03535507227560013"
  },
  {
    trump_flag: "Trump mentioned",
    date: "2024-09-01",
    vol: "29593197.26507899",
    vol_perc: "0.05800550853125689"
  },
  {
    trump_flag: "Trump mentioned",
    date: "2024-10-01",
    vol: "64367296.87557599",
    vol_perc: "0.1592066275067077"
  },
  {
    trump_flag: "Trump mentioned",
    date: "2024-11-01",
    vol: "489524809.13117194",
    vol_perc: "0.3959826939105557"
  },
  {
    trump_flag: "Trump mentioned",
    date: "2024-12-01",
    vol: "5498429.876601001",
    vol_perc: "0.07090235143967491"
  },
  {
    trump_flag: "Trump mentioned",
    date: "2025-01-01",
    vol: "54740227.95485899",
    vol_perc: "0.6977852894308889"
  }
];
var TimelineBarChart_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".chart-container.svelte-1hzniu9{width:100%;font-family:sans-serif}.chart .tick text{font-size:12px}.chart .domain, .chart .tick line{stroke:#ccc}",
  map: null
};
let svg_height$1 = 600;
const TimelineBarChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let chartWidth;
  let chartHeight;
  let xScale;
  let yScale;
  let svg_width = 600;
  let margins = { top: 20, bottom: 50, left: 40, right: 20 };
  const parseDate = d3.timeParse("%Y-%m-%d");
  data$2.forEach(function(d) {
    d.dateObj = parseDate(d.date);
    d.dateStr = d.date;
    d.vol_perc = +d.vol_perc;
  });
  let yMax = d3.max(data$2, (d) => d.vol_perc);
  let xAxisNode, yAxisNode;
  $$result.css.add(css$3);
  chartWidth = svg_width - margins.left - margins.right;
  chartHeight = svg_height$1 - margins.top - margins.bottom;
  xScale = d3.scaleBand().domain(data$2.map((d) => d.dateStr)).range([0, chartWidth]).padding(0.1);
  yScale = d3.scaleLinear().domain([0, yMax]).range([chartHeight, 0]);
  d3.axisBottom(xScale).tickFormat((d) => {
    const dt = parseDate(d);
    return d3.timeFormat("%b %Y")(dt);
  });
  d3.axisLeft(yScale).tickFormat(d3.format(".0%"));
  return `<div class="${"chart-container svelte-1hzniu9"}"><svg${add_attribute("width", svg_width, 0)}${add_attribute("height", svg_height$1, 0)}><g class="${"chart"}" transform="${"translate(" + escape(margins.left) + ", " + escape(margins.top) + ")"}"><g class="${"bar-group"}">${each(data$2, (month) => {
    return `<rect${add_attribute("x", xScale(month.dateStr), 0)}${add_attribute("y", yScale(month.vol_perc), 0)}${add_attribute("width", xScale.bandwidth(), 0)}${add_attribute("height", yScale(0) - yScale(month.vol_perc), 0)} fill="${"steelblue"}"></rect>`;
  })}</g><g${add_attribute("transform", `translate(0, ${chartHeight})`, 0)}${add_attribute("this", xAxisNode, 0)}></g><g${add_attribute("this", yAxisNode, 0)}></g></g></svg>
</div>`;
});
var data$1 = [
  {
    trump_flag: "Other\npolitical events",
    correct_prediction: "Correct prediction",
    n: "246"
  },
  {
    trump_flag: "Political events\nmentioning Trump",
    correct_prediction: "Correct prediction",
    n: "154"
  },
  {
    trump_flag: "Other\npolitical events",
    correct_prediction: "Incorrect prediction",
    n: "62"
  },
  {
    trump_flag: "Political events\nmentioning Trump",
    correct_prediction: "Incorrect prediction",
    n: "70"
  }
];
var TrumpAccuracyPictogram_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".chart-container.svelte-9oieb6{display:flex;justify-content:center;align-items:center}.grid-section.svelte-9oieb6{position:relative;display:flex;align-items:center}.grid-labels.svelte-9oieb6{position:absolute;left:-250px;width:200px;display:flex;flex-direction:column;height:100%}.trump-label.svelte-9oieb6{position:absolute;top:80px;left:calc(180%);text-align:right}.other-label.svelte-9oieb6{position:absolute;top:300px;left:calc(200%);text-align:right}.grid-title.svelte-9oieb6{font-size:16px;font-weight:bold;fill:#374151}.legend-title.svelte-9oieb6{font-size:14px;font-weight:bold;fill:#374151}.legend-text.svelte-9oieb6{font-size:12px;fill:#6b7280}",
  map: null
};
let svg_height = 400;
let cols = 10;
let rows = 5;
let squareSize = 20;
let gap = 3;
let gridSpacing = 100;
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
const TrumpAccuracyPictogram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let chartWidth;
  let trumpData;
  let otherData;
  let trumpCorrectSquares;
  let otherCorrectSquares;
  let gridStartX;
  let trumpGridY;
  let otherGridY;
  let trumpSquares;
  let otherSquares;
  let svg_width = 700;
  let margins = {
    top: 40,
    bottom: 40,
    left: 100,
    right: 100
  };
  function getGroupData(group) {
    let correct = data$1.find((d) => d.trump_flag === group && d.correct_prediction === "Correct prediction");
    let incorrect = data$1.find((d) => d.trump_flag === group && d.correct_prediction === "Incorrect prediction");
    let correct_n = correct ? +correct.n : 0;
    let incorrect_n = incorrect ? +incorrect.n : 0;
    let total = correct_n + incorrect_n;
    let correct_prop = total > 0 ? correct_n / total : 0;
    return {
      correct_n,
      incorrect_n,
      total,
      correct_prop
    };
  }
  let totalSquares = cols * rows;
  let gridWidth = cols * (squareSize + gap) - gap;
  let gridHeight = rows * (squareSize + gap) - gap;
  $$result.css.add(css$2);
  chartWidth = svg_width - margins.left - margins.right;
  trumpData = getGroupData("Political events\nmentioning Trump");
  otherData = getGroupData("Other\npolitical events");
  trumpCorrectSquares = Math.round(trumpData.correct_prop * totalSquares);
  otherCorrectSquares = Math.round(otherData.correct_prop * totalSquares);
  gridStartX = (chartWidth - gridWidth) / 2;
  trumpGridY = 20;
  otherGridY = trumpGridY + gridHeight + gridSpacing;
  trumpSquares = generateGrid(trumpCorrectSquares, trumpGridY);
  otherSquares = generateGrid(otherCorrectSquares, otherGridY);
  return `<div class="${"chart-container svelte-9oieb6"}"><div class="${"grid-section svelte-9oieb6"}"><div class="${"grid-labels svelte-9oieb6"}"><div class="${"trump-label svelte-9oieb6"}"><div class="${"grid-title svelte-9oieb6"}">Political events mentioning Trump</div></div></div>
        
        <svg${add_attribute("width", svg_width, 0)}${add_attribute("height", svg_height, 0)}><g transform="${"translate(" + escape(margins.left) + ", " + escape(margins.top) + ")"}"><g transform="${"translate(" + escape(gridStartX) + ", 0)"}">${each(trumpSquares, (square) => {
    return `<rect${add_attribute("x", square.x, 0)}${add_attribute("y", square.y, 0)}${add_attribute("width", squareSize, 0)}${add_attribute("height", squareSize, 0)}${add_attribute("fill", square.fill, 0)} stroke="${"#fff"}" stroke-width="${"1"}"></rect>`;
  })}</g><g transform="${"translate(" + escape(gridStartX) + ", 0)"}">${each(otherSquares, (square) => {
    return `<rect${add_attribute("x", square.x, 0)}${add_attribute("y", square.y, 0)}${add_attribute("width", squareSize, 0)}${add_attribute("height", squareSize, 0)}${add_attribute("fill", square.fill, 0)} stroke="${"#fff"}" stroke-width="${"1"}"></rect>`;
  })}</g><g transform="${"translate(" + escape(gridStartX) + ", " + escape(otherGridY + gridHeight + 40) + ")"}"><text x="${"0"}" y="${"0"}" class="${"legend-title svelte-9oieb6"}">Legend:</text><rect x="${"0"}" y="${"10"}" width="${"15"}" height="${"15"}" fill="${"#22c55e"}" stroke="${"#fff"}" stroke-width="${"1"}"></rect><text x="${"20"}" y="${"22"}" class="${"legend-text svelte-9oieb6"}">Correct prediction</text><rect x="${"150"}" y="${"10"}" width="${"15"}" height="${"15"}" fill="${"#ef4444"}" stroke="${"#fff"}" stroke-width="${"1"}"></rect><text x="${"170"}" y="${"22"}" class="${"legend-text svelte-9oieb6"}">Incorrect prediction</text></g></g></svg>
        
        <div class="${"grid-labels svelte-9oieb6"}"><div class="${"other-label svelte-9oieb6"}"><div class="${"grid-title svelte-9oieb6"}">Other political events</div></div></div></div>
</div>`;
});
var data = [
  {
    "Date (UTC)": "01-05-2024 00:00",
    "Timestamp (UTC)": "1704412803",
    "Donald Trump": "0.5",
    "Joe Biden": "0.5",
    "Kamala Harris": "NA"
  },
  {
    "Date (UTC)": "01-06-2024 00:00",
    "Timestamp (UTC)": "1704499202",
    "Donald Trump": "0.405",
    "Joe Biden": "0.365",
    "Kamala Harris": "0.0315"
  },
  {
    "Date (UTC)": "01-07-2024 00:00",
    "Timestamp (UTC)": "1704585602",
    "Donald Trump": "0.405",
    "Joe Biden": "0.365",
    "Kamala Harris": "0.027"
  },
  {
    "Date (UTC)": "01-08-2024 00:00",
    "Timestamp (UTC)": "1704672002",
    "Donald Trump": "0.475",
    "Joe Biden": "0.335",
    "Kamala Harris": "0.024"
  },
  {
    "Date (UTC)": "01-09-2024 00:00",
    "Timestamp (UTC)": "1704758403",
    "Donald Trump": "0.465",
    "Joe Biden": "0.345",
    "Kamala Harris": "0.023"
  },
  {
    "Date (UTC)": "01-10-2024 00:00",
    "Timestamp (UTC)": "1704844803",
    "Donald Trump": "0.455",
    "Joe Biden": "0.345",
    "Kamala Harris": "0.0175"
  },
  {
    "Date (UTC)": "01-11-2024 00:00",
    "Timestamp (UTC)": "1704931203",
    "Donald Trump": "0.465",
    "Joe Biden": "0.345",
    "Kamala Harris": "0.0165"
  },
  {
    "Date (UTC)": "01-12-2024 00:00",
    "Timestamp (UTC)": "1705017603",
    "Donald Trump": "0.475",
    "Joe Biden": "0.345",
    "Kamala Harris": "0.015"
  },
  {
    "Date (UTC)": "01-13-2024 00:00",
    "Timestamp (UTC)": "1705104002",
    "Donald Trump": "0.485",
    "Joe Biden": "0.355",
    "Kamala Harris": "0.014"
  },
  {
    "Date (UTC)": "01-14-2024 00:00",
    "Timestamp (UTC)": "1705190402",
    "Donald Trump": "0.485",
    "Joe Biden": "0.355",
    "Kamala Harris": "0.0135"
  },
  {
    "Date (UTC)": "01-15-2024 00:00",
    "Timestamp (UTC)": "1705276803",
    "Donald Trump": "0.475",
    "Joe Biden": "0.355",
    "Kamala Harris": "0.012"
  },
  {
    "Date (UTC)": "01-16-2024 00:00",
    "Timestamp (UTC)": "1705363202",
    "Donald Trump": "0.475",
    "Joe Biden": "0.355",
    "Kamala Harris": "0.012"
  },
  {
    "Date (UTC)": "01-17-2024 00:00",
    "Timestamp (UTC)": "1705449603",
    "Donald Trump": "0.485",
    "Joe Biden": "0.355",
    "Kamala Harris": "0.0145"
  },
  {
    "Date (UTC)": "01-18-2024 00:00",
    "Timestamp (UTC)": "1705536002",
    "Donald Trump": "0.485",
    "Joe Biden": "0.365",
    "Kamala Harris": "0.0145"
  },
  {
    "Date (UTC)": "01-19-2024 00:00",
    "Timestamp (UTC)": "1705622402",
    "Donald Trump": "0.485",
    "Joe Biden": "0.365",
    "Kamala Harris": "0.014"
  },
  {
    "Date (UTC)": "01-20-2024 00:00",
    "Timestamp (UTC)": "1705708803",
    "Donald Trump": "0.485",
    "Joe Biden": "0.365",
    "Kamala Harris": "0.016"
  },
  {
    "Date (UTC)": "01-21-2024 00:00",
    "Timestamp (UTC)": "1705795202",
    "Donald Trump": "0.485",
    "Joe Biden": "0.365",
    "Kamala Harris": "0.0165"
  },
  {
    "Date (UTC)": "01-22-2024 00:00",
    "Timestamp (UTC)": "1705881602",
    "Donald Trump": "0.485",
    "Joe Biden": "0.365",
    "Kamala Harris": "0.017"
  },
  {
    "Date (UTC)": "01-23-2024 00:00",
    "Timestamp (UTC)": "1705968003",
    "Donald Trump": "0.545",
    "Joe Biden": "0.38",
    "Kamala Harris": "0.012"
  },
  {
    "Date (UTC)": "01-24-2024 00:00",
    "Timestamp (UTC)": "1706054402",
    "Donald Trump": "0.545",
    "Joe Biden": "0.385",
    "Kamala Harris": "0.0095"
  },
  {
    "Date (UTC)": "01-25-2024 00:00",
    "Timestamp (UTC)": "1706140802",
    "Donald Trump": "0.545",
    "Joe Biden": "0.385",
    "Kamala Harris": "0.0095"
  },
  {
    "Date (UTC)": "01-26-2024 00:00",
    "Timestamp (UTC)": "1706227202",
    "Donald Trump": "0.545",
    "Joe Biden": "0.385",
    "Kamala Harris": "0.009"
  },
  {
    "Date (UTC)": "01-27-2024 00:00",
    "Timestamp (UTC)": "1706313602",
    "Donald Trump": "0.545",
    "Joe Biden": "0.385",
    "Kamala Harris": "0.009"
  },
  {
    "Date (UTC)": "01-28-2024 00:00",
    "Timestamp (UTC)": "1706400002",
    "Donald Trump": "0.545",
    "Joe Biden": "0.385",
    "Kamala Harris": "0.009"
  },
  {
    "Date (UTC)": "01-29-2024 00:00",
    "Timestamp (UTC)": "1706486402",
    "Donald Trump": "0.545",
    "Joe Biden": "0.385",
    "Kamala Harris": "0.0085"
  },
  {
    "Date (UTC)": "01-30-2024 00:00",
    "Timestamp (UTC)": "1706572802",
    "Donald Trump": "0.545",
    "Joe Biden": "0.385",
    "Kamala Harris": "0.0085"
  },
  {
    "Date (UTC)": "01-31-2024 00:00",
    "Timestamp (UTC)": "1706659202",
    "Donald Trump": "0.545",
    "Joe Biden": "0.375",
    "Kamala Harris": "0.0075"
  },
  {
    "Date (UTC)": "02-01-2024 00:00",
    "Timestamp (UTC)": "1706745602",
    "Donald Trump": "0.525",
    "Joe Biden": "0.365",
    "Kamala Harris": "0.0075"
  },
  {
    "Date (UTC)": "02-02-2024 00:00",
    "Timestamp (UTC)": "1706832002",
    "Donald Trump": "0.525",
    "Joe Biden": "0.365",
    "Kamala Harris": "0.0065"
  },
  {
    "Date (UTC)": "02-03-2024 00:00",
    "Timestamp (UTC)": "1706918402",
    "Donald Trump": "0.525",
    "Joe Biden": "0.355",
    "Kamala Harris": "0.0075"
  },
  {
    "Date (UTC)": "02-04-2024 00:00",
    "Timestamp (UTC)": "1707004803",
    "Donald Trump": "0.525",
    "Joe Biden": "0.355",
    "Kamala Harris": "0.0075"
  },
  {
    "Date (UTC)": "02-05-2024 00:00",
    "Timestamp (UTC)": "1707091202",
    "Donald Trump": "0.525",
    "Joe Biden": "0.355",
    "Kamala Harris": "0.0075"
  },
  {
    "Date (UTC)": "02-06-2024 00:00",
    "Timestamp (UTC)": "1707177602",
    "Donald Trump": "0.525",
    "Joe Biden": "0.355",
    "Kamala Harris": "0.0075"
  },
  {
    "Date (UTC)": "02-07-2024 00:00",
    "Timestamp (UTC)": "1707264002",
    "Donald Trump": "0.525",
    "Joe Biden": "0.355",
    "Kamala Harris": "0.0075"
  },
  {
    "Date (UTC)": "02-08-2024 00:00",
    "Timestamp (UTC)": "1707350402",
    "Donald Trump": "0.525",
    "Joe Biden": "0.355",
    "Kamala Harris": "0.0075"
  },
  {
    "Date (UTC)": "02-09-2024 00:00",
    "Timestamp (UTC)": "1707436802",
    "Donald Trump": "0.525",
    "Joe Biden": "0.355",
    "Kamala Harris": "0.011"
  },
  {
    "Date (UTC)": "02-10-2024 00:00",
    "Timestamp (UTC)": "1707523203",
    "Donald Trump": "0.515",
    "Joe Biden": "0.335",
    "Kamala Harris": "0.017"
  },
  {
    "Date (UTC)": "02-11-2024 00:00",
    "Timestamp (UTC)": "1707609603",
    "Donald Trump": "0.525",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.016"
  },
  {
    "Date (UTC)": "02-12-2024 00:00",
    "Timestamp (UTC)": "1707696003",
    "Donald Trump": "0.525",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.017"
  },
  {
    "Date (UTC)": "02-13-2024 00:00",
    "Timestamp (UTC)": "1707782402",
    "Donald Trump": "0.535",
    "Joe Biden": "0.315",
    "Kamala Harris": "0.018"
  },
  {
    "Date (UTC)": "02-14-2024 00:00",
    "Timestamp (UTC)": "1707868803",
    "Donald Trump": "0.525",
    "Joe Biden": "0.315",
    "Kamala Harris": "0.021"
  },
  {
    "Date (UTC)": "02-15-2024 00:00",
    "Timestamp (UTC)": "1707955203",
    "Donald Trump": "0.525",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.02"
  },
  {
    "Date (UTC)": "02-16-2024 00:00",
    "Timestamp (UTC)": "1708041603",
    "Donald Trump": "0.53",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.0205"
  },
  {
    "Date (UTC)": "02-17-2024 00:00",
    "Timestamp (UTC)": "1708128002",
    "Donald Trump": "0.525",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.0215"
  },
  {
    "Date (UTC)": "02-18-2024 00:00",
    "Timestamp (UTC)": "1708214402",
    "Donald Trump": "0.525",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.0185"
  },
  {
    "Date (UTC)": "02-19-2024 00:00",
    "Timestamp (UTC)": "1708300802",
    "Donald Trump": "0.535",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.0185"
  },
  {
    "Date (UTC)": "02-20-2024 00:00",
    "Timestamp (UTC)": "1708387202",
    "Donald Trump": "0.545",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.018"
  },
  {
    "Date (UTC)": "02-21-2024 00:00",
    "Timestamp (UTC)": "1708473603",
    "Donald Trump": "0.545",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.0165"
  },
  {
    "Date (UTC)": "02-22-2024 00:00",
    "Timestamp (UTC)": "1708560002",
    "Donald Trump": "0.545",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.0155"
  },
  {
    "Date (UTC)": "02-23-2024 00:00",
    "Timestamp (UTC)": "1708646402",
    "Donald Trump": "0.545",
    "Joe Biden": "0.32",
    "Kamala Harris": "0.0145"
  },
  {
    "Date (UTC)": "02-24-2024 00:00",
    "Timestamp (UTC)": "1708732802",
    "Donald Trump": "0.535",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.015"
  },
  {
    "Date (UTC)": "02-25-2024 00:00",
    "Timestamp (UTC)": "1708819202",
    "Donald Trump": "0.535",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.0155"
  },
  {
    "Date (UTC)": "02-26-2024 00:00",
    "Timestamp (UTC)": "1708905602",
    "Donald Trump": "0.535",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.0155"
  },
  {
    "Date (UTC)": "02-27-2024 00:00",
    "Timestamp (UTC)": "1708992002",
    "Donald Trump": "0.525",
    "Joe Biden": "0.335",
    "Kamala Harris": "0.0165"
  },
  {
    "Date (UTC)": "02-28-2024 00:00",
    "Timestamp (UTC)": "1709078403",
    "Donald Trump": "0.525",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.0165"
  },
  {
    "Date (UTC)": "02-29-2024 00:00",
    "Timestamp (UTC)": "1709164802",
    "Donald Trump": "0.525",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.0165"
  },
  {
    "Date (UTC)": "03-01-2024 00:00",
    "Timestamp (UTC)": "1709251202",
    "Donald Trump": "0.525",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.0165"
  },
  {
    "Date (UTC)": "03-02-2024 00:00",
    "Timestamp (UTC)": "1709337603",
    "Donald Trump": "0.525",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.0175"
  },
  {
    "Date (UTC)": "03-03-2024 00:00",
    "Timestamp (UTC)": "1709424003",
    "Donald Trump": "0.535",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.0175"
  },
  {
    "Date (UTC)": "03-04-2024 00:00",
    "Timestamp (UTC)": "1709510403",
    "Donald Trump": "0.535",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.019"
  },
  {
    "Date (UTC)": "03-05-2024 00:00",
    "Timestamp (UTC)": "1709596803",
    "Donald Trump": "0.535",
    "Joe Biden": "0.315",
    "Kamala Harris": "0.019"
  },
  {
    "Date (UTC)": "03-06-2024 00:00",
    "Timestamp (UTC)": "1709683203",
    "Donald Trump": "0.535",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.0165"
  },
  {
    "Date (UTC)": "03-07-2024 00:00",
    "Timestamp (UTC)": "1709769602",
    "Donald Trump": "0.535",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.0175"
  },
  {
    "Date (UTC)": "03-08-2024 00:00",
    "Timestamp (UTC)": "1709856002",
    "Donald Trump": "0.535",
    "Joe Biden": "0.315",
    "Kamala Harris": "0.0175"
  },
  {
    "Date (UTC)": "03-09-2024 00:00",
    "Timestamp (UTC)": "1709942403",
    "Donald Trump": "0.535",
    "Joe Biden": "0.335",
    "Kamala Harris": "0.019"
  },
  {
    "Date (UTC)": "03-10-2024 00:00",
    "Timestamp (UTC)": "1710028802",
    "Donald Trump": "0.535",
    "Joe Biden": "0.335",
    "Kamala Harris": "0.0195"
  },
  {
    "Date (UTC)": "03-11-2024 00:00",
    "Timestamp (UTC)": "1710115202",
    "Donald Trump": "0.515",
    "Joe Biden": "0.345",
    "Kamala Harris": "0.0195"
  },
  {
    "Date (UTC)": "03-12-2024 00:00",
    "Timestamp (UTC)": "1710201602",
    "Donald Trump": "0.515",
    "Joe Biden": "0.345",
    "Kamala Harris": "0.0195"
  },
  {
    "Date (UTC)": "03-13-2024 00:00",
    "Timestamp (UTC)": "1710288003",
    "Donald Trump": "0.515",
    "Joe Biden": "0.345",
    "Kamala Harris": "0.018"
  },
  {
    "Date (UTC)": "03-14-2024 00:00",
    "Timestamp (UTC)": "1710374403",
    "Donald Trump": "0.515",
    "Joe Biden": "0.365",
    "Kamala Harris": "0.017"
  },
  {
    "Date (UTC)": "03-15-2024 00:00",
    "Timestamp (UTC)": "1710460803",
    "Donald Trump": "0.515",
    "Joe Biden": "0.365",
    "Kamala Harris": "0.0165"
  },
  {
    "Date (UTC)": "03-16-2024 00:00",
    "Timestamp (UTC)": "1710547202",
    "Donald Trump": "0.515",
    "Joe Biden": "0.365",
    "Kamala Harris": "0.0165"
  },
  {
    "Date (UTC)": "03-17-2024 00:00",
    "Timestamp (UTC)": "1710633603",
    "Donald Trump": "0.515",
    "Joe Biden": "0.375",
    "Kamala Harris": "0.0165"
  },
  {
    "Date (UTC)": "03-18-2024 00:00",
    "Timestamp (UTC)": "1710720003",
    "Donald Trump": "0.515",
    "Joe Biden": "0.375",
    "Kamala Harris": "0.018"
  },
  {
    "Date (UTC)": "03-19-2024 00:00",
    "Timestamp (UTC)": "1710806402",
    "Donald Trump": "0.515",
    "Joe Biden": "0.375",
    "Kamala Harris": "0.018"
  },
  {
    "Date (UTC)": "03-20-2024 00:00",
    "Timestamp (UTC)": "1710892803",
    "Donald Trump": "0.515",
    "Joe Biden": "0.375",
    "Kamala Harris": "0.0165"
  },
  {
    "Date (UTC)": "03-21-2024 00:00",
    "Timestamp (UTC)": "1710979203",
    "Donald Trump": "0.515",
    "Joe Biden": "0.375",
    "Kamala Harris": "0.0165"
  },
  {
    "Date (UTC)": "03-22-2024 00:00",
    "Timestamp (UTC)": "1711065602",
    "Donald Trump": "0.515",
    "Joe Biden": "0.385",
    "Kamala Harris": "0.0155"
  },
  {
    "Date (UTC)": "03-23-2024 00:00",
    "Timestamp (UTC)": "1711152003",
    "Donald Trump": "0.515",
    "Joe Biden": "0.385",
    "Kamala Harris": "0.0155"
  },
  {
    "Date (UTC)": "03-24-2024 00:00",
    "Timestamp (UTC)": "1711238403",
    "Donald Trump": "0.495",
    "Joe Biden": "0.405",
    "Kamala Harris": "0.0155"
  },
  {
    "Date (UTC)": "03-25-2024 00:00",
    "Timestamp (UTC)": "1711324803",
    "Donald Trump": "0.495",
    "Joe Biden": "0.405",
    "Kamala Harris": "0.015"
  },
  {
    "Date (UTC)": "03-26-2024 00:00",
    "Timestamp (UTC)": "1711411202",
    "Donald Trump": "0.495",
    "Joe Biden": "0.405",
    "Kamala Harris": "0.015"
  },
  {
    "Date (UTC)": "03-27-2024 00:00",
    "Timestamp (UTC)": "1711497603",
    "Donald Trump": "0.495",
    "Joe Biden": "0.405",
    "Kamala Harris": "0.016"
  },
  {
    "Date (UTC)": "03-28-2024 00:00",
    "Timestamp (UTC)": "1711584003",
    "Donald Trump": "0.495",
    "Joe Biden": "0.415",
    "Kamala Harris": "0.016"
  },
  {
    "Date (UTC)": "03-29-2024 00:00",
    "Timestamp (UTC)": "1711670402",
    "Donald Trump": "0.495",
    "Joe Biden": "0.415",
    "Kamala Harris": "0.016"
  },
  {
    "Date (UTC)": "03-30-2024 00:00",
    "Timestamp (UTC)": "1711756802",
    "Donald Trump": "0.485",
    "Joe Biden": "0.415",
    "Kamala Harris": "0.016"
  },
  {
    "Date (UTC)": "03-31-2024 00:00",
    "Timestamp (UTC)": "1711843203",
    "Donald Trump": "0.485",
    "Joe Biden": "0.415",
    "Kamala Harris": "0.0165"
  },
  {
    "Date (UTC)": "04-01-2024 00:00",
    "Timestamp (UTC)": "1711929602",
    "Donald Trump": "0.485",
    "Joe Biden": "0.415",
    "Kamala Harris": "0.0165"
  },
  {
    "Date (UTC)": "04-02-2024 00:00",
    "Timestamp (UTC)": "1712016003",
    "Donald Trump": "0.485",
    "Joe Biden": "0.415",
    "Kamala Harris": "0.0165"
  },
  {
    "Date (UTC)": "04-03-2024 00:00",
    "Timestamp (UTC)": "1712102403",
    "Donald Trump": "0.485",
    "Joe Biden": "0.415",
    "Kamala Harris": "0.0145"
  },
  {
    "Date (UTC)": "04-04-2024 00:00",
    "Timestamp (UTC)": "1712188803",
    "Donald Trump": "0.475",
    "Joe Biden": "0.435",
    "Kamala Harris": "0.0175"
  },
  {
    "Date (UTC)": "04-05-2024 00:00",
    "Timestamp (UTC)": "1712275203",
    "Donald Trump": "0.465",
    "Joe Biden": "0.435",
    "Kamala Harris": "0.0165"
  },
  {
    "Date (UTC)": "04-06-2024 00:00",
    "Timestamp (UTC)": "1712361603",
    "Donald Trump": "0.465",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.015"
  },
  {
    "Date (UTC)": "04-07-2024 00:00",
    "Timestamp (UTC)": "1712448002",
    "Donald Trump": "0.465",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.015"
  },
  {
    "Date (UTC)": "04-08-2024 00:00",
    "Timestamp (UTC)": "1712534403",
    "Donald Trump": "0.465",
    "Joe Biden": "0.435",
    "Kamala Harris": "0.0155"
  },
  {
    "Date (UTC)": "04-09-2024 00:00",
    "Timestamp (UTC)": "1712620803",
    "Donald Trump": "0.465",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.0155"
  },
  {
    "Date (UTC)": "04-10-2024 00:00",
    "Timestamp (UTC)": "1712707203",
    "Donald Trump": "0.465",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.0155"
  },
  {
    "Date (UTC)": "04-11-2024 00:00",
    "Timestamp (UTC)": "1712793603",
    "Donald Trump": "0.455",
    "Joe Biden": "0.435",
    "Kamala Harris": "0.014"
  },
  {
    "Date (UTC)": "04-12-2024 00:00",
    "Timestamp (UTC)": "1712880003",
    "Donald Trump": "0.455",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.0145"
  },
  {
    "Date (UTC)": "04-13-2024 00:00",
    "Timestamp (UTC)": "1712966402",
    "Donald Trump": "0.455",
    "Joe Biden": "0.435",
    "Kamala Harris": "0.0145"
  },
  {
    "Date (UTC)": "04-14-2024 00:00",
    "Timestamp (UTC)": "1713052803",
    "Donald Trump": "0.455",
    "Joe Biden": "0.435",
    "Kamala Harris": "0.0135"
  },
  {
    "Date (UTC)": "04-15-2024 00:00",
    "Timestamp (UTC)": "1713139203",
    "Donald Trump": "0.455",
    "Joe Biden": "0.435",
    "Kamala Harris": "0.0135"
  },
  {
    "Date (UTC)": "04-16-2024 00:00",
    "Timestamp (UTC)": "1713225603",
    "Donald Trump": "0.455",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.0135"
  },
  {
    "Date (UTC)": "04-17-2024 00:00",
    "Timestamp (UTC)": "1713312003",
    "Donald Trump": "0.445",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.0115"
  },
  {
    "Date (UTC)": "04-18-2024 00:00",
    "Timestamp (UTC)": "1713398403",
    "Donald Trump": "0.445",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.0095"
  },
  {
    "Date (UTC)": "04-19-2024 00:00",
    "Timestamp (UTC)": "1713484803",
    "Donald Trump": "0.425",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.011"
  },
  {
    "Date (UTC)": "04-20-2024 00:00",
    "Timestamp (UTC)": "1713571202",
    "Donald Trump": "0.425",
    "Joe Biden": "0.435",
    "Kamala Harris": "0.0105"
  },
  {
    "Date (UTC)": "04-21-2024 00:00",
    "Timestamp (UTC)": "1713657603",
    "Donald Trump": "0.435",
    "Joe Biden": "0.435",
    "Kamala Harris": "0.01"
  },
  {
    "Date (UTC)": "04-22-2024 00:00",
    "Timestamp (UTC)": "1713744003",
    "Donald Trump": "0.435",
    "Joe Biden": "0.435",
    "Kamala Harris": "0.01"
  },
  {
    "Date (UTC)": "04-23-2024 00:00",
    "Timestamp (UTC)": "1713830402",
    "Donald Trump": "0.435",
    "Joe Biden": "0.435",
    "Kamala Harris": "0.01"
  },
  {
    "Date (UTC)": "04-24-2024 00:00",
    "Timestamp (UTC)": "1713916803",
    "Donald Trump": "0.435",
    "Joe Biden": "0.435",
    "Kamala Harris": "0.01"
  },
  {
    "Date (UTC)": "04-25-2024 00:00",
    "Timestamp (UTC)": "1714003203",
    "Donald Trump": "0.425",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.01"
  },
  {
    "Date (UTC)": "04-26-2024 00:00",
    "Timestamp (UTC)": "1714089602",
    "Donald Trump": "0.425",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.01"
  },
  {
    "Date (UTC)": "04-27-2024 00:00",
    "Timestamp (UTC)": "1714176003",
    "Donald Trump": "0.435",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.0115"
  },
  {
    "Date (UTC)": "04-28-2024 00:00",
    "Timestamp (UTC)": "1714262403",
    "Donald Trump": "0.435",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.0115"
  },
  {
    "Date (UTC)": "04-29-2024 00:00",
    "Timestamp (UTC)": "1714348803",
    "Donald Trump": "0.435",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.012"
  },
  {
    "Date (UTC)": "04-30-2024 00:00",
    "Timestamp (UTC)": "1714435204",
    "Donald Trump": "0.435",
    "Joe Biden": "0.435",
    "Kamala Harris": "0.0115"
  },
  {
    "Date (UTC)": "05-01-2024 00:00",
    "Timestamp (UTC)": "1714521603",
    "Donald Trump": "0.445",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.012"
  },
  {
    "Date (UTC)": "05-02-2024 00:00",
    "Timestamp (UTC)": "1714608003",
    "Donald Trump": "0.455",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.0115"
  },
  {
    "Date (UTC)": "05-03-2024 00:00",
    "Timestamp (UTC)": "1714694403",
    "Donald Trump": "0.455",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.0115"
  },
  {
    "Date (UTC)": "05-04-2024 00:00",
    "Timestamp (UTC)": "1714780803",
    "Donald Trump": "0.465",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.0115"
  },
  {
    "Date (UTC)": "05-05-2024 00:00",
    "Timestamp (UTC)": "1714867203",
    "Donald Trump": "0.465",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.0115"
  },
  {
    "Date (UTC)": "05-06-2024 00:00",
    "Timestamp (UTC)": "1714953602",
    "Donald Trump": "0.465",
    "Joe Biden": "0.435",
    "Kamala Harris": "0.0115"
  },
  {
    "Date (UTC)": "05-07-2024 00:00",
    "Timestamp (UTC)": "1715040002",
    "Donald Trump": "0.465",
    "Joe Biden": "0.435",
    "Kamala Harris": "0.0115"
  },
  {
    "Date (UTC)": "05-08-2024 00:00",
    "Timestamp (UTC)": "1715126403",
    "Donald Trump": "0.465",
    "Joe Biden": "0.435",
    "Kamala Harris": "0.012"
  },
  {
    "Date (UTC)": "05-09-2024 00:00",
    "Timestamp (UTC)": "1715212803",
    "Donald Trump": "0.455",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.011"
  },
  {
    "Date (UTC)": "05-10-2024 00:00",
    "Timestamp (UTC)": "1715299203",
    "Donald Trump": "0.445",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.0115"
  },
  {
    "Date (UTC)": "05-11-2024 00:00",
    "Timestamp (UTC)": "1715385604",
    "Donald Trump": "0.445",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.0115"
  },
  {
    "Date (UTC)": "05-12-2024 00:00",
    "Timestamp (UTC)": "1715472003",
    "Donald Trump": "0.445",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.0115"
  },
  {
    "Date (UTC)": "05-13-2024 00:00",
    "Timestamp (UTC)": "1715558404",
    "Donald Trump": "0.445",
    "Joe Biden": "0.445",
    "Kamala Harris": "0.0115"
  },
  {
    "Date (UTC)": "05-14-2024 00:00",
    "Timestamp (UTC)": "1715644803",
    "Donald Trump": "0.51",
    "Joe Biden": "0.435",
    "Kamala Harris": "0.0125"
  },
  {
    "Date (UTC)": "05-15-2024 00:00",
    "Timestamp (UTC)": "1715731204",
    "Donald Trump": "0.485",
    "Joe Biden": "0.435",
    "Kamala Harris": "0.013"
  },
  {
    "Date (UTC)": "05-16-2024 00:00",
    "Timestamp (UTC)": "1715817604",
    "Donald Trump": "0.495",
    "Joe Biden": "0.425",
    "Kamala Harris": "0.0095"
  },
  {
    "Date (UTC)": "05-17-2024 00:00",
    "Timestamp (UTC)": "1715904003",
    "Donald Trump": "0.495",
    "Joe Biden": "0.415",
    "Kamala Harris": "0.011"
  },
  {
    "Date (UTC)": "05-18-2024 00:00",
    "Timestamp (UTC)": "1715990403",
    "Donald Trump": "0.505",
    "Joe Biden": "0.415",
    "Kamala Harris": "0.011"
  },
  {
    "Date (UTC)": "05-19-2024 00:00",
    "Timestamp (UTC)": "1716076803",
    "Donald Trump": "0.515",
    "Joe Biden": "0.415",
    "Kamala Harris": "0.0115"
  },
  {
    "Date (UTC)": "05-20-2024 00:00",
    "Timestamp (UTC)": "1716163203",
    "Donald Trump": "0.515",
    "Joe Biden": "0.415",
    "Kamala Harris": "0.0115"
  },
  {
    "Date (UTC)": "05-21-2024 00:00",
    "Timestamp (UTC)": "1716249603",
    "Donald Trump": "0.54",
    "Joe Biden": "0.385",
    "Kamala Harris": "0.011"
  },
  {
    "Date (UTC)": "05-22-2024 00:00",
    "Timestamp (UTC)": "1716336003",
    "Donald Trump": "0.545",
    "Joe Biden": "0.395",
    "Kamala Harris": "0.01"
  },
  {
    "Date (UTC)": "05-23-2024 00:00",
    "Timestamp (UTC)": "1716422403",
    "Donald Trump": "0.55",
    "Joe Biden": "0.385",
    "Kamala Harris": "0.01"
  },
  {
    "Date (UTC)": "05-24-2024 00:00",
    "Timestamp (UTC)": "1716508803",
    "Donald Trump": "0.545",
    "Joe Biden": "0.385",
    "Kamala Harris": "0.0095"
  },
  {
    "Date (UTC)": "05-25-2024 00:00",
    "Timestamp (UTC)": "1716595203",
    "Donald Trump": "0.545",
    "Joe Biden": "0.375",
    "Kamala Harris": "0.011"
  },
  {
    "Date (UTC)": "05-26-2024 00:00",
    "Timestamp (UTC)": "1716681603",
    "Donald Trump": "0.555",
    "Joe Biden": "0.375",
    "Kamala Harris": "0.0115"
  },
  {
    "Date (UTC)": "05-27-2024 00:00",
    "Timestamp (UTC)": "1716768003",
    "Donald Trump": "0.555",
    "Joe Biden": "0.375",
    "Kamala Harris": "0.0105"
  },
  {
    "Date (UTC)": "05-28-2024 00:00",
    "Timestamp (UTC)": "1716854403",
    "Donald Trump": "0.555",
    "Joe Biden": "0.365",
    "Kamala Harris": "0.0115"
  },
  {
    "Date (UTC)": "05-29-2024 00:00",
    "Timestamp (UTC)": "1716940804",
    "Donald Trump": "0.565",
    "Joe Biden": "0.365",
    "Kamala Harris": "0.01"
  },
  {
    "Date (UTC)": "05-30-2024 00:00",
    "Timestamp (UTC)": "1717027203",
    "Donald Trump": "0.565",
    "Joe Biden": "0.365",
    "Kamala Harris": "0.01"
  },
  {
    "Date (UTC)": "05-31-2024 00:00",
    "Timestamp (UTC)": "1717113603",
    "Donald Trump": "0.535",
    "Joe Biden": "0.39",
    "Kamala Harris": "0.01"
  },
  {
    "Date (UTC)": "06-01-2024 00:00",
    "Timestamp (UTC)": "1717200003",
    "Donald Trump": "0.545",
    "Joe Biden": "0.385",
    "Kamala Harris": "0.0125"
  },
  {
    "Date (UTC)": "06-02-2024 00:00",
    "Timestamp (UTC)": "1717286403",
    "Donald Trump": "0.535",
    "Joe Biden": "0.385",
    "Kamala Harris": "0.0125"
  },
  {
    "Date (UTC)": "06-03-2024 00:00",
    "Timestamp (UTC)": "1717372803",
    "Donald Trump": "0.535",
    "Joe Biden": "0.375",
    "Kamala Harris": "0.0135"
  },
  {
    "Date (UTC)": "06-04-2024 00:00",
    "Timestamp (UTC)": "1717459202",
    "Donald Trump": "0.535",
    "Joe Biden": "0.365",
    "Kamala Harris": "0.014"
  },
  {
    "Date (UTC)": "06-05-2024 00:00",
    "Timestamp (UTC)": "1717545602",
    "Donald Trump": "0.555",
    "Joe Biden": "0.375",
    "Kamala Harris": "0.0145"
  },
  {
    "Date (UTC)": "06-06-2024 00:00",
    "Timestamp (UTC)": "1717632003",
    "Donald Trump": "0.555",
    "Joe Biden": "0.355",
    "Kamala Harris": "0.018"
  },
  {
    "Date (UTC)": "06-07-2024 00:00",
    "Timestamp (UTC)": "1717718402",
    "Donald Trump": "0.545",
    "Joe Biden": "0.345",
    "Kamala Harris": "0.0145"
  },
  {
    "Date (UTC)": "06-08-2024 00:00",
    "Timestamp (UTC)": "1717804802",
    "Donald Trump": "0.555",
    "Joe Biden": "0.335",
    "Kamala Harris": "0.0145"
  },
  {
    "Date (UTC)": "06-09-2024 00:00",
    "Timestamp (UTC)": "1717891203",
    "Donald Trump": "0.555",
    "Joe Biden": "0.335",
    "Kamala Harris": "0.0145"
  },
  {
    "Date (UTC)": "06-10-2024 00:00",
    "Timestamp (UTC)": "1717977604",
    "Donald Trump": "0.555",
    "Joe Biden": "0.335",
    "Kamala Harris": "0.0155"
  },
  {
    "Date (UTC)": "06-11-2024 00:00",
    "Timestamp (UTC)": "1718064002",
    "Donald Trump": "0.565",
    "Joe Biden": "0.335",
    "Kamala Harris": "0.0155"
  },
  {
    "Date (UTC)": "06-12-2024 00:00",
    "Timestamp (UTC)": "1718150403",
    "Donald Trump": "0.555",
    "Joe Biden": "0.34",
    "Kamala Harris": "0.0135"
  },
  {
    "Date (UTC)": "06-13-2024 00:00",
    "Timestamp (UTC)": "1718236803",
    "Donald Trump": "0.565",
    "Joe Biden": "0.345",
    "Kamala Harris": "0.0115"
  },
  {
    "Date (UTC)": "06-14-2024 00:00",
    "Timestamp (UTC)": "1718323203",
    "Donald Trump": "0.565",
    "Joe Biden": "0.345",
    "Kamala Harris": "0.014"
  },
  {
    "Date (UTC)": "06-15-2024 00:00",
    "Timestamp (UTC)": "1718409604",
    "Donald Trump": "0.565",
    "Joe Biden": "0.335",
    "Kamala Harris": "0.014"
  },
  {
    "Date (UTC)": "06-16-2024 00:00",
    "Timestamp (UTC)": "1718496004",
    "Donald Trump": "0.565",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.0145"
  },
  {
    "Date (UTC)": "06-17-2024 00:00",
    "Timestamp (UTC)": "1718582404",
    "Donald Trump": "0.565",
    "Joe Biden": "0.335",
    "Kamala Harris": "0.015"
  },
  {
    "Date (UTC)": "06-18-2024 00:00",
    "Timestamp (UTC)": "1718668803",
    "Donald Trump": "0.565",
    "Joe Biden": "0.335",
    "Kamala Harris": "0.015"
  },
  {
    "Date (UTC)": "06-19-2024 00:00",
    "Timestamp (UTC)": "1718755203",
    "Donald Trump": "0.565",
    "Joe Biden": "0.335",
    "Kamala Harris": "0.0145"
  },
  {
    "Date (UTC)": "06-20-2024 00:00",
    "Timestamp (UTC)": "1718841604",
    "Donald Trump": "0.565",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.016"
  },
  {
    "Date (UTC)": "06-21-2024 00:00",
    "Timestamp (UTC)": "1718928003",
    "Donald Trump": "0.565",
    "Joe Biden": "0.335",
    "Kamala Harris": "0.0155"
  },
  {
    "Date (UTC)": "06-22-2024 00:00",
    "Timestamp (UTC)": "1719014402",
    "Donald Trump": "0.565",
    "Joe Biden": "0.335",
    "Kamala Harris": "0.0205"
  },
  {
    "Date (UTC)": "06-23-2024 00:00",
    "Timestamp (UTC)": "1719100803",
    "Donald Trump": "0.575",
    "Joe Biden": "0.345",
    "Kamala Harris": "0.0145"
  },
  {
    "Date (UTC)": "06-24-2024 00:00",
    "Timestamp (UTC)": "1719187203",
    "Donald Trump": "0.575",
    "Joe Biden": "0.345",
    "Kamala Harris": "0.0145"
  },
  {
    "Date (UTC)": "06-25-2024 00:00",
    "Timestamp (UTC)": "1719273603",
    "Donald Trump": "0.585",
    "Joe Biden": "0.345",
    "Kamala Harris": "0.014"
  },
  {
    "Date (UTC)": "06-26-2024 00:00",
    "Timestamp (UTC)": "1719360003",
    "Donald Trump": "0.595",
    "Joe Biden": "0.335",
    "Kamala Harris": "0.013"
  },
  {
    "Date (UTC)": "06-27-2024 00:00",
    "Timestamp (UTC)": "1719446402",
    "Donald Trump": "0.595",
    "Joe Biden": "0.335",
    "Kamala Harris": "0.014"
  },
  {
    "Date (UTC)": "06-28-2024 00:00",
    "Timestamp (UTC)": "1719532803",
    "Donald Trump": "0.605",
    "Joe Biden": "0.325",
    "Kamala Harris": "0.011"
  },
  {
    "Date (UTC)": "06-29-2024 00:00",
    "Timestamp (UTC)": "1719619202",
    "Donald Trump": "0.625",
    "Joe Biden": "0.21",
    "Kamala Harris": "0.0345"
  },
  {
    "Date (UTC)": "06-30-2024 00:00",
    "Timestamp (UTC)": "1719705602",
    "Donald Trump": "0.625",
    "Joe Biden": "0.215",
    "Kamala Harris": "0.0285"
  },
  {
    "Date (UTC)": "07-01-2024 00:00",
    "Timestamp (UTC)": "1719792002",
    "Donald Trump": "0.615",
    "Joe Biden": "0.185",
    "Kamala Harris": "0.0515"
  },
  {
    "Date (UTC)": "07-02-2024 00:00",
    "Timestamp (UTC)": "1719878403",
    "Donald Trump": "0.66",
    "Joe Biden": "0.225",
    "Kamala Harris": "0.0445"
  },
  {
    "Date (UTC)": "07-03-2024 00:00",
    "Timestamp (UTC)": "1719964802",
    "Donald Trump": "0.65",
    "Joe Biden": "0.165",
    "Kamala Harris": "0.0965"
  },
  {
    "Date (UTC)": "07-04-2024 00:00",
    "Timestamp (UTC)": "1720051203",
    "Donald Trump": "0.615",
    "Joe Biden": "0.125",
    "Kamala Harris": "0.155"
  },
  {
    "Date (UTC)": "07-05-2024 00:00",
    "Timestamp (UTC)": "1720137602",
    "Donald Trump": "0.605",
    "Joe Biden": "0.085",
    "Kamala Harris": "0.201"
  },
  {
    "Date (UTC)": "07-06-2024 00:00",
    "Timestamp (UTC)": "1720224002",
    "Donald Trump": "0.605",
    "Joe Biden": "0.115",
    "Kamala Harris": "0.1595"
  },
  {
    "Date (UTC)": "07-07-2024 00:00",
    "Timestamp (UTC)": "1720310402",
    "Donald Trump": "0.625",
    "Joe Biden": "0.14",
    "Kamala Harris": "0.1385"
  },
  {
    "Date (UTC)": "07-08-2024 00:00",
    "Timestamp (UTC)": "1720396802",
    "Donald Trump": "0.625",
    "Joe Biden": "0.145",
    "Kamala Harris": "0.1305"
  },
  {
    "Date (UTC)": "07-09-2024 00:00",
    "Timestamp (UTC)": "1720483202",
    "Donald Trump": "0.605",
    "Joe Biden": "0.185",
    "Kamala Harris": "0.0605"
  },
  {
    "Date (UTC)": "07-10-2024 00:00",
    "Timestamp (UTC)": "1720569603",
    "Donald Trump": "0.625",
    "Joe Biden": "0.175",
    "Kamala Harris": "0.0905"
  },
  {
    "Date (UTC)": "07-11-2024 00:00",
    "Timestamp (UTC)": "1720656003",
    "Donald Trump": "0.625",
    "Joe Biden": "0.1",
    "Kamala Harris": "0.1545"
  },
  {
    "Date (UTC)": "07-12-2024 00:00",
    "Timestamp (UTC)": "1720742402",
    "Donald Trump": "0.6",
    "Joe Biden": "0.12",
    "Kamala Harris": "0.186"
  },
  {
    "Date (UTC)": "07-13-2024 00:00",
    "Timestamp (UTC)": "1720828803",
    "Donald Trump": "0.595",
    "Joe Biden": "0.155",
    "Kamala Harris": "0.1455"
  },
  {
    "Date (UTC)": "07-14-2024 00:00",
    "Timestamp (UTC)": "1720915202",
    "Donald Trump": "0.675",
    "Joe Biden": "0.15",
    "Kamala Harris": "0.086"
  },
  {
    "Date (UTC)": "07-15-2024 00:00",
    "Timestamp (UTC)": "1721001603",
    "Donald Trump": "0.695",
    "Joe Biden": "0.175",
    "Kamala Harris": "0.056"
  },
  {
    "Date (UTC)": "07-16-2024 00:00",
    "Timestamp (UTC)": "1721088002",
    "Donald Trump": "0.705",
    "Joe Biden": "0.175",
    "Kamala Harris": "0.0615"
  },
  {
    "Date (UTC)": "07-17-2024 00:00",
    "Timestamp (UTC)": "1721174401",
    "Donald Trump": "0.685",
    "Joe Biden": "0.185",
    "Kamala Harris": "0.0585"
  },
  {
    "Date (UTC)": "07-18-2024 00:00",
    "Timestamp (UTC)": "1721260802",
    "Donald Trump": "0.675",
    "Joe Biden": "0.115",
    "Kamala Harris": "0.1345"
  },
  {
    "Date (UTC)": "07-19-2024 00:00",
    "Timestamp (UTC)": "1721347201",
    "Donald Trump": "0.615",
    "Joe Biden": "0.0445",
    "Kamala Harris": "0.226"
  },
  {
    "Date (UTC)": "07-20-2024 00:00",
    "Timestamp (UTC)": "1721433601",
    "Donald Trump": "0.645",
    "Joe Biden": "0.067",
    "Kamala Harris": "0.1855"
  },
  {
    "Date (UTC)": "07-21-2024 00:00",
    "Timestamp (UTC)": "1721520001",
    "Donald Trump": "0.64",
    "Joe Biden": "0.0695",
    "Kamala Harris": "0.1825"
  },
  {
    "Date (UTC)": "07-22-2024 00:00",
    "Timestamp (UTC)": "1721606401",
    "Donald Trump": "0.63",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.2915"
  },
  {
    "Date (UTC)": "07-23-2024 00:00",
    "Timestamp (UTC)": "1721692801",
    "Donald Trump": "0.625",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.3235"
  },
  {
    "Date (UTC)": "07-24-2024 00:00",
    "Timestamp (UTC)": "1721779201",
    "Donald Trump": "0.605",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.3705"
  },
  {
    "Date (UTC)": "07-25-2024 00:00",
    "Timestamp (UTC)": "1721865601",
    "Donald Trump": "0.625",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.3215"
  },
  {
    "Date (UTC)": "07-26-2024 00:00",
    "Timestamp (UTC)": "1721952002",
    "Donald Trump": "0.615",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.347"
  },
  {
    "Date (UTC)": "07-27-2024 00:00",
    "Timestamp (UTC)": "1722038402",
    "Donald Trump": "0.585",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.3975"
  },
  {
    "Date (UTC)": "07-28-2024 00:00",
    "Timestamp (UTC)": "1722124802",
    "Donald Trump": "0.575",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.394"
  },
  {
    "Date (UTC)": "07-29-2024 00:00",
    "Timestamp (UTC)": "1722211202",
    "Donald Trump": "0.585",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.393"
  },
  {
    "Date (UTC)": "07-30-2024 00:00",
    "Timestamp (UTC)": "1722297601",
    "Donald Trump": "0.595",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.38"
  },
  {
    "Date (UTC)": "07-31-2024 00:00",
    "Timestamp (UTC)": "1722384002",
    "Donald Trump": "0.585",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.3855"
  },
  {
    "Date (UTC)": "08-01-2024 00:00",
    "Timestamp (UTC)": "1722470402",
    "Donald Trump": "0.555",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.417"
  },
  {
    "Date (UTC)": "08-02-2024 00:00",
    "Timestamp (UTC)": "1722556801",
    "Donald Trump": "0.535",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4415"
  },
  {
    "Date (UTC)": "08-03-2024 00:00",
    "Timestamp (UTC)": "1722643202",
    "Donald Trump": "0.525",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4395"
  },
  {
    "Date (UTC)": "08-04-2024 00:00",
    "Timestamp (UTC)": "1722729601",
    "Donald Trump": "0.545",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4315"
  },
  {
    "Date (UTC)": "08-05-2024 00:00",
    "Timestamp (UTC)": "1722816001",
    "Donald Trump": "0.515",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.446"
  },
  {
    "Date (UTC)": "08-06-2024 00:00",
    "Timestamp (UTC)": "1722902401",
    "Donald Trump": "0.535",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.437"
  },
  {
    "Date (UTC)": "08-07-2024 00:00",
    "Timestamp (UTC)": "1722988801",
    "Donald Trump": "0.515",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4585"
  },
  {
    "Date (UTC)": "08-08-2024 00:00",
    "Timestamp (UTC)": "1723075201",
    "Donald Trump": "0.485",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4915"
  },
  {
    "Date (UTC)": "08-09-2024 00:00",
    "Timestamp (UTC)": "1723161602",
    "Donald Trump": "0.4915",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4875"
  },
  {
    "Date (UTC)": "08-10-2024 00:00",
    "Timestamp (UTC)": "1723248002",
    "Donald Trump": "0.476",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4915"
  },
  {
    "Date (UTC)": "08-11-2024 00:00",
    "Timestamp (UTC)": "1723334401",
    "Donald Trump": "0.453",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.515"
  },
  {
    "Date (UTC)": "08-12-2024 00:00",
    "Timestamp (UTC)": "1723420801",
    "Donald Trump": "0.4555",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.5155"
  },
  {
    "Date (UTC)": "08-13-2024 00:00",
    "Timestamp (UTC)": "1723507202",
    "Donald Trump": "0.4585",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.512"
  },
  {
    "Date (UTC)": "08-14-2024 00:00",
    "Timestamp (UTC)": "1723593602",
    "Donald Trump": "0.4555",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.5245"
  },
  {
    "Date (UTC)": "08-15-2024 00:00",
    "Timestamp (UTC)": "1723680002",
    "Donald Trump": "0.447",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.5335"
  },
  {
    "Date (UTC)": "08-16-2024 00:00",
    "Timestamp (UTC)": "1723766402",
    "Donald Trump": "0.443",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.539"
  },
  {
    "Date (UTC)": "08-17-2024 00:00",
    "Timestamp (UTC)": "1723852802",
    "Donald Trump": "0.4545",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.5225"
  },
  {
    "Date (UTC)": "08-18-2024 00:00",
    "Timestamp (UTC)": "1723939202",
    "Donald Trump": "0.4865",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4975"
  },
  {
    "Date (UTC)": "08-19-2024 00:00",
    "Timestamp (UTC)": "1724025602",
    "Donald Trump": "0.4835",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4935"
  },
  {
    "Date (UTC)": "08-20-2024 00:00",
    "Timestamp (UTC)": "1724112001",
    "Donald Trump": "0.486",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.496"
  },
  {
    "Date (UTC)": "08-21-2024 00:00",
    "Timestamp (UTC)": "1724198402",
    "Donald Trump": "0.5025",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.481"
  },
  {
    "Date (UTC)": "08-22-2024 00:00",
    "Timestamp (UTC)": "1724284802",
    "Donald Trump": "0.5215",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.468"
  },
  {
    "Date (UTC)": "08-23-2024 00:00",
    "Timestamp (UTC)": "1724371202",
    "Donald Trump": "0.5175",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4715"
  },
  {
    "Date (UTC)": "08-24-2024 00:00",
    "Timestamp (UTC)": "1724457602",
    "Donald Trump": "0.5015",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.484"
  },
  {
    "Date (UTC)": "08-25-2024 00:00",
    "Timestamp (UTC)": "1724544001",
    "Donald Trump": "0.502",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4865"
  },
  {
    "Date (UTC)": "08-26-2024 00:00",
    "Timestamp (UTC)": "1724630402",
    "Donald Trump": "0.4955",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.496"
  },
  {
    "Date (UTC)": "08-27-2024 00:00",
    "Timestamp (UTC)": "1724716801",
    "Donald Trump": "0.4945",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4945"
  },
  {
    "Date (UTC)": "08-28-2024 00:00",
    "Timestamp (UTC)": "1724803201",
    "Donald Trump": "0.5035",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4835"
  },
  {
    "Date (UTC)": "08-29-2024 00:00",
    "Timestamp (UTC)": "1724889602",
    "Donald Trump": "0.503",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.484"
  },
  {
    "Date (UTC)": "08-30-2024 00:00",
    "Timestamp (UTC)": "1724976002",
    "Donald Trump": "0.498",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.483"
  },
  {
    "Date (UTC)": "08-31-2024 00:00",
    "Timestamp (UTC)": "1725062402",
    "Donald Trump": "0.4995",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4855"
  },
  {
    "Date (UTC)": "09-01-2024 00:00",
    "Timestamp (UTC)": "1725148802",
    "Donald Trump": "0.5025",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4825"
  },
  {
    "Date (UTC)": "09-02-2024 00:00",
    "Timestamp (UTC)": "1725235202",
    "Donald Trump": "0.5085",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4775"
  },
  {
    "Date (UTC)": "09-03-2024 00:00",
    "Timestamp (UTC)": "1725321602",
    "Donald Trump": "0.5175",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4705"
  },
  {
    "Date (UTC)": "09-04-2024 00:00",
    "Timestamp (UTC)": "1725408002",
    "Donald Trump": "0.5115",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4765"
  },
  {
    "Date (UTC)": "09-05-2024 00:00",
    "Timestamp (UTC)": "1725494402",
    "Donald Trump": "0.5295",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.46"
  },
  {
    "Date (UTC)": "09-06-2024 00:00",
    "Timestamp (UTC)": "1725580802",
    "Donald Trump": "0.528",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.459"
  },
  {
    "Date (UTC)": "09-07-2024 00:00",
    "Timestamp (UTC)": "1725667202",
    "Donald Trump": "0.5055",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4775"
  },
  {
    "Date (UTC)": "09-08-2024 00:00",
    "Timestamp (UTC)": "1725753602",
    "Donald Trump": "0.5",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4755"
  },
  {
    "Date (UTC)": "09-09-2024 00:00",
    "Timestamp (UTC)": "1725840001",
    "Donald Trump": "0.513",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.464"
  },
  {
    "Date (UTC)": "09-10-2024 00:00",
    "Timestamp (UTC)": "1725926402",
    "Donald Trump": "0.5225",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4605"
  },
  {
    "Date (UTC)": "09-11-2024 00:00",
    "Timestamp (UTC)": "1726012801",
    "Donald Trump": "0.5195",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.464"
  },
  {
    "Date (UTC)": "09-12-2024 00:00",
    "Timestamp (UTC)": "1726099202",
    "Donald Trump": "0.496",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4945"
  },
  {
    "Date (UTC)": "09-13-2024 00:00",
    "Timestamp (UTC)": "1726185602",
    "Donald Trump": "0.491",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4985"
  },
  {
    "Date (UTC)": "09-14-2024 00:00",
    "Timestamp (UTC)": "1726272002",
    "Donald Trump": "0.491",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.5005"
  },
  {
    "Date (UTC)": "09-15-2024 00:00",
    "Timestamp (UTC)": "1726358402",
    "Donald Trump": "0.4885",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.5035"
  },
  {
    "Date (UTC)": "09-16-2024 00:00",
    "Timestamp (UTC)": "1726444802",
    "Donald Trump": "0.494",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.496"
  },
  {
    "Date (UTC)": "09-17-2024 00:00",
    "Timestamp (UTC)": "1726531202",
    "Donald Trump": "0.4945",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4925"
  },
  {
    "Date (UTC)": "09-18-2024 00:00",
    "Timestamp (UTC)": "1726617602",
    "Donald Trump": "0.4805",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.5005"
  },
  {
    "Date (UTC)": "09-19-2024 00:00",
    "Timestamp (UTC)": "1726704001",
    "Donald Trump": "0.4675",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.5175"
  },
  {
    "Date (UTC)": "09-20-2024 00:00",
    "Timestamp (UTC)": "1726790402",
    "Donald Trump": "0.4715",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.5125"
  },
  {
    "Date (UTC)": "09-21-2024 00:00",
    "Timestamp (UTC)": "1726876802",
    "Donald Trump": "0.479",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.51"
  },
  {
    "Date (UTC)": "09-22-2024 00:00",
    "Timestamp (UTC)": "1726963202",
    "Donald Trump": "0.4755",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.512"
  },
  {
    "Date (UTC)": "09-23-2024 00:00",
    "Timestamp (UTC)": "1727049602",
    "Donald Trump": "0.4695",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.52"
  },
  {
    "Date (UTC)": "09-24-2024 00:00",
    "Timestamp (UTC)": "1727136002",
    "Donald Trump": "0.4825",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.505"
  },
  {
    "Date (UTC)": "09-25-2024 00:00",
    "Timestamp (UTC)": "1727222402",
    "Donald Trump": "0.481",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.503"
  },
  {
    "Date (UTC)": "09-26-2024 00:00",
    "Timestamp (UTC)": "1727308802",
    "Donald Trump": "0.4885",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.5015"
  },
  {
    "Date (UTC)": "09-27-2024 00:00",
    "Timestamp (UTC)": "1727395202",
    "Donald Trump": "0.4895",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.502"
  },
  {
    "Date (UTC)": "09-28-2024 00:00",
    "Timestamp (UTC)": "1727481602",
    "Donald Trump": "0.4855",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.5065"
  },
  {
    "Date (UTC)": "09-29-2024 00:00",
    "Timestamp (UTC)": "1727568003",
    "Donald Trump": "0.4825",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.506"
  },
  {
    "Date (UTC)": "09-30-2024 00:00",
    "Timestamp (UTC)": "1727654403",
    "Donald Trump": "0.4905",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.5025"
  },
  {
    "Date (UTC)": "10-01-2024 00:00",
    "Timestamp (UTC)": "1727740802",
    "Donald Trump": "0.4885",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4965"
  },
  {
    "Date (UTC)": "10-02-2024 00:00",
    "Timestamp (UTC)": "1727827202",
    "Donald Trump": "0.4825",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4985"
  },
  {
    "Date (UTC)": "10-03-2024 00:00",
    "Timestamp (UTC)": "1727913602",
    "Donald Trump": "0.4925",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4945"
  },
  {
    "Date (UTC)": "10-04-2024 00:00",
    "Timestamp (UTC)": "1728000002",
    "Donald Trump": "0.4965",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4955"
  },
  {
    "Date (UTC)": "10-05-2024 00:00",
    "Timestamp (UTC)": "1728086402",
    "Donald Trump": "0.4975",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4925"
  },
  {
    "Date (UTC)": "10-06-2024 00:00",
    "Timestamp (UTC)": "1728172802",
    "Donald Trump": "0.5015",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4895"
  },
  {
    "Date (UTC)": "10-07-2024 00:00",
    "Timestamp (UTC)": "1728259202",
    "Donald Trump": "0.5075",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4835"
  },
  {
    "Date (UTC)": "10-08-2024 00:00",
    "Timestamp (UTC)": "1728345602",
    "Donald Trump": "0.5395",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4575"
  },
  {
    "Date (UTC)": "10-09-2024 00:00",
    "Timestamp (UTC)": "1728432002",
    "Donald Trump": "0.529",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4655"
  },
  {
    "Date (UTC)": "10-10-2024 00:00",
    "Timestamp (UTC)": "1728518402",
    "Donald Trump": "0.5335",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4605"
  },
  {
    "Date (UTC)": "10-11-2024 00:00",
    "Timestamp (UTC)": "1728604803",
    "Donald Trump": "0.5545",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4395"
  },
  {
    "Date (UTC)": "10-12-2024 00:00",
    "Timestamp (UTC)": "1728691202",
    "Donald Trump": "0.5405",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.455"
  },
  {
    "Date (UTC)": "10-13-2024 00:00",
    "Timestamp (UTC)": "1728777603",
    "Donald Trump": "0.5495",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.447"
  },
  {
    "Date (UTC)": "10-14-2024 00:00",
    "Timestamp (UTC)": "1728864002",
    "Donald Trump": "0.5395",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4545"
  },
  {
    "Date (UTC)": "10-15-2024 00:00",
    "Timestamp (UTC)": "1728950402",
    "Donald Trump": "0.5505",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4435"
  },
  {
    "Date (UTC)": "10-16-2024 00:00",
    "Timestamp (UTC)": "1729036803",
    "Donald Trump": "0.5765",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.422"
  },
  {
    "Date (UTC)": "10-17-2024 00:00",
    "Timestamp (UTC)": "1729123202",
    "Donald Trump": "0.5855",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4105"
  },
  {
    "Date (UTC)": "10-18-2024 00:00",
    "Timestamp (UTC)": "1729209602",
    "Donald Trump": "0.6185",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.3815"
  },
  {
    "Date (UTC)": "10-19-2024 00:00",
    "Timestamp (UTC)": "1729296002",
    "Donald Trump": "0.5995",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4005"
  },
  {
    "Date (UTC)": "10-20-2024 00:00",
    "Timestamp (UTC)": "1729382402",
    "Donald Trump": "0.6005",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.3985"
  },
  {
    "Date (UTC)": "10-21-2024 00:00",
    "Timestamp (UTC)": "1729468802",
    "Donald Trump": "0.6065",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.3925"
  },
  {
    "Date (UTC)": "10-22-2024 00:00",
    "Timestamp (UTC)": "1729555202",
    "Donald Trump": "0.649",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.3515"
  },
  {
    "Date (UTC)": "10-23-2024 00:00",
    "Timestamp (UTC)": "1729641602",
    "Donald Trump": "0.6475",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.3515"
  },
  {
    "Date (UTC)": "10-24-2024 00:00",
    "Timestamp (UTC)": "1729728003",
    "Donald Trump": "0.6155",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.3845"
  },
  {
    "Date (UTC)": "10-25-2024 00:00",
    "Timestamp (UTC)": "1729814403",
    "Donald Trump": "0.641",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.3605"
  },
  {
    "Date (UTC)": "10-26-2024 00:00",
    "Timestamp (UTC)": "1729900803",
    "Donald Trump": "0.6385",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.3605"
  },
  {
    "Date (UTC)": "10-27-2024 00:00",
    "Timestamp (UTC)": "1729987203",
    "Donald Trump": "0.6455",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.353"
  },
  {
    "Date (UTC)": "10-28-2024 00:00",
    "Timestamp (UTC)": "1730073603",
    "Donald Trump": "0.6495",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.3485"
  },
  {
    "Date (UTC)": "10-29-2024 00:00",
    "Timestamp (UTC)": "1730160002",
    "Donald Trump": "0.6585",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.3415"
  },
  {
    "Date (UTC)": "10-30-2024 00:00",
    "Timestamp (UTC)": "1730246403",
    "Donald Trump": "0.6655",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.3345"
  },
  {
    "Date (UTC)": "10-31-2024 00:00",
    "Timestamp (UTC)": "1730332803",
    "Donald Trump": "0.6475",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.352"
  },
  {
    "Date (UTC)": "11-01-2024 00:00",
    "Timestamp (UTC)": "1730419203",
    "Donald Trump": "0.6325",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.368"
  },
  {
    "Date (UTC)": "11-02-2024 00:00",
    "Timestamp (UTC)": "1730505603",
    "Donald Trump": "0.5825",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4185"
  },
  {
    "Date (UTC)": "11-03-2024 00:00",
    "Timestamp (UTC)": "1730592003",
    "Donald Trump": "0.5585",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4415"
  },
  {
    "Date (UTC)": "11-04-2024 00:00",
    "Timestamp (UTC)": "1730678403",
    "Donald Trump": "0.5635",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.435"
  },
  {
    "Date (UTC)": "11-05-2024 00:00",
    "Timestamp (UTC)": "1730764802",
    "Donald Trump": "0.5855",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4145"
  },
  {
    "Date (UTC)": "11-06-2024 00:00",
    "Timestamp (UTC)": "1730851202",
    "Donald Trump": "0.58",
    "Joe Biden": "5e-4",
    "Kamala Harris": "0.4215"
  }
];
var TrumpLineChart_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#trump-line-chart.svelte-6qlx0l{font-family:Arial, sans-serif}.chart text{font-size:11px;fill:#333}.chart .domain{stroke:#333}.chart .tick line{stroke:#ccc}",
  map: null
};
let height = 600;
const TrumpLineChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let chartWidth;
  let xScale;
  let yScale;
  let line;
  let pathData;
  let { currentStep = 0 } = $$props;
  let pathElement;
  let width = 600;
  let margin = {
    top: 10,
    bottom: 100,
    left: 60,
    right: 30
  };
  let chartHeight = height - margin.top - margin.bottom;
  const parseDate = d3.timeParse("%m-%d-%Y");
  const processedData = data.map((d) => ({
    Date: parseDate(d["Date (UTC)"].split(" ")[0]),
    TrumpValue: +d["Donald Trump"]
  })).filter((d) => d.Date && !isNaN(d.TrumpValue));
  d3.extent(processedData, (d) => d.TrumpValue);
  if ($$props.currentStep === void 0 && $$bindings.currentStep && currentStep !== void 0)
    $$bindings.currentStep(currentStep);
  $$result.css.add(css$1);
  chartWidth = width - margin.left - margin.right;
  xScale = d3.scaleTime().domain(d3.extent(processedData, (d) => d.Date)).range([0, chartWidth]);
  yScale = d3.scaleLinear().domain([0.3, 0.7]).nice().range([chartHeight, 0]);
  line = d3.line().x((d) => xScale(d.Date)).y((d) => yScale(d.TrumpValue)).curve(d3.curveMonotoneX);
  pathData = line(processedData);
  d3.axisBottom(xScale).tickFormat(d3.timeFormat("%b %Y"));
  d3.axisLeft(yScale).tickFormat(d3.format(".0%"));
  return `<div id="${"trump-line-chart"}" class="${"svelte-6qlx0l"}"><svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}><g class="${"chart"}" transform="${"translate(" + escape(margin.left) + ", " + escape(margin.top) + ")"}"><path${add_attribute("d", pathData, 0)} stroke="${"#dc2626"}" stroke-width="${"2"}" fill="${"none"}"${add_attribute("this", pathElement, 0)}></path><line${add_attribute("x1", 0, 0)}${add_attribute("x2", chartWidth, 0)}${add_attribute("y1", yScale(0.5), 0)}${add_attribute("y2", yScale(0.5), 0)} stroke="${"red"}" stroke-width="${"2"}" stroke-dasharray="${"4,2"}"></line><g${add_attribute("transform", `translate(0, ${chartHeight})`, 0)}></g><g></g></g></svg>
</div>`;
});
const Scrolly = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { root = null } = $$props;
  let { top = 0 } = $$props;
  let { bottom = 0 } = $$props;
  let { increments = 100 } = $$props;
  let { value = void 0 } = $$props;
  const steps = [];
  const threshold = [];
  let nodes = [];
  let intersectionObservers = [];
  let container;
  const update = () => {
    if (!nodes.length)
      return;
    nodes.forEach(createObserver);
  };
  const mostInView = () => {
    let maxRatio = 0;
    let maxIndex = 0;
    for (let i = 0; i < steps.length; i++) {
      if (steps[i] > maxRatio) {
        maxRatio = steps[i];
        maxIndex = i;
      }
    }
    if (maxRatio > 0)
      value = maxIndex;
    else
      value = void 0;
  };
  const createObserver = (node, index) => {
    const handleIntersect = (e) => {
      e[0].isIntersecting;
      const ratio = e[0].intersectionRatio;
      steps[index] = ratio;
      mostInView();
    };
    const marginTop = top ? top * -1 : 0;
    const marginBottom = bottom ? bottom * -1 : 0;
    const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
    const options = { root, rootMargin, threshold };
    if (intersectionObservers[index])
      intersectionObservers[index].disconnect();
    const io = new IntersectionObserver(handleIntersect, options);
    io.observe(node);
    intersectionObservers[index] = io;
  };
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.increments === void 0 && $$bindings.increments && increments !== void 0)
    $$bindings.increments(increments);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  {
    update();
  }
  return `<div${add_attribute("this", container, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '.svelte-1p0wspx.svelte-1p0wspx{box-sizing:border-box}.step.svelte-1p0wspx.svelte-1p0wspx{height:80vh;display:flex;place-items:center;justify-content:center}.step-content.svelte-1p0wspx.svelte-1p0wspx{background:whitesmoke;color:#ccc;border-radius:5px;padding:0.5rem 1rem;display:flex;flex-direction:column;justify-content:center;transition:background 500ms ease;box-shadow:1px 1px 10px rgba(0, 0, 0, 0.2);z-index:10}.step.active.svelte-1p0wspx .step-content.svelte-1p0wspx{background:white;color:black}body{margin:0;overflow-x:hidden;width:100%;font-size:20px;font-family:Arial, Helvetica, sans-serif;text-rendering:optimizeLegibility}.section-container.svelte-1p0wspx.svelte-1p0wspx{margin-top:1em;text-align:center;transition:background 100ms;display:flex}.hero.svelte-1p0wspx.svelte-1p0wspx{background-color:#a2a251;padding:1.5rem;width:100%;margin:0;overflow-x:hidden}.hero-body.svelte-1p0wspx.svelte-1p0wspx{width:100%;margin:0}.section-container.svelte-1p0wspx.svelte-1p0wspx{flex-direction:column-reverse}.sticky.svelte-1p0wspx.svelte-1p0wspx{width:95%;margin:auto}.content.svelte-1p0wspx.svelte-1p0wspx{max-width:640px;margin:auto}.header.svelte-1p0wspx.svelte-1p0wspx{padding:3em 0;padding-bottom:0em}a.svelte-1p0wspx.svelte-1p0wspx{color:#95cb99}.footer.svelte-1p0wspx.svelte-1p0wspx{background:#a2a251;text-align:center;font-size:0.8em;margin-top:4em;padding:4em 0}.spacer.svelte-1p0wspx.svelte-1p0wspx{height:40vh}h1.svelte-1p0wspx.svelte-1p0wspx{font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:3em;line-height:1.1}.subhead.svelte-1p0wspx.svelte-1p0wspx{font-family:"Lora", Georgia, serif}p.svelte-1p0wspx.svelte-1p0wspx{line-height:1.6;margin:0;padding-bottom:1.2em}.full-width.svelte-1p0wspx.svelte-1p0wspx{max-width:760px;text-align:center;margin:auto}.chart-title.svelte-1p0wspx.svelte-1p0wspx{font-size:24px;font-weight:bold;text-align:left;margin-bottom:0.5em;margin-left:auto;margin-right:auto}.chart-subtitle.svelte-1p0wspx.svelte-1p0wspx{font-size:14px;text-align:left;margin-bottom:0.5em}.steps-container.svelte-1p0wspx.svelte-1p0wspx,.sticky.svelte-1p0wspx.svelte-1p0wspx{height:100%}.steps-container.svelte-1p0wspx.svelte-1p0wspx{flex:1 1 40%;z-index:10}.sticky.svelte-1p0wspx.svelte-1p0wspx{position:sticky;top:10%;flex:1 1 60%}@media(max-width: 640px){.content.svelte-1p0wspx.svelte-1p0wspx{padding-left:0.5em;padding-right:0.5em}.hero.svelte-1p0wspx.svelte-1p0wspx{padding:1rem}.hero-body.svelte-1p0wspx.svelte-1p0wspx{width:100%;margin:0}.footer.svelte-1p0wspx.svelte-1p0wspx{width:100%}}p.svelte-1p0wspx.svelte-1p0wspx{max-width:700px}',
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentStep;
  const steps = [
    "<p>Our chart shows how Polymarket reacted to news as Trump ran for president. The red line indicates a 50% chance of winning.</p>",
    "<p>In July, Biden wirthdrew from the race and the market promptly reacted, increasing Trump's chances of winning to nearly 70%.</p>",
    "<p>The market settled back down, but rarely favored Kamala Harris.</p> <p>Does this predicitng power go beyond the presidential election?</p>"
  ];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="${"hero svelte-1p0wspx"}"><div class="${"hero-body svelte-1p0wspx"}"><a href="${"https://cj-robinson.github.io"}" style="${"color:transparent;"}" class="${"svelte-1p0wspx"}"><h1 class="${"title svelte-1p0wspx"}" style="${"font-family: -apple-system, BlinkMacSystemFont, 'helvetica neue', helvetica,arial, sans-serif; color: white; font-size: 2rem; margin: 0;"}">C.J. Robinson
      </h1></a></div></section>
<div class="${"content svelte-1p0wspx"}"><div class="${"header svelte-1p0wspx"}"><h1 class="${"svelte-1p0wspx"}">Know what Trump is going to do next? Willing to bet on it?</h1>
    <p class="${"subhead svelte-1p0wspx"}">An analysis of how accurate political betting markets can be in the age of
      Donald Trump
    </p></div>
  <div class="${"byline svelte-1p0wspx"}"><p class="${"svelte-1p0wspx"}">By <a href="${"https://cj-robinson.github.io"}" class="${"svelte-1p0wspx"}">C.J. Robinson</a></p></div>
  <p class="${"svelte-1p0wspx"}">The rise of prediction markets like Polymarket over the past decade has
    given them large-scale legitimacy, especially after their correct prediction
    of the 2024 election. A new analysis reveals, however, that markets may have
    a harder time predicting Trump&#39;s actions compared to other political events.
  </p>

  <div class="${"section-container svelte-1p0wspx"}"><div class="${"steps-container svelte-1p0wspx"}"><div class="${"spacer svelte-1p0wspx"}"></div>
      
      ${validate_component(Scrolly, "Scroll").$$render($$result, { value: currentStep }, {
      value: ($$value) => {
        currentStep = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${each(steps, (text, i) => {
          return `<div class="${["step svelte-1p0wspx", currentStep === i ? "active" : ""].join(" ").trim()}"><div class="${"step-content svelte-1p0wspx"}"><!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END --></div>
          </div>`;
        })}`;
      }
    })}
      <div class="${"spacer svelte-1p0wspx"}"></div></div>
    <div class="${"full-width sticky svelte-1p0wspx"}"><div class="${"chart-title svelte-1p0wspx"}">Polymarket&#39;s fame largely increased after it accurately predicted the
        presidential election
      </div>
      <div class="${"chart-subtitle svelte-1p0wspx"}">Likelihood Donald Trump would win the presidency, according to
        Polymarket.
      </div>
      ${validate_component(TrumpLineChart, "TrumpLineChart").$$render($$result, { currentStep }, {}, {})}</div></div>

  <p class="${"svelte-1p0wspx"}">Proponents of these markets argue that since <a href="${"https://finance.yahoo.com/news/elon-musk-advocates-crypto-prediction-072206636.html"}" class="${"svelte-1p0wspx"}">money is on the line</a>, they can often lead to more powerful predictions. Users will buy or sell
    shares of a certain outcome, like whether Trump will end the war in Ukraine
    within 90 days of his presidency. Each possible outcome&#39;s price rises and
    falls in real time as users trade using real money.
  </p>
  <p class="${"svelte-1p0wspx"}">Utilizing the Polymarket to analyze each political event since 2024, the
    analysis found that large political betting markets not mentioning Trump
    correctly predicted outcomes almost 80% of the time. For markets dealing
    with Trump, that accuracy fell to 68%.
  </p>

  <div class="${"chart-title svelte-1p0wspx"}">With money on the line, predictions about Trump are less accurate
  </div>
  <div class="${"chart-subtitle svelte-1p0wspx"}">Proportion of Polymarket events where market correctly predicted outcome
    from January 2024 to March 2025
  </div></div>
<div class="${"full-width svelte-1p0wspx"}">${validate_component(TrumpAccuracyPictogram, "TrumpAccuracyPictogram").$$render($$result, {}, {}, {})}</div>
<div class="${"content svelte-1p0wspx"}"><p class="${"svelte-1p0wspx"}">There may be several reasons for this discrepancy.</p>
  <p class="${"svelte-1p0wspx"}">First, markets may be influenced by decisions by external factors like
    political preference.
  </p>
  <p class="${"svelte-1p0wspx"}">Mattew Flynn, a professor at Texas State University, said these markets
    differ from the stock market in how they price information, and possibly
    their accuracy. He found that Polymarket can react more quickly than
    traditional markets to changes. Even still, investing in an individual&#39;s
    decisions rather than a corporation leads to differing incentives.
  </p>
  <p class="${"svelte-1p0wspx"}">\u201CIn some sense, it does ignore if you have some strong behavioral bias that
    might influence you to act a certain way,\u201D Flynn said. \u201CIf you love the
    Mets, even though the Mets might not be good, you&#39;d still bet on the Mets
    all the time.\u201D
  </p>
  <p class="${"svelte-1p0wspx"}"><a href="${"https://finance.yahoo.com/news/polymarket-whale-actually-made-85-050139914.html"}" class="${"svelte-1p0wspx"}">Evidence of \u201Cwhales\u201D</a> who dumped large amounts of money into markets predicting the presidential
    election caused controversy in 2024 by those alleging market manipulation.
  </p>
  <p class="${"svelte-1p0wspx"}">Markets may have differing levels of trading volume. A less popular market
    predicting a specific action of Trump may be less accurate than a larger
    market predicting the actions of the Federal Reserve. The data shows that
    accuracy is largely unaffected by the amount of money in a market.
  </p>
  <p class="${"svelte-1p0wspx"}">Many of these markets involve President Trump, especially since his
    inauguration.
  </p>

  <div class="${"chart-title svelte-1p0wspx"}">In January 2025, Trump dominated political betting and prediction markets
  </div>
  <div class="${"chart-subtitle svelte-1p0wspx"}">Percentage of political Polymarket events mentioning Trump by month of
    market creation
  </div></div>

<div class="${"full-width svelte-1p0wspx"}">${validate_component(TimelineBarChart, "TimelineBarChart").$$render($$result, {}, {}, {})}</div>

<div class="${"content svelte-1p0wspx"}"><p class="${"svelte-1p0wspx"}">This presents an increasing risk to investors in these markets and casts
    doubt on the predictive power of these markets as a whole. Polymarket users
    have already invested more than $18 million on whether Trump will end the
    war in Ukraine by the end of his first 90 days (currently, a 30% chance of
    occurring, according to the bettors).
  </p></div>
<div class="${"footer svelte-1p0wspx"}"><p class="${"svelte-1p0wspx"}">Find the code and data for this project <a href="${"https://github.com/cj-robinson/polymarket-accuracy"}" class="${"svelte-1p0wspx"}">here</a>

    </p>
  <div class="${"social-icons mt-4 svelte-1p0wspx"}"><a href="${"mailto:c.j.robinson@columbia.edu"}" class="${"icon is-medium mr-3 svelte-1p0wspx"}" style="${"color:transparent;"}"><i class="${"fas fa-envelope fa-lg svelte-1p0wspx"}" style="${"color:white;"}"></i></a>
    <a href="${"https://bsky.app/profile/cj-robinson.bsky.social"}" class="${"icon is-medium mr-3 svelte-1p0wspx"}" style="${"color:transparent;"}"><i class="${"fa-brands fa-bluesky svelte-1p0wspx"}" style="${"color:white;"}"></i></a>
    <a href="${"https://www.linkedin.com/in/christophercjrobinson"}" class="${"icon is-medium mr-3 svelte-1p0wspx"}" style="${"color:transparent;"}"><i class="${"fab fa-linkedin fa-lg svelte-1p0wspx"}" style="${"color:white;"}"></i></a>
    <a href="${"https://github.com/cj-robinson"}" class="${"icon is-medium mr-3 svelte-1p0wspx"}" style="${"color:transparent;"}"><i class="${"fab fa-github fa-lg svelte-1p0wspx"}" style="${"color:white;"}"></i></a></div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export { Routes as default };
