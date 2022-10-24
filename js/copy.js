$(document).ready(function(){
    $(".copy-btn").click(function(){
        navigator.clipboard.writeText("mc.curly.team");
        $(".ip").fadeOut("fast", function () {
                $(".ip").text('Скопировано!').fadeIn().delay(1000).fadeOut("fast", function() {
                    $(".ip").text('IP: MC.CURLY.TEAM').fadeIn()
                });
    });
});
});