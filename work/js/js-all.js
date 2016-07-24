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

function unselect(id, list){
//    id_timeout_deamon = setTimeout('img_deamon()', 3000);
    activate();
    if (id == '#fl2'){activ_proj_menu = 0};
    $(id).css("background", "white");
    $(id).css("color", "black");
    $(list).css('display', 'none');  //css("display", "none");
}

function activate_menu (){
    activ_proj_menu = 1;
    $('.img').unbind('mouseover');
}

function deactivate_menu (){
    activ_proj_menu = 0;
    $('#il1 img').mouseover(function(){img_unclear();});
    $('#il3 img').mouseover(function(){img_unclear();});
}

function menu_click(id, list){
    $('.list').css('display', 'none');
    if (id != '#fl2'){close_menu();};
    if (id == '#fl2'){activate_menu ();};
    window.activ = 0;
    img_clear();
    $(list).css("display", "block")
}

function activate(){
    window.activ = 1;
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
        $('.img').mouseover(function(){img_unclear();});
        $('#right').css('display', 'none');
        $('#left').css('display', 'none');
        activ_proj_menu = 0;
    };
}

function show_proj(proj_name){
    window.focus_pr = get_proj(proj_name);
    obj = window.focus_pr;
    clearTimeout(window.time_close_id);
    $('#right').css('display', 'none');
    $('#left').css('display', 'none');
    if (obj.type == 'design') {
        $('#il1 img').attr({src: 'img/blanc.png'});
        $('#il3 img').attr({src: 
            'img/'.concat(obj.dir, '/', obj.view[0][obj.view[0].length - 1], 'wb.jpg')});
        if (obj.view[0].length > 1) {
            $('#right').css('display', 'block');
        }
    } else {
        if (obj.view[0].length > 1) {
            $('#left').css('display', 'block');
        }
        $('#il1 img').attr({src: 'img/'.concat(obj.dir, '/', obj.view[0][0], 'wb.jpg')});
        $('#il3 img').attr({src: 'img/blanc.png'});
    };
    $('#il1').css('display', 'block');
    $('#il3').css('display', 'block');
}

function next(){
    obj = window.focus_pr;
    obj.view.push(obj.view.shift());
    if (obj.type == 'design') {
        $('#il1 img').attr({src: 'img/blanc.png'});
        $('#il3 img').attr({src: 
            'img/'.concat(obj.dir, '/', obj.view[0][obj.view[0].length - 1], 'wb.jpg')});
        if (obj.view[0].length > 1) {
            $('#right').css('display', 'block');
        }
    } else {
        if (obj.view[0].length > 1) {
            $('#left').css('display', 'block');
        }
        $('#il1 img').attr({src: 'img/'.concat(obj.dir, '/', obj.view[0][0], 'wb.jpg')});
        $('#il3 img').attr({src: 'img/blanc.png'});
    };
}

function reset() {
    clearTimeout(window.reset_id);
    window.reset_id = setTimeout("func_reset()", 15000);
}

function func_reset() {
    $('.list').css('display', 'none');
    $('#right').css('display', 'none');
    $('#left').css('display', 'none');
    img_clear();
    activate();
}
