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
         console.log(response.response.docs);
         $("#theNews").empty()
         var newsHeader = $("<h3 class='newsHeader'>").text("In the News")
         var newsDivider = $("<div class='divider'>")
         $('#theNews').prepend(newsHeader, newsDivider)
         for (var i = 0; i<response.response.docs.length; i++) {
             var newsdiv = $("<div class='newsdiv'>")
             var newslink = $("<a>")
             newsdiv.append(newslink)
             newslink.attr("href", response.response.docs[i].web_url)
             newslink.attr("target", "_blank")
             newslink.html(response.response.docs[i].headline.main)
             $('#theNews').append(newsdiv)
         }
     });
 });
 
$(".searchButton").click(function(){
    $(".mainlogo").removeClass("center-align");
    $(".mainlogo").addClass("left s6 addimgmarg");
    $(".logoimage").animate({
        height: '125px',
        width: '400px',
    });
    $("#searchBar").removeClass("s12");
    $("#searchBar").addClass("searchBar right s12 m6");
    $("#searchBar").animate({
        size: '50%',
    });

    // jquery helper to run event.preventDefault() for you;
    return false;
});
