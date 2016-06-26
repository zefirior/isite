var id_timeout;
var activ = 1;
var position;
var id_img;
var foto;
var list;
var timeout_id;
var time_close_id;
var activ_proj_menu = 0;


$(document).ready(function (){
    init_view();
    $('#il1 img').click(function(){img_unclear();});
    $('#il2 img').click(function(){img_unclear();});
    $('#il3 img').click(function(){img_unclear();});
    img_show();
    setInterval("img_show()", 6300);
    if((document.documentElement.clientHeight / 2 - 300) > 0){
        $('.body').css("top", (document.documentElement.clientHeight / 2 - 300));
    };
    if((document.documentElement.clientWidth / 2 - 615) > 0){
        $('.body').css("left", (document.documentElement.clientWidth / 2 - 615));
    };
});

function select(id, list){
//    clearTimeout(id_timeout_close);
//    clearTimeout(id_timeout_deamon);
//    clearTimeout(id_timeout_button);
    window.activ = 0;
    
    if (id != '#fl2'){close_menu();};
    if (id == '#fl2'){activ_proj_menu = 1};
    img_clear();
    
    $(id).css("background", "black");
    $(id).css("color", "white");
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
