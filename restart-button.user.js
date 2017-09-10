// ==UserScript==
// @name Tetris Friends Restart Button
// @namespace https://userscripts-mirror.org/scripts/show/186497
// @description Adds a nifty "Restart Game" button underneath the "Options" button on the left side of the page.  Pressing "[" restarts the game, too.  Single-player games only.
// @include http://*tetrisfriends.com/games/Marathon/game.php*
// @include http://*tetrisfriends.com/games/Ultra/game.php*
// @include http://*tetrisfriends.com/games/Sprint/game.php*
// @include http://*tetrisfriends.com/games/Survival/game.php*
// @include http://*tetrisfriends.com/games/Mono/game.php*
// @grant none
// @version 21 December 2013
// @author knux
// @run-at document-start
// ==/UserScript==
addEventListener("DOMContentLoaded",
function(){
    function restartButton()
    {
        restartGame = function()
            {
                var flashEl = document.getElementById("contentFlash");
                flashEl.as3_tetrisGameRestart();
                flashEl.focus();
            };
        var restartEl = document.createElement("a");
        restartEl.setAttribute("href", "javascript:restartGame()");
        restartEl.innerHTML = "Restart Game";
        try {
            document.getElementById("game_options").parentNode.appendChild(document.createElement("br"));
            document.getElementById("game_options").parentNode.appendChild(restartEl);
        }catch(err) {
         }
        (addFlashListener = function()
        {
            try {
                document.getElementById("contentFlash").onkeyup = function(e){if(e.keyCode == 219) restartGame()};
            }catch(err) {
                setTimeout(addFlashListener, 200);
            }
        })();
    }
    restartScript = document.body.appendChild(document.createElement("script")).textContent = '(' + restartButton + ')()';
})