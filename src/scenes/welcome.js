import Phaser from 'phaser';

export class Welcome extends Phaser.Scene {

  constructor() {
    super({ key: 'game' });
  }

  preload() {
    this.load.image('background', '/images/galaxy.jpg');
  }

  create() {
    this.add.image(410, 250, 'background');
  }
}