import config from "./config.js";
import { chart_multiserieline, chart_multiline } from "./test.js";

class MicrofonoButton extends HTMLElement {
  // Define el constructor
  constructor() {
    super();
    const mainDiv = document.createElement("div");
    mainDiv.className = "nlq2sql-main-div";
    // Crea un elemento de botón con un icono de micrófono
    const recordButton = document.createElement("button");
    recordButton.className = "nlq2sql_record_btn";
    recordButton.innerHTML = '<i class="fa fa-microphone"></i>';

    // Agrega un evento de clic al botón que ejecuta la función 'miFuncion'
    recordButton.addEventListener("click", async function () {
      if (config.SPEECH_KEY === "" || config.SPEECH_REGION === "") {
        alert(
          "Por favor ingresa la clave de subscripcion de Microsoft Cognitive Services Speech."
        );
        return;
      }
      
      recordButton.disabled = true;
      recordButton.classList.add("nlq2sql_pulse");

      var transcription = await getTranscription();
      console.info("Transcripcion:")
      console.log(transcription);

      recordButton.classList.remove("nlq2sql_pulse");
      recordButton.hidden = true;

      const loader = document.createElement("div");
      loader.className = "lds-dual-ring";
      mainDiv.appendChild(loader);

      const titleH2 = document.createElement("h2");
      titleH2.className = "nlq2sql_title_h2";
      titleH2.innerHTML = "Comando:";

      const transcriptionH1 = document.createElement("h1");
      transcriptionH1.className = "nlq2sql_transcription_h1";
      transcriptionH1.innerHTML += transcription;

      const divBackground = document.createElement("div");
      divBackground.className = "nlq2sql_background_div";

      const divChart = document.createElement("div");
      divChart.className = "nlq2sql_result_div";

      const closeButton = document.createElement("button");
      closeButton.className = "nlq2sql_div_close_button";
      closeButton.innerHTML = "X";
      closeButton.addEventListener("click", () => divBackground.remove());

      const bridgeAPIResponse = await fetch(config.API_BRIDGE_NLQ2SQL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nlq: transcription }),
      });

      const apiResponse = await bridgeAPIResponse.json();
      
      //const apiResponse = chart_multiserieline;
      console.info("API response:")
      console.log(apiResponse);

      const queryH2 = document.createElement("h3");
      queryH2.className = "nlq2sql_title_h2";

      divChart.appendChild(titleH2);
      divChart.appendChild(transcriptionH1);
      divChart.appendChild(closeButton);

      if (apiResponse.nlq2sql.result === "OK") {
        if (config.DEBUG_MODE) {
          queryH2.innerHTML = apiResponse.queryExecution.queryMapped;
          divChart.appendChild(queryH2);
        }

        if (apiResponse.queryExecution.result === "OK")
          divChart.appendChild(
            getResponseNode(
              apiResponse.nlq2sql.type,
              apiResponse.queryExecution.data,
              apiResponse.queryExecution.formats
            )
          );
        else {
          divChart.appendChild(errorExecutionNode());
        } 
      } else {
        queryH2.innerHTML = "Error al obtener la consulta.";
        divChart.appendChild(queryH2);
      }

      divBackground.appendChild(divChart);
      document.body.appendChild(divBackground);

      loader.remove();
      recordButton.disabled = false;
      recordButton.hidden = false;
    });
    mainDiv.appendChild(recordButton);
    this.appendChild(mainDiv);
  }
}

async function getTranscription() {
  var sdk = window.SpeechSDK;
  
  var speechConfig = sdk.SpeechConfig.fromSubscription(
    config.SPEECH_KEY,
    config.SPEECH_REGION
  );
  speechConfig.speechRecognitionLanguage = config.SPEECH_LANGUAGE;

  var audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();

  var recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

  return new Promise(async (resolve, reject) => {
    await recognizer.recognizeOnceAsync(
      async function (result) {
        recognizer.close();
        recognizer = undefined;
        resolve(result.text);
      },
      function (error) {
        console.error(error);
        recognizer.close();
        recognizer = undefined;
        reject("No fue posible obtener la transcripción.");
      }
    );
  });
}

function getResponseNode(type, data, formats) {
  if (data.length == 0) return noDataAvailableNode();

  if (type.startsWith("chart")) {
    return getChartNode(type, data, formats);
  }

  if (type === "rows" && data.length == 1 && Object.keys(data[0]).length == 1) {
    return getValueNode(data, formats);
  }

  if (type === "rows") {
    return getTableNode(data, formats);
  }

  return errorExecutionNode();
}

function getFormattedData(data, formats) {
  formats.forEach((format) => {
    if (format.format !== "") {
      data.forEach((row) => {
        row[format.dataColumnName] = `${row[format.dataColumnName]} ${
          format.format
        }`;
      });
    }
  });

  return data;
}

function getColumnAlias(dataColumnName, formats) {
  var alias = dataColumnName;
  formats.forEach((format) => {
    if (format.dataColumnName.toLowerCase() === dataColumnName.toLowerCase()){
      alias = format.alias;
    } 
  });
  return alias;
}

