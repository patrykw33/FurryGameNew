/*function Game() {
    this.width = 10,
        this.height = 10,
        this.board = document.querySelectorAll("#board div"),
        this.furry = new Furry,
        this.coin = new Coin,
        this.score = 0,
        this.scoreElement = document.querySelector("#score strong"),
        self = this,
        this.handler = setInterval(this.tick, 500);
    document.addEventListener("keydown", this.keyboard);

    function Furry() {
        this.x = 0,
            this.y = 0,
            this.direction = "right"
    };

    function Coin() {
        this.x = Math.floor(10 * Math.random()),
            this.y = Math.floor(10 * Math.random())
    };
}
    var self;

    Game.prototype.position = function (a, b) {
        return a + b * this.height
    },

    Game.prototype.render = function () {
        for (var a = 0; a < this.board.length; a++) {
            this.board[a].classList.remove("furry");
            var b = this.position(this.coin.x, this.coin.y);
            this.board[b].classList.add("coin");
            var c = this.position(this.furry.x, this.furry.y);
            this.board[c].classList.add("furry")
        }
    };

    Game.prototype.check = function () {
        (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) && (clearInterval(this.handler),
            document.querySelector("#board").classList.add("invisible"),
            document.querySelector("#game-over").classList.remove("invisible"));
        var a = this.position(this.furry.x, this.furry.y);
        this.furry.x === this.coin.x && this.furry.y === this.coin.y && (this.score++,
            this.scoreElement.innerHTML = this.score,
            this.board[a].classList.remove("coin"),
            this.coin = new Coin)
    },

        Game.prototype.keyboard = function (a) {
            var b = a.which;
            switch (b) {
                case 37:
                    self.furry.direction = "left";
                    break;
                case 38:
                    self.furry.direction = "up";
                    break;
                case 39:
                    self.furry.direction = "right";
                    break;
                case 40:
                    self.furry.direction = "down"
            }
        },

        Game.prototype.tick = function () {
            switch (self.check(), self.furry.direction) {
                case"up":
                    self.furry.y--;
                    break;
                case"down":
                    self.furry.y++;
                    break;
                case"left":
                    self.furry.x--;
                    break;
                case"right":
                    self.furry.x++
            }
            self.render()
        }

    document.addEventListener("DOMContentLoaded",function(){new Game});*/

console.log("Hello");

var Furry = function () {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
};


var Coin = function (){
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var Game = function(){
    self = this;
    this.board=document.querySelectorAll("section#board div");
    this.furry=new Furry();
    this.coin=new Coin();
    this.score=0;
    this.scoreElement=document.querySelector("#score strong");

    this.index = function(x,y) {
        return x + (y * 10);
    };

    //Usuwanie klonów Furrego, pkt. 9
    this.hideVisibleFurry = function(){
        var furryOnBoard = document.querySelector('.furry');
           if (furryOnBoard !== null){
               furryOnBoard.classList.remove('furry');
           }
    };


    this.showFurry = function(){
        this.hideVisibleFurry();
        this.board[this.index(this.furry.x,this.furry.y)].classList.add('furry');
    };


    this.showCoin = function(){
        this.board[this.index(this.coin.x,this.coin.y)].classList.add('coin')
    };




    //Furry musi się ruszać
    this.moveFurry = function(){
        var self = this;
        if(self.furry.direction === 'right') {
            self.furry.x = self.furry.x + 1;
        } else if (self.furry.direction === 'left'){
            self.furry.x = self.furry.x - 1;
        } else if (self.furry.direction === 'up'){
            self.furry.y = self.furry.y - 1;
        } else if (self.furry.direction === 'down'){
            self.furry.y = self.furry.y + 1
        }
    this.gameOver();
    this.showFurry();
    this.checkCoinCollision();
    };

    //Fury musi reagować na obsługę klawiaturą
    this.turnFurry = function(e) {
        var a = e.which;
        switch (a) {
            case 37:
                self.furry.direction = 'left';
                break;
            case 38:
                self.furry.direction = 'up';
                break;
            case 39:
                self.furry.direction = 'right';
                break;
            case 40:
                self.furry.direction = 'down'
        }
    };


    //Sprawdzanie kolizji z monetą
    this.checkCoinCollision = function () {
        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
            var checkCoinPosition = this.index(this.coin.x, this.coin.y);
            this.board[checkCoinPosition].classList.remove('coin');
            this.score++;
            this.scoreElement.innerText = this.score;
            this.coin = new Coin();
            this.showCoin();

            var boardGame = document.querySelector('#board');
            var scoreBoard = document.querySelector('#score div');
            var h = getRandomInt(0, 360);
            var s = getRandomInt(0, 100);
            var l = getRandomInt(60, 80);
            boardGame.style.backgroundColor = "hsl(" + h + "," + s + "%," + l + "%" + ")";
            scoreBoard.style.backgroundColor = "hsl(" + h + "," + s + "%," + l + "%" + ")";
        }
    };


    this.startGame = function(){
        var self = this;
        this.idSetInterval = setInterval(function(){
            self.moveFurry();
        }, 250);
    };

    this.gameOver = function() {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
            alert('GAME OVER!\nTRY AGAIN');
            clearInterval(this.idSetInterval);
            this.hideVisibleFurry();

            document.querySelector('#score').classList.add('invisible');
            document.querySelector('#board').classList.add('invisible');
            var gameOverSection = document.querySelector('#over');
            gameOverSection.classList.remove('invisible');
            gameOverSection.style.backgroundColor = "white";

            if (this.score === 1) {
                gameOverSection.innerText = "Congratulations! " + "You won: " + this.scoreElement.innerText + " point";
            } else if (this.score === 0) {
                gameOverSection.innerText = "Sorry! " + "You won: " + this.scoreElement.innerText + " points";
            } else {
                gameOverSection.innerText = "Congratulations! " + "You won: " + this.scoreElement.innerText + " points";
            }

        }
    };


};

var game = new Game();
game.showFurry();
game.showCoin();
game.startGame();

document.addEventListener('keydown', function(e){
    game.turnFurry(e);
});

