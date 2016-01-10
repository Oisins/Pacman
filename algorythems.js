function moveRight(entity) {
    moveLeftRight(entity, 1);
}

function moveLeft(entity) {
    moveLeftRight(entity, -1);
}

function moveRandom(entity) {
    if (Math.floor(Math.random() * 2) == 0) {
        moveLeftRight(entity, -1);
    } else {
        moveLeftRight(entity, 1);
    }

}

function sicht(m) {
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
        moveRandom(m);
    } catch (err) {
        m.bewegeRichtung(err[0], err[1]);
    }
}

function selbeCord(m) {
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
AIs = [selbeCord, sicht, moveRight, moveLeft, moveRandom];