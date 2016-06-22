var id_timeout;
var activ = 1;
var position;
var id_img;
var foto;
var list;
var timeout_id;
var activ_proj_menu = 0;


$(document).ready(function (){
    init_view();
    img_show();
    setInterval("img_show()", 6300);
    if((document.documentElement.clientHeight / 2 - 300) > 0){
        $('.body').css("top", (document.documentElement.clientHeight / 2 - 300));
    };
    if((document.documentElement.clientWidth / 2 - 500) > 0){
        $('.body').css("left", (document.documentElement.clientWidth / 2 - 600));
    };
});

function select(id, list){
//    clearTimeout(id_timeout_close);
//    clearTimeout(id_timeout_deamon);
//    clearTimeout(id_timeout_button);
    window.activ = 0;
    close_menu();
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
    }
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


function show_proj(proj_num){
    $('#il1 img').attr({src: projects[proj_num][0]});
    $('#il3 img').attr({src: projects[proj_num][2]});
    $('#il1').css('display', 'block');
    $('#il3').css('display', 'block');
}
