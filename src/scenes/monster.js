import Phaser from 'phaser';

export class Monster extends Phaser.Scene {
  
  constructor() {
    super({ key: 'monster' });
  }

  preload() {
    this.load.image('monster1', '/images/monster1.png');
  }

  create() {
    this.add.image(410, 250, 'background');
    this.add.image(390, 240, 'monster1');
  }
}