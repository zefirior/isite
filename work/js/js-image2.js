function img_clear(){
    clearTimeout(window.time_close_id);
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

function img_select(tag){
    path_wb = $(tag).attr('src');
    path = path_wb.replace('wb', '');
    $(tag).attr({src: path});
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
        
        position = Math.round(3*Math.random() + 0.5);
        id_img = '#il' + String(position);
        
        if (position == 1) {list = fotos1;};
        if (position == 2) {list = fotos2;};
        if (position == 3) {list = fotos3;};
                
        view = Math.round(list.length*Math.random() - 0.5);
        var img_tag = id_img + ' img';
        $('#il1 img').attr({src: list[view][0]});
        $('#il2 img').attr({src: list[view][1]});
        $('#il3 img').attr({src: list[view][2]});
        $(id_img).fadeIn(1000);
    }
}

function init_view() {
    $('#debug').append('0');
    var proj = window.projects2;
    var i = 0;
    var j;
    $('#debug').append('5');
    while (i < proj.length) {
        j = 0;
        $('#debug').append('1');
        while (j < proj[i].view.length) {
            $('#debug').append('2');
            if (proj[i].view[j].length == 1){
                if (proj[i].type == 'design') {
                    window.fotos3.push(['img/blanc.png', 
                                        'img/blanc.png', 
                                        'img/'.concat(proj[i].dir, '/', proj[i].view[j][0], 'wb.jpg')]);
                } else {
                    window.fotos1.push(['img/'.concat(proj[i].dir,'/', proj[i].view[j][0], 'wb.jpg'), 
                                        'img/blanc.png', 
                                        'img/blanc.png']);
                };
            };
            if (proj[i].view[j].length == 2){
                if (proj[i].type == 'design') {
                    window.fotos2.push(['img/blanc.png', 
                                        'img/'.concat(proj[i].dir, '/', proj[i].view[j][0], 'wb.jpg'), 
                                        'img/'.concat(proj[i].dir, '/', proj[i].view[j][1], '.jpg')]);
                    window.fotos3.push(['img/blanc.png', 
                                        'img/'.concat(proj[i].dir, '/', proj[i].view[j][0], '.jpg'), 
                                        'img/'.concat(proj[i].dir, '/', proj[i].view[j][1], 'wb.jpg')]);
                } else {
                    window.fotos1.push(['img/'.concat(proj[i].dir, '/', proj[i].view[j][0], 'wb.jpg'),
                                        'img/'.concat(proj[i].dir, '/', proj[i].view[j][1], '.jpg'), 
                                        'img/blanc.png']);
                    window.fotos2.push(['img/'.concat(proj[i].dir, '/', proj[i].view[j][0], '.jpg'), 
                                        'img/'.concat(proj[i].dir, '/', proj[i].view[j][1], 'wb.jpg'), 
                                        'img/blanc.png']);
                };
            };
            if (proj[i].view[j].length == 3){
                if (proj[i].type == 'design') {
                    window.fotos2.push(['img/'.concat(proj[i].dir, '/', proj[i].view[j][0], '.jpg'), 
                                        'img/'.concat(proj[i].dir, '/', proj[i].view[j][1], 'wb.jpg'), 
                                        'img/'.concat(proj[i].dir, '/', proj[i].view[j][2], '.jpg')]);
                    window.fotos3.push(['img/'.concat(proj[i].dir, '/', proj[i].view[j][0], '.jpg'), 
                                        'img/'.concat(proj[i].dir, '/', proj[i].view[j][1], '.jpg'), 
                                        'img/'.concat(proj[i].dir, '/', proj[i].view[j][2], 'wb.jpg')]);
                } else {
                    window.fotos1.push(['img/'.concat(proj[i].dir, '/', proj[i].view[j][0], 'wb.jpg'), 
                                        'img/'.concat(proj[i].dir, '/', proj[i].view[j][1], '.jpg'), 
                                        'img/'.concat(proj[i].dir, '/', proj[i].view[j][2], '.jpg')]);
                    window.fotos2.push(['img/'.concat(proj[i].dir, '/', proj[i].view[j][0], '.jpg'), 
                                        'img/'.concat(proj[i].dir, '/', proj[i].view[j][1], 'wb.jpg'), 
                                        'img/'.concat(proj[i].dir, '/', proj[i].view[j][2], '.jpg')]);
                };
            };
            j++;
        };
        i++;
    };
    $('#debug').append('4');
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


