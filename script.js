$(document).ready(function(){
    $(".hide-rage").click(function(){
      $("details").toggle();
    });
});


function toggleTheme() {
  var t = document.getElementsByTagName("link")[0];
  "style.css" == t.getAttribute("href") ? t.setAttribute("href", "style-light.css") : t.setAttribute("href", "style.css")
}