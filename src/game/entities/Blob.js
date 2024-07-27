import { Game, GameObjects } from 'phaser'

export class Blob extends GameObjects.Graphics {
  constructor(scene, x, y, radius, color) {
    /**
     * Blob Object - (Player)
     */
    super(scene, { x, y })

    // Props
    this.radius = radius
    this.color = color

    this.setPosition(x, y)

    // Add to the scene
    scene.add.existing(this)

    // Draw
    this.drawBlob()
  }

  drawBlob() {
    this.fillStyle(this.color, 1)
    this.fillCircle(0, 0, this.radius)
  }
}
