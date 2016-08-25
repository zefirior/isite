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
}

function img_select(){
    image_obj[0].src = document.il1.src.replace('wb', '');
    image_obj[1].src = document.il2.src.replace('wb', '');
    image_obj[2].src = document.il3.src.replace('wb', '');
    document.il1.src = image_obj[0].src;
    document.il2.src = image_obj[1].src;
    document.il3.src = image_obj[2].src;
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

        image_obj[0].src = list[view][0];
        image_obj[1].src = list[view][1];
        image_obj[2].src = list[view][2];
                
        document.il1.src = image_obj[0].src;
        document.il2.src = image_obj[1].src;
        document.il3.src = image_obj[2].src;
        caption(list[view]['proj_name']);
        $(id_img).fadeIn(1000);
    }
}


function img_select_with_delay(){
    clearTimeout(window.img_timeout);
    window.img_timeout = setTimeout(img_select, 600);
}


//$('#debug').append('<b>' + list[foto] + '</b>');


