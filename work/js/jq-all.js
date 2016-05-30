function select(id, list){
    clearTimeout(id_timeout);
    img_clear();
    $(id).css("background", "black");
    $(id).css("color", "white");
    $(list).css("display", "block")
}

function unselect(id, list){
    $(id).css("background", "white");
    $(id).css("color", "black");
    $(list).css("display", "none")
    img_deamon();
}
