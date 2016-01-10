function ImmerRechts(entity) {
    moveLeftRight(entity, 1);
}

function ImmerLinks(entity) {
    moveLeftRight(entity, -1);
}

function Zufaellig(entity) {
    if (Math.floor(Math.random() * 2) == 0) {
        moveLeftRight(entity, -1);
    } else {
        moveLeftRight(entity, 1);
    }

}

var moveLeftRight = function (entity, dir) {
    var r = entity.y + entity.vy;
    var c = entity.x + entity.vx;

    var t = entity.board.cells[r][c];
    if (t != ' ' && t != '.') {
        if (entity.vx != 0) {
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

function Blickkontakt(m) {
    sichtX = m.x;
    sichtY = m.y;

    try {
        //if (m.x != m.board.player.x && m.y != m.board.player.y) {
        while (m.board.cells[sichtY][sichtX] != "#") {
            if (sichtX == m.board.player.x && sichtY == m.board.player.y) {
                throw [1, 0];
            }
            sichtX++;
        }
        sichtX = m.x;
        sichtY = m.y
        while (m.board.cells[sichtY][sichtX] != "#") {
            if (sichtX == m.board.player.x && sichtY == m.board.player.y) {
                throw [-1, 0];
            }

            sichtX--;
        }
        sichtX = m.x;
        sichtY = m.y;
        while (m.board.cells[sichtY][sichtX] != "#") {
            if (sichtX == m.board.player.x && sichtY == m.board.player.y) {
                throw [0, 1];
            }
            sichtY++;
        }
        sichtX = m.x;
        sichtY = m.y;
        while (m.board.cells[sichtY][sichtX] != "#") {
            if (sichtX == m.board.player.x && sichtY == m.board.player.y) {
                throw [0, -1];
            }
            sichtY--;
        }
        //}
        Zufaellig(m);
    } catch (err) {
        m.bewegeRichtung(err[0], err[1]);
    }
}

function SelbePosition(m) {
    if (m.cooldown) {
        player = m.board.player;
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
AIs = [SelbePosition, Blickkontakt, ImmerRechts, ImmerLinks, Zufaellig];