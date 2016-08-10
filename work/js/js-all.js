function select(id, on){
//    clearTimeout(id_timeout_close);
//    clearTimeout(id_timeout_deamon);
//    clearTimeout(id_timeout_button);
    
    if (on){
        //$(id).css("background", "black");
        //$(id).css("color", "white");
        $(id.concat(' .block')).animate({opacity: 1}, 100);
    } else {
        clearTimeout(window.menu_timeout);
        $(id.concat(' .block')).animate({opacity: 0}, 100);
        //$(id).css("background", "white");
        //$(id).css("color", "black");
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
    //$('.img').unbind('mouseover');
}

function deactivate_menu (){
    activ_proj_menu = 0;
    //$('#il1 img').mouseover(function(){img_unclear();});
    //$('#il3 img').mouseover(function(){img_unclear();});
}

function open_menu (list){
    $(list).fadeIn(window.timeout);
}

function menu_click (id, list){
    clearTimeout(window.menu_timeout);
    $('.list').fadeOut(window.timeout);
    if (id != '#fl2'){close_menu();};
    if (id == '#fl2'){activate_menu ();};
    window.activ = 0;
    img_clear_slow(window.timeout);
    caption_clr();
    setTimeout("open_menu('".concat(list, "')"), window.timeout + 50);
    //$(list).fadeIn(500);
}

function select_with_delay(id, list){
    clearTimeout(window.menu_timeout);
    window.menu_timeout = setTimeout("menu_click('".concat(id, "', '", list, "')"), 1000);
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

function get_proj(name){
    var index ;
    var i = 0;
    var proj = window.projects2;
    while (i < proj.length) {
        if (name == proj[i].dir){index = i; break;};
        i++;}
    return proj[index];
}

function show_proj(proj_name){
    window.focus_pr = get_proj(proj_name);
    obj = window.focus_pr;
    caption(proj_name);
    clearTimeout(window.time_close_id);
    $('#right').css('display', 'none');
    $('#left').css('display', 'none');
    if (obj.type == 'design') {
        if (obj.view.length > 1) {
            $('#right').css('display', 'block');
        };
        $('#il1 img').attr({src: 'img/blanc.png'});
        $('#il2 img').attr({src: (
            'img/'.concat(obj.dir, '/', obj.view[0][obj.view[0].length - 2], 'wb.jpg') ? 
            'img/'.concat(obj.dir, '/', obj.view[0][obj.view[0].length - 2], 'wb.jpg') : 
            'img/blanc.png')});
        $('#il3 img').attr({src: 
            'img/'.concat(obj.dir, '/', obj.view[0][obj.view[0].length - 1], 'wb.jpg')});
    } else {
        if (obj.view.length > 1) {
            $('#left').css('display', 'block');
        };
        $('#il1 img').attr({src: 'img/'.concat(obj.dir, '/', obj.view[0][0], 'wb.jpg')});
        $('#il2 img').attr({src: 'img/'.concat(obj.dir, '/', obj.view[0][1], 'wb.jpg')});
        $('#il3 img').attr({src: 'img/blanc.png'});
    };
    $('#il1').css('display', 'block');
    $('#il3').css('display', 'block');
}

function next(){
    reset();
    obj = window.focus_pr;
    obj.view.push(obj.view.shift());
    if (obj.type == 'design') {
        if (obj.view[0].length > 1) {
            $('#right').css('display', 'block');
        };
        $('#il1 img').attr({src: 'img/blanc.png'});
        $('#il2 img').attr({src: (
            'img/'.concat(obj.dir, '/', obj.view[0][obj.view[0].length - 2], 'wb.jpg') ? 
            'img/'.concat(obj.dir, '/', obj.view[0][obj.view[0].length - 2], 'wb.jpg') : 
            'img/blanc.png')});
        $('#il3 img').attr({src: 
            'img/'.concat(obj.dir, '/', obj.view[0][obj.view[0].length - 1], 'wb.jpg')});
    } else {
        if (obj.view[0].length > 1) {
            $('#left').css('display', 'block');
        }
        $('#il1 img').attr({src: 'img/'.concat(obj.dir, '/', obj.view[0][0], 'wb.jpg')});
        $('#il2 img').attr({src: 'img/'.concat(obj.dir, '/', obj.view[0][1], 'wb.jpg')});
        $('#il3 img').attr({src: 'img/blanc.png'});
    };
}

function reset() {
    clearTimeout(window.reset_id);
    window.reset_id = setTimeout("func_reset()", 10000);
}

function func_reset() {
    caption_clr();
    $('.list').fadeOut(window.timeout);
    $('#right').css('display', 'none');
    $('#left').css('display', 'none');
    img_clear_slow();
    activate();
}

function caption(proj_name){
    obj = get_proj(proj_name);
    if (obj.type == 'design') {
        $('#captionL').html('');
        $('#captionR').html(obj.html_name);
    } else {
        $('#captionR').html('');
        $('#captionL').html(obj.html_name);
    };
}

function caption_clr(){
    $('#captionR').html('');
    $('#captionL').html('');
}
