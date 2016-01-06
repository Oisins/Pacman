var selbeCord = function (m) {
    player = m.board.player;
    if (m.col < player.col) {
        bewegeRichtung(m, 0, 1);
    } else if (m.col > player.col) {
        bewegeRichtung(m, 0, -1);
    }

    if (m.row < player.row) {
        bewegeRichtung(m, 1, 0);
    } else if (m.row > player.row) {
        bewegeRichtung(m, -1, 0);
    }
}

var bewegeRichtung = function (m, x, y) {
    //console.log(m.board.cells[m.row + x][m.col + y] != "#");
    if (m.board.cells[m.row + x][m.col + y] != "#") {
        m.col = m.col + x;
        m.row = m.row + y;
    }
}