let streamers_arr = ["dexter_landry", "k0kashechka", "aikasan_", "AkiSanMoon"]
let info_arr = []
async function stream() {
let i;

    for (i = 0; i < streamers_arr.length; i++) {
    $.get({url: `http://api.curly.team:8000/twitch/?user=${streamers_arr[i]}`, async: false, success: function(result){
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
    console.log(info_arr)
});

/* $(async function(){
   let foo = stream(`dexter_landry`).then((data) => {
    return data
   }).catch((err) => {
    console.log(err)
   })
   console.log(await foo)
}) */

/*
$(document).ready(async function(){
     $(".kokos").text(await stream(`dexter_landry`));
     console.log(await stream(`dexter_landry`))

}); */





