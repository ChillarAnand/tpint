var teluguQuotesFile = chrome.runtime.getURL('telugu-proverbs.txt');
var englishQuotesFile = chrome.runtime.getURL('english-proverbs.txt');
var urls = [teluguQuotesFile, englishQuotesFile]


function showQuote() {
    var quote = document.getElementById("quote");
    var promises = urls.map(url => fetch(url).then(y => y.text()));
    Promise.all(promises).then(function(data) {
        data = data.join().split('\n');
        var quotesCount = data.length;
        var randomNum = Math.floor(Math.random() * (quotesCount - 1));
        quote.innerHTML = data[randomNum];
    });
}

window.onload = showQuote();
