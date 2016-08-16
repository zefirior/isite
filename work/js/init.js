var id_timeout;
var activ = 1;
var position = 1;
var id_img;
var foto;
var list;
var timeout_id;
var time_close_id;
var focus_pr;
var activ_proj_menu = 0;
var reset_id;
var timeout = 300;
var menu_timeout;
var img_timeout;


$(document).ready(function (){
    init_view();
    generate_proj_view();
    $('.img').click(function(){img_select();});
    $('.img').mouseover(function(){img_unclear();});
    $('.img').mouseover(img_select_with_delay);
    $('.img').mouseout(function(){clearTimeout(window.img_timeout);});
    $('#slide').click(func_reset);
    $('.button').mouseover(reset);
    $('#fl1').hover(function(){select('#fl1', 1)}, function(){select('#fl1', 0)});
    $('#fl2').hover(function(){select('#fl2', 1)}, function(){select('#fl2', 0)});
    $('#fl3').hover(function(){select('#fl3', 1)}, function(){select('#fl3', 0)});
    $('#sl2').hover(function(){select('#sl2', 1)}, function(){select('#sl2', 0)});
    $('#title').hover(function(){select('#title', 1)}, function(){select('#title', 0)});
    $('#fl1').click(function(){menu_click('#fl1', '#idl1');});
    $('#fl2').click(function(){menu_click('#fl2', '#idl2');});
    $('#fl3').click(function(){menu_click('#fl3', '#idl3');});
    $('#sl2').click(function(){menu_click('#sl2', '#idl_price');});
    $('#title').click(function(){menu_click('#title', '#idl_title');});
    $('#proj1').mouseover(function(){show_proj_with_delay('aeroport');});
    $('#proj2').mouseover(function(){show_proj_with_delay('one_room_flat');});
    $('#proj3').mouseover(function(){show_proj_with_delay('che_guevara');});
    $('#proj4').mouseover(function(){show_proj_with_delay('hospital');});
    $('#proj5').mouseover(function(){show_proj_with_delay('admin_house');});
    $('#proj6').mouseover(function(){show_proj_with_delay('health_ufa');});
    $('#proj7').mouseover(function(){show_proj_with_delay('numbercity');});
    $('#proj8').mouseover(function(){show_proj_with_delay('private_house');});
    $('#proj9').mouseover(function(){show_proj_with_delay('sniff_house');});
    $('#proj10').mouseover(function(){show_proj_with_delay('townhouse');});
    $('#fl1').mouseover(function(){select_with_delay('#fl1', '#idl1');});
    $('#fl2').mouseover(function(){select_with_delay('#fl2', '#idl2');});
    $('#fl3').mouseover(function(){select_with_delay('#fl3', '#idl3');});
    $('#sl2').mouseover(function(){select_with_delay('#sl2', '#idl_price');});
    $('#title').mouseover(function(){select_with_delay('#title', '#idl_title');});
    $('.block').mouseout(function(){clearTimeout(window.menu_timeout);});
    $('#proj1').hover(function(){select('#proj1', 1);}, function(){select('#proj1', 0);});
    $('#proj2').hover(function(){select('#proj2', 1);}, function(){select('#proj2', 0);});
    $('#proj3').hover(function(){select('#proj3', 1);}, function(){select('#proj3', 0);});
    $('#proj4').hover(function(){select('#proj4', 1);}, function(){select('#proj4', 0);});
    $('#proj5').hover(function(){select('#proj5', 1);}, function(){select('#proj5', 0);});
    $('#proj6').hover(function(){select('#proj6', 1);}, function(){select('#proj6', 0);});
    $('#proj7').hover(function(){select('#proj7', 1);}, function(){select('#proj7', 0);});
    $('#proj8').hover(function(){select('#proj8', 1);}, function(){select('#proj8', 0);});
    $('#proj9').hover(function(){select('#proj9', 1);}, function(){select('#proj9', 0);});
    $('#proj10').hover(function(){select('#proj10', 1);}, function(){select('#proj10', 0);});
    $('#left').click(next);
    $('#right').click(next);
    func_reset();
    img_show();
    setInterval("img_show()", 6300);
    if((document.documentElement.clientHeight / 2 - 275) > 0){
        $('.body').css("top", ((document.documentElement.clientHeight / 2 - 300)*0.6));
    };
    if((document.documentElement.clientWidth / 2 - 570) > 0){
        $('.body').css("left", (document.documentElement.clientWidth / 2 - 570));
    };
});


