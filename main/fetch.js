var ul = '';
var added = false;
var reg = 'Loading';
var down = [];

fetch('https://webauth.chinnathornp.ga/api/checkregion', {method: 'POST'})
.then(response => response.json())
  .then(data => {
    if (data["url"] !== "") {
      fetch(data["url"] + '/home/status')
      .then(response => response)
      .then(() => {
        added = true
        ul = data["url"];
        reg = data.zone
      }).catch(() => {
        added = true
        ul = data.alter["url"];
        reg = data.alter.zone
      });   
    }
  });

function Flowup() {
    return ul
}

function Nme() {
    return reg
}

function checkserverdown() {
    return down.length
}