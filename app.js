var quotesFile = chrome.runtime.getURL('data.txt');


function showQuote() {

    var quote = document.getElementById("quote");

    fetch(quotesFile)
        .then(
            function(response) {
                response.text().then(function(data) {
                    data = data.split('\n');
                    var quotesCount = data.length;
                    var randomNum = Math.floor(Math.random() * (quotesCount - 1));
                    quote.innerHTML = data[randomNum];
                });
            }
        )
}


window.onload = showQuote();
