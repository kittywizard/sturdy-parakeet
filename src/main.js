import { Game } from 'phaser';


//  Find out more information about the Game Config at: https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#ccc',
    scene : {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Game(config);

function preload() {
    this.load.image('background', 'assets/background.png');
    this.load.image('coin', 'assets/coin.png');
}

function create() {
    this.add.image(400, 300, 'background');
}

function update() {

}

//export default new Game(config);
