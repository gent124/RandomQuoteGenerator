
function showQuote() {

    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var rand = Math.floor(Math.random() * (data.length - 1 + 1) + 1);
            var quote = (data[rand].text);
            var author = (data[rand].author);

            if (data[rand].author == null) {
                author = "Anonymous"
            } else {
                author = data[rand].author;
            }
            document.getElementById('quote').innerHTML = quote;
            document.getElementById('author').innerHTML = author;




        });





}