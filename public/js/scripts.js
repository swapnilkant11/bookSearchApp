function findBook(){
    var userSearch = document.getElementById('userInput').value;
    var bookResult = document.getElementById('result');

    bookResult.innerHTML = "";

    $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/books/v1/volumes?q=" + userSearch,
        dataType: 'JSON',
        success: function(book){
            console.log(book);
            for(var i = 0; book.items.length; i++){
                var wrapperDiv = document.createElement('div');
                wrapperDiv.className = 'media';
                // create img element for images.
                var image = document.createElement('img');
                image.className = 'mr-3';
                image.src = book.items[i].volumeInfo.imageLinks.thumbnail;
                // create div element with class of media-body.
                var div = document.createElement('div');
                div.className = 'media-body';
                // create header for body.
                var header = document.createElement('h5');
                header.className = 'mt-0';
                header.innerHTML = book.items[i].volumeInfo.title;
                // append header to the body.
                div.appendChild(header);
                wrapperDiv.appendChild(image);
                wrapperDiv.appendChild(div);
                // create h5 element for author
                var author = document.createElement('h6');
                author.innerHTML = 'Author: ' + book.items[i].volumeInfo.authors;
                div.appendChild(author);
                // create paragraph for displaying country.
                var country = document.createElement('p');
                country.innerHTML = 'Country: ' + book.items[i].accessInfo.country;
                div.appendChild(country);
                // create element fot description.
                var desc = document.createElement('p');
                desc.innerHTML = book.items[i].volumeInfo.description;
                div.appendChild(desc);
                // create hr to saperate every book infos.
                var line = document.createElement('hr');
                // make every elements as children element of bookResult.
                bookResult.appendChild(wrapperDiv);
                bookResult.appendChild(line);
            }

        }
    })
}