function init_view() {
    var proj = window.projects2;
    var i = 0;
    var j;
    while (i < proj.length) {
        j = 0;
        while (j < proj[i].view.length) {
            if (proj[i].view[j].length == 1){
                if (proj[i].type == 'design') {
                    window.fotos3.push({0:'img/blanc.png', 
                                        1:'img/blanc.png', 
                                        2:'img/'.concat(proj[i].dir, '/', proj[i].view[j][0], 'wb.jpg'),
                                        'type': proj[i].type,
                                        'html': proj[i].html_name,
                                        'proj_name': proj[i].dir
                                        });
                } else {
                    window.fotos1.push({0:'img/'.concat(proj[i].dir,'/', proj[i].view[j][0], 'wb.jpg'), 
                                        1:'img/blanc.png', 
                                        2:'img/blanc.png',
                                        'type': proj[i].type,
                                        'html': proj[i].html_name,
                                        'proj_name': proj[i].dir
                                        });
                };
            };
            if (proj[i].view[j].length == 2){
                if (proj[i].type == 'design') {
                    window.fotos2.push({0:'img/blanc.png', 
                                        1:'img/'.concat(proj[i].dir, '/', proj[i].view[j][0], 'wb.jpg'), 
                                        2:'img/'.concat(proj[i].dir, '/', proj[i].view[j][1], 'wb.jpg'),
                                        'type': proj[i].type,
                                        'html': proj[i].html_name,
                                        'proj_name': proj[i].dir
                                        });
                    window.fotos3.push({0:'img/blanc.png', 
                                        1:'img/'.concat(proj[i].dir, '/', proj[i].view[j][0], 'wb.jpg'), 
                                        2:'img/'.concat(proj[i].dir, '/', proj[i].view[j][1], 'wb.jpg'),
                                        'type': proj[i].type,
                                        'html': proj[i].html_name,
                                        'proj_name': proj[i].dir
                                        });
                } else {
                    window.fotos1.push({0:'img/'.concat(proj[i].dir, '/', proj[i].view[j][0], 'wb.jpg'),
                                        1:'img/'.concat(proj[i].dir, '/', proj[i].view[j][1], 'wb.jpg'), 
                                        2:'img/blanc.png',
                                        'type': proj[i].type,
                                        'html': proj[i].html_name,
                                        'proj_name': proj[i].dir
                                        });
                    window.fotos2.push({0:'img/'.concat(proj[i].dir, '/', proj[i].view[j][0], 'wb.jpg'), 
                                        1:'img/'.concat(proj[i].dir, '/', proj[i].view[j][1], 'wb.jpg'), 
                                        2:'img/blanc.png',
                                        'type': proj[i].type,
                                        'html': proj[i].html_name,
                                        'proj_name': proj[i].dir
                                        });
                };
            };
            if (proj[i].view[j].length == 3){
                if (proj[i].type == 'design') {
                    window.fotos2.push({0:'img/'.concat(proj[i].dir, '/', proj[i].view[j][0], '.jpg'), 
                                        1:'img/'.concat(proj[i].dir, '/', proj[i].view[j][1], 'wb.jpg'), 
                                        2:'img/'.concat(proj[i].dir, '/', proj[i].view[j][2], '.jpg'),
                                        'type': proj[i].type,
                                        'html': proj[i].html_name,
                                        'proj_name': proj[i].dir
                                        });
                    window.fotos3.push({0:'img/'.concat(proj[i].dir, '/', proj[i].view[j][0], '.jpg'), 
                                        1:'img/'.concat(proj[i].dir, '/', proj[i].view[j][1], '.jpg'), 
                                        2:'img/'.concat(proj[i].dir, '/', proj[i].view[j][2], 'wb.jpg'),
                                        'type': proj[i].type,
                                        'html': proj[i].html_name,
                                        'proj_name': proj[i].dir
                                        });
                } else {
                    window.fotos1.push({0:'img/'.concat(proj[i].dir, '/', proj[i].view[j][0], 'wb.jpg'), 
                                        1:'img/'.concat(proj[i].dir, '/', proj[i].view[j][1], '.jpg'), 
                                        2:'img/'.concat(proj[i].dir, '/', proj[i].view[j][2], '.jpg'),
                                        'type': proj[i].type,
                                        'html': proj[i].html_name,
                                        'proj_name': proj[i].dir
                                        });
                    window.fotos2.push({0:'img/'.concat(proj[i].dir, '/', proj[i].view[j][0], '.jpg'), 
                                        1:'img/'.concat(proj[i].dir, '/', proj[i].view[j][1], 'wb.jpg'), 
                                        2:'img/'.concat(proj[i].dir, '/', proj[i].view[j][2], '.jpg'),
                                        'type': proj[i].type,
                                        'html': proj[i].html_name,
                                        'proj_name': proj[i].dir
                                        });
                };
            };
            j++;
        };
        i++;
    };
}

function generate_proj_view(){
    var proj = window.projects2;
    var i = 0;
    while (i < proj.length) {
        if (proj[i].type == 'design'){
            align = 'right';
            }else{
                align = 'left';
                };
        content = "<p id='".concat(proj[i].id.slice(1), "' class='proj button' style='text-align:", align,"'>", proj[i].html_name, "</p>");
        $('#idl2').append(content);
        i++;
    };
}
