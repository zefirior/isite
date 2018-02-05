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
var proj_ch_interval = 4000;


$(document).ready(function (){
    init_view();
    $('.img').click(function(){img_select();});
    $('.img').mouseover(function(){img_unclear();});
    $('.img').mouseover(img_select_with_delay);
    $('.img').mouseout(function(){clearTimeout(window.img_timeout);});
    $('#slide').click(func_reset);
    $('.button').mouseover(reset);
    $('.button').click(reset);
    $('#next-proj').click(next_proj);
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
    $('#fl1').mouseover(function(){select_with_delay('#fl1', '#idl1');});
    $('#fl2').mouseover(function(){select_with_delay('#fl2', '#idl2');});
    $('#fl3').mouseover(function(){select_with_delay('#fl3', '#idl3');});
    $('#sl2').mouseover(function(){select_with_delay('#sl2', '#idl_price');});
    $('#title').mouseover(function(){select_with_delay('#title', '#idl_title');});
    $('.block').mouseout(function(){clearTimeout(window.menu_timeout);});
    $('#left').click(next);
    $('#right').click(next);
    func_reset();
    img_show();
    setInterval("img_show()", window.proj_ch_interval + 300);
    body_top = (document.documentElement.clientHeight / 2 - 315)*0.6;
    generate_proj_view();
});

function generate_proj_view(){
    var proj = window.projects2;
    var i = 0;
    while (i < 9) { //proj.length) {
        if (proj[i].type == 'design'){
            align = 'right';
            }else{
                align = 'left';
                };
        content = "<div class='container_proj'><p id='".concat(proj[i].id.slice(1), "' class='proj button' style='text-align:", align,"'>", proj[i].html_name, "</p></div>");
        $('#proj-wrap').append(content);
        $(proj[i].id).mouseover({dir: proj[i].dir}, function(event){show_proj_with_delay(event.data.dir);});
        $(proj[i].id).mouseover({id: proj[i].id}, function(event){select(event.data.id, 1);});
        $(proj[i].id).mouseout({id: proj[i].id}, function(event){select(event.data.id, 0);});
        i++;
    };
}

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

