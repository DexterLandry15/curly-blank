let streamers_arr = ["KoksyaChan", "k0kashechka", "aikasan_", "nodarbatman", "ex1zon", "akiafk", "unoteka", "aaannnw_192"]
$( document ).ready(function() {
    $(async function(){
        for (let i = 0; i < streamers_arr.length; i++) {

            $(`.${streamers_arr[i]}`).removeClass("brightness-[0.4]").removeClass("animate-pulse");
            $(`.${streamers_arr[i]}-live`).removeClass("hidden");

      }});


$(async function(){
    $(`.mikamore_`).removeClass("brightness-[0.4]").removeClass("animate-pulse");
    $(`.mikamore_-live`).removeClass("hidden");

});
});