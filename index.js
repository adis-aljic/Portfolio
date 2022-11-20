function autoplay() {
    $('#tools').carousel('next');
    setTimeout(autoplay, 3000);
}

$(`#title`).click(()=>window.location.reload())
$(document).ready(function(){
$('.sidenav').sidenav();
$('.tabs').tabs();
$('.scrollspy').scrollSpy();
$('.materialboxed').materialbox();
$('.tooltipped').tooltip();
$(`.text-contact`).css("margin-right","2rem")
$(`.card`).css("border-radius","15px")
$(`.indicator`).css("border-radius","10px")
$(`.indicator:first`).css("margin-left","20px")
$(`.indicator:last-child`).css("margin-right","20px")
$('#tools').carousel(); 

autoplay();


});