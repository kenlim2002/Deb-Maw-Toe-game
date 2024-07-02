<!DOCTYPE html>
<html>
<head>
    <title>Deb Maw Toe</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body><div>
        <h1>Deb Maw Toe</h1>
        <div id="board"></div>
        <button onclick="resetBoard()">Reset</button>
    </div>
    <div id="modal" style="display: none; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4);">
        <div style="background-color: #fefefe; margin: 15% auto; padding: 20px; border: 1px solid #888; width: 80%;">
            <span id="modal-content"></span>
            <button onclick="document.getElementById('modal').style.display='none'">OK</button>
        </div>
    </div>
    <script src="game_function.js"></script>
</body>
</html>