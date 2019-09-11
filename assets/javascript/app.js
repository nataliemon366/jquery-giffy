// var something = `http://api.giphy.com/v1/gifs/search?api_key=XG02gUewKOyWPgRr9oWaD3Nr2FoFngdk&q=cheeseburgers`
// $.ajax({
//     url: something
// }).then(function (receive) {
//     console.log(receive)
//     console.log(receive.pagination)
//     console.log(receive.pagination.count)
//     console.log(receive.data)
//     console.log(receive.data[0])
//     console.log(receive.data[1])

//     for (var i = 0; i < receive.data.length; i++) {
//         // console.log(receive.data[i])
//         console.log(receive.data[i].rating)
//     }

// })

$(function () {
    populatedButtons(searchArray, 'searchButton', '#buttonArea');
    console.log("Page loaded");
})

var searchArray = ['Dog', 'Cat', 'Bird'];
function populatedButtons(searchArray, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();
    for(var i = 0; i < searchArray.length; i++) {
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type', searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);

    }
}
$(document).on('click', '.searchButton', function () {
    var type = $(this).data('type');
    // console.log(type);
    var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + type + '&api_key=XG02gUewKOyWPgRr9oWaD3Nr2FoFngdklimit=10';
    $.ajax({ url: queryURL, method: 'GET' })
        .done(function (response) {
            console.log(response);
        })
})





