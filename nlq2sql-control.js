import config from "./config.js";

class MicrofonoButton extends HTMLElement {
  // Define el constructor
  constructor() {
    super();
    const mainDiv = document.createElement("div")
    mainDiv.className = "nlq2sql-main-div"
    // Crea un elemento de botón con un icono de micrófono
    const recordButton = document.createElement("button");
    recordButton.className = "nlq2sql_record_btn";
    recordButton.innerHTML = '<i class="fa fa-microphone"></i>';

    // Agrega un evento de clic al botón que ejecuta la función 'miFuncion'
    recordButton.addEventListener("click", async function () {
      recordButton.classList.add('nlq2sql_pulse');

      const titleH2 = document.createElement("h2");
      titleH2.className = "nlq2sql_title_h2";
      titleH2.innerHTML = "Comando:";

      const transcriptionH1 = document.createElement("h1");
      transcriptionH1.className = "nlq2sql_transcription_h1";
      recordButton.disabled = true;

      if (config.SPEECH_KEY === "" || config.SPEECH_REGION === "") {
        alert(
          "Por favor ingresa la clave de subscripcion de Microsoft Cognitive Services Speech."
        );
        return;
      }

      var sdk = window.SpeechSDK;
      var speechConfig = sdk.SpeechConfig.fromSubscription(
        config.SPEECH_KEY,
        config.SPEECH_REGION
      );
      speechConfig.speechRecognitionLanguage = config.SPEECH_LANGUAGE;

      var audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
      var recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

      await recognizer.recognizeOnceAsync(
        async function (result) {
          const loader = document.createElement("div")
          loader.className="lds-dual-ring"

          recordButton.classList.remove('nlq2sql_pulse');
          recordButton.hidden=true;

          mainDiv.appendChild(loader);
          transcriptionH1.innerHTML += result.text;

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
            body: JSON.stringify({ nlq: result.text }),
          });
          const bridgeAPIResponseData = await bridgeAPIResponse.json();

          const queryH2 = document.createElement("h3");
          queryH2.className = "nlq2sql_title_h2";

          divChart.appendChild(titleH2);
          divChart.appendChild(transcriptionH1);
          divChart.appendChild(closeButton);

          if (bridgeAPIResponseData.nlq2sql.result === "OK") {
            queryH2.innerHTML = bridgeAPIResponseData.nlq2sql.query;
            divChart.appendChild(queryH2);

            if (bridgeAPIResponseData.queryExecution.result === "OK") {
              if (bridgeAPIResponseData.nlq2sql.type === "chart") {
                divChart.appendChild(
                  getChart(bridgeAPIResponseData.queryExecution.data)
                );
              }

              if (
                bridgeAPIResponseData.nlq2sql.type === "rows" &&
                bridgeAPIResponseData.queryExecution.data.length == 1 &&
                Object.keys(bridgeAPIResponseData.queryExecution.data[0]).length == 1
              ) {
                divChart.appendChild(
                  getValues(bridgeAPIResponseData.queryExecution.data)
                );
              }

              if (
                bridgeAPIResponseData.nlq2sql.type === "rows" &&
                bridgeAPIResponseData.queryExecution.data.length > 1
              ) {
                divChart.appendChild(
                  getTable(bridgeAPIResponseData.queryExecution.data)
                );
              }
            } else {
              divChart.append(
                "<h2 class='nlq2sql_title_h2'>Error al ejecutar el query.</h2>"
              );
            }
          } else {
            queryH2.innerHTML = "Error al obtener el query.";
            divChart.appendChild(queryH2);
          }

          divBackground.appendChild(divChart);
          document.body.appendChild(divBackground);

          recognizer.close();
          recognizer = undefined;
          loader.remove();
          recordButton.disabled=false;
          recordButton.hidden=false;
        },
        function (err) {
          recognizer.close();
          recognizer = undefined;

          transcriptionH1.innerHTML = "Error durante la transcripción.";
          recordButton.classList.remove('nlq2sql_pulse');
          recordButton.disabled=false;
        }
      );
    });
    mainDiv.appendChild(recordButton);
    this.appendChild(mainDiv);
  }
}

function getValues(data) {
  const p = document.createElement("p");
  p.className = "nlq2sql-value-p"
  const obj = Object.values(data[0]);
  p.innerText = obj[0]
  return p;
}

function getTable(jsonData) {
  let div = document.createElement("div");
  // Create the table element
  let table = document.createElement("table");

  // Get the keys (column names) of the first object in the JSON data
  let cols = Object.keys(jsonData[0]);

  // Create the header element
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");

  // Loop through the column names and create header cells
  cols.forEach((item) => {
    let th = document.createElement("th");
    th.innerText = item; // Set the column name as the text of the header cell
    tr.appendChild(th); // Append the header cell to the header row
  });
  thead.appendChild(tr); // Append the header row to the header
  table.append(tr); // Append the header to the table

  // Loop through the JSON data and create table rows
  jsonData.forEach((item) => {
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
  table.className="nlq2sql-data-table";
  div.appendChild(table);
  div.className = "nlq2sql-table-div";
  return div;
}

function getChart(data) {
  const canvasChart = document.createElement("canvas");
  canvasChart.className = "nlq2sql_chart_canvas";

  // const data = [
  //   { year: 2010, count: 10 },
  //   { year: 2011, count: 20 },
  //   { year: 2012, count: 15 },
  //   { year: 2013, count: 25 },
  //   { year: 2014, count: 22 },
  //   { year: 2015, count: 30 },
  //   { year: 2016, count: 28 },
  // ];

  new Chart(canvasChart, {
    type: "bar",
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: "Acquisitions by year",
          data: data.map((row) => row.count),
        },
      ],
    },
  });
  return canvasChart;
}
// Registra el web component en el navegador
customElements.define("nlq2sql-control", MicrofonoButton);
