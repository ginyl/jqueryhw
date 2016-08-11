$('selector')

load jquery only when all elements are loaded onto the webpage
$(document).ready({})

jquery effects
.append()  -add elements to the body after the page is loaded
.after()   -add element on the second line
.animate() -custom animations using numerical value
.css()     -change css properties of the element called in front
.hide()
.show()
.fadeIn()
.fadeOut()
.slideUp()
.slideDown()

events
.click()  -functions inside parenthesis will go when clicked

callback: the second function will only go when the first one is finished
$("button").click(function(){
    $("p").hide("slow", function(){
        alert("The paragraph is now hidden");
    });
});

chaining: statements will happen one at a time
$("#p1").css("color", "red").slideUp(2000).slideDown(2000);