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
    $('#fl1').click(function(){menu_click('#fl1', '#idl1');});
    $('#fl2').click(function(){menu_click('#fl2', '#idl2');});
    $('#fl3').click(function(){menu_click('#fl3', '#idl3');});
    $('#sl2').click(function(){menu_click('#sl2', '#idl_price');});
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
    if((document.documentElement.clientHeight / 2 - 300) > 0){
        $('.body').css("top", ((document.documentElement.clientHeight / 2 - 300)*0.6));
    };
    if((document.documentElement.clientWidth / 2 - 615) > 0){
        $('.body').css("left", (document.documentElement.clientWidth / 2 - 615));
    };
});

function select(id, on){
//    clearTimeout(id_timeout_close);
//    clearTimeout(id_timeout_deamon);
//    clearTimeout(id_timeout_button);
    
    if (on){
        $(id).css("background", "black");
        $(id).css("color", "white");
    } else {
        $(id).css("background", "white");
        $(id).css("color", "black");
    };    
}

function menu_click(id, list){
    window.activ = 0;
    
    if (id != '#fl2'){close_menu();};
    if (id == '#fl2'){activ_proj_menu = 1};
    img_clear();
    $(list).css("display", "block")
}

function activate(){
    window.activ = 1;
}

function unselect(id, list){
//    id_timeout_deamon = setTimeout('img_deamon()', 3000);
    activate();
    if (id == '#fl2'){activ_proj_menu = 0};
    $(id).css("background", "white");
    $(id).css("color", "black");
    $(list).css('display', 'none');  //css("display", "none");
}

function proj_list_close(){
    window.timeout_id = setTimeout("unselect('#fl2', '#idl2')",200);
}

function stop_close(){
    clearTimeout(window.timeout_id);
}

function close_menu(){
    if (activ_proj_menu == 1){
        unselect('#fl2', '#idl2');
        activ_proj_menu = 0;
    };
}

function show_proj(proj_name){
    a = get_proj(proj_name);
    if (a.type == 'design') {
        $('#il1 img').attr({src: 'img/blanc.png'});
        $('#il3 img').attr({src: 'img/'.concat(a.dir, '/', a.view[0][a.view[0].length - 1], 'wb.jpg')});
    } else {
        $('#il1 img').attr({src: 'img/'.concat(a.dir, '/', a.view[0][0], 'wb.jpg')});
        $('#il3 img').attr({src: 'img/blanc.png'});
    };
    $('#il1').css('display', 'block');
    $('#il3').css('display', 'block');
}
