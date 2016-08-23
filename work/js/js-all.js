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
    $('.button').css('font-weight', 'normal');
    $('.button').css('text-transform', 'lowercase');
    $(id).css('font-weight', 'bold');
    $(id).css('text-transform', 'capitalize');
    img_clear_slow(window.timeout);
    caption_clr();
    setTimeout("open_menu('".concat(list, "')"), window.timeout + 50);
    //$(list).fadeIn(500);
}

function select_with_delay(id, list){
    clearTimeout(window.menu_timeout);
    window.menu_timeout = setTimeout("menu_click('".concat(id, "', '", list, "')"), 300);
}

function show_proj_with_delay(proj_name){
    window.menu_timeout = setTimeout("show_proj('".concat(proj_name, "')"), 200);
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
    $('.proj').css('font-weight', 'normal');
    $('.proj').css('text-transform', 'lowercase');
    $(obj.id).css('font-weight', 'bold');
    $(obj.id).css('text-transform', 'none');
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
            'img/'.concat(obj.dir, '/', obj.view[0][obj.view[0].length - 2], '.jpg') ? 
            'img/'.concat(obj.dir, '/', obj.view[0][obj.view[0].length - 2], '.jpg') : 
            'img/blanc.png')});
        $('#il3 img').attr({src: 
            'img/'.concat(obj.dir, '/', obj.view[0][obj.view[0].length - 1], '.jpg')});
    } else {
        if (obj.view[0].length > 1) {
            $('#left').css('display', 'block');
        }
        $('#il1 img').attr({src: 'img/'.concat(obj.dir, '/', obj.view[0][0], '.jpg')});
        $('#il2 img').attr({src: 'img/'.concat(obj.dir, '/', obj.view[0][1], '.jpg')});
        $('#il3 img').attr({src: 'img/blanc.png'});
    };
}

function reset() {
    clearTimeout(window.reset_id);
    window.reset_id = setTimeout("func_reset()", 15000);
}

function func_reset() {
    caption_clr();
    $('.list').fadeOut(window.timeout);
    $('#right').css('display', 'none');
    $('#left').css('display', 'none');
    $('.button').css('font-weight', 'normal');
    $('.button').css('text-transform', 'lowercase');
    img_clear_slow();
    activate();
}

function caption(proj_name){
    obj = get_proj(proj_name);
    if (obj.type == 'design') {
        $('#captionL').html('');
        $('#captionR').html("<p style='letter-spacing: 6px; font-size: 10pt; opacity: 0.7'>".concat(obj.html_name, "</ p>"));
    } else {
        $('#captionR').html('');
        $('#captionL').html("<p style='letter-spacing: 6px; font-size: 10pt; opacity: 0.7'>".concat(obj.html_name, "</ p>"));
    };
}

function caption_clr(){
    $('#captionR').html('');
    $('#captionL').html('');
}

function next_proj(){
    $('.container_proj:first-child').remove()
    id = $('.container_proj:last-child p').attr('id');
    var proj = window.projects2;
    var item = 0;
    var i = 0;
    while (i < proj.length) {
        if(proj[i].id.slice(1) == id){
            item = i % (proj.length - 1) + 1;
            break;
        };
        i++;
    };
    if (proj[item].type == 'design'){
        align = 'right';
        }else{
            align = 'left';
            };
    content = "<div class='container_proj'><p id='".concat(proj[item].id.slice(1), "' class='proj button' style='text-align:", align,"'>", proj[item].html_name, "</p></div>");
    $('#proj_wrap').append(content);
    $(proj[item].id).mouseover({dir: proj[item].dir}, function(event){show_proj_with_delay(event.data.dir);});
    $(proj[item].id).mouseover({id: proj[item].id}, function(event){select(event.data.id, 1);});
    $(proj[item].id).mouseout({id: proj[item].id}, function(event){select(event.data.id, 0);});
    $(proj[item].id).css('font-weight', 'normal');
    $(proj[item].id).css('text-transform', 'lowercase');
}
