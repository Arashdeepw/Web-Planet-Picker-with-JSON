//Arashdeep Wander 991495450
"use strict";

$(function(){
    $.getJSON("data/planets.json", displayPlanets)
});

function displayPlanets(data){
    let $table = $("<table></table>");
    $table.appendTo("main");
    let planets = data.solarSystem.planets;
    planets.forEach(function(planet, index){
        $table.append(
            `<tr>
                <td>
                    <a href="planet.html" data-index=${index}>
                        <img src="image/${planet.image}" alt="${planet.planetName}">
                    </a>
                </td>
                <td>
                    <span >${planet.planetName}</span>
                </td>
            </tr>`
        );
    });
    $("table a").click(function () {
        let index=$(this).data("index");
        localStorage["planet"] = JSON.stringify(planets[index]);
    })
}
