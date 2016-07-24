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
        if (a.view[0].length > 1) {
            $('#right').css('display', 'block');
        }
    } else {
        if (a.view[0].length > 1) {
            $('#left').css('display', 'block');
        }
        $('#il1 img').attr({src: 'img/'.concat(a.dir, '/', a.view[0][0], 'wb.jpg')});
        $('#il3 img').attr({src: 'img/blanc.png'});
    };
    $('#il1').css('display', 'block');
    $('#il3').css('display', 'block');
}
