import Phaser from 'phaser';

export class Monster extends Phaser.Scene {
  
  constructor() {
    super({ key: 'monster' });
  }

  create() {
    this.add.image(410, 250, 'background');
    this.monster = this.physics.add.image(390, 240, 'monster1');
    this.monster.setScale(0.3);
    this.grass = this.physics.add.image(390, 440, 'grass');
    this.grass.body.allowGravity = false;
    this.grass.setImmovable();
    
    this.physics.add.collider(this.grass, this.monster, this.colision, null, this);
    this.monster.setBounce(1);
  }

  colision() {
    console.log('colision', this.getRandomVelocity());
    this.grass.setY(this.grass.y + 1);
    this.monster.setVelocityX(this.getRandomVelocity())
  }

  getRandomVelocity() {
    return Math.floor((Math.random() * 20) - 10);
  }
}