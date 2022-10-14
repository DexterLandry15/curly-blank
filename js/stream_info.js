let streamers_arr = ["KoksyaChan", "k0kashechka", "aikasan_", "nodarbatman"]
$( document ).ready(function() {
$(async function(){
    for (let i = 0; i < streamers_arr.length; i++) {
    $.get({url: `https://api.curly.team/twitch/?user=${streamers_arr[i]}`, async: true, success: function(result){
    if (result.length > 0) {
        $(`.${streamers_arr[i]}`).removeClass("brightness-[0.4]").removeClass("animate-pulse");
        $(`.${streamers_arr[i]}-live`).removeClass("hidden");
    } else {
        $(`.${streamers_arr[i]}`).removeClass("brightness-[0.4]").removeClass("animate-pulse");
    }
  }});
};
});

$(async function(){
    $.get({url: `https://api.curly.team/trovo/?user=mikamore_`, async: true, success: function(result){
        let data;
        if (result.is_live === true) {
            $(`.mikamore_`).removeClass("brightness-[0.4]").removeClass("animate-pulse");
            $(`.mikamore_-live`).removeClass("hidden");
        } else {
            $(`.mikamore_`).removeClass("brightness-[0.4]").removeClass("animate-pulse");
        }
    }})
});
});