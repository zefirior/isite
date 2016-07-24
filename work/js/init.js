var id_timeout;
var activ = 1;
var position = 1;
var id_img;
var foto;
var list;
var timeout_id;
var time_close_id;
var activ_proj_menu = 0;


$(document).ready(function (){
    init_view();
    $('#il1 img').click(function(){img_select();});
    $('#il2 img').click(function(){img_select();});
    $('#il3 img').click(function(){img_select();});
    $('#fl1').hover(function(){select('#fl1', 1)}, function(){unselect('#fl1', '#idl1')});
    $('#fl2').hover(function(){select('#fl2', 1)}, function(){proj_list_close()});
    $('#fl3').hover(function(){select('#fl3', 1)}, function(){unselect('#fl3', '#idl3')});
    $('#sl2').hover(function(){select('#sl2', 1)}, function(){unselect('#sl2', '#idl_price')});
    $('#title').hover(function(){select('#title', 1)}, function(){unselect('#title', '#idl_title')});
    $('#fl1').click(function(){menu_click('#fl1', '#idl1');});
    $('#fl2').click(function(){menu_click('#fl2', '#idl2');});
    $('#fl3').click(function(){menu_click('#fl3', '#idl3');});
    $('#sl2').click(function(){menu_click('#sl2', '#idl_price');});
    $('#title').click(function(){menu_click('#title', '#idl_title');});
    $('#il1 img').mouseover(function(){img_unclear();});
    $('#il2 img').mouseover(function(){img_unclear();});
    $('#il3 img').mouseover(function(){img_unclear();});
    $('#proj1').click(function(){show_proj('aeroport');});
    $('#proj2').click(function(){show_proj('one_room_flat');});
    $('#proj3').click(function(){show_proj('che_guevara');});
    $('#proj4').click(function(){show_proj('hospital');});
    $('#proj1').hover(function(){select('#proj1', 1);}, function(){select('#proj1', 0);});
    $('#proj2').hover(function(){select('#proj2', 1);}, function(){select('#proj2', 0);});
    $('#proj3').hover(function(){select('#proj3', 1);}, function(){select('#proj3', 0);});
    $('#proj4').hover(function(){select('#proj4', 1);}, function(){select('#proj4', 0);});
    img_show();
    setInterval("img_show()", 6300);
    if((document.documentElement.clientHeight / 2 - 275) > 0){
        $('.body').css("top", ((document.documentElement.clientHeight / 2 - 300)*0.6));
    };
    if((document.documentElement.clientWidth / 2 - 590) > 0){
        $('.body').css("left", (document.documentElement.clientWidth / 2 - 590));
    };
});


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
                                        'img/'.concat(proj[i].dir, '/', proj[i].view[j][1], 'wb.jpg')]);
                    window.fotos3.push(['img/blanc.png', 
                                        'img/'.concat(proj[i].dir, '/', proj[i].view[j][0], 'wb.jpg'), 
                                        'img/'.concat(proj[i].dir, '/', proj[i].view[j][1], 'wb.jpg')]);
                } else {
                    window.fotos1.push(['img/'.concat(proj[i].dir, '/', proj[i].view[j][0], 'wb.jpg'),
                                        'img/'.concat(proj[i].dir, '/', proj[i].view[j][1], 'wb.jpg'), 
                                        'img/blanc.png']);
                    window.fotos2.push(['img/'.concat(proj[i].dir, '/', proj[i].view[j][0], 'wb.jpg'), 
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