async function teamLogos(name) {
    let teams = {
        '76ers': 'phi',
        'blazers': 'por',
        'bucks': 'mil',
        'bulls': 'chi',
        'cavaliers': 'cle',
        'celtics': 'bos',
        'clippers': 'lac',
        'grizzlies': 'mem',
        'hawks': 'atl',
        'heat': 'mia',
        'hornets': 'cha',
        'jazz': 'uta',
        'kings': 'sac',
        'knicks': 'nyk',
        'lakers': 'lal',
        'magic': 'orl',
        'mavericks': 'dal',
        'nets': 'bkn',
        'nuggets': 'den',
        'pacers': 'ind',
        'pelicans': 'nop',
        'pistons': 'det',
        'raptors': 'tor',
        'rockets': 'hou',
        'spurs': 'sas',
        'suns': 'phx',
        'thunder': 'okc',
        'timberwolves': 'min',
        'warriors': 'gsw',
        'wizards': 'was',
      }
      teams[name.toLowerCase()];

}


async function latestmatches() {
    // get today's date
    var today = new Date();
    today.setDate(today.getDate());
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    // get the current games
    const results = await axios ({
        method: 'get',
        url: 'https://www.balldontlie.io/api/v1/games',
        params: {
            'dates[]': today,
            'per_page': 5
        }
    });

    // add results to div
    const matchups = results.data.data;
    matchups.forEach((matchup) => {
        $('#latest').append(`<li class="py-2"><i class="icon-check text-info mr-2"></i> <span>`+ matchup.home_team.full_name + ` vs. `+ matchup.visitor_team.full_name + `</span></li>`);
    });

    // for (let i=0; i<10; i++) {
    //     var home_logo = teamLogos(data[i].home_team.name);
    //     var url = "b" + home_logo + ".png" 
    //     console.log(home_logo);
    //     console.log(url);
    //     $latest.append(`<li class="py-2"><i class="icon-check text-info mr-2"></i> <span>`+ data[i].home_team.full_name + ` vs. `+ data[i].visitor_team.full_name + `</span></li>`);
    // }

    

}

function initialize() {
    latestmatches();
}

$(document).ready(initialize());