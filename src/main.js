import './styles/style.css';
import Phaser from 'phaser';
import { Welcome } from './scenes/welcome';
import { Monster } from './scenes/monster';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 500,
  scene: [Welcome, Monster],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
      debug: false
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
}

var game = new Phaser.Game(config);