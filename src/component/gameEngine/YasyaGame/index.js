import GameEngine from '../index.js';
import randomNumber from '@src/util/randomNumber.js';
import { DEFAULT_COORDINATES } from '@src/constant/gameInitialParams.js';
import * as YASYA_PARAMS from '@src/constant/hero_initial_params/yasyaParams.js';

export default class YasyaGame extends GameEngine {
    constructor(selectedHero, closeCanvas) {
        super(selectedHero, closeCanvas);
        this.rotateHero = YASYA_PARAMS.ROTATE_HERO;
        this.heroPersonalMethods = [this.moveEnemies];
    }
    moveEnemies() {
        this.enemies = this.enemies.map(enemy => {
            const enemyIsGone = this.getDrawPosition(enemy.y) > this.canvas.height;
            //check when enemy goes throught canvas field or when enemy icon is new
            if (enemyIsGone || enemy.x === null) {
                if (enemyIsGone) this.addPoints();
                return {
                    ...DEFAULT_COORDINATES,
                    x: randomNumber() * this.oneGrid,
                    y: 0 - this.iconSize,
                };
            }
            //default
            return {
                ...DEFAULT_COORDINATES,
                x: enemy.x,
                y: enemy.y + this.enemySpeed,
                angle: enemy.angle + YASYA_PARAMS.ROTATION_SPEED
            };
        });
        this.enemies.forEach(enemy => this.drawEnemy(enemy));
    }
    addEnemy() {
        if (this.enemies.length >= YASYA_PARAMS.MAX_ENEMIES) return clearInterval(this.addEnemyInterval);
        this.enemies.push(DEFAULT_COORDINATES);
    }
    runGame() {
        this.addEnemyInterval = setInterval(() => this.addEnemy(), YASYA_PARAMS.ENEMIES_ADDING_INTERVAL);
        this.startDrawCanvas(this.moveEnemies);
    }
}
