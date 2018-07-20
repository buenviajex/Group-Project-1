$(".searchButton").on("click", function(event) {
    event.preventDefault();
    var searchValue= $(".searchInput").val().trim();
    var GIapi = "AIzaSyD7Wc63TRgw3TeJBIFVDSezSZKFc8i43ro"
    var GIqueryURL = "https://www.googleapis.com/customsearch/v1?searchType=image&key=" + GIapi + "&cx=003281430856125788303:ccpcjlqp7kq&q=" + searchValue;
    $.ajax({
        url: GIqueryURL,
        method: "GET",
    }).then(function(response) {
        console.log(response);

    $("#googleImages").empty()
    var imgHeader = $("<h3 class='imgHeader'>").text("Pictures")
    var imgDivider = $("<div class='divider'>")
    $('#googleImages').prepend(imgHeader, imgDivider)

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
     var ytAPIkey = "AIzaSyBFF-Z0wLlFirA44q-R_Yfg5Y_d59Ks9xY"
     var preYTurl = "https://www.youtube.com/watch?v="
     $.ajax({
        //url: "https://www.googleapis.com/youtube/v3/videos?id=&type=video&part=snippet" + "&topicId="  + searchValue + '&key=' + ytAPIkey + "&?v=2&alt=json"
        url : "https://www.googleapis.com/youtube/v3/search?part=snippet&topicId=%2Fm%2F05z1_&type=video&key=" + ytAPIkey + "&q=" + searchValue,
        dataType: "jsonp",
        success: function(data) {
        console.log(data)
        
        $('#ytContent').empty()
        var ytHeader = $("<h3 class='ytHeader'>").text("Videos")
        var ytDivider = $("<div class='divider'>")
        $('#ytContent').prepend(ytHeader, ytDivider)

          for (var i = 0; i<data.items.length;i++) {
            var vidiv = $("<div class='vidiv'>")
            var vidlink = $("<a>")
            var vidheader = $("<p class='vidheader'>")
            vidheader.text(data.items[i].snippet.title)
            vidlink.prepend(vidheader)
            vidiv.append(vidlink)
            vidlink.attr("href", preYTurl + data.items[i].id.videoId)
            vidlink.attr("target", "_blank")
            $("#ytContent").append(vidiv)

            var vidthumb = $("<img>")
            vidthumb.attr("src", data.items[i].snippet.thumbnails.medium.url)
            vidlink.append(vidthumb)
          }
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
