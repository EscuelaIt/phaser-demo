import Phaser from 'phaser';

export class Monster extends Phaser.Scene {
  
  constructor() {
    super({ key: 'monster' });
  }

  create() {
    this.add.image(410, 250, 'background');
    
    this.monster = this.physics.add.sprite(390, 240, 'monster2');
    this.anims.create({
      key: 'monsteranimation',
      frames: this.anims.generateFrameNumbers('monster2', { start: 0, end: 2 }),
      frameRate: 2,
      repeat: -1,
      yoyo: true,
    });
    this.monster.anims.play('monsteranimation');

    this.monster.setScale(0.3);
    this.grass = this.physics.add.image(390, 440, 'grass');
    this.grass.body.allowGravity = false;
    this.grass.setImmovable();
    
    this.physics.add.collider(this.grass, this.monster, this.colision, null, this);
    this.monster.setBounce(1);
    
    this.cursors = this.input.keyboard.createCursorKeys();

    this.gameoverAudio = this.sound.add('gameoversample')
    this.jumpAudio = this.sound.add('jumpsample')
  }

  colision() {
    console.log('colision', this.getRandomVelocity());
    this.grass.setY(this.grass.y + 1);
    this.monster.setVelocityX(this.getRandomVelocity());
    this.jumpAudio.play();
  }

  getRandomVelocity() {
    return Math.floor((Math.random() * 90) - 45);
  }

  update() {
    if (this.cursors.left.isDown) {
      this.grass.setVelocityX(-300);
    }
    else if (this.cursors.right.isDown) {
      this.grass.setVelocityX(300);
    } 
    else if(this.cursors.up.isDown) {
      this.grass.setVelocityY(-15);
    }
    else if(this.cursors.down.isDown) {
      this.grass.setVelocityY(15);
    }
    else {
      this.grass.setVelocityX(0);
      this.grass.setVelocityY(0);
    }

    if(this.monster.y > 500) {
      this.gameoverAudio.play();
      this.scene.pause();
      this.scene.start('game');
    }
  }
}