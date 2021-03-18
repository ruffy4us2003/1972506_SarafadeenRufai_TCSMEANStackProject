function addBlog(){
    //alert("hello blogger :)") //For Testing code

    var title = document.getElementById("title").value;
    var desc = document.getElementById("desc").value;
    var image = document.getElementById("imageId").files[0].name;

   //FOr Testing code only
    console.log(title);
    console.log(desc);
    console.log(image);

    document.getElementById("titleInfo").innerHTML=title;
    document.getElementById("descInfo").innerHTML=desc;
    document.getElementById("imageInfo").src=image;

}