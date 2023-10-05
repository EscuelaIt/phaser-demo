import Phaser from 'phaser';

export class Welcome extends Phaser.Scene {

  constructor() {
    super({ key: 'game' });
  }

  preload() {
    this.load.image('background', '/images/galaxy.jpg');
    this.load.image('hello', '/images/hello.png');
  }

  create() {
    this.add.image(410, 250, 'background');
    this.add.image(420, 110, 'hello');
  }
}