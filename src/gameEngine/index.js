// import drawGridForTesting from '@src/util/drawGridForTesting.js';
import getRadian from '@utils/getRadian.js';
import randomNumber from '@utils/randomNumber.js';
import * as GAME_PARAMS from '@constants/gameInitialParams.js';

export default class GameEngine {
    constructor([ selectedHero, closeCanvas, showItemBoard, addPoints ]) {
        this.hero = selectedHero;
        this.heroCoordinates = GAME_PARAMS.DEFAULT_COORDINATES;
        this.clickCoordinates = GAME_PARAMS.DEFAULT_COORDINATES;
        this.enemies = [ GAME_PARAMS.DEFAULT_COORDINATES ];
        this.enemySpeed = GAME_PARAMS.ENEMY_SPEED;
        this.heroSpeed = GAME_PARAMS.HERO_SPEED;
        this.acceleration = GAME_PARAMS.ACCELERATION;
        this.points = 0;
        this.cursorCount = 0;
        this.showItemBoard = showItemBoard;
        this.addPoints = addPoints;
        this.closeCanvas = closeCanvas;
        this.gameOver = false;
    }

    init(reactRef) {
        this.canvas = reactRef;
        this.ctx = this.canvas.getContext('2d');
        this.setCanvasSize();
        this.heroCoordinates = { x: this.canvas.width / 2, y: this.canvas.height * .8 };
        this.clickCoordinates = { x: this.heroCoordinates.x, y: this.heroCoordinates.y };
        this.drawHero(this.heroCoordinates.x, this.heroCoordinates.y);
        this.canvas.onclick = e => {
            this.clickCoordinates = { x: e.clientX, y: e.clientY };
            this.cursorCount = 1;
            this.drawCursor();
        }
        this.canvas.resize = () => this.setCanvasSize();
        // drawGridForTesting.call(this);
    }

    setCanvasSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.oneGrid = this.canvas.width / GAME_PARAMS.GRID_DENSITY + 1;
        this.iconSize = window.innerWidth > 600 ? this.oneGrid / 2 : this.oneGrid;
        this.halfOfIconSize = this.iconSize / 2;
    }

    getDrawPosition(coordinate) {
        return coordinate - this.halfOfIconSize;
    }

    drawHero(x = this.heroCoordinates.x, y = this.heroCoordinates.y) {
        const image = new Image();

        if (
            this.clickCoordinates.x !== this.heroCoordinates.x &&
            this.clickCoordinates.y !== this.heroCoordinates.y
        ) this.moveHero();

        this.ctx.save();
        this.ctx.translate(x, y);

        switch (this.rotateHero) {
            case true: {
                // TODO: make rotation for hero during click events
                console.log('rotation, baby!!');
                break;
            }
            case false: {
                if (this.clickCoordinates.x < this.heroCoordinates.x) this.ctx.scale(-1, 1);
                break;
            }
        }

        this.cutIcon();
        image.src = this.gameOver ? GAME_PARAMS.DEAD_HERO : this.hero.heroImg;
        this.ctx.drawImage(image, this.getDrawPosition(0), this.getDrawPosition(0), this.iconSize, this.iconSize);
        this.ctx.restore();
    }

    moveHero() {
        const firstCathet = this.heroCoordinates.y - this.clickCoordinates.y;
        const secondCathet = this.heroCoordinates.x - this.clickCoordinates.x;

        this.heroCoordinates = {
            ... this.heroCoordinates,
            x: this.heroCoordinates.x - secondCathet / this.heroSpeed,
            y: this.heroCoordinates.y - firstCathet / this.heroSpeed
        };
    }

    drawEnemy({ x, y, angle, type }) {
        const image = new Image();
        
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.rotate(getRadian(-angle));
        this.cutIcon();

        switch (type) {
            case GAME_PARAMS.ENEMY_TYPE: {
                image.src = this.hero.enemyImg;
                break;
            }
            case GAME_PARAMS.SPEED_ITEM_TYPE: {
                image.src = GAME_PARAMS.SPEED_ITEM;
                break;
            }
            case GAME_PARAMS.DESTROY_ALL_ITEM_TYPE: {
                image.src = GAME_PARAMS.DESTROT_ALL_ITEM;
                break;
            }
            case GAME_PARAMS.FROZEN_ITEM_TYPE: {
                image.src = GAME_PARAMS.FROZEN_ITEM;
                break;
            }
        }
        
        this.ctx.drawImage(image, this.getDrawPosition(0), this.getDrawPosition(0), this.iconSize, this.iconSize);
        this.ctx.restore();
    }

    cutIcon() {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.halfOfIconSize, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.clip();
        this.ctx.beginPath();
        this.ctx.strokeStyle = GAME_PARAMS.CURSOR_CLICK_COLOR;
        this.ctx.arc(0, 0, this.halfOfIconSize, 0, Math.PI * 2, true);
        this.ctx.stroke();
    }

    checkTouching() {
        this.enemies.forEach(enemy => {
            if (
                Math.sqrt(( // Pythagorean theorem
                   (this.heroCoordinates.x - enemy.x) ** 2 +
                   (this.heroCoordinates.y - enemy.y) ** 2)
                , 2) < this.iconSize
            ) {
                if (enemy.type !== GAME_PARAMS.ENEMY_TYPE) return this.catchItem(enemy);

                switch (this.hero.id) {
                    // Yasya and Natasha
                    case 1:
                    case 4:
                    // Yelya and Vitya
                    case 3:
                    case 5: {
                        this.stopGame();
                        break;
                    }
                    // Niko, Saliy, Nester, Dasha
                    case 2:
                    case 6:
                    case 7:
                    case 8: {
                        this.addPoints();
                        this.enemies = this.enemies.filter(en => en.id !== enemy.id);
                        break;
                    }
                }
            }
        });
    }

    getRandomItem() {
        const num = randomNumber();

        switch (num) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                return GAME_PARAMS.DESTROY_ALL_ITEM_TYPE;
            case 6:
            case 7:
                return GAME_PARAMS.FROZEN_ITEM_TYPE;
            default:
                return GAME_PARAMS.SPEED_ITEM_TYPE;
        }
    }

    catchItem(item) {
        switch (item.type) {
            case GAME_PARAMS.SPEED_ITEM_TYPE: {
                this.heroSpeed /= 2;
                this.showItemBoard(GAME_PARAMS.SPEED_ITEM_BOARD);
                break;
            }
            case GAME_PARAMS.DESTROY_ALL_ITEM_TYPE: {
                this.addPoints(this.enemies.length + 1);
                this.enemies = [];
                this.showItemBoard(GAME_PARAMS.DESTROT_ALL_ITEM_BOARD);
                break;
            }
            case GAME_PARAMS.FROZEN_ITEM_TYPE: {
                this.enemySpeed *= GAME_PARAMS.FROZEN_ITEM_EFFECT_COEFICIENT; 
                this.showItemBoard(GAME_PARAMS.FROZEN_ITEM_BOARD);
                break;
            }
        }
        
        this.deleteItem(item.id);
    }

    deleteItem(id) {
        this.enemies = this.enemies.filter(enemy => enemy.id !== id);
    }

    drawCursor() {
        if (!this.cursorCount || this.cursorCount >= this.halfOfIconSize) return this.cursorCount = 0;

        this.ctx.save();
        this.ctx.globalAlpha = 1 - this.cursorCount / this.halfOfIconSize;
        this.ctx.beginPath();
        this.ctx.strokeStyle = GAME_PARAMS.CURSOR_CLICK_COLOR;
        this.ctx.arc(this.clickCoordinates.x, this.clickCoordinates.y, this.cursorCount, 0, Math.PI * 2, true);
        this.ctx.stroke();
        this.ctx.restore();
        this.cursorCount++;
    }

    startDrawCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.heroPersonalMethods.forEach(method => method.call(this));
        this.drawHero();
        this.drawCursor();
        this.enemySpeed = this.enemySpeed / this.acceleration;

        if (!this.gameOver) this.checkTouching();
        
        this.gameAnimationFrame = requestAnimationFrame(this.startDrawCanvas.bind(this));
    }
    
    stopGame() {
        this.stopHeroMethods();
        this.closeCanvas();
        this.gameOver = true;
    }
}
