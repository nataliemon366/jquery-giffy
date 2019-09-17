var something = `http://api.giphy.com/v1/gifs/search?api_key=XG02gUewKOyWPgRr9oWaD3Nr2FoFngdk&q=cheeseburgers`
$.ajax({
    url: something
}).then(function (receive) {
    console.log(receive)
    console.log(receive.pagination)
    console.log(receive.pagination.count)
    console.log(receive.data)
    console.log(receive.data[0])
    console.log(receive.data[1])

    for (var i = 0; i < receive.data.length; i++) {
        // console.log(receive.data[i])
        console.log(receive.data[i].rating)
        console.log(receive.data[i].images.fixed_height.url)
        console.log(receive.data[i].images.fixed_height_still.url)
    }

})
$("#buttonsArea").text("heyy")
// these are 2 ways to target 
var $buttonsArea1 = $("#buttonsArea1")
$buttonsArea1.text("heyyy there")

$buttonsArea1.append($('<div>').text("hey there").attr("id","div1"))


var $div = $("<div>")
$div.text("holaaaa")
$div.attr("id","div2")


var h1 = $("<h1>")
h1.text('hey kit')
// $div.append(h1)
var h2 = $("<h2>")
h2.text("well then")
$div.append(h1, h2)

var divA =$("<div>")
var divB =$("<div>")
var divC =$("<div>")
divA.attr("id", "divA")
divB.attr("id", "divB")
divC.attr("id", "divC")
divB.append(divC)
divA.append(divB)

$buttonsArea1.append($div, divA)



// $('div')

// $('<button>')
// $('button')
// console.log($("#buttonsAr(((   ea44438"))
// console.log($("#buttonsArea"))

// function sum(a, b) {
//     var total = a + b
//     return total
// }

// console.log(sum(5, 6))
// var bacon = sum(6, 8)
// console.log(bacon)


// function natalie(){
//     console.log("hello")
// }
// natalie()

// function showName(name){
//     console.log(name)
// }
// showName("hello world")

// showName("hey kit")
// natalie("hey nat")
// $(function () {
//     populateButtons(searchArray, 'searchButton', '#buttonsArea');
//     console.log("Page loaded");
// })

// var searchArray = ['Dog', 'Cat', 'Bird'];
// function populateButtons(searchArray, classToAdd, areaToAddTo) {
//     $(areaToAddTo).empty();
//     for(var i = 0; i < searchArray.length; i++) {
//         var a = $('<button>');
//         a.addClass(classToAdd);
//         a.attr('data-type', searchArray[i]);
//         a.text(searchArray[i]);
//         $(areaToAddTo).append(a);

//     }
// }
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





