$( document ).ready(function() {
  $(async function(){
      $.get({url: `http://api.curly.team/mc`, async: true, success: function(asd){
        const result = {'players' : ['dexter_landry', 'gelshteyn2', 'wayplay']}
      if (!!result && result.players.length > 0) {
        for (let i=0; i < result.players.length; i++ ) {
          $(".player-counter").text(`${result.online_players}`)
          $( ".players-list" ).append( `<div class="w-full h-5 bg-player flex justify-start"><img src="https://mc-heads.net/avatar/${result.players[i]}/16" class=" mr-2 ">${result.players[i]}</div>` );
        }
      } else {
        $(".player-counter").text(`${result.online_players}`)
        $(".players-list").append(`<span>На сервере никого нет!</span>`)
      }
    }, error: function(error) {
      console.log(error);
      const result = {'players' : ['dexter_landry', 'gelshteyn2', 'wayplay']}

      for (let i=0; i < result.players.length; i++ ) {

        $(".player-counter").text(`${result.online_players}`)
        $( ".players-list" ).append( `<div class="w-full h-5 bg-player flex justify-start"><img src="https://mc-heads.net/avatar/${result.players[i]}/16" class=" mr-2 ">${result.players[i]}</div>` );
      }
      //$(".players-list").append(`<span>error =)</span>`)
    }});
  });
});