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

/*
function app(){
    $('#debug').append('<b>7</b>');
}
*/



function img_show(){
    if(window.activ) {
        
        setTimeout("img_clear_slow()", 5000);
        
        position = Math.round(3*Math.random() + 0.5);
        id_img = '#il' + String(position);
        
        if (position == 1) {list = fotos1;};
        if (position == 2) {list = fotos2;};
        if (position == 3) {list = fotos3;};
        
        
        
        foto = Math.round(list.length*Math.random() - 0.5);
        var img_tag = id_img + ' img';
        $(img_tag).attr({src: list[foto]});
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
                    window.fotos3.push('img/'.concat(proj[i].dir, '/', proj[i].view[j][0], 'wb.jpg'));
                } else {
                    window.fotos1.push('img/'.concat(proj[i].dir,'/', proj[i].view[j][0], 'wb.jpg'));
                };
            };
            if (proj[i].view[j].length == 2){
                if (proj[i].type == 'design') {
                    window.fotos2.push('img/'.concat(proj[i].dir, '/', proj[i].view[j][0], 'wb.jpg'));
                    window.fotos3.push('img/'.concat(proj[i].dir, '/', proj[i].view[j][1], 'wb.jpg'));
                } else {
                    window.fotos1.push('img/'.concat(proj[i].dir, '/', proj[i].view[j][0], 'wb.jpg'));
                    window.fotos2.push('img/'.concat(proj[i].dir, '/', proj[i].view[j][1], 'wb.jpg'));
                };
            };
            if (proj[i].view[j].length == 3){
                if (proj[i].type == 'design') {
                    window.fotos2.push('img/'.concat(proj[i].dir, '/', proj[i].view[j][1], 'wb.jpg'));
                    window.fotos3.push('img/'.concat(proj[i].dir, '/', proj[i].view[j][2], 'wb.jpg'));
                } else {
                    window.fotos1.push('img/'.concat(proj[i].dir, '/', proj[i].view[j][0], 'wb.jpg'));
                    window.fotos2.push('img/'.concat(proj[i].dir, '/', proj[i].view[j][1], 'wb.jpg'));
                };
            };
            j++;
        };
        i++;
    };
    $('#debug').append('4');
}

    


//$('#debug').append('<b>' + list[foto] + '</b>');


