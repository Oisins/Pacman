function moveLeftRight(entity, dir) {
    "use strict";
    var r = entity.y + entity.vy,
        c = entity.x + entity.vx,
        t = entity.board.cells[r][c];
    if (t !== ' ' && t !== '.') {
        if (entity.vx !== 0) {
            entity.vy = entity.vx * dir;
            entity.vx = 0;
        } else {
            entity.vx = -(entity.vy * dir);
            entity.vy = 0;
        }
        entity.move(entity);
    } else {
        entity.y = r;
        entity.x = c;
    }
}

function ImmerRechts(entity) {
    "use strict";
    moveLeftRight(entity, 1);
}

function ImmerLinks(entity) {
    "use strict";
    moveLeftRight(entity, -1);
}

function Zufaellig(entity) {
    "use strict";
    if (Math.floor(Math.random() * 2) === 0) {
        moveLeftRight(entity, -1);
    } else {
        moveLeftRight(entity, 1);
    }

}



function Blickkontakt(m) {
    "use strict";
    var sichtX = m.x,
        sichtY = m.y;

    try {
        while (m.board.cells[sichtY][sichtX] !== "#") {
            if (sichtX === m.board.player.x && sichtY === m.board.player.y) {
                throw [1, 0];
            }
            sichtX += 1;
        }
        sichtX = m.x;
        sichtY = m.y;
        while (m.board.cells[sichtY][sichtX] !== "#") {
            if (sichtX === m.board.player.x && sichtY === m.board.player.y) {
                throw [-1, 0];
            }

            sichtX -= 1;
        }
        sichtX = m.x;
        sichtY = m.y;
        while (m.board.cells[sichtY][sichtX] !== "#") {
            if (sichtX === m.board.player.x && sichtY === m.board.player.y) {
                throw [0, 1];
            }
            sichtY += 1;
        }
        sichtX = m.x;
        sichtY = m.y;
        while (m.board.cells[sichtY][sichtX] !== "#") {
            if (sichtX === m.board.player.x && sichtY === m.board.player.y) {
                throw [0, -1];
            }
            sichtY -= 1;
        }
        Zufaellig(m);
    } catch (err) {
        if (m.cooldown) {
            m.bewegeRichtung(err[0], err[1]);
        }
        m.cooldown = !m.cooldown;
    }
}

function SelbePosition(m) {
    "use strict";
    if (m.cooldown) {
        var player = m.board.player;
        if (m.x < player.x) {
            m.bewegeRichtung(1, 0);
        } else if (m.x > player.x) {
            m.bewegeRichtung(-1, 0);
        }

        if (m.y < player.y) {
            m.bewegeRichtung(0, 1);
        } else if (m.y > player.y) {
            m.bewegeRichtung(0, -1);
        }
    }
    m.cooldown = !m.cooldown;

}
var AIs = [SelbePosition, Blickkontakt, ImmerRechts, ImmerLinks, Zufaellig];