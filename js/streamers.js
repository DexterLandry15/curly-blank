
    $( document ).ready( function() {

        $.getJSON( "js/streamers.json",  function( data ) {
            let link;
            $.each(data, async function(key, val) {
                switch (val.platform) {
                    case 'trovo':
                        link = 'https://trovo.live/s/'
                        break;
                    case 'twitch':
                        link = 'https://www.twitch.tv/'
                        break
                }

              async function load(){  $(".streamers").append(`
                <a href="${link}${key}">
                <div class="w-[200px] h-[250px] flex flex-col rounded-3xl overflow-clip" style="background-color: ${val.color}">
                <div class="h-3/5 bg-cover bg-center brightness-50" style="background-image: url('/assets/streamers/${key}.png"></div>
                <div class="h-2/5 flex flex-col font-['Rubik'] text-white mt-3 ml-3">
                <span class="font-semibold text-xl">${key}</span>
                <span>${val.title}</span>
                <div class="flex flex-row justify-end items-end h-full live-${key}">
                  <div class="flex flex-row items-center gap-x-1 mr-3 mb-2">
                  <span class="font-medium text-xs text-center text-slate-500 hidden offline">
                  offline
                </span>
                  <span class="font-medium text-xs text-center text-slate-500 animate-pulse loading">
                  loading...
                </span>
                <div class="live flex flex-row items-center gap-x-1 rounded-3xl bg-red-600 px-3 mb-1 hidden">
                  <span class="font-medium text-xs text-center text-white ">
                    live
                  </span>
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" class="h-6" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3447 14C13.4493 14 14.3447 13.1046 14.3447 12C14.3447 10.8954 13.4493 10 12.3447 10C11.2402 10 10.3447 10.8954 10.3447 12C10.3447 13.1046 11.2402 14 12.3447 14Z" stroke="#FFF" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.3447 18C21.6047 16.33 22.3447 14.25 22.3447 12C22.3447 9.75 21.6047 7.67 20.3447 6" stroke="#FFF" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.34473 6C3.08473 7.67 2.34473 9.75 2.34473 12C2.34473 14.25 3.08473 16.33 4.34473 18" stroke="#FFF" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.1445 15.6C17.8945 14.6 18.3445 13.35 18.3445 12C18.3445 10.65 17.8945 9.40002 17.1445 8.40002" stroke="#FFF" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.54474 8.40002C6.79474 9.40002 6.34473 10.65 6.34473 12C6.34473 13.35 6.79474 14.6 7.54474 15.6" stroke="#FFF" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                  </div>
                </div>
              </div>
              </div>
              </div>

                `)
                }

            await load().then(() => {
              switch (val.platform) {
                 case "twitch":
                  $.get(`https://api.curly.team/twitch/?user=${key}`, data,
                    function (data) {
                      if (data.length === 0 ) {
                        $(`.live-${key} > div > .loading`).addClass('hidden');

                      } else {
                        $(`.live-${key} > div > .loading`).addClass('hidden');
                        $(`.live-${key} > div > .live`).removeClass('hidden');

                      }
                    }
                  );
                  break;
                  case "trovo":
                    $.get(`https://api.curly.team/trovo/?user=${key}`, data,
                    function (data) {
                      if (data.is_live === true ) {
                        $(`.live-${key} > div > .loading`).addClass('hidden');
                        $(`.live-${key} > div > .live`).removeClass('hidden');
                      } else {
                        $(`.live-${key} > div > .loading`).addClass('hidden');

                      }
                    });
                  break;
              }
            })
            })
            });



});