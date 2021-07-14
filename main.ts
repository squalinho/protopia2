controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    heroX = heroX + 1
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    heroX = heroX - 1
})
let heroX = 0
heroX = scene.screenWidth() / 2
let heroY = scene.screenHeight() / 2
let Hero = sprites.create(assets.image`myImage`, SpriteKind.Player)
game.onUpdate(function () {
    Hero.setPosition(heroX, heroY)
})
