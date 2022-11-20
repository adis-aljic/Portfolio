$(document).ready(()=>{
    $(`.sidenav`).sidenav();
    $(`.sidenav a`).css("color","white");
    $('.materialboxed').materialbox();
    $(`#list_introduction li`).css(
        {
            " list-style-type":"square",
            "margin-bottom":"1rem",
            "text-align":"justify"
        }
    )
    $(`#contact_list_icons li:odd`).css("margin","0 1rem 0 1rem")
    $(`#contact_list_text li:first`).css("margin-left","1rem")
    

});