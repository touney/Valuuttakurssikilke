$(function(){

  var div = document.getElementById('dataSourcePage');

  var url = 'http://openpages.nordea.com/fi/lists/currency/commercialExchangeRateFI.action?language=fi';
  var httpRequest;
  fetchPage();
  displaySource();
  var parsed = parse(httpRequest.responseText);
  displayParsed(parsed);

  function fetchPage() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }

    httpRequest.open('GET', url, false);
    httpRequest.send();
  }

  function displaySource() {
    var content = httpRequest.responseText;

    div.innerText = content;
  }

  function parse(text) {
    var xmlVersion = jQuery.parseXML(text);
    return xmlVersion;
  }

  function displayParsed(toShow) {
    div.innerHTML = toShow;
  }

});
