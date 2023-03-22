document.getElementById("prev_2").addEventListener("click", function() {
    window.location.href = "blog1.html"
});
document.getElementById("home").addEventListener("click", function() {
    window.location.href = "index.html"
});
document.getElementById("next_2").addEventListener("click", function() {
    window.location.href = "blog3.html"
});

var post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comments").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});