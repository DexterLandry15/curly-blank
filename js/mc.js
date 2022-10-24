$( document ).ready(function() {
  $(async function(){
      $.get({url: `https://api.curly.team/mc`, async: true, success: function(result){
      if (!!result && result.players.length > 0) {
        for (let i=0; i < result.players.length; i++ ) {
          $(".player-counter").text(`${result.online_players}/${result.max_players}`)
          $( ".players-list" ).append( `<div class="bg-player m-2 overflow-auto rounded-md text-gray-300 text-2xl flex items-center justify-center"> <img src="https://mc-heads.net/avatar/${result.players[i]}/32" alt="" class="h-6 mr-2 rounded-md">${result.players[i]}</div>` );
        }
      } else {
        $(".player-counter").text(`${result.online_players}/${result.max_players}`)
        $(".players-list").append(`<div class="h-1/6 m-1 overflow-auto rounded-md text-gray-300 text-2xl flex items-center justify-center">На сервере никого нет</div>`)
      }
    }, error: function(error) {
      console.log(error);
      $(".players-list").append(`<div class="h-1/6 m-1 overflow-auto rounded-md text-gray-300 text-2xl flex items-center justify-center">Ошибка на стороне сервера</div>`)
    }});
  });
});