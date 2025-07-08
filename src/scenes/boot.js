import { Game } from 'phaser';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#ccc',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene : {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Game(config);

function preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.image('background', 'assets/background.png');
    }

function  create ()
    {
        this.scene.start('Preloader');
    }

    export { config, preload, create}