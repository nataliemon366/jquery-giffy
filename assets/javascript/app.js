function search(keyWord) {
    var something = `http://api.giphy.com/v1/gifs/search?api_key=XG02gUewKOyWPgRr9oWaD3Nr2FoFngdk&q=${keyWord}`
    $.ajax({
        url: something
    }).then(function (receive) {
        console.log(receive)
        $("#searches").empty()
        for (var i = 0; i < receive.data.length; i++) {
            // console.log(receive.data[i])
            var rating = receive.data[i].rating
            var animatedUrl = receive.data[i].images.fixed_height.url
            var stillUrl = receive.data[i].images.fixed_height_still.url
            //    <div><img><p>Rating: <span></span></p></div>
            var div = $("<div>")
            var img = $("<img>")
            img.attr("src", animatedUrl)
            img.attr("data-animate", animatedUrl)
            img.attr("data-still", stillUrl)
            img.attr("data-is-still", "no")
            var pTag = $("<p>")
            pTag.text("Rating: ")
            var span = $("<span>")
            span.text(rating)
            pTag.append(span)
            div.append(img, pTag)
            $("#searches").append(div)
        }
    })
}
// $(function () {
//     populateButtons(searchArray, 'searchButton', '#buttonsArea');
//     console.log("Page loaded");
// })
// var searchItems = ['Dog', 'Cat', 'Bird'];
var searchItems = []
function populateButtons() {
    $("#buttonsArea").empty();
    for (var i = 0; i < searchItems.length; i++) {
        var button = $('<button>');
        button.addClass("btn");
        button.attr('data-type', searchItems[i]);
        button.text(searchItems[i]);
        $("#buttonsArea").append(button);
    }
}
populateButtons()
$("#search-form").on("submit", function () {
    event.preventDefault()
    var bacon = $("#search-input").val()
    $("#search-input").val("")
    // console.log(bacon)
    searchItems.push(bacon)
    populateButtons()
})
$(document).on("click", "button", function () {
    // console.log(this)
    var btn = $(this)
    var query = btn.attr("data-type")
    console.log(query)
    search(query)

})
$(document).on("click", "img", function () {
    console.log(this)
    var img = $(this)
    var isStill = img.attr("data-is-still")
    var animate = img.attr("data-animate")
    var still = img.attr("data-still")
    if(isStill === "no"){
        img.attr("src", still)
        img.attr("data-is-still", "yes")
    }else{
        // img.attr("src", still)
        img.attr("src", animate)
        // img.attr("data-is-still", "yes")
        img.attr("data-is-still", "no")

    }

})


// $(document).on('click', '.searchButton', function () {
//     var type = $(this).data('type');
//     // console.log(type);
//     var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + type + '&api_key=XG02gUewKOyWPgRr9oWaD3Nr2FoFngdklimit=10';
//     $.ajax({ url: queryURL, method: 'GET' })
//         .done(function (response) {
//             for(var i=0;i<response.data.length,i++){
//                 var searchDiv = $('<div class="search-item">');
//                 var rating = response.data[i].rating;
//                 var p = $(`<p>`).text(`Rating: ` +rating)
//                 var animated = response.data[i].images.fixed_height.url;
//                 var still = response.data[i].images.fixed_height_still.url;
//                 var image = $('<img>');
//                 image.attr('src',still);
//                 image.attr('data-still',still);
//                 image.attr('data-animated',still);

//             }
//         })
// })





