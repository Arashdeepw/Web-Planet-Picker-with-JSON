//Arashdeep Wander 991495450
"use strict";

$(function(){
    let planet = JSON.parse(localStorage["planet"]);
    let name = planet.planetName;
    let color = planet.planetColor;
    let radius = planet.planetRadiusKM;
    let distSun = planet.distInMillionsKM.fromSun;
    let distEarth = planet.distInMillionsKM.fromEarth;
    let img = planet.image;

    $("span#planetName").text(name);
    $("img#planetImg")
        .attr("src",`image/`+img)
        .attr("alt",name);
    $("span#color").text(color);
    $("span#radius").text(radius);
    $("span#distSun").text(distSun);
    $("span#distEarth").text(distEarth);
    $("main#main2").css("background-image", "url(image/"+img+")");
});