var factura, parser, xmlDoc, uploadedFile;

factura =
  "<factura><cabecera>" +
  "<empresa>SEVYSAC</empresa>" +
  "<cliente>Angelo Leva Vizcarra</cliente>" +
  "<year>2020</year>" +
  "</cabecera></factura>";

function loadFile() {
  fetch("aduahdr1.txt")
    .then(response => response.text())
    .then(text => {
      document.getElementById("result").innerHTML = text;

      parser = new DOMParser();
      xmlDoc = parser.parseFromString(text, "text/xml");

      console.log(xmlDoc);
    });
}

loadFile();
