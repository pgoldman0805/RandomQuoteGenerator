/*global $,Document, window, alert */

(function () {
    "use strict";
    var quoteContent = "",
        quoteAuthor = "";

    function generateRandColor() {
        /*
         *  RANDOM COLORS 
         */
        var r = Math.floor(Math.random() * 200),
            g = Math.floor(Math.random() * 200),
            b = Math.floor(Math.random() * 200),
            color = "RGB(" + r + "," + g + "," + b + ")";

        $(".background").css({
            backgroundColor: color
        });
        $("#quote").css({
            color: color,
            backgroundColor: "#dddddd"
        });
    }

    function getQuoteJSON() {
        /*
         *  GET and parse JSON 
         */

        $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function (json) {
            var text = json.quoteText,
                author = json.quoteAuthor;
            $("#quotation").html(text);
            $("#source").html(author);
        });
    }



    generateRandColor();
    getQuoteJSON();


    /*
     *  TWEET BUTTON
     */
    $("#tweetButton").click(function () {
        quoteContent = $("#quotation").text();
        quoteAuthor = $("#source").text();
        var url = "https://twitter.com/intent/tweet?hashtags=quotes&text=\"" + quoteContent + "\" -" + quoteAuthor;
        window.open(url, '_blank');
    });

    /*
     *  GET NEW QUOTE BUTTON
     */
    $("#getMessage").click(function () {
        $("#quotation").toggle();
        $("#source").toggle();

        generateRandColor();
        getQuoteJSON();

        $("#quotation").fadeIn("slow");
        $("#source").fadeIn("slow");
    });

}());