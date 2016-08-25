function img_clear(){
    clearTimeout(window.time);
    $('#il1').css('display', 'none');
    $('#il2').css('display', 'none');
    $('#il3').css('display', 'none');
}

function img_unclear(){
    $('.list').css('display', 'none');
    $('#il1').css('display', 'block');
    $('#il2').css('display', 'block');
    $('#il3').css('display', 'block');
}

function img_clear_slow(num){
    $('#il1').fadeOut(num);
    $('#il2').fadeOut(num);
    $('#il3').fadeOut(num);
    $('#right').css('display', 'none');
    $('#left').css('display', 'none');
}

function img_select(){
    obj = window.focus_pr;
    for (i=1; i<4; i++){
        tag = '#il'.concat(String(i), ' img');
        path_wb = $(tag).attr('src');
        path = path_wb.replace('wb', '');
        $(tag).attr({src: path});
    }
    if (obj.type == 'design') {
        if (obj.view.length > 1) {
            $('#right').css('display', 'block');
        };
    } else {
        if (obj.view.length > 1) {
            $('#left').css('display', 'block');
        };
    };
/*var id_img = obj.getAttribute();*/
}

function img_unselect(tag){
    path = $(tag).attr('src');
    path_wb = path.replace('.jpg', 'wb.jpg');
    $(tag).attr({src: path_wb});
/*var id_img = obj.getAttribute();*/
}


function app(num){
    $('#debug').append('<b>'.concat(num, '</b>'));
    $('#debug').css('font-weight', 'normal');
}




function img_show(){
    if(window.activ) {
        
        window.time_close_id = setTimeout("img_clear_slow(1000)", 5000);
        
        var tmp;
        do {
        tmp = Math.round(3*Math.random() + 0.5);
        }
        while (window.position == tmp);
        window.position = tmp;
        id_img = '#il' + String(window.position);
        
        if (window.position == 1) {list = fotos1;};
        if (window.position == 2) {list = fotos2;};
        if (window.position == 3) {list = fotos3;};
                
        view = Math.round(list.length*Math.random() - 0.5);
        var img_tag = id_img + ' img';
        $('#il1 img').attr({src: list[view][0]});
        $('#il2 img').attr({src: list[view][1]});
        $('#il3 img').attr({src: list[view][2]});
        window.focus_pr = get_proj(list[view]['proj_name']);
        caption(list[view]['proj_name']);
        $(id_img).fadeIn(1000);
    }
}


function img_select_with_delay(){
    clearTimeout(window.img_timeout);
    window.img_timeout = setTimeout(img_select, 600);
}


//$('#debug').append('<b>' + list[foto] + '</b>');


