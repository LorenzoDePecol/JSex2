var addBtn = function(){
    $("#body1").append( 
    $("<button id=\"btn1\">DO NOT CLICK</button>")).on("click", function(){
        var caccola = $("<h3>caccola</h3>");
            $("#span1").html("CUCU");
            $("#div1").html("<h1>TI AVEVO DETTO DI NON CLICCARE MALEDETTO</h1>");
            $("#div1").attr("style", "background-color:   rgb(163, 36, 68)");
            $("#body1").append(btn);
    });
}

document.addEventListener("DOMContentLoaded", addBtn);