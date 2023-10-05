import Phaser from 'phaser';

export class Monster extends Phaser.Scene {
  
  constructor() {
    super({ key: 'monster' });
  }

  create() {
    this.add.image(410, 250, 'background');
    this.add.image(390, 240, 'monster1');
  }
}