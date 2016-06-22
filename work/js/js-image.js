function img_deamon(){
    var position;
    var id_img;
    var foto;
    
    id_timeout_deamon = setTimeout("img_close()", 3000);
    
    position = Math.round(3*Math.random() + 0.5);
    id_img = '#il' + String(position);
    if (position == 1) {var list = fotos1;};
    if (position == 2) {var list = fotos2;};
    if (position == 3) {var list = fotos3;};
    foto = Math.round(list.length*Math.random() - 0.5);
    $(id_img).attr({src: list[foto]});
    $(id_img).fadeIn(1000);
    
    }

function img_close(){
    id_timeout_close = setTimeout('img_deamon()', 4000);
    img_clear_slow();
}
 
function restart_d(){
    id_timeout_close = setTimeout('img_deamon()', 4000);
}
    
function img_clear(){
    $('#il1').css('display', 'none');
    $('#il2').css('display', 'none');
    $('#il3').css('display', 'none');
}

function img_clear_slow(){
    $('#il1').fadeOut(1000);
    $('#il2').fadeOut(1000);
    $('#il3').fadeOut(1000);
}

function img_select(obj){
    /*var id_img = obj.getAttribute();*/
    $('#debug').append('<b>sfr</b>');
}

//$('#debug').append('<b>' + list[foto] + '</b>');
