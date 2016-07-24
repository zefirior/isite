function img_clear(){
    clearTimeout(window.time);
    $('#il1').css('display', 'none');
    $('#il2').css('display', 'none');
    $('#il3').css('display', 'none');
}

function img_unclear(){
    $('#il1').css('display', 'block');
    $('#il2').css('display', 'block');
    $('#il3').css('display', 'block');
}

function img_clear_slow(){
    $('#il1').fadeOut(1000);
    $('#il2').fadeOut(1000);
    $('#il3').fadeOut(1000);
}

function img_select(){
    for (i=1; i<4; i++){
        tag = '#il'.concat(String(i), ' img');
        path_wb = $(tag).attr('src');
        path = path_wb.replace('wb', '');
        $(tag).attr({src: path});
    }
/*var id_img = obj.getAttribute();*/
}

function img_unselect(tag){
    path = $(tag).attr('src');
    path_wb = path.replace('.jpg', 'wb.jpg');
    $(tag).attr({src: path_wb});
/*var id_img = obj.getAttribute();*/
}

/*
function app(){
    $('#debug').append('<b>7</b>');
}
*/



function img_show(){
    if(window.activ) {
        
        window.time_close_id = setTimeout("img_clear_slow()", 5000);
        
        var tmp;
        do {
        tmp = Math.round(3*Math.random() + 0.5);
        }
        while (window.position == tmp);
        window.position = tmp;
        id_img = '#il' + String(window.position);
        
        if (window.position == 1) {list = fotos1;};
        if (window.position == 2) {list = fotos2;};
        if (window.position == 3) {list = fotos3;};
                
        view = Math.round(list.length*Math.random() - 0.5);
        var img_tag = id_img + ' img';
        $('#il1 img').attr({src: list[view][0]});
        $('#il2 img').attr({src: list[view][1]});
        $('#il3 img').attr({src: list[view][2]});
        $(id_img).fadeIn(1000);
    }
}


function get_proj(name){
    var index ;
    var i = 0;
    var proj = window.projects2;
    while (i < proj.length) {
        if (name == proj[i].dir){index = i; break;};
        i++;}
    return proj[index];
}



//$('#debug').append('<b>' + list[foto] + '</b>');


