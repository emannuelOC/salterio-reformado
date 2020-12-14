
function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                return allText
            }
        }
    }
    rawFile.send(null);
}

function presentText(text) {
    var musicDiv = document.getElementById('music');
    
    console.log('----> ' + text);
    ABCJS.renderABC("music", text);

    // musicDiv.innerHTML = text;
}



fetch('src/abc/128.txt')
  .then(response => response.text())
  .then(text => presentText(text))