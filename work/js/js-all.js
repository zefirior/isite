var fotos1 = new Array("/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg", "/img/5.jpg", "/img/6.jpg", "/img/7.jpg", "/img/8.jpg", "/img/9.jpg", "/img/10.jpg");
var fotos2 = new Array("img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg");
var fotos3 = new Array("img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg");
var id_timeout;
var activ = 1;
var position;
var id_img;
var foto;
var list;
var timeout_id;
var activ_proj_menu = 0;
var projects = {
    'proj1' : ["img/1.jpg", "img/2.jpg", "img/3.jpg"],
    'proj2' : ["img/4.jpg", "img/5.jpg", "img/6.jpg"],
    'proj3' : ["img/7.jpg", "img/8.jpg", "img/9.jpg"],
    'proj4' : ["img/10.jpg", "img/1.jpg", "img/5.jpg"]
};


$(document).ready(function (){
    img_show();
    $('#debug').append('<b>9</b>');
    setInterval("img_show()", 6000);
    if((document.documentElement.clientHeight / 2 - 300) > 0){
        $('.body').css("top", (document.documentElement.clientHeight / 2 - 300));
    };
    $('.body').css("top", (document.documentElement.clientHeight / 2));
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


function show_proj(proj_num){
    $('#debug').append('<b>7</b>');
    $('#debug').append('<b>' + projects[proj_num][0] + '</b>');
    $('#il1 img').attr({src: projects[proj_num][0]});
    $('#il3 img').attr({src: projects[proj_num][2]});
    $('#il1').css('display', 'block');
    $('#il3').css('display', 'block');
}
