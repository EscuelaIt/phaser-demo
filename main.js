import './style.css';
import Phaser from 'phaser';
import { Welcome } from './src/scenes/welcome';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 500,
  scene: [Welcome],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
      debug: false
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
}

var game = new Phaser.Game(config);