function noDataAvailableNode() {
  const p = document.createElement("p");
  p.className = "nlq2sql-value-p";
  p.innerText = "Sin datos disponibles";
  return p;
}

function errorExecutionNode() {
  const p = document.createElement("h2");
  p.className = "nlq2sql_title_h2";
  p.innerText = "Error al ejecutar la consulta.";
  return p;
}

function getValueNode(data, formats) {
  const p = document.createElement("p");
  p.className = "nlq2sql-value-p";
  const obj = Object.values(getFormattedData(data, formats)[0]);
  p.innerText = obj[0];
  return p;
}

function getTableNode(data, formats) {
  console.log(data)
  console.log(formats)
  const formated_data = getFormattedData(data, formats);
  let div = document.createElement("div");
  // Create the table element
  let table = document.createElement("table");

  // Get the keys (column names) of the first object in the JSON data
  let cols = Object.keys(formated_data[0]);

  // Create the header element
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");

  // Loop through the column names and create header cells
  cols.forEach((item) => {
    let th = document.createElement("th");
    th.innerText = getColumnAlias(item, formats); // Set the column name as the text of the header cell
    tr.appendChild(th); // Append the header cell to the header row
  });
  thead.appendChild(tr); // Append the header row to the header
  table.append(tr); // Append the header to the table

  // Loop through the JSON data and create table rows
  formated_data.forEach((item) => {
    let tr = document.createElement("tr");

    // Get the values of the current object in the JSON data
    let vals = Object.values(item);

    // Loop through the values and create table cells
    vals.forEach((elem) => {
      let td = document.createElement("td");
      td.innerText = elem; // Set the value as the text of the table cell
      tr.appendChild(td); // Append the table cell to the table row
    });
    table.appendChild(tr); // Append the table row to the table
  });
  table.className = "nlq2sql-data-table";
  div.appendChild(table);
  div.className = "nlq2sql-table-div";
  return div;
}

function getChartNode(type, data, formats) {
  var labels = [];
  var datasets = [];
  var columnNames = Object.keys(data[0]);
  var borderColors = [
    "rgb(255, 99, 132)",
    "rgb(41, 128, 185)",
    "rgb(40, 180, 99)",
    "rgb(241, 196, 15)",
    "rgb(125, 60, 152 )",

    "rgb(97, 106, 107)",
    "rgb(133, 193, 233)",
    "rgb(130, 224, 170)",
    "rgb(241, 148, 138)",
    "rgb(210, 180, 222  )",
  ];
  var backgroundColors = [
    "rgb(255, 99, 132, 0.5)",
    "rgb(41, 128, 185, 0.5)",
    "rgb(40, 180, 99, 0.5)",
    "rgb(241, 196, 15, 0.5)",
    "rgb(125, 60, 152 , 0.5)",

    "rgb(97, 106, 107, 0.5)",
    "rgb(133, 193, 233, 0.5)",
    "rgb(130, 224, 170, 0.5)",
    "rgb(241, 148, 138, 0.5)",
    "rgb(210, 180, 222  , 0.5)",
  ];

  if (type === "chart_line" || type === "chart_multiline") {
    labels = data.map(row => row[columnNames[0]]);

    datasets = columnNames
      .filter((colName, index) => index > 0)
      .map((colName, index) => {
        return {
          label: formats
            .filter((format) => format.dataColumnName == colName)
            .map((format) => format.alias)
            .toString(),
          data: data.map(obj => obj[colName]),
          borderColor: borderColors[index],
          backgroundColor: backgroundColors[index],
          fill: true,
          tension: 0.4,
        };
      });
  }

  if (type === "chart_multiserieline") {
    const series = [ ...new Set(data.map(row => row[columnNames[0]]))];
    labels = [ ...new Set(data.map(obj => obj[columnNames[1]]))];
    datasets = series.map((serie,index) => {
      return {
        label: serie,
        data: labels.map(label => 
          data.filter(obj => obj[columnNames[0]] === serie && obj[columnNames[1]] === label).map(obj => obj[columnNames[2]]).toString()
        ),
        borderColor: borderColors[index],
        backgroundColor: backgroundColors[index],
        fill: true,
        tension: 0.4,
      }
    })
  }

  const chart_data = {
    labels: labels,
    datasets: datasets,
  };

  const config = {
    type: "line",
    data: chart_data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: (type === "chart_multiserieline" ? formats[2].alias : ""),
        },
      },
      scales: {
        y: {
          ticks: {
            callback: function (value, index, ticks) {
              return value.toFixed(2) + (type === "chart_multiserieline" ? formats[2].format : formats[1].format);
            },
          },
        },
      },
    },
  };

  const canvasChart = document.createElement("canvas");
  canvasChart.className = "nlq2sql_chart_canvas";

  new Chart(canvasChart, config);
  return canvasChart;
}
// Registra el web component en el navegador
customElements.define("nlq2sql-control", MicrofonoButton);
