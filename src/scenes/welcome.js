import Phaser from 'phaser';

export class Welcome extends Phaser.Scene {

  constructor() {
    super({ key: 'game' });
  }

  preload() {
    this.load.image('background', '/images/galaxy.jpg');
    this.load.image('hello', '/images/hello.png');
    this.load.image('play', '/images/jugar.png');
    this.load.image('monster1', '/images/monster1.png');
    this.load.image('grass', '/images/grass.png');

    this.load.spritesheet(
      'monster2',
      'images/monster2-sprites.png',
      { frameWidth: 326, frameHeight: 385 }
    );
  }

  create() {
    this.add.image(410, 250, 'background');
    this.add.image(420, 110, 'hello');
    
    this.playButton = this.add.image(390, 270, 'play');
    this.playButton.setInteractive();
    this.playButton.on('pointerdown', () => {
      this.scene.start('monster');
    });
  }
}