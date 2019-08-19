function fichas(b) 
{
    var ides = b.id;
    if (ides == "p-ficha") {
        document.getElementById("uno").style.display = "block";
        document.getElementById("dos").style.display = "none";
        document.getElementById("tres").style.display = "none";
        document.getElementById("cuatro").style.display = "none";
        document.getElementById("cinco").style.display = "none";

        document.getElementById("p-ficha").style.borderBottom = "none";
        document.getElementById("p-analisis").style.borderBottom = "1px solid";
        document.getElementById("p-descargar").style.borderBottom = "1px solid";
        document.getElementById("p-comentarios").style.borderBottom = "1px solid";
        document.getElementById("p-multimedia").style.borderBottom = "1px solid";
    }
    else if (ides == "p-analisis") {
        document.getElementById("uno").style.display = "none";
        document.getElementById("dos").style.display = "block";
        document.getElementById("tres").style.display = "none";
        document.getElementById("cuatro").style.display = "none";
        document.getElementById("cinco").style.display = "none";

        document.getElementById("p-ficha").style.borderBottom = "1px solid";
        document.getElementById("p-analisis").style.borderBottom = "none";
        document.getElementById("p-descargar").style.borderBottom = "1px solid";
        document.getElementById("p-comentarios").style.borderBottom = "1px solid";
        document.getElementById("p-multimedia").style.borderBottom = "1px solid";
    }
    else if (ides == "p-descargar") {
        document.getElementById("uno").style.display = "none";
        document.getElementById("dos").style.display = "none";
        document.getElementById("tres").style.display = "block";
        document.getElementById("cuatro").style.display = "none";
        document.getElementById("cinco").style.display = "none";

        document.getElementById("p-ficha").style.borderBottom = "1px solid";
        document.getElementById("p-analisis").style.borderBottom = "1px solid";
        document.getElementById("p-descargar").style.borderBottom = "none";
        document.getElementById("p-comentarios").style.borderBottom = "1px solid";
        document.getElementById("p-multimedia").style.borderBottom = "1px solid";
    }
    else if (ides == "p-comentarios") {
        document.getElementById("uno").style.display = "none";
        document.getElementById("dos").style.display = "none";
        document.getElementById("tres").style.display = "none";
        document.getElementById("cuatro").style.display = "block";
        document.getElementById("cinco").style.display = "none";

        document.getElementById("p-ficha").style.borderBottom = "1px solid";
        document.getElementById("p-analisis").style.borderBottom = "1px solid";
        document.getElementById("p-descargar").style.borderBottom = "1px solid";
        document.getElementById("p-comentarios").style.borderBottom = "none";
        document.getElementById("p-multimedia").style.borderBottom = "1px solid";
    }
    else if (ides == "p-multimedia") {
        document.getElementById("uno").style.display = "none";
        document.getElementById("dos").style.display = "none";
        document.getElementById("tres").style.display = "none";
        document.getElementById("cuatro").style.display = "none";
        document.getElementById("cinco").style.display = "block";

        document.getElementById("p-ficha").style.borderBottom = "1px solid";
        document.getElementById("p-analisis").style.borderBottom = "1px solid";
        document.getElementById("p-descargar").style.borderBottom = "1px solid";
        document.getElementById("p-comentarios").style.borderBottom = "1px solid";
        document.getElementById("p-multimedia").style.borderBottom = "none";
    }

}

function changeImages(){
    document.getElementById("slider").src = images[i];

    if (i < images.length -1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImages()", time);
}

//Codigo para la función changeImages()
var i = 0;
var images = [];
var time = 3000;

images[0] = '../images/GTA_V/slide_image_1.jpg'
images[1] = '../images/GTA_V/slide_image_2.jpg'
images[2] = '../images/GTA_V/slide_image_3.jpg'
//Codigo para la función changeImages()