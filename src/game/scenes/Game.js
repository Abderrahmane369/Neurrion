import { EventBus } from '../EventBus'
import { Scene } from 'phaser'
import { Blob } from '../entities/Blob'

export class Game extends Scene {
  constructor() {
    super('Game')
    this.blobs = []
    this.mainBlob
  }

  create() {
    this.mainBlob = new Blob(
      this,
      this.sys.game.config.width / 2,
      this.sys.game.config.height / 2,
      50,
      0xff0000
    )

    for (let i = 0; i < 10; i++) {
      const x = Phaser.Math.Between(0, this.sys.game.config.width)
      const y = Phaser.Math.Between(0, this.sys.game.config.height)
      const blob = new Blob(this, x, y, 50, 0x51a0fe)

      this.blobs.push(blob)
    }
  }

  update() {
    this.cameras.main.startFollow(this.mainBlob)
  }

  changeScene() {}
}
