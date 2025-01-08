"use strict";
function matchPlayersAndTrainers(players, trainers) {
    trainers = trainers.sort((a, b) => a - b);
    players = players.sort((a, b) => a - b);
    let count = 0, play = 0, tra = 0;
    console.log('123', players, trainers);
    while (play < players.length && tra < trainers.length) {
        if (players[play++] <= trainers[tra]) {
            count++;
            tra++;
        }
    }
    return count;
}
console.log('matchPlayersAndTrainers', matchPlayersAndTrainers([4, 7, 9], [8, 2, 5, 8]));
