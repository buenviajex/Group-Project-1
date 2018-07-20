$(".searchButton").on("click", function(event) {
    event.preventDefault();
    var searchValue= $(".searchInput").val().trim();
    var GIapi = "AIzaSyBFF-Z0wLlFirA44q-R_Yfg5Y_d59Ks9xY"
    var GIqueryURL = "https://www.googleapis.com/customsearch/v1?searchType=image&key=" + GIapi + "&cx=003281430856125788303:ccpcjlqp7kq&q=" + searchValue;
    $.ajax({
        url: GIqueryURL,
        method: "GET",
    }).then(function(response) {
        console.log(response);
    
    $("#googleImages").empty()
    for (var i = 0; i<response.items.length; i++) {
        var imgdiv = $("<div class='imgdiv'>")
        var imglink = $("<a>")
        imgdiv.append(imglink)
        imglink.attr("href", response.items[i].link)
        imglink.attr("target", "_blank")
        $("#googleImages").append(imgdiv)

        var img = $("<img>")
        img.attr("src", response.items[i].image.thumbnailLink)
        img.attr("alt", response.items[i].title)
        imglink.append(img)
    }
    });

    var NYTqueryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    NYTqueryURL += '?' + $.param({
        'api-key': "ebfd3fb4511c45b8a0f31b81f539debc",
        'q': searchValue,
    })
     $.ajax({
         url: NYTqueryURL,
         method: "GET",
     }).then(function(response) {
         console.log(response);
     });
 });
//  Here is the on click of submit button the logo and search bar and button will moveeeeee!
$(".searchButton").click(function(){
    $(".mainlogo").removeClass("center-align");
    $(".mainlogo").addClass("left s6");
    $(".logoimage").animate({
        height: '100px',
        width: '400px'
    });
    $("#searchBar").removeClass("s12");
    $("#searchBar").addClass("searchBar s6");
    $("#searchBar").animate({
        size: '50%',
    });
    $(".searchButton").addClass("right");
    // jquery helper to run event.preventDefault() for you;
    return false;
});


// function(response) {
//       addNewRow(response.data);
//   });
// });
// function addNewRow (data) {
//   var img = data[0].image;
//   var newRow = $("<tr>").prepend(
//     $("<#googleImage>").text(data),
//   );
//   $("#googleImage").prepend(newRow);
// }
