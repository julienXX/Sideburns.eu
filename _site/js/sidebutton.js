$(document).ready(function() {
    var feed = $('#feedback');
    feed.css("display", "block").data("showing", false).children("form, h3").hide()
    feed.children("img").attr("id", "contact").click(function() {
    var t = feed;
    if(t.data("showing") == false) {
        t.animate({
        marginLeft: "0",
        height: "300px"
        }).data("showing", true).children("img").attr("id", "hide").css("top", "100px").siblings().show();
    } else {
        t.animate({
        marginLeft: "-300px",
        height: "120px"
        }).data("showing", false).children("img").attr("src", "contact.jpg").css("top", "0px").siblings().hide();
    }
  })
}); //end document ready
