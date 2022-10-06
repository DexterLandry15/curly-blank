let streamers_arr = ["KoksyaChan", "k0kashechka", "aikasan_", "nodarbatman"]

async function stream() {
let i;

    for (i = 0; i < streamers_arr.length; i++) {
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
};

$(async function(){
    await stream()
});

