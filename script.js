var content = document.getElementsByClassName("content")[0];
var width = content.offsetWidth;
var height = content.offsetHeight;
var verticalKaificent = 0.2;

// Orbits Radii
var Rmercury = 90, Rvenus = 130, Rearth = 185, Rmoon = 28, Rmars = 240, Rjupiter = 320, Rsaturn = 430, Ruranus = 510, Rneptune = 560, Rring = 60;

// Delta Angles
var deltaMerc = 0, deltaVenus = 0, deltaEarth = 0, deltaMars = 0, deltaJupiter = 0, deltaSaturn = 0, deltaUranus = 0, deltaNeptune = 0, deltaMoon = 0;
var n = 20;
var timerId;

// jQuery Selectors
var $mercuryContainer = $(".mercury_container").eq(0);
var $venusContainer = $(".venus_container").eq(0);
var $earthMoonContainer = $(".earth_moon_container").eq(0);
var $marsContainer = $(".mars_container").eq(0);
var $jupiterContainer = $(".jupiter_container").eq(0);
var $saturnRingContainer = $(".saturn_ring_container").eq(0);
var $uranusContainer = $(".uranus_container").eq(0);
var $neptuneContainer = $(".neptune_container").eq(0);
var $moon = $(".moon").eq(0);

// Base X/Y Positions (Center of the screen minus half the planet size)
var mercuryX = width / 2 - $mercuryContainer.width() / 2;
var mercuryY = height / 2 - $mercuryContainer.height() / 2;
var venusX = width / 2 - $venusContainer.width() / 2;
var venusY = height / 2 - $venusContainer.height() / 2;
var earthX = width / 2 - $earthMoonContainer.width() / 2;
var earthY = height / 2 - $earthMoonContainer.height() / 2;
var marsX = width / 2 - $marsContainer.width() / 2;
var marsY = height / 2 - $marsContainer.height() / 2;
var jupiterX = width / 2 - $jupiterContainer.width() / 2;
var jupiterY = height / 2 - $jupiterContainer.height() / 2;
var saturnX = width / 2 - $saturnRingContainer.width() / 2;
var saturnY = height / 2 - $saturnRingContainer.height() / 2;
var uranusX = width / 2 - $uranusContainer.width() / 2;
var uranusY = height / 2 - $uranusContainer.height() / 2;
var neptuneX = width / 2 - $neptuneContainer.width() / 2;
var neptuneY = height / 2 - $neptuneContainer.height() / 2;
var moonX = $earthMoonContainer.width() / 2 - $moon.width() / 2;
var moonY = $earthMoonContainer.height() / 2 - $moon.height() / 2;

function spacePosition() {
    let sun = document.getElementsByClassName("sun")[0];
    sun.style.top = height / 2 - sun.offsetHeight / 2 + "px";
    sun.style.left = width / 2 - sun.offsetWidth / 2 + "px";
}

function move() {
    movePlanet($mercuryContainer, mercuryX, mercuryY, Rmercury, deltaMerc, 47.87, ".shadow_mercury", 11, 9);
    deltaMerc += 47.87 / n;
    
    movePlanet($venusContainer, venusX, venusY, Rvenus, deltaVenus, 35.02, ".shadow_venus", 12, 8);
    deltaVenus += 35.02 / n;
    
    movePlanet($earthMoonContainer, earthX, earthY, Rearth, deltaEarth, 29.78, ".shadow_earth", 13, 7);
    deltaEarth += 29.78 / n;
    
    movePlanet($marsContainer, marsX, marsY, Rmars, deltaMars, 24.07, ".shadow_mars", 14, 6);
    deltaMars += 24.07 / n;
    
    movePlanet($jupiterContainer, jupiterX, jupiterY, Rjupiter, deltaJupiter, 13.07, ".shadow_jupiter", 15, 5);
    deltaJupiter += 13.07 / n;
    
    movePlanet($saturnRingContainer, saturnX, saturnY, Rsaturn, deltaSaturn, 9.69, ".shadow_saturn", 16, 4);
    deltaSaturn += 9.69 / n;
    
    movePlanet($uranusContainer, uranusX, uranusY, Ruranus, deltaUranus, 6.81, ".shadow_uranus", 17, 3);
    deltaUranus += 6.81 / n;
    
    movePlanet($neptuneContainer, neptuneX, neptuneY, Rneptune, deltaNeptune, 5.43, ".shadow_neptune", 18, 2);
    deltaNeptune += 5.43 / n;

    // Special Moon Movement
    var moonAlpha = (Math.PI * deltaMoon) / 180;
    $moon.css({
        "top": moonY + Rmoon * Math.sin(moonAlpha) * verticalKaificent,
        "left": moonX + Rmoon * Math.cos(moonAlpha),
        "z-index": deltaMoon < 180 ? 11 : 9
    });
    deltaMoon += 340 / n;
}

// Generic function to move any planet
function movePlanet($container, x, y, radius, delta, speed, shadowClass, zFront, zBack) {
    var alpha = (Math.PI * delta) / 180;
    $container.css({
        "top": y + radius * Math.sin(alpha) * verticalKaificent,
        "left": x + radius * Math.cos(alpha),
        "z-index": (delta % 360) < 180 ? zFront : zBack
    });
    $(shadowClass).css("transform", "rotate(" + delta + "deg)");
}

function drawCircles() {
    let orbits = [
        {el: ".mercury_circle", r: Rmercury}, {el: ".venus_circle", r: Rvenus},
        {el: ".earth_circle", r: Rearth}, {el: ".mars_circle", r: Rmars},
        {el: ".jupiter_circle", r: Rjupiter}, {el: ".saturn_circle", r: Rsaturn},
        {el: ".uranus_circle", r: Ruranus}, {el: ".neptune_circle", r: Rneptune}
    ];
    orbits.forEach(orb => {
        $(orb.el).css({
            "left": width / 2 - orb.r,
            "top": height / 2 - orb.r * verticalKaificent,
            "width": orb.r * 2,
            "height": orb.r * 2 * verticalKaificent
        });
    });
}

function scaleHandler() {
    var isDragged = false;
    var startY;
    $(document).mousedown(() => { isDragged = true; $("body").css("cursor", "grabbing"); });
    $(document).mouseup(() => { isDragged = false; $("body").css("cursor", "grab"); });
    $(document).mousemove((e) => {
        if (isDragged) {
            let deltaMove = (startY - e.pageY) / 5000;
            verticalKaificent = Math.min(Math.max(verticalKaificent + deltaMove, 0.05), 1);
            drawCircles();
        }
        startY = e.pageY;
    });
}

// Initialize and Start
spacePosition();
drawCircles();
scaleHandler();

document.getElementById("start").onclick = function () {
    clearInterval(timerId);
    timerId = setInterval(move, 20);
};

document.getElementById("stop").onclick = function () {
    clearInterval(timerId);
};

$(document).ready(() => { $("#start").click(); });