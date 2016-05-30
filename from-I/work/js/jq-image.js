function img_deamon(){
    var position;
    var id_img;
    var foto;
    position = Math.round(3*Math.random() + 0.5);
    $('#debug').append('<b>' + position + '</b>');
    id_img = '#il' + String(position);
    $('#debug').append('<b>' + id_img + '</b>');
    if (position == 1) {var list = fotos1;};
    if (position == 2) {var list = fotos2;};
    if (position == 3) {var list = fotos3;};
    foto = Math.round(list.length*Math.random() - 0.5);
    $('#debug').append('<b>' + list[foto] + '</b>');
    $(id_img).attr({src: list[foto]});
    $('#debug').append('<b>' + list[foto] + '</b>');
    $(id_img).fadeIn(1000);
    id_timeout = setTimeout("img_close()", 3000);
    $('#debug').append('<br />');
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
function img_close(){
    img_clear_slow();
    id_timeout = setTimeout('img_deamon()', 3000);
}
function img_select(obj){
    /*var id_img = obj.getAttribute();*/
    $('debug').append('sfr');
}

