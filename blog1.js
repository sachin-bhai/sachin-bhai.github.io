document.getElementById("prev").addEventListener("click", function() {
    alert("No more articles written previously, return HOME instead?");
    window.location.href ="index.html";
});
document.getElementById("next").addEventListener("click", function() {
    window.location.href = "blog2.html"
});
document.getElementById("home").addEventListener("click",function() {
    window.location.href ="index.html";
});



var post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comments").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
    
});





