function img_clear(){
    $('#il1').css('display', 'none');
    $('#il2').css('display', 'none');
    $('#il3').css('display', 'none');
}

function img_clear_slow(){
    $('#debug').append('<b>8</b>');
    $('#il1').fadeOut(1000);
    $('#il2').fadeOut(1000);
    $('#il3').fadeOut(1000);
}


function app(){
    $('#debug').append('<b>7</b>');
}

$(document).ready(function (){
    img_show();
    $('#debug').append('<b>9</b>');
    setInterval("img_show()", 6000);
});


function img_show(){
    if(window.activ == 1) {
        
        $('#debug').append('<b>1</b>');        
        setTimeout("img_clear_slow()", 3000);
        $('#debug').append('<b>2</b>');
        
        position = Math.round(3*Math.random() + 0.5);
        id_img = '#il' + String(position);
        if (position == 1) {list = fotos1;};
        if (position == 2) {list = fotos2;};
        if (position == 3) {list = fotos3;};
        foto = Math.round(list.length*Math.random() - 0.5);
        $(id_img).attr({src: list[foto]});
        $(id_img).fadeIn(1000);
        $('#debug').append('<b>4</b>');
    }
    $('#debug').append('<b>5</b>');
}

//function img_close(){
//    id_timeout_deamon = setTimeout(img_deamon(), 4000);
//    img_clear_slow();
//}
 
//function restart_d(){
//    id_timeout_close = setTimeout(img_deamon(), 4000);
//}
    
function img_select(obj){
/*var id_img = obj.getAttribute();*/
    $('#debug').append('<b>sfr</b>');    
}

//$('#debug').append('<b>' + list[foto] + '</b>');
