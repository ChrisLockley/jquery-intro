$( document ).ready(function() {
    const body = $( 'body' );
    /*
    body.append('<ul class="movies"></ul>');
    
    const listOfMovies = ['The Lighthouse', 
    'The Dark Knight', 'A Clockwork Orange', 'Big Hero 6', 
    "Love Don't Cost Anything"];

    const movies = $( '.movies' );

    listOfMovies.forEach((movie) => {
        movies.append(`<li class="movie">${movie}</li>`);
    });

    
    let player = {
        ursename: "string",
        score: num,
        pic: "url"
    }
    */
    body.append('<ul class="player-list"></ul>');

    const playerList = $( '.player-list' );

    let players = [
        {
            username: "C0rti_M3tro",
            score: 420,
            pic: ''
        },
        {
            username: "C0rti_M3tro",
            score: 420,
            pic: ''
        },
        {
            username: "C0rti_M3tro",
            score: 420,
            pic: ''
        },
        {
            username: "C0rti_M3tro",
            score: 420,
            pic: ''
        }
    ];

    players.forEach((player) => {
        const { username, score, pic } = player;
        playerList.append(
            `<li id="${username}">
                <ul>
                    <li>${username}</li>
                    <li><img src="${pic}">></li>
                    <li>${score}</li>
                </ul>
            </li>`
        )
    })
});