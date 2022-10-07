let streamers_arr = ["KoksyaChan", "k0kashechka", "aikasan_", "nodarbatman"]

$(async function(){
    for (let i = 0; i < streamers_arr.length; i++) {
    $.get({url: `https://api.curly.team/twitch/?user=${streamers_arr[i]}`, async: false, success: function(result){
    let data;
    if (result.length > 0) {
        data = `Live | ${result[0].title}`
    } else {
        data = `Offline`
    }
    $(`.${streamers_arr[i]}`).text(data)
  }});
};
});

$(async function(){
    $.get({url: `https://api.curly.team/trovo/?user=mikamore_`, async: false, success: function(result){
        let data;
        if (result.is_live === true) {
            data = `live | ${result.live_title}`
        } else {
            data = `Offline`
        }
        $(`.mikamore_`).text(data)
    }})
});