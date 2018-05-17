const {BAT_H_SPACE, BAT_WIDTH, BAT_HEIGHT} = require('./const');


module.exports = {
    bat1: {
        y: (600 - BAT_HEIGHT)/2,
        x: BAT_H_SPACE,
        dy: 0
    },
    bat2: {
        y: (600 - BAT_HEIGHT)/2,
        x: 800 - BAT_H_SPACE - BAT_WIDTH,
        dy: 4,
        maxSpeed: 20,
        accel: 1
    },
    ball: {
        x: 100,
        y: 100,
        dx: 10,
        dy: 6,
        size: 20,
        inplay: true,
        direction: "right"
    },
    scores: {
        player: 0,
        comp: 0
    }
}