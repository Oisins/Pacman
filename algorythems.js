var sicht = function(m){
    sichtX = m.x
    sichtY = m.y
    while (m.board[sichtX][sichtY] !="#"){
        if (sichtX != m.board.player.col && sichtY != m.board.player.row){
            
        }
        sichtX++;
    }
    sichtX = m.x
    sichtY = m.y
    while (m.board[sichtX][sichtY] !="#" && sichtX != m.board.player.col && sichtY != m.board.player.row){
        sichtX--;
    }
    sichtX = m.x
    sichtY = m.y
    while (m.board[sichtX][sichtY] !="#" && sichtX != m.board.player.col && sichtY != m.board.player.row){
        sichtY++;
    }
    sichtX = m.x
    sichtY = m.y
    while (m.board[sichtX][sichtY] !="#" && sichtX != m.board.player.col && sichtY != m.board.player.row){
        sichtY--;
    }
}

var bewegeRichtung = function(m, x, y){
    if (m.board[m.x+x][m.y+y]!="#"){
        m.x=m.x+x;
        m.y=m.y+y;
    }
}