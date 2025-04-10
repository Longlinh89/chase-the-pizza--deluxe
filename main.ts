namespace SpriteKind {
    export const Player2 = SpriteKind.create()
    export const FoodLmao = SpriteKind.create()
    export const DeathGame = SpriteKind.create()
    export const Player3 = SpriteKind.create()
    export const Player4 = SpriteKind.create()
    export const Player1 = SpriteKind.create()
    export const TheEndLmao = SpriteKind.create()
}
// Hello!  If you haven't already played the game, I'd recommend you play it before looking into the code.
// 
// Longlinh
// 
// https://arcade.makecode.com/S88075-44303-28075-32667
sprites.onOverlap(SpriteKind.Player1, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Pizza.setPosition(randint(15, 155), randint(15, 115))
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    info.startCountdown(3)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (blockSettings.readNumber("act") == 3 || blockSettings.readNumber("act") == 4) {
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 3 3 3 2 . . . . 
            . 2 2 2 3 3 1 1 1 1 1 3 2 . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 2 . . . 
            . 2 2 2 3 3 1 1 1 1 1 3 2 . . . 
            . . . . . 2 2 3 3 3 3 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        mySprite4.setFlag(SpriteFlag.GhostThroughWalls, true)
        mySprite4.setVelocity(100, 0)
        mySprite4.setPosition(mySprite.x, mySprite.y)
    }
})
function insanity () {
    story.showPlayerChoices("Singleplayer", "Multiplayer", "Bot(Experimental)", "Back")
    if (story.checkLastAnswer("Bot(Experimental)")) {
        story.showPlayerChoices("Test", "Notes", "Back")
        if (story.checkLastAnswer("Test")) {
            color.startFade(color.originalPalette, color.Black, 500)
            color.startFade(color.Black, color.originalPalette, 500)
            timer.after(500, function () {
                game2m2()
                Music = true
            })
        } else if (story.checkLastAnswer("Notes")) {
            color.startFade(color.originalPalette, color.Black, 500)
            color.startFade(color.Black, color.originalPalette, 500)
            timer.after(500, function () {
                if (blockSettings.readNumber("act") == 2) {
                    game.showLongText("Hello! The bot is something that I'm trying to kill :D. If you tried playing with the bot, you can see that it's... really smart. It either keeps going away from the pizza instead of collecting it like it's not supposed to or speed up drastically for a reason... Well the reason for this is simple. I wanted it to play like a human. I wanted a real human. So I tried to make it turn a little to become a human. Well I tried :D            Longlinh", DialogLayout.Full)
                    timer.after(500, function () {
                        singleplayer()
                    })
                } else {
                    game.showLongText("Hello! The bot is something that I'm trying to do :D. If you tried playing with the bot, you can see that it's... really dumb. It either keeps going away from the pizza instead of collecting it like it's supposed to or speed up drastically for no reason... Well the reason for this is simple. I wanted it to play like a human. I wanted fake multiplayer. So I tried to make it turn a little to mimic human movement. Well I tried :D            Longlinh", DialogLayout.Full)
                    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
                    timer.after(500, function () {
                        game.reset()
                    })
                }
            })
        } else {
            insanity()
        }
    } else if (story.checkLastAnswer("Multiplayer")) {
        story.showPlayerChoices("2P", "Back")
        if (story.checkLastAnswer("2P")) {
            timer.after(1000, function () {
                color.startFade(color.originalPalette, color.Black, 500)
                game2m()
                Music = true
                color.startFade(color.Black, color.originalPalette, 500)
            })
        } else if (story.checkLastAnswer("Challenges")) {
            timer.after(1000, function () {
                color.startFade(color.originalPalette, color.Black, 500)
                Music = true
                color.startFade(color.Black, color.originalPalette, 500)
            })
        } else if (story.checkLastAnswer("Back")) {
            insanity()
        } else {
            timer.after(1000, function () {
                color.startFade(color.originalPalette, color.Black, 500)
                Music = true
                color.startFade(color.Black, color.originalPalette, 500)
            })
        }
    } else if (story.checkLastAnswer("Back")) {
        game.reset()
    } else {
        singleplayer()
    }
}
function classic3 () {
    custommode = true
    bgcolor()
    Sp = true
    info.setScore(0)
    playercolor()
    Music = false
    act = false
    if (Mini == -999) {
        Pizza = sprites.create(img`
            . . . . . . b b b b . . . . . . 
            . . . . . . b 4 4 4 b . . . . . 
            . . . . . . b b 4 4 4 b . . . . 
            . . . . . b 4 b b b 4 4 b . . . 
            . . . . b d 5 5 5 4 b 4 4 b . . 
            . . . . b 3 2 3 5 5 4 e 4 4 b . 
            . . . b d 2 2 2 5 7 5 4 e 4 4 e 
            . . . b 5 3 2 3 5 5 5 5 e e e e 
            . . b d 7 5 5 5 3 2 3 5 5 e e e 
            . . b 5 5 5 5 5 2 2 2 5 5 d e e 
            . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
            . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
            b d 3 2 d 5 5 5 d d d 4 4 . . . 
            b 5 5 5 5 d d 4 4 4 4 . . . . . 
            4 d d d 4 4 4 . . . . . . . . . 
            4 4 4 4 . . . . . . . . . . . . 
            `, SpriteKind.TheEndLmao)
    } else {
        Pizza = sprites.create(img`
            . . . . . . b b b b . . . . . . 
            . . . . . . b 4 4 4 b . . . . . 
            . . . . . . b b 4 4 4 b . . . . 
            . . . . . b 4 b b b 4 4 b . . . 
            . . . . b d 5 5 5 4 b 4 4 b . . 
            . . . . b 3 2 3 5 5 4 e 4 4 b . 
            . . . b d 2 2 2 5 7 5 4 e 4 4 e 
            . . . b 5 3 2 3 5 5 5 5 e e e e 
            . . b d 7 5 5 5 3 2 3 5 5 e e e 
            . . b 5 5 5 5 5 2 2 2 5 5 d e e 
            . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
            . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
            b d 3 2 d 5 5 5 d d d 4 4 . . . 
            b 5 5 5 5 d d 4 4 4 4 . . . . . 
            4 d d d 4 4 4 . . . . . . . . . 
            4 4 4 4 . . . . . . . . . . . . 
            `, SpriteKind.TheEndLmao)
    }
    Pizza.follow(mySprite5, 30)
    Pizza.setPosition(randint(15, 155), randint(15, 115))
    mySprite5.setStayInScreen(true)
    if (PlayerSpeed <= 0) {
        PlayerSpeed = 100
    }
    if (timer2 <= 0) {
        timer2 = 10
    }
    if (Countdown == 1) {
        timerlol = true
    } else if (Countdown == 2) {
        timerlol = false
        info.startCountdown(timer2)
    } else {
        timerlol = true
    }
    story.printDialog("Hello.", 80, 90, 50, 150)
    mySprite5.setVelocity(-100, 0)
    timer.after(500, function () {
        mySprite5.setVelocity(0, 0)
        timer.after(500, function () {
            mySprite5.setVelocity(100, 100)
            timer.after(500, function () {
                mySprite5.setVelocity(0, -100)
                timer.after(500, function () {
                    mySprite5.setVelocity(0, 0)
                    timer.after(500, function () {
                        mySprite5.setVelocity(-100, 0)
                        timer.after(500, function () {
                            mySprite5.setVelocity(0, 100)
                            timer.after(500, function () {
                                mySprite5.setVelocity(0, -100)
                                timer.after(500, function () {
                                    mySprite5.setVelocity(0, 0)
                                    timer.after(500, function () {
                                        mySprite5.setVelocity(0, 0)
                                        timer.after(500, function () {
                                            mySprite5.setVelocity(100, 100)
                                            timer.after(500, function () {
                                                mySprite5.setVelocity(0, -100)
                                                timer.after(500, function () {
                                                    mySprite5.setVelocity(0, 0)
                                                    timer.after(500, function () {
                                                        mySprite5.setVelocity(-100, 0)
                                                        timer.after(500, function () {
                                                            mySprite5.setVelocity(0, 100)
                                                            timer.after(500, function () {
                                                                mySprite5.setVelocity(0, -100)
                                                                timer.after(500, function () {
                                                                    mySprite5.setVelocity(0, 0)
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
    story.printDialog("Congrats on finding me.", 80, 90, 50, 150)
    story.printDialog("You have probably seen me before.", 80, 90, 50, 150)
    story.printDialog("With blood tearing down from 2 lifeless white eyes...", 80, 90, 50, 150)
    story.printDialog("And an obnoxious sound goes with it.", 80, 90, 50, 150)
    story.printDialog("Was it scary?", 80, 90, 50, 150)
    story.printDialog("Or I just thought that it was random bug?", 80, 90, 50, 150)
    story.printDialog("Well, what you thought doesn't really matter right now. ", 80, 90, 50, 150)
    mySprite5.setVelocity(100, 0)
    story.printDialog("To get here...", 80, 90, 50, 150)
    story.printDialog("You read something.", 80, 90, 50, 150)
    story.printDialog("And you know who I am.", 80, 90, 50, 150)
    story.printDialog("But I won't kill you.", 80, 90, 50, 150)
    story.printDialog("Because I am not like what they said.", 80, 90, 50, 150)
    story.printDialog("Longlinh said.", 80, 90, 50, 150)
    story.printDialog("Do you like bossfights?", 80, 90, 50, 150)
    effects.starField.startScreenEffect()
    color.setPalette(
    color.Sweet
    )
    blockSettings.writeNumber("act", 3)
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    color.setPalette(
    color.Adventure
    )
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    color.setPalette(
    color.GrayScale
    )
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    color.setPalette(
    color.Black
    )
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    color.setPalette(
    color.White
    )
    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    info.startCountdown(1)
}
function End2 () {
    bot2 = false
    Music = false
    music.stopAllSounds()
    timer.after(20, function () {
        if (info.player1.score() > info.player2.score()) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 5))
            tiles.placeOnTile(mySprite2, tiles.getTileLocation(14, 6))
            effects.confetti.startScreenEffect()
            scene.setTileMap(img`
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . 2 f f f f f 2 . . . . . . . 
                . . . . . . c 1 1 1 1 1 c f f f 2 . . . 
                . . . . . . c 1 1 1 1 1 c 1 1 1 c . . . 
                . . . . . . c 1 1 1 1 1 c 1 1 1 c . . . 
                . . . . . . c 1 1 1 1 1 c 1 1 1 c . . . 
                . . . . . . c 1 1 1 1 1 c 1 1 1 c . . . 
                . . . . . . c 1 1 1 1 1 c 1 1 1 c . . . 
                . . . . . . c 1 1 1 1 1 c 1 1 1 c . . . 
                . . . . . . c 1 1 1 1 1 c 1 1 1 c . . . 
                `, TileScale.Eight)
            scene.setTile(15, img`
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                f f f f f f f f f f f f f f f f 
                `, true)
            mySprite6 = sprites.create(img`
                ................................
                ................................
                ................................
                ................................
                .............fffffff............
                ............ff11111f............
                ...........ff155555f............
                ..........ff1555555f............
                .........ff15555555f............
                .........f555555555f............
                .........f555555555f............
                .........fffff55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............fffffff............
                ................................
                ................................
                ................................
                `, SpriteKind.Projectile)
            tiles.placeOnTile(mySprite6, tiles.getTileLocation(9, 8))
            Tile1 = sprites.create(img`
                ................................
                ................................
                ................................
                ................................
                ................................
                ........fffffffffffffff.........
                .......ff1111111111111ff........
                ......ff155555555555555ff.......
                ......f15555555555555555f.......
                ......f555555fffffff5555f.......
                ......ffffffff.....f5555f.......
                ...................f5555f.......
                ..........ffffffffff5555f.......
                .......ffff5555555555555f.......
                ......ff5555555555555555f.......
                ......f55555555555555555f.......
                ......f5555555555555555ff.......
                ......f555555555555555ff........
                ......f555555ffffffffff.........
                ......f555555f..................
                ......f555555f..................
                ......f555555ffffffffffff.......
                ......f55555555555555555f.......
                ......f55555555555555555f.......
                ......f55555555555555555f.......
                ......f55555555555555555f.......
                ......fffffffffffffffffff.......
                ................................
                ................................
                ................................
                ................................
                ................................
                `, SpriteKind.Projectile)
            tiles.placeOnTile(Tile1, tiles.getTileLocation(14, 9))
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . 
                . . 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 2 2 . 
                . 2 2 f 2 2 f 2 2 . 
                . 2 2 f 2 2 f 2 2 . 
                . 2 2 2 2 2 2 2 2 . 
                . 2 2 f f f f 2 2 . 
                . 2 2 2 2 2 2 2 2 . 
                . . 2 2 2 2 2 2 . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                `,img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 2 2 . 
                . 2 2 f 2 2 f 2 2 . 
                . 2 2 f 2 2 f 2 2 . 
                . 2 2 2 2 2 2 2 2 . 
                . 2 2 f f f f 2 2 . 
                . 2 2 2 2 2 2 2 2 . 
                . . 2 2 2 2 2 2 . . 
                . . . . . . . . . . 
                `,img`
                . . . . . . . . . . 
                . . 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 2 2 . 
                . 2 2 f 2 2 f 2 2 . 
                . 2 2 f 2 2 f 2 2 . 
                . 2 2 2 2 2 2 2 2 . 
                . 2 2 f f f f 2 2 . 
                . 2 2 2 2 2 2 2 2 . 
                . . 2 2 2 2 2 2 . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                `,img`
                . . 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 2 2 . 
                . 2 2 f 2 2 f 2 2 . 
                . 2 2 f 2 2 f 2 2 . 
                . 2 2 2 2 2 2 2 2 . 
                . 2 2 f f f f 2 2 . 
                . 2 2 2 2 2 2 2 2 . 
                . . 2 2 2 2 2 2 . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                `],
            100,
            true
            )
            animation.runImageAnimation(
            mySprite2,
            [img`
                . . . . . . . . . . 
                . . 8 8 8 8 8 8 . . 
                . 8 8 8 8 8 8 8 8 . 
                . 8 8 f 8 8 f 8 8 . 
                . 8 8 f 8 8 f 8 8 . 
                . 8 8 8 8 8 8 8 8 . 
                . 8 8 f f f f 8 8 . 
                . 8 8 8 8 8 8 8 8 . 
                . . 8 8 8 8 8 8 . . 
                . . . . . . . . . . 
                `,img`
                . . . . . . . . . . 
                . 8 8 8 8 8 8 . . . 
                8 8 8 8 8 8 8 8 . . 
                8 8 f 8 8 f 8 8 . . 
                8 8 f 8 8 f 8 8 . . 
                8 8 8 8 8 8 8 8 . . 
                8 8 f f f f 8 8 . . 
                8 8 8 8 8 8 8 8 . . 
                . 8 8 8 8 8 8 . . . 
                . . . . . . . . . . 
                `,img`
                . . . . . . . . . . 
                . . 8 8 8 8 8 8 . . 
                . 8 8 8 8 8 8 8 8 . 
                . 8 8 f 8 8 f 8 8 . 
                . 8 8 f 8 8 f 8 8 . 
                . 8 8 8 8 8 8 8 8 . 
                . 8 8 f f f f 8 8 . 
                . 8 8 8 8 8 8 8 8 . 
                . . 8 8 8 8 8 8 . . 
                . . . . . . . . . . 
                `,img`
                . . . . . . . . . . 
                . . . 8 8 8 8 8 8 . 
                . . 8 8 8 8 8 8 8 8 
                . . 8 8 f 8 8 f 8 8 
                . . 8 8 f 8 8 f 8 8 
                . . 8 8 8 8 8 8 8 8 
                . . 8 8 f f f f 8 8 
                . . 8 8 8 8 8 8 8 8 
                . . . 8 8 8 8 8 8 . 
                . . . . . . . . . . 
                `],
            100,
            true
            )
            music.play(music.createSong(assets.song`piano cat`), music.PlaybackMode.UntilDone)
            music.play(music.createSong(assets.song`piano cat`), music.PlaybackMode.UntilDone)
            game.setGameOverMessage(true, "P1 WINS WITH " + ("" + info.player1.score() + " Pizzas!"))
            game.setGameOverEffect(true, effects.confetti)
            game.gameOver(true)
        } else if (info.player1.score() < info.player2.score()) {
            tiles.placeOnTile(mySprite2, tiles.getTileLocation(9, 5))
            tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 6))
            effects.confetti.startScreenEffect()
            scene.setTileMap(img`
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . 2 f f f f f 2 . . . . . . . 
                . . . . . . c 1 1 1 1 1 c f f f 2 . . . 
                . . . . . . c 1 1 1 1 1 c 1 1 1 c . . . 
                . . . . . . c 1 1 1 1 1 c 1 1 1 c . . . 
                . . . . . . c 1 1 1 1 1 c 1 1 1 c . . . 
                . . . . . . c 1 1 1 1 1 c 1 1 1 c . . . 
                . . . . . . c 1 1 1 1 1 c 1 1 1 c . . . 
                . . . . . . c 1 1 1 1 1 c 1 1 1 c . . . 
                . . . . . . c 1 1 1 1 1 c 1 1 1 c . . . 
                `, TileScale.Eight)
            animation.runImageAnimation(
            mySprite2,
            [img`
                . . . . . . . . . . 
                . . 8 8 8 8 8 8 . . 
                . 8 8 8 8 8 8 8 8 . 
                . 8 8 f 8 8 f 8 8 . 
                . 8 8 f 8 8 f 8 8 . 
                . 8 8 8 8 8 8 8 8 . 
                . 8 8 f f f f 8 8 . 
                . 8 8 8 8 8 8 8 8 . 
                . . 8 8 8 8 8 8 . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                `,img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . 8 8 8 8 8 8 . . 
                . 8 8 8 8 8 8 8 8 . 
                . 8 8 f 8 8 f 8 8 . 
                . 8 8 f 8 8 f 8 8 . 
                . 8 8 8 8 8 8 8 8 . 
                . 8 8 f f f f 8 8 . 
                . 8 8 8 8 8 8 8 8 . 
                . . 8 8 8 8 8 8 . . 
                . . . . . . . . . . 
                `,img`
                . . . . . . . . . . 
                . . 8 8 8 8 8 8 . . 
                . 8 8 8 8 8 8 8 8 . 
                . 8 8 f 8 8 f 8 8 . 
                . 8 8 f 8 8 f 8 8 . 
                . 8 8 8 8 8 8 8 8 . 
                . 8 8 f f f f 8 8 . 
                . 8 8 8 8 8 8 8 8 . 
                . . 8 8 8 8 8 8 . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                `,img`
                . . 8 8 8 8 8 8 . . 
                . 8 8 8 8 8 8 8 8 . 
                . 8 8 f 8 8 f 8 8 . 
                . 8 8 f 8 8 f 8 8 . 
                . 8 8 8 8 8 8 8 8 . 
                . 8 8 f f f f 8 8 . 
                . 8 8 8 8 8 8 8 8 . 
                . . 8 8 8 8 8 8 . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                `],
            100,
            true
            )
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . 
                . . 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 2 2 . 
                . 2 2 f 2 2 f 2 2 . 
                . 2 2 f 2 2 f 2 2 . 
                . 2 2 2 2 2 2 2 2 . 
                . 2 2 f f f f 2 2 . 
                . 2 2 2 2 2 2 2 2 . 
                . . 2 2 2 2 2 2 . . 
                . . . . . . . . . . 
                `,img`
                . . . . . . . . . . 
                . 2 2 2 2 2 2 . . . 
                2 2 2 2 2 2 2 2 . . 
                2 2 f 2 2 f 2 2 . . 
                2 2 f 2 2 f 2 2 . . 
                2 2 2 2 2 2 2 2 . . 
                2 2 f f f f 2 2 . . 
                2 2 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 . . . 
                . . . . . . . . . . 
                `,img`
                . . . . . . . . . . 
                . . 2 2 2 2 2 2 . . 
                . 2 2 2 2 2 2 2 2 . 
                . 2 2 f 2 2 f 2 2 . 
                . 2 2 f 2 2 f 2 2 . 
                . 2 2 2 2 2 2 2 2 . 
                . 2 2 f f f f 2 2 . 
                . 2 2 2 2 2 2 2 2 . 
                . . 2 2 2 2 2 2 . . 
                . . . . . . . . . . 
                `,img`
                . . . . . . . . . . 
                . . . 2 2 2 2 2 2 . 
                . . 2 2 2 2 2 2 2 2 
                . . 2 2 f 2 2 f 2 2 
                . . 2 2 f 2 2 f 2 2 
                . . 2 2 2 2 2 2 2 2 
                . . 2 2 f f f f 2 2 
                . . 2 2 2 2 2 2 2 2 
                . . . 2 2 2 2 2 2 . 
                . . . . . . . . . . 
                `],
            100,
            true
            )
            mySprite6 = sprites.create(img`
                ................................
                ................................
                ................................
                ................................
                .............fffffff............
                ............ff11111f............
                ...........ff155555f............
                ..........ff1555555f............
                .........ff15555555f............
                .........f555555555f............
                .........f555555555f............
                .........fffff55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............f55555f............
                .............fffffff............
                ................................
                ................................
                ................................
                `, SpriteKind.Projectile)
            tiles.placeOnTile(mySprite6, tiles.getTileLocation(9, 8))
            Tile1 = sprites.create(img`
                ................................
                ................................
                ................................
                ................................
                ................................
                ........fffffffffffffff.........
                .......ff1111111111111ff........
                ......ff155555555555555ff.......
                ......f15555555555555555f.......
                ......f555555fffffff5555f.......
                ......ffffffff.....f5555f.......
                ...................f5555f.......
                ..........ffffffffff5555f.......
                .......ffff5555555555555f.......
                ......ff5555555555555555f.......
                ......f55555555555555555f.......
                ......f5555555555555555ff.......
                ......f555555555555555ff........
                ......f555555ffffffffff.........
                ......f555555f..................
                ......f555555f..................
                ......f555555ffffffffffff.......
                ......f55555555555555555f.......
                ......f55555555555555555f.......
                ......f55555555555555555f.......
                ......f55555555555555555f.......
                ......fffffffffffffffffff.......
                ................................
                ................................
                ................................
                ................................
                ................................
                `, SpriteKind.Projectile)
            tiles.placeOnTile(Tile1, tiles.getTileLocation(14, 9))
            music.play(music.createSong(assets.song`piano cat`), music.PlaybackMode.UntilDone)
            music.play(music.createSong(assets.song`piano cat`), music.PlaybackMode.UntilDone)
            game.setGameOverMessage(true, "P2 WINS WITH " + ("" + info.player2.score() + " Pizzas!"))
            game.setGameOverEffect(true, effects.starField)
            game.gameOver(true)
        } else {
            if (blockSettings.readNumber("act") != 5) {
                if (blockSettings.readNumber("act") == 1) {
                    if (bot3 != 2) {
                        scene.setTileMap(img`
                            4 4 4 4 4 4 4 4 4 3 5 4 4 4 4 4 4 4 4 4 
                            7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
                            7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
                            7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
                            7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
                            7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
                            7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
                            7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
                            7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
                            7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
                            7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
                            7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
                            7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
                            7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
                            7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
                            `, TileScale.Eight)
                        scene.setTile(0, img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, false)
                        scene.setBackgroundImage(img`
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ..............................................5555555555.....................55.................................................................................
                            .............................................5..........55.................55.5.................................................................................
                            ............................................5.............55...............5.5..................................................................................
                            ...........................................5................55............5..5..................................................................................
                            ...........................................5..................555........5..55..................................................................................
                            ..........................................5......................55.....5..5....................................................................................
                            ..........................................5........................55555555.....................................................................................
                            ..........................................5...........................5.........................................................................................
                            ..........................................5..........................5..........................................................................................
                            ...........................................5.........................5..........................................................................................
                            ...........................................5........................5...........................................................................................
                            ............................................5......................5............................................................................................
                            ............................................555...........5.......5.................................5555555.....................................................
                            ...............................................55555555555.......5...............................555.......55...................................................
                            ................................................................5...............................5...........5...................................................
                            ...............................................................5..............................55.............5..................................................
                            ...............................................................5.............................5...............5..................................................
                            ..............................................................5............................55................5..................................................
                            .............................................................5............................5.................5...................................................
                            .............................................................5...........................5..................5...................................................
                            ............................................................5...........................5..................5....................................................
                            ...........................................................5...........................5..................55....................................................
                            ..........................................................5..........................55..................5......................................................
                            ..........................................................5.........................5..................55.......................................................
                            .........................................................5..........................5.................5.........................................................
                            ........................................................5..........................5................55..........................................................
                            .......................................................5................5........55..............555............................................................
                            ......................................................5................5........5.............555...............................................................
                            .............................555555555555555.........5................5........5..........5555..................................................................
                            ...........................55...............5555....5................5........5.....555555......................................................................
                            ..........................5.....................5555555555..........5........5555555.................5..........................................................
                            .........................5........................5.......55555555555555555555..................................................................................
                            ........................5........................5................5........5....................................................................................
                            ........................5.......................5...............55........5.....................................................................................
                            .......................5.......................5...............5........55......................................................................................
                            .......................5.....................55...............5........5.......................5................................................................
                            .......................5...................55..........................5......................5.................................................................
                            ........................5...............555...........................5......................5..................................................................
                            ........................55..........5555.............................5.....................55...................................................................
                            ..........................5555555555................................5.....................55......................5.............................................
                            ...................................................................5....................555......................5..............................................
                            ..................................................................5...................55.5.......................5..............................................
                            .................................................................5..................55..5......................55...............................................
                            ................................................................5................555...5.....................55.................................................
                            ...............................................................5..............555......5....................5...................................................
                            ...............................................................5...........555........5...................55....................................................
                            .............................................................55.........555..........5...................5......................................................
                            .............................................................5.....55555.............5.................55.......................................................
                            ..............................................................55555..................5..............555.........................................................
                            ....................................................................................5.............55............................................................
                            ....................................................................................555......55555..............................................................
                            .......................................................................................555555...................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            ................................................................................................................................................................
                            `)
                        mySprite7 = sprites.create(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . f f f f f f f . . . . 
                            . . . f f f f f f f f f f f . . 
                            . . f f f f f f f f f f f f f . 
                            . . f f f f 1 f f f 1 f f f f . 
                            . f f f f f 1 f f f 1 f f f f f 
                            . f f f f f 1 f f f 1 f f f f f 
                            . f f f f f 1 f f f 1 f f f f f 
                            . f f f f f 2 f f f 2 f f f f f 
                            . f f f f f 2 f f f 2 f f f f f 
                            . f f f 1 1 2 f f f 2 1 1 f f f 
                            . f f f 1 1 2 f f f 2 1 1 f f f 
                            . . f f f 1 2 1 1 1 2 1 f f f . 
                            . . f f f f 2 1 1 1 2 f f f f . 
                            . . . f f f 2 f f f 2 f f f . . 
                            . . . . . f 2 f f f 2 f . . . . 
                            `, SpriteKind.FoodLmao)
                        music.play(music.createSoundEffect(WaveShape.Noise, 758, 758, 184, 184, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                        music.play(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 50, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                        music.play(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 50, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                        music.play(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 50, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                        game.setGameOverEffect(true, effects.melt)
                        scene.setBackgroundImage(img`
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777775555577777777777777777777777777757775555555577777555555555775577775777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777755555577777777777777777777777777755775555555577777555555555775577775777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777555777577777777777777777777777777777777777777777777777757777775577775777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777557777777777777777777777777777777777777777777777777777757777775577775777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777557777777777777777777777777777777777777777777777777777757777775577775777555555555557777777777777777775777777777777777777777777777777777777777777777777777
                            7777777557777777777777777777777777777777777777777777777777777757777775555555777777777777777777777777777777775777777777777777777777777777777777777777777777777777
                            7777777557777777777777777777777777777777777777777777777777777757777775555555777777777777777777777777777777775777777777777777777777777777777777777777777777777777
                            7777777557777777777777777777777777777777777777777777777777777777777777777777777555555555557777777777777777775557777777777777777777777777777777777777777777777777
                            7777777557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777755555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775557777777777777777777777777777777777777777777777777
                            7777777775555577777777777777777777777777777777777777777777777777777777777777777555555555557777777777777777775557777777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777775557777777777777777777777777777777777777777777777777777777777777777777555555555577577777777777777777777777
                            7777777777777777777777777777777777777777777755777777757777777777777777777777777777777777777777777777777777775557777777777777555555555577577777777777777777777777
                            7777777777777777777777777777777777777777777755777777757777777777777777777777777777777777777777777777777777775557777777777777557777777777577777777777777777777777
                            7777777777777777777777777777777777777777777755777777757777777777777777777777777777777777777777777777777777777777777777777777755777777777777777777777777777777777
                            777777777777777777777777777777777777777777775577777775777777777777777777777b444777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            777777777755557777777777777777777777777775555777777775777777777777777777777444b777777755577777777777777777777777777777777777777777777777777777777777777777777777
                            7777777755555577777777777777777777777777755577777777757777777777557777777777557777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777555555577777777777777777777777777777777777777757777777777755577777777755577777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777555555577777777777777777777777777777777777777757777777777775577777777775557777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777775577777777777777777777777777777777777555555557777777777755777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777775577777777777777777777777777777777777555555557777777777755777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777775577777777777777777777777777777777777777777777777777555555777777777777777777777777777755555577777777777777777777777777777777777777777777777777777777
                            7777777777775577777777777777777777777777777777777777777777777777555555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777775577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777555555555555555555555555555555777777777777
                            7777777777775551115557777777777777777777777777777777777777777777555555555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777771115555557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777775555555577777777777777777777777755777777777777777777777777777777777777777777777777777777777777777777777777555555555555555555555555555555777777777777
                            7777777777775555555577777777777777777777777777777777777777777777555555555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777775555555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777775555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777555555555555555555555555555555777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777755777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777775555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777775555555555577777777777777777777777777777777777777777777755555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777755555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777555551777777777777555555555557777777777777777777777777777777777777777777777777777777777777777
                            777777777777555555555557777777755555555555555557777777777777777777755511577777777777777777777777777777777777777777777775555755577557757575557777744e777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777551155777777777777777777777777777777777777777777777757777577757757575757777777415777777777777
                            777777777777777777777777777777777777777777777777777777777777777777755555577777777777755555555555777777777777777777577575557757775775775775577777741d777777777777
                            7777777777775555555555577777777555555555555555577777777777777777777555551777777777777777777777777777777777777777775775757777577757757575757777777451777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777555551777777777777777777777777777777777777777775557755557577757757575755577777b55777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777555551773235777777555555555557777777777777777777777777777777777777777777777777bd5777777777777
                            77777777777777777777777777777775555555555555555777777777755775557777777777722257777777777777777777777777777777777777755777777777777777777777777777b5777777777777
                            77777777777777777777777777777777777777777777777777777777755775557777777777732357777777777777777777777777555777777777755777777777777777777777777777bd777777777777
                            7777777777777777777777777777777777777777777777777777777775577777777777777775553777777777777777777777777777777777777775577777777777777777777777777774777777777777
                            777777777777777777777777777777777777777777777777777777777557777777777777777575277777777777777777777777777777777777777557777777777777777777777777777b777777777777
                            7777777777777777777777777777777777777777777777777777777775577777777777777774553777777777777777777777777777777777777775577777777777777777777777777777777777777777
                            777777777777777777777777777777777777777777777777777777775557777777777777777b455777777777777777777777777777777777777555577777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777775577775777777777774bbb777777757757777777777777777777777777775577777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777775577775577777777775577777777777777777777777777777777777777775577777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777755577557777777777555777777777777777777777777777777777777777775577777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777755777557777777777557777777777777777777777777777777777777777555777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777777777777555555577555555555577777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777744777777777777
                            77777777777777777777777777777777777777777777777777777777777777775777577775577777757777777777777777777777777777777777777777777777777777777777777444dd777777777777
                            77777777755555555555555777777777777777777777777777777777777777775777577775577777757777777777777777777777777777777777777777777777777777777777744dd555777777777777
                            777777777777777777777777777777777777777777777777777755777777777757775777755777777577777777777777555557777757777755777777777777777777777777777d555d23777777777777
                            7777777777777777777777777777777777777777777777775777557777777777577757777557777775777777777777775555557775557777557777777777777777777777777775555222777777777777
                            7777777775555555555555577777777777777777775555575577557777777777777777777777777777777777777777777775557755555777557777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777557777777777777777777777777777777777777777777777557557775577557777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777557777777777777777777777777777777777777777777777557557775577557777777777777777777777777777777777777777777777
                            7777777775555555555555577777777777777777775555577777555577777777777777777777777777777777777777777775557555555577555777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777555577777777777777777777777777777777777777777775577555555577555777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777557777777777777777777777777777777777777777777777777557775577557777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777775555575577557777777777777777777777777777777777777777777777777557775577557777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777775777557777777777777777777777777777777777777777777775557557775577557777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777557777777777777777777777777777777777777777777775577557775577557777777777777777777777777775555555555555557777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775577777777777777777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775577777777777777777777777777777777777777775555555555555555777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775577777777777777777777777777777777777777777777777777777777777
                            7777777777777777777755777777777777777777777777777777777777777777777777777777777777777777777777777775577777777777777777777777777777777777777777777777777777777777
                            7777777777777777777777775577777777777777777777777777777777777777777777777777777777777777777777777755577777777777777777777777777777777777777775555555555555555777
                            7777777777777777777777775577777777777777777777775557777777777777777777777777777777777777777777775555577777777777777777777777777777777777777777777777777777777777
                            7777777777777777777757775555577777777777777777775555577777777777dde227777777777777777777777777775555577777777777777777777777777777777777777777777777777777777777
                            7777777777777777777755775555577777777777777777775555557777777777dde237777777777777777777777777777755577777777777777777777777777777777777777777777777777777777777
                            77777777777777777777557755777777777777777777777755555577777777774bd237777777777777777777777777777755577777777777777777777777777777777777777777777777777777777777
                            7777777777777777777755775577777777777777777777771555555777777777ee4d27777777777777777777777777777755577777777777777777777777777777777777777777777777777777777777
                            7777777777777777777755775555555577777777777777771555555777777777bee4d7777777777777777777777777777755577777777777777777777777777777777777777777777777777777777777
                            77777777777777777777577755555555777777777777777715555557777777774bbe4777777777777777777777777777777777777777777722277777777777777777777777777ddd4ee7777777777777
                            777777777777777777777777777777777777777777777777555555577777777744b4b7777777777777777777777777777777777777777777322777777777777777777777777774d4ee77777777777777
                            77777777777777777777555777775555577777777777777755117bd5777777774444b777777777777777777777777777777e222e255553ee33277777777777777777777777777eee7777777777777777
                            7777777777777777777777777777777777777777777777777777766577777777443447777777777777777777777777777773eee255555555222777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777677677777777444337777755555577777775777777777777777775555555555777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777488577777777b4443333446655557777777557db7777777b455d4dddd5555dd777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777455277777777bb4433333477611d7777777235b777777777bd4eb6dd5552e25777777777777777777777777777777777777777777777
                            77777777777777777777777777555b7777777477777774437777d522777777777eb4444433881d44777777722db77777777774eb455555e2777777777777777777777777777777777777777777777777
                            777777777777777777777777775323b777774577777774b47777d5e27777777777eb4b44335114d5777777723b77777777777eb4311555e277777777777777777777777777777777777e777777777777
                            777777777777777777777777777777b7777bd57777777d4b77775d2e77777777777bb4bb43d1d55e77777775db77777777777e443441153e22277777777777777777777777777444ddeee77777777777
                            777777777777777777777777777777db777b55b77777755b7777ddd2eee3d444555dd4e77777bb4bb443be777777777777b4777777777777777777777777777777777777777771544d4eee7777777777
                            7777777777777777777777777777775b77bd55bb7777755577775115dddd55d544eede7777777bb4bbbbee7777777777777b7777777777777777777777777777777777777777751554d4ee7777777777
                            777777777777777777777777777777d47743224be777755577771d444d5544ee7774de77777777bbbbeeb77777777777777b7777777777777777777777777777777777777777755dd4deee7777777777
                            777777777777777777777777777777447b422344ee77752277774555d4ee777777774477777777777777777777777777777777777777777777777777777777777777777777777355544eee7777777777
                            777777777777777777777777777777777be222444ee77223777754eede777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            77777777777777777777777777777777bde2224444eb72227777e7774e777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            77777777777777777777777777777777b52e2244b4ee72227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            77777777777777777777777777777777777777bbb4be77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            77777777777777777777777777777777777777ebbbbe77777777777777777777777777775577777777777777777777777777555557777777777777777777777777777777777777777777777777777777
                            777777777777777777777777777777777777774bbbbe77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            77777777777777777777777777777777777777d4ebee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777775577777777777777777777777777555557777777777777777777777777777777777777777777777777777777
                            777777777777777777777777777777777777777777777777777755555555555555555555777777777777777777777775555577777774edd5777777777777777777777777777777777777777777777777
                            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777555557777777eed55777777777777777777777777777777777777777777777777
                            77777777777777777777777777777777777777777777777777777777777777777777777755555555577777777777777777777777777eee55777777777777777777777777777777777777777777777777
                            77777777777777777777777777777777777777777777777777775555555555555555555577777775577777777777777777777777777eeee5777777777777777777777777777777777777777777777777
                            77777777777777777777777777777777777777777777777777777777777777777777777777777775577777777777777777777777777e44e4777777777777777777777777777777777777777777777777
                            777777777777777777777777777777777777777777777777777777777777777777777777777777755555557777777777777777777777b44e777777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777555555555555555555557777777555555577777777777777777777777b44777777777777777777777777777777777777777777777777
                            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777b4777777777777777777777777777777777777777777777777
                            777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777b777777777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbb7777777777777777777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            `)
                        if (Math.percentChance(12.3434)) {
                            scene.setBackgroundImage(img`
                                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                7777777775555577777777777777777777777777757775555555577777555555555775577775777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                7777777755555577777777777777777777777777755775555555577777555555555775577775777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                7777777555777577777777777777777777777777777777777777777777777757777775577775777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                7777777557777777777777777777777777777777777777777777777777777757777775577775777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                7777777557777777777777777777777777777777777777777777777777777757777775577775777555555555557777777777777777775777777777777777777777777777777777777777777777777777
                                7777777557777777777777777777777777777777777777777777777777777757777775555555777777777777777777777777777777775777777777777777777777777777777777777777777777777777
                                7777777557777777777777777777777777777777777777777777777777777757777775555555777777777777777777777777777777775777777777777777777777777777777777777777777777777777
                                7777777557777777777777777777777777777777777777777777777777777777777777777777777555555555557777777777777777775557777777777777777777777777777777777777777777777777
                                7777777557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                7777777755555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775557777777777777777777777777777777777777777777777777
                                7777777775555577777777777777777777777777777777777777777777777777777777777777777555555555557777777777777777775557777777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777775557777777777777777777777777777777777777777777777777777777777777777777555555555577577777777777777777777777
                                7777777777777777777777777777777777777777777755777777757777777777777777777777777777777777777777777777777777775557777777777777555555555577577777777777777777777777
                                7777777777777777777777777777777777777777777755777777757777777777777777777777777777777777777777777777777777775557777777777777557777777777577777777777777777777777
                                7777777777777777777777777777777777777777777755777777757777777777777777777777777777777777777777777777777777777777777777777777755777777777777777777777777777777777
                                777777777777777777777777777777777777777777775577777775777777777777777777777b444777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                7777777777ffff7777777777777777777777777775555777777775777777777777777777777444b777777755577777777777777777777777777777777777777777777777777777777777777777777777
                                77777777ffffff77777777777777777777777777755577777777757777777777557777777777557777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                7777777fffffff77777777777777777777777777777777777777757777777777755577777777755577777777777777777777777777777777777777777777777777777777777777777777777777777777
                                7777777fffffff77777777777777777777777777777777777777757777777777775577777777775557777777777777777777777777777777777777777777777777777777777777777777777777777777
                                777777777777ff77777777777777777777777777777777777555555557777777777755777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                777777777777ff77777777777777777777777777777777777555555557777777777755777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                777777777777ff77777777777777777777777777777777777777777777777777555555777777777777777777777777777755555577777777777777777777777777777777777777777777777777777777
                                777777777777ff77777777777777777777777777777777777777777777777777555555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                777777777777ff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777555555555555555555555555555555777777777777
                                777777777777fff111fff7777777777777777777777777777777777777777777555555555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                777777777777111ffffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                777777777777ffffffff77777777777777777777777755777777777777777777777777777777777777777777777777777777777777777777777777555555555555555555555555555555777777777777
                                777777777777ffffffff77777777777777777777777777777777777777777777555555555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                777777777777fffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                777777777777fffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777555555555555555555555555555555777777777777
                                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                77777777777777777777777777777777777777777777777777777777777777777777777ff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                777777777777777777777777777777777777777777777777777777777777777777777ffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                77777777777755555555555777777777777777777777777777777777777777777777fffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                77777777777777777777777777777777777777777777777777777777777777777777fffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777777777777777777fffff1777777777777555555555557777777777777777777777777777777777777777777777777777777777777777
                                7777777777775555555555577777777555555555555555577777777777777777777fff11f77777777777777777777777777777777777777777777775555755577557757575557777744e777777777777
                                7777777777777777777777777777777777777777777777777777777777777777777ff11ff777777777777777777777777777777777777777777777757777577757757575757777777415777777777777
                                7777777777777777777777777777777777777777777777777777777777777777777ffffff77777777777755555555555777777777777777777577575557757775775775775577777741d777777777777
                                7777777777775555555555577777777555555555555555577777777777777777777fffff1777777777777777777777777777777777777777775775757777577757757575757777777451777777777777
                                7777777777777777777777777777777777777777777777777777777777777777777fffff1777777777777777777777777777777777777777775557755557577757757575755577777b55777777777777
                                7777777777777777777777777777777777777777777777777777777777777777777fffff1773235777777555555555557777777777777777777777777777777777777777777777777bd5777777777777
                                77777777777777777777777777777775555555555555555777777777755775557777777777722257777777777777777777777777777777777777755777777777777777777777777777b5777777777777
                                77777777777777777777777777777777777777777777777777777777755775557777777777732357777777777777777777777777555777777777755777777777777777777777777777bd777777777777
                                7777777777777777777777777777777777777777777777777777777775577777777777777775553777777777777777777777777777777777777775577777777777777777777777777774777777777777
                                777777777777777777777777777777777777777777777777777777777557777777777777777575277777777777777777777777777777777777777557777777777777777777777777777b777777777777
                                7777777777777777777777777777777777777777777777777777777775577777777777777774553777777777777777777777777777777777777775577777777777777777777777777777777777777777
                                777777777777777777777777777777777777777777777777777777775557777777777777777b455777777777777777777777777777777777777555577777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777777775577775777777777774bbb777777757757777777777777777777777777775577777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777777775577775577777777775577777777777777777777777777777777777777775577777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777777755577557777777777555777777777777777777777777777777777777777775577777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777777755777557777777777557777777777777777777777777777777777777777555777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777777777777777555555577555555555577777777777777777777777777777777777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777744777777777777
                                77777777777777777777777777777777777777777777777777777777777777775777577775577777757777777777777777777777777777777777777777777777777777777777777444dd777777777777
                                77777777755555555555555777777777777777777777777777777777777777775777577775577777757777777777777777777777777777777777777777777777777777777777744dd555777777777777
                                777777777777777777777777777777777777777777777777777755777777777757775777755777777577777777777777555557777757777755777777777777777777777777777d555d23777777777777
                                7777777777777777777777777777777777777777777777775777557777777777577757777557777775777777777777775555557775557777557777777777777777777777777775555222777777777777
                                7777777775555555555555577777777777777777775555575577557777777777777777777777777777777777777777777775557755555777557777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777557777777777777777777777777777777777777777777777557557775577557777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777557777777777777777777777777777777777777777777777557557775577557777777777777777777777777777777777777777777777
                                7777777775555555555555577777777777777777775555577777555577777777777777777777777777777777777777777775557555555577555777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777555577777777777777777777777777777777777777777775577555555577555777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777557777777777777777777777777777777777777777777777777557775577557777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777775555575577557777777777777777777777777777777777777777777777777557775577557777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777775777557777777777777777777777777777777777777777777775557557775577557777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777557777777777777777777777777777777777777777777775577557775577557777777777777777777777777775555555555555557777
                                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775577777777777777777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775577777777777777777777777777777777777777775555555555555555777
                                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775577777777777777777777777777777777777777777777777777777777777
                                7777777777777777777755777777777777777777777777777777777777777777777777777777777777777777777777777775577777777777777777777777777777777777777777777777777777777777
                                7777777777777777777777775577777777777777777777777777777777777777777777777777777777777777777777777755577777777777777777777777777777777777777775555555555555555777
                                777777777777777777777777557777777777777777777777fff7777777777777777777777777777777777777777777775555577777777777777777777777777777777777777777777777777777777777
                                777777777777777777775777555557777777777777777777fffff77777777777dde227777777777777777777777777775555577777777777777777777777777777777777777777777777777777777777
                                777777777777777777775577555557777777777777777777ffffff7777777777dde237777777777777777777777777777755577777777777777777777777777777777777777777777777777777777777
                                777777777777777777775577557777777777777777777777ffffff77777777774bd237777777777777777777777777777755577777777777777777777777777777777777777777777777777777777777
                                7777777777777777777755775577777777777777777777771ffffff777777777ee4d27777777777777777777777777777755577777777777777777777777777777777777777777777777777777777777
                                7777777777777777777755775555555577777777777777771ffffff777777777bee4d7777777777777777777777777777755577777777777777777777777777777777777777777777777777777777777
                                7777777777777777777757775555555577777777777777771ffffff7777777774bbe4777777777777777777777777777777777777777777722277777777777777777777777777ddd4ee7777777777777
                                777777777777777777777777777777777777777777777777fffffff77777777744b4b7777777777777777777777777777777777777777777322777777777777777777777777774d4ee77777777777777
                                777777777777777777775557777755555777777777777777ff117bd5777777774444b777777777777777777777777777777e222e255553ee33277777777777777777777777777eee7777777777777777
                                7777777777777777777777777777777777777777777777777777766577777777443447777777777777777777777777777773eee255555555222777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777677677777777444337777755555577777775777777777777777775555555555777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777488577777777b4443333446655557777777557db7777777b455d4dddd5555dd777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777455277777777bb4433333477611d7777777235b777777777bd4eb6dd5552e25777777777777777777777777777777777777777777777
                                77777777777777777777777777555b7777777477777774437777d522777777777eb4444433881d44777777722db77777777774eb455555e2777777777777777777777777777777777777777777777777
                                777777777777777777777777775323b777774577777774b47777d5e27777777777eb4b44335114d5777777723b77777777777eb4311555e277777777777777777777777777777777777e777777777777
                                777777777777777777777777777777b7777bd57777777d4b77775d2e77777777777bb4bb43d1d55e77777775db77777777777e443441153e22277777777777777777777777777444ddeee77777777777
                                777777777777777777777777777777db777b55b77777755b7777ddd2eee3d444555dd4e77777bb4bb443be777777777777b4777777777777777777777777777777777777777771544d4eee7777777777
                                7777777777777777777777777777775b77bd55bb7777755577775115dddd55d544eede7777777bb4bbbbee7777777777777b7777777777777777777777777777777777777777751554d4ee7777777777
                                777777777777777777777777777777d47743224be777755577771d444d5544ee7774de77777777bbbbeeb77777777777777b7777777777777777777777777777777777777777755dd4deee7777777777
                                777777777777777777777777777777447b422344ee77752277774555d4ee777777774477777777777777777777777777777777777777777777777777777777777777777777777355544eee7777777777
                                777777777777777777777777777777777be222444ee77223777754eede777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                77777777777777777777777777777777bde2224444eb72227777e7774e777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                77777777777777777777777777777777b52e2244b4ee72227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                77777777777777777777777777777777777777bbb4be77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                77777777777777777777777777777777777777ebbbbe77777777777777777777777777775577777777777777777777777777555557777777777777777777777777777777777777777777777777777777
                                777777777777777777777777777777777777774bbbbe77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                77777777777777777777777777777777777777d4ebee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777777777777777777777775577777777777777777777777777555557777777777777777777777777777777777777777777777777777777
                                777777777777777777777777777777777777777777777777777755555555555555555555777777777777777777777775555577777774edd5777777777777777777777777777777777777777777777777
                                77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777555557777777eed55777777777777777777777777777777777777777777777777
                                77777777777777777777777777777777777777777777777777777777777777777777777755555555577777777777777777777777777eee55777777777777777777777777777777777777777777777777
                                77777777777777777777777777777777777777777777777777775555555555555555555577777775577777777777777777777777777eeee5777777777777777777777777777777777777777777777777
                                77777777777777777777777777777777777777777777777777777777777777777777777777777775577777777777777777777777777e44e4777777777777777777777777777777777777777777777777
                                777777777777777777777777777777777777777777777777777777777777777777777777777777755555557777777777777777777777b44e777777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777555555555555555555557777777555555577777777777777777777777b44777777777777777777777777777777777777777777777777
                                77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777b4777777777777777777777777777777777777777777777777
                                777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777b777777777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbb7777777777777777777777777777777777777777777
                                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                `)
                        }
                        sprites.destroy(mySprite7)
                        game.setGameOverMessage(true, "A draw with " + ("" + info.player2.score() + " Pizzas!"))
                        blockSettings.writeNumber("act", 2)
                        game.gameOver(true)
                    } else {
                        game.setGameOverMessage(true, "A draw with " + ("" + info.player2.score() + " Pizzas!"))
                        game.gameOver(true)
                    }
                } else {
                    game.setGameOverMessage(true, "A draw with " + ("" + info.player2.score() + " Pizzas!"))
                    game.gameOver(true)
                }
            }
        }
    })
    controller.player1.moveSprite(mySprite, 0, 0)
    controller.player2.moveSprite(mySprite2, 0, 0)
    scene.setBackgroundImage(img`
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc7777777777777777777777777777777777777777777
        777777777777777777777777777777777777777cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc7777777777777777777777777777777777777777777
        777777777777777777777777777777777777777cbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbc7777777777777777777777777777777777777777777
        777777777777777777777777777777777777777cbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbc7777777777777777777777777777777777777777777
        777777777777777777777777777777777777777cbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbc7777777777777777777777777777777777777777777
        777777777777777777777777777777777777777cbdddddd55555555dddddddd55555555dddddd55dddddddd55dddd555555555555dddd55ddddbc7777777777777777777777777777777777777777777
        777777777777777777777777777777777777777cbdddddd55555555dddddddd55555555dddddd55dddddddd55dddd555555555555dddd55ddddbc7777777777777777777777777777777777777777777
        ccccccccccccccccccccccccccccccccccccccccbdddd5555dddd5555dddd5555dddd5555dddd5555dddd5555dddd5555dddddddddddd55ddddbcccccccccccccccccccccccccccccccccccccccccccc
        822882288228822882288228822882288228822cbdddd5555dddd5555dddd5555dddd5555dddd5555dddd5555dddd5555dddddddddddd55ddddbc2288228822882288228822882288228822882288228
        822882288228822882288228822882288228822cbdddd5555dddddddddddd5555dddd5555dddd555555555555dddd5555dddddddddddd55ddddbc2288228822882288228822882288228822882288228
        822882288228822882288228822882288228822cbdddd5555dddddddddddd5555dddd5555dddd555555555555dddd5555dddddddddddd55ddddbc2288228822882288228822882288228822882288228
        822882288228822882288228822882288228822cbdddd5555dd555555dddd5555dddd5555dddd555555555555dddd55555555dddddddd55ddddbc2288228822882288228822882288228822882288228
        822882288228822882288228822882288228822cbdddd5555dd555555dddd555555555555dddd555555555555dddd55555555dddddddd55ddddbc2288228822882288228822882288228822882288228
        822882288228822882288228822882288228822cbdddd5555dddd5555dddd555555555555dddd5555dddd5555dddd5555dddddddddddd55ddddbc2288228822882288228822882288228822882288228
        822882288228822882288228822882288228822cbdddd5555dddd5555dddd5555dddd5555dddd5555dddd5555dddd5555ddddddddddddddddddbc2288228822882288228822882288228822882288228
        ccccccccccccccccccccccccccccccccccccccccbdddddd55555555dddddd5555dddd5555dddd5555dddd5555dddd555555555555dddd55ddddbcccccccccccccccccccccccccccccccccccccccccccc
        777777777777777777777777777777777777777cbdddddd55555555dddddd5555dddd5555dddd5555dddd5555dddd555555555555dddd55ddddbc7777777777777777777777777777777777777777777
        777777777777777777777777777777777777777cbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbc7777777777777777777777777777777777777777777
        777777777777777777777777777777777777777cbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbc7777777777777777777777777777777777777777777
        777777777777777777777777777777777777777cbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbc7777777777777777777777777777777777777777777
        777777777777777777777777777777777777777cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc7777777777777777777777777777777777777777777
        777777777777777777777777777777777777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc7777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    scene.setTile(15, img`
        f f f f f f f f f f f f f f f f 
        d 1 d d d d d d d 1 d d d d d d 
        d 1 d d d d d d d 1 d d d d d d 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        d d d d d 1 d d d d d d d 1 d d 
        d d d d d 1 d d d d d d d 1 d d 
        d d d d d 1 d d d d d d d 1 d d 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        d 1 d d d d d d d 1 d d d d d d 
        d 1 d d d d d d d 1 d d d d d d 
        d 1 d d d d d d d 1 d d d d d d 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        d d d d d 1 d d d d d d d 1 d d 
        d d d d d 1 d d d d d d d 1 d d 
        d d d d d 1 d d d d d d d 1 d d 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, true)
    scene.setTile(12, img`
        f 1 d d d d d f 
        f 1 d d d d d f 
        f 1 d d d d d f 
        f 1 1 1 1 1 1 f 
        f d d d d 1 d f 
        f d d d d 1 d f 
        f d d d d 1 d f 
        f 1 1 1 1 1 1 f 
        `, true)
    scene.setTile(2, img`
        f f f f f f f f 
        f 1 d d d d d f 
        f 1 d d d d d f 
        f 1 1 1 1 1 1 f 
        f d d d d 1 d f 
        f d d d d 1 d f 
        f d d d d 1 d f 
        f f f f f f f f 
        `, true)
    scene.setTile(1, img`
        d 1 d d d d d d d 1 d d d d d d 
        d 1 d d d d d d d 1 d d d d d d 
        d 1 d d d d d d d 1 d d d d d d 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        d d d d d 1 d d d d d d d 1 d d 
        d d d d d 1 d d d d d d d 1 d d 
        d d d d d 1 d d d d d d d 1 d d 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        d 1 d d d d d d d 1 d d d d d d 
        d 1 d d d d d d d 1 d d d d d d 
        d 1 d d d d d d d 1 d d d d d d 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        d d d d d 1 d d d d d d d 1 d d 
        d d d d d 1 d d d d d d d 1 d d 
        d d d d d 1 d d d d d d d 1 d d 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, true)
}
function settings2 () {
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ...........................5555.................................................................................................................................
        .........................55....5....................555.........................................................................................................
        ........................5.......5...................5..55.......................................................................................................
        .......................5.........5................55....5.......................................................................................................
        ......................5..........55.............55.......5......................................................................................................
        .....................5............5............5.........5......................................................................................................
        .....................5........................5..........5......................................................................................................
        ....................5........................5...........5......................................................................................................
        ...................5........................5............5......................................................................................................
        ...................5.......................5............5.......................................................................................................
        ...................5......................5.............5.......................................................................................................
        ..................5......................5.............5........................................................................................................
        ..................5.....................5.............5.........................................................................................................
        .................5.....................5.............5..........................................................................................................
        .................5.....................5...........55...........................................................................................................
        .................5....................5..........55.............................................................................................................
        .................5....................5........55...............................................................................................................
        .................5...................5.......55.................................................................................................................
        ..................5..................5.....55...................................................................................................................
        ...................55...............5...555.....................................................................................................................
        .....................55............5..55........................................................................................................................
        .......................555555555555555..........................................................................................................................
        ..................................5.............................................................................................................................
        ..................................5.............................................................................................................................
        .................................5..............................................................................................................................
        .................................5..............................................................................................................................
        ................................5..................................55...........................................................................................
        ................................5..................................55...........................................................................................
        ...............................5..................................555...........555.............................................................................
        ...............................5..................................555...........5.5.............................................................................
        ..............................5................5555..........55..5.5...........5.55.............................................................................
        .....................555......5................5..55...........5555............555..............................................................................
        ....................5..5.....5..............555....5............5.5555....55..55................................................................................
        ...................5........5...............5......5............55.........5555.......55........................................................................
        ...................5........5..............5.......5...........55...........5555................................................................................
        ..................5........5.......55.....5.......5............5..........555...55..............................................................................
        ..................5........5.........5...5.......5...........55..........5..5....5..............................................................................
        ..................5.......5...........5555.....55...........5.5.........5..5........5...........................................................................
        ..................5......5..............5.55555...........55.5........55..5........55...........................................................................
        ..................5.....5...............5................5..5.......55...5........555....55.....................................................................
        ..................5....5................5...............5...5......5.....5........555...555.....................................................................
        ..................55..55................55............55...5.....55......5.......5.5..55..5.....................................................................
        ...................5555..................55........555.....5...55.......5......55..5..5...5..55555..............................................................
        ...........................................555..555.......5..55........55......5...555....5.55...5.......555555.................................................
        .............................................555..........555..........5.....55...555....5.5.....5.......5....5.................................................
        .......................................................................5555555....55.....555.....5......5....55......5..........................................
        .........................................................................................55.......5....5....555......55.........................................
        ..................................................................................................55...5...555.......555........................................
        ...................................................................................................555555555.5......55..5.......................................
        ............................................................................................................5....555....55......................................
        .......................5............................................................................55555555555555.......5......................................
        .......................5..........................................................................555......5.............5......................................
        ........................5........................................................................55.......55............55......................................
        .........................55.....................................................................55........5..........5555.......................................
        ...........................555..................................................................5........5......................................................
        ..............................55................................................................5.......5.......................................................
        ................................55..............................................................5......55.......................................................
        ..................................55............................................................5555555.........................................................
        ....................................55..........................................................................................................................
        ......................................55........................................................................................................................
        ........................................555..............................................................................................................5555555
        ...........................................555....................................................................................................5555555.......
        ..............................................555...........................................................................................555555..............
        .................................................555555..............................................................................5555555....................
        .......................................................55555555..............................................................55555555...........................
        ...............................................................555555555555555....................................55555555555...................................
        ..............................................................................555555555555555555555555555555555555..............................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    story.showPlayerChoices("Song", "Reset all", "About", "Back")
    if (story.checkLastAnswer("Song")) {
        if (blockSettings.readNumber("act") == 2) {
            story.showPlayerChoices("Mute", "Random", "Choose", "Notes")
        } else {
            story.showPlayerChoices("Mute", "Random", "Choose", "Back")
        }
        if (story.checkLastAnswer("Mute")) {
            blockSettings.writeNumber("Music", 0)
        } else if (story.checkLastAnswer("Random")) {
            blockSettings.writeNumber("Music", 1)
        } else if (story.checkLastAnswer("Choose")) {
            story.showPlayerChoices("Korobeiniki", "Chopsticks")
            if (story.checkLastAnswer("Korobeiniki")) {
                blockSettings.writeNumber("Music", 2)
            } else if (story.checkLastAnswer("Chopsticks")) {
                blockSettings.writeNumber("Music", 3)
            } else if (story.checkLastAnswer("Back")) {
                settings2()
            }
        } else if (story.checkLastAnswer("Back")) {
            settings2()
        } else {
            game.showLongText("Test subject 1109", DialogLayout.Full)
            game.showLongText("Nickname: The Digital Killer", DialogLayout.Full)
            game.showLongText("Contributors: Longlinh, Kate, Dave.", DialogLayout.Full)
            game.showLongText("Subject is a computer virus that can enter any games and kills the people who download it.", DialogLayout.Full)
            game.showLongText("Appearance as a smiling emoji but with black as a skin and white as the eyes and mouth.", DialogLayout.Full)
            game.showLongText("Subject appears to be extremely hostile. ", DialogLayout.Full)
            game.showLongText("Subject has a favorite sentence. Which is: \"168 is the perfect speed\".", DialogLayout.Full)
            game.showLongText("This sentence has yet to be explained.", DialogLayout.Full)
            game.showLongText("Signature:                  Longlinh", DialogLayout.Full)
        }
        game.reset()
    } else if (story.checkLastAnswer("About")) {
        game.showLongText("One day, I saw Chase The Pizza on the Makecode Arcade homepage and thought to myself, I can make something like a full version! A Deluxe version! And so I started to make it and added many things! Multiplayer, with a countdown to collect as many pizas as you can... and even an editor to customize the game! Music to add more of a feel to the game! A ton of things I add to the Deluxe version! So, this is just Chase The Pizza with these more features! Hope you have a nice day:D  Longlinh", DialogLayout.Full)
        if (blockSettings.readNumber("act") == 1) {
            game.showLongText("                                                                  ", DialogLayout.Full)
            game.showLongText("Please play with a friend! Please! I'm begging you! Draw a game!", DialogLayout.Full)
            game.showLongText("                                                                  ", DialogLayout.Full)
        }
        game.reset()
    } else if (story.checkLastAnswer("Back")) {
        game.reset()
    } else {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbffffffffffffffffbbbbbffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb444bffffffffffffffbeebbbbfffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb444bbfffffffffffffeebbbb4bbffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb44bbb4bffffffffffffeb344bb4bbfffffffffffffffffffff
            ffffffff55555ffff55fff55ffff555ffff555555fff55555555fffff555555555ff55ffff5fff5555555fffffffffffffffffffffffb44b4555dbfffffffffffe44334bb4bbffffffffffffffffffff
            fffffff5555555fff55fff55fff55555ff55555555ff55555555fffff555555555ff55ffff5fff5555555ffffffffffffffffffffffb44e455323bfffffffffffeb433344b4befffffffffffffffffff
            ffffff555fff555ff55fff55ff5555555f555fff55ff55fffffffffffffff5ffffff55ffff5fff55ffffffffffffffffffffffffffe44e4575222dbffffffffff4eb43344444beffffffffffffffffff
            ffffff55fffffffff55fff55ff55fff55f55ffffffff55fffffffffffffff5ffffff55ffff5fff55ffffffffffffffffffffffffffeeee55553235bfffffffffbd4eb43333344bbfffffffffffffffff
            ffffff55fffffffff55fff55ff55fff55f55ffffffff55fffffffffffffff5ffffff55ffff5fff55ffffffffffffffffffffffffffeee553235557dbfffffffb455d4443333444bbffffffffffffffff
            ffffff55fffffffff5555555ff5555555f5555555fff55555ffffffffffff5ffffff5555555fff55555fffffffffffffffffffffffeed5522255555bfffffff4d5555d444333444bbfffffffffffffff
            ffffff55fffffffff5555555ff5555555ff5555555ff55555ffffffffffff5ffffff5555555fff55555fffffffffffffffffffffff4edd5323575323bfffff4555555dd4b4443444beffffffffffffff
            ffffff55fffffffff55fff55ff55fff55fffffff55ff55fffffffffffffff5ffffff55ffff5fff55fffffffffffffffffffffffffff4edd555555222bffffbd5555d555d4bb444444eefffffffffffff
            ffffff55fffff55ff55fff55ff55fff55fffffff55ff55fffffffffffffff5ffffff55ffff5fff55fffffffffffffffffffffffffffff44ddd555d23dbfffb55ddd665555bb4b44444eeffffffffffff
            fffffff5555555fff55fff55ff55fff55f55555555ff55555555fffffffff5ffffff55ffff5fff5555555ffffffffffffffffffffffffff4444dd5555bffbd5555677655554ebb44444ebfffffffffff
            ffffffff55555ffff55fff55ff55fff55ff555555fff55555555fffffffff5ffffff55ffff5fff5555555ffffffffffffffffffffffffffffff444ddd4ff43222558855555d4eeb44b4eefffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444fb422332ddd555222d4eebbb4befffffffffff
            fffffffffffffffffffffffffffffffffff55555555fffff55555555ffff5555555555ff5555555555fffff55ffffffffffffffffffffffffffffffffffbe22232ed55522332db4ebbbbefffffffffff
            fffffffffffffffffffffffffffffffffff555fffff55fffffff5fffffffffffffff55ffffffffff55fff55555ffffffffffffffffffffffffffffffffbde22222e555e22232edd4bbbbefffffffffff
            fffffffffffffffffffffffffffffffffff555fffff55fffffff5ffffffffffffff555ffffffffff55ff555ff55fffffffffffffffffffffffffffffffb52e222e3555e22222eddd4ebeefffffffffff
            fffffffffffffffffffffffffffffffffff555fffff55fffffff5fffffffffffff55ffffffffff55ffff55fff55ffffffffffffffffffffffffffffffbd552eee355552e222e355544eeefffffffffff
            fffffffffffffffffffffffffffffffffff555fffff55fffffff5ffffffffffff55ffffffffff555ffff55fff55ffffffffffffffffffffffffffffff665dd5555555552eee355dd4deeefffffffffff
            fffffffff5555555fffffffffffffffffff555555555ffffffff5ffffffffff555fffffffff555ffffff5555555fffffffffffffffffffffffffffff6776555555555555555551554d4eefffffffffff
            fffffff55555555555fffffffffffffffff55555555fffffffff5fffffffff555ffffffffff55fffffff55fff55fffffffffffffffffffffffffffff4885222555dddd6655551544d4eeefffffffffff
            ffffff5555555555555ffffffffffffffff555ffffffffffffff5ffffffff55ffffffffff55fffffffff55fff55ffffffffffffffffffffffffffffb45522332555dd677611d444ddeeeffffffffffff
            ffffff5555555555555ffffffffffffffff555ffffffffffffff5fffffff55ffffffffff555fffffffff55fff55ffffffffffffffffffffffffffff4d5222232e55555881d44ddd4eeefffffffffffff
            fffff55555f55f555555fffffffffffffff555ffffffffff55555555ffff5555555555ff5555555555ff55fff55fffffffffffffffffffffffffffbdd5e22222e555115114d54d4eefffffffffffffff
            fffff55555f55f555555fffffffffffffff555ffffffffff55555555ffff5555555555ff5555555555ff55fff55fffffffffffffffffffffffffffb55d2e222e351144d1d55eeeefffffffffffffffff
            fffff55555f55f555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbd5ddd2eee3d444555dd4efffffffffffffffffffff
            fffff555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff5555f5fff5ff5f5f5f555fffffb555115dddd55d544eedeffffffffffffffffffffff
            fffff55ff555555ff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ff5f5ffff5fff5ff5f5f5f5fffffff4511d444d5544eefff4deffffffffffffffffffffff
            fffff555ff5555ff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ff5f555ff5fff5ff5ff5ff55ffffff41d4555d4eeffffffff44ffffffffffffffffffffff
            fffff55555ffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ff5f5ffff5fff5ff5f5f5f5fffffff41554eedeffffffffffffffffffffffffffffffffff
            ffffff5555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ff5555f555ff55ff5f5f555fffff44eefff4effffffffffffffffffffffffffffffffff
            ffffff5555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffff55555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fff555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fff555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fff555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        timer.after(500, function () {
            story.printDialog("Are you sure?", 80, 90, 50, 150)
            story.showPlayerChoices("Yes", "No")
            if (story.checkLastAnswer("Yes")) {
                blockSettings.clear()
                blockSettings.writeNumber("Music", 0)
                timer.after(3000, function () {
                    game.reset()
                })
                story.printDialog("Resetting...", 80, 90, 50, 150)
                story.printDialog("Reseting...", 80, 90, 50, 150)
                story.printDialog("Reseting...", 80, 90, 50, 150)
            } else if (story.checkLastAnswer("Chopsticks")) {
                settings2()
            }
        })
    }
}
function bossfight2 () {
    shootboss = 0
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a a . . . . 
        . . . a a a a a a a a a a a . . 
        . . a a a a a a a a a a a a a . 
        . . a a a a e a a a e a a a a . 
        . a a a a a e a a a e a a a a a 
        . a a a a a e a a a e a a a a a 
        . a a a a a e a a a e a a a a a 
        . a a a a a a a a a a a a a a a 
        . a a a a a a a a a a a a a a a 
        . a a a e e a a a a a e e a a a 
        . a a a e e e a a a e e e a a a 
        . . a a a e e e e e e e a a a . 
        . . a a a a e e e e e a a a a . 
        . . . a a a a a a a a a a a . . 
        . . . . . a a a a a a a . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 100)
    scene.setBackgroundColor(15)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffbbbbffbffffffffffffffb444bffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffff5fffffffffffffffffffffffffffffffffffffffffffff55fff55ffff55555fffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffb4bb555fffff5555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55554fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555d4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff4fffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555fffff55222dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffd5555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff522332555ffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22232ffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555ffffff22222ffffffffffb444bbfffffffffffffffbbbb4bbffffffffffffffffffffffffff
        ffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f222ffffffffffb44bbb4bfffffffffffffb344bb4bbfffffffffffffffffffffffff
        fffffffffffffd4dd55fffffffffffffff5555555fffffffffffffffffffffffffffffffffffffffffffdff4ffffffffffffffffffffff55dbffffffffffff44334bb4bbffffffffffffffffffffffff
        ffffffffffff4d45515fffffffffffffff5555555ffffffffffffffffffffffffffffffffffffffffff4dd55ffffffffffffffffffffff323bffffffffffffb433344b4bffffffffffffffffffffffff
        fffffffffffff4d4451ffffffffffffffffffff55ffffffffffffffffffffffffffff555554fffffff55d1d4ffffffffffffffffffffff222dbffffffffff4eb4fffffffffffb4444433ffffffffffff
        ffffffffffffffdd444ffffffffffffffffffff55ffffffffffffffffffffffffff22255dffffffff5d41151ffffffffffffffffffffff3235bfffffffffbd4ebfffffffffbb44333334ffffffffffff
        fffffffffffffff4dddffffffffffffffffffff55ffffffffffffffffffffffffff32355fffffffff44d1885ffffffffffffffffffffff5557dbfffffffb455d4fffffffffff44333344ffffffffffff
        ffffffffffffffff4d4fffffffffffffffff55555ffffffffffffffffffffffffff5555ffffffffffd116fffffffffffffffffffffffff55555bfffffff4d5555fffffffffff4333444dffffffffffff
        ffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffff5754f44fffffff555566fffffffffffffffffffffffffffffffffffffffffffffffffffff3444b4dfffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff554e44bfffffff555555fffffffffffffffffffffffffffffffffffffffffffffffffffff44bb4d5fffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ff5f5f5fff54b44bffffffff3fff25fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ff5f5f5fffffffffffffffffffffffffff4dffffffffffffffffffffffffffffffffffff555ffffffffffffffff55ff55ffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ff5ff5fffffffffffffffffffffffffffff44fffffffffffffffffffffffffffffffffff555ffffffffffffffff5ff555ffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ff5f5f5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ff5f5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffff55555fffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffff55555fffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffff5555ffffffff
        fffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffff55ffffffffff
        fffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff48ffffffffffffffffffffffffffff555ffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fff55555fffffffffff55555fffffb45fffffffffffff55ffffffff55f55fffff55fff55ff55fffffffffff5ffffffff555555555555fffff........................................5555fff
        fffffffffffffffffffffffffffff4d5ffffffffffff555fff5555555f55fffff5555555ff55555ffffffffffffffffffffffffffffffffff........................................fffffff
        ffffffffffffffffffffffffffffbdd5ffffffffffff555ff5555555ff5555fff5555555ff5555555555fffffffffffffffffffffffffff55........................................fffffff
        fff55555fffffffffff55555ffffb55dfffffffffffff55ff55fffffff55fffff55fff55ff55fffffffffff5ffffffff5555555555555ff55........................................5555fff
        fffffffffffffffffffffffffffbd5ddfffffffffffff5ffffffffffffffff55555fff55ff55fffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffffffffffffffffffffffffb5551ffffffffffff55ffffffffffffffff55555fff55ff55fff55555fffffffffffffffffffffffffffff........................................fffffff
        ffff5555fffffffffff55555fff4511dffffffffffff55ffffffffffffffff5555ffff55ff55fffffffffff5ffffffff55555555555555555........................................5555fff
        fffffffffffffffffffffffffff41d45ffffffffffffffffffffffffffffff55fffffffffffffffffffffffffffffffffffffffffffff5555........................................fffffff
        fffffffffffffffffffffffffff41554fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffffffffffffffffffffffffffffff555fffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44fffff4ff........................................fffffff
        fffffffffffffffffffffffffffffffffffffff55777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffffffffffffffffffffffffffffffffffff55777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffffffffffffffffffffffffffffffffffff55777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffffffffffffffffffffffffffffffffffff55777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        ffffffffffffffffffffffffffffffffffffffff5555ff5fff555555ff55fffff55ffffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffffffffffffffffffffffffffffffffffffff555ff5ff55555555f5555fff55ffffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffff55fffffffffffffffffffffffffffffffffffff5ff55fffffff55ff5ff55ffffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffff55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffff55fffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffffd5fffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffff85fffffffffffff3235f532ffffffffffdd53fffffffffffff55ffffffffff55555555ffffffffffffffffffffffffffffffffffff........................................fffffff
        ffff56ff6ffff555dbffb52225555555fffffff4fdd5fffffffffffffffffffffff55ffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        ffffdd665ffffd55bfffbd32d555dd55fffffffff44dffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        ffff55d55ffff55dbffffb555dd44455fffffffffff4ffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        ffff5555dffff554fffffbffffffff55ffffffffffffff5fffffffffffffffff55fffffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        ffffffffffffffffffffffffffffffffffffffffff55ff5fffffffffffffff55ffffffffffffffffffffffffffffffffff5fffff555555555........................................fffffff
        ffffffffffffffffffffffffffffffffffffffffff55ff5ffffffffffffff555ffffffffffffffffffffffffffffffffff5fffff555555555........................................fffffff
        ffffffffffffffffffffffffffffffffffffffffff55ff5ffffffffff55ff5555555555fffffffffffffffffffffffffffffffffffff5ffff........................................fffffff
        ffffffffffffffffffffffffffffffffffffffffff55ff5ffffffffff55ff5555555555fffffffffffffffffffffffffffffffffffff5ffff........................................fffffff
        ffffffff5fffffffffffffffffffffffffffffffff55ff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffff........................................fffffff
        ffffffff5fffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffff........................................fffffff
        ffffffff5fffffffffffffffffffffffffff5f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffff........................................fffffff
        ffffffffdfffffffffffffffffffffffffff5ffff5f5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffff........................................fffffff
        ffffffff6fffffffffffffffffffffffffff5ff555f5ffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffff5ffff........................................fffffff
        ffffffffffffffffffffffffffffffffffffffffb4ebbbbfffffffffffffffffffffffffffffffff55ffffffffffffffff5fffffffff5ffff........................................555ffff
        ffffffffffffffffffffffffffffffffffffffffffbbb4bfffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffff5ffff........................................f555fff
        fffffffffffffffffffffffffffffffffffffffffb44b4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................ff55fff
        ffffffffffffffffffffffffffffffffffffffffb44444fbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................ff55fff
        ffffffffffffffffffffffffffffffffffffffff44444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................ff55fff
        ffffffffffffffffffffffffffffffffffffffff4444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................ff55fff
        ffffffffffffffffffffffffffffffffffffffff444bffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffff........................................ff55fff
        ffffffffffffffffffffffffffffffffffffffff44bbfffffffffffff55555555555555fffffffff5555fffffffffffffffffffffffffffff........................................ff55fff
        ffffffffffffffffffffffff2f35ffffffffffff4bbffffff55ffffffffffffffffffffffffffffffffffff55ffff5fff55ffffffffffffff........................................555ffff
        ffffffffffffffffffffffff22e5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ffff5fff55fffffffffffffffffffffffffffffffffffffffffffffffffff55555fffff
        ffffffffffffffffffffffff32ed55555555555ffffffffffffffffffffffffffffffffffffffffffffffff55ffff5fff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffff32ddfffffffffffffffffffff55ffffffffffffffffffffffffffffffffffff55ffff5fff5555555ffffffffffffffffffffff55555555555555ffffffffffffffffffff
        ffffffffffffffffffffffff2558fffffffffffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444ddd4ff43ffffffffffffffffffff
        ffffffffffffffffffffffff555555555555555ffffffffff32fffffffffffffffffffffffffffffffffff555ff5555555555fffff55ffffffffffffffffffffffff4444fb42ffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffff55ffffffffff55fff55555fffffffffffffffff55fffffffffbe2ffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffbde2ffffffffffffffffffff
        ffffffffffffffffffffffff555555555555555ffffffffff22ffffd552fff3555ffffffffffffffffffff5ffff555ffffffffffffffffffffffffffffffffffffffffffb52ffffffffff55555ffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff65dd5555555fffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff6555555555fffffffffffffffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff85222555dddfffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff522332555ddfffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff55f55555ff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff222232e5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55f55555ff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222e5551ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55f55555ff
        fffffffffffffffffffffffffffffff5555f555ffffffffffffffff2e222e35114fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555ff
        fffffffffffffffffffffffffffff5f5ffff5ffffffffffffffffffd2eee3d4445ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffbbbb4ddffffffffffffffffffffff15dddd55d54ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffbe4dddffffffffffffffffffffff444d5544fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff44555ffffffffffffffffffffff55d4ffffffffffffffffffffffffffffffff5555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ff555fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555ffffffffffff5555fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555fffffffffffffffffffffffffffffff
        fffffffffffffff5555555fff555555ffff555fffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff5555555ff55555555ff55555ffffffffffffffffffffffff55555ffffffffff5555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff55ff55fff555f5555555ffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff55ffffffff55f55fff55ffffffffffffffffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff5555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55fff55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55fff55ff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55fff55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    scene.setTileMap(img`
        f f f f f f f f f f f f f f f f f f f f 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        `, TileScale.Eight)
    scene.setTile(15, img`
        f 1 d d d d d f 
        f 1 d d d d d f 
        f 1 d d d d d f 
        f 1 1 1 1 1 1 f 
        f d d d d 1 d f 
        f d d d d 1 d f 
        f d d d d 1 d f 
        f 1 1 1 1 1 1 f 
        `, true)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 6))
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f f . 
        . . f f f f 1 f f f 1 f f f f . 
        . f f f f f 1 f f f 1 f f f f f 
        . f f f f f 1 f f f 1 f f f f f 
        . f f f f f 1 f f f 1 f f f f f 
        . f f f f f f f f f f f f f f f 
        . f f f f f f f f f f f f f f f 
        . f f f 1 1 f f f f f 1 1 f f f 
        . f f f 1 1 1 f f f 1 1 1 f f f 
        . . f f f 1 1 1 1 1 1 1 f f f . 
        . . f f f f 1 1 1 1 1 f f f f . 
        . . . f f f f f f f f f f f . . 
        . . . . . f f f f f f f . . . . 
        `, SpriteKind.FoodLmao)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(17, 8))
    boss = true
    info.startCountdown(60)
}
function customizer () {
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    bg = game.askForNumber("Background(1-15)", 2)
    if (blockSettings.readNumber("act") == 2) {
        playerColor = game.askForNumber("Player Colour(15)", 2)
        if (playerColor != 15) {
            timer.after(500, function () {
                music.play(music.createSoundEffect(WaveShape.Noise, 3900, 3500, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            })
        }
    } else {
        playerColor = game.askForNumber("Player Colour(1-15)", 2)
    }
    Countdown = game.askForNumber("Countdown(1-2)", 1)
    timer2 = game.askForNumber("Time(more than zero)", 3)
    Mini = game.askForNumber("Mini(1-2", 1)
    PlayerSpeed = game.askForNumber("Player Speed(0-999)", 3)
    p = game.askForNumber("Player(1-4)", 1)
    startingscore = game.askForNumber("Starting score(0-9999", 4)
    textlist = game.askForNumber("Death Message(1-15)", 2)
    if (2 == blockSettings.readNumber("act")) {
        if (PlayerSpeed == 168 && playerColor == 15) {
            music.play(music.createSoundEffect(WaveShape.Sine, 3858, 3858, 141, 141, 1000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
            classic3()
        } else {
            classic2()
        }
    } else {
        classic2()
    }
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (blockSettings.readNumber("act") == 3 || blockSettings.readNumber("act") == 4) {
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 3 3 3 2 . . . . 
            . 2 2 2 3 3 1 1 1 1 1 3 2 . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 2 . . . 
            . 2 2 2 3 3 1 1 1 1 1 3 2 . . . 
            . . . . . 2 2 3 3 3 3 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        mySprite4.setFlag(SpriteFlag.GhostThroughWalls, true)
        mySprite4.setVelocity(100, 0)
        mySprite4.setPosition(mySprite.x, mySprite.y)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.FoodLmao, function (sprite, otherSprite) {
    if (boss) {
        sprites.destroy(sprite, effects.disintegrate, 100)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        scene.cameraShake(4, 200)
        music.play(music.createSoundEffect(WaveShape.Sine, 2789, 2789, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        shootboss += 1
    }
})
function classic2 () {
    custommode = true
    bgcolor()
    Sp = true
    info.setScore(startingscore)
    playercolor()
    Music = true
    if (Mini == 1) {
        Pizza = sprites.create(img`
            . . . . . . b b b b . . . . . . 
            . . . . . . b 4 4 4 b . . . . . 
            . . . . . . b b 4 4 4 b . . . . 
            . . . . . b 4 b b b 4 4 b . . . 
            . . . . b d 5 5 5 4 b 4 4 b . . 
            . . . . b 3 2 3 5 5 4 e 4 4 b . 
            . . . b d 2 2 2 5 7 5 4 e 4 4 e 
            . . . b 5 3 2 3 5 5 5 5 e e e e 
            . . b d 7 5 5 5 3 2 3 5 5 e e e 
            . . b 5 5 5 5 5 2 2 2 5 5 d e e 
            . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
            . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
            b d 3 2 d 5 5 5 d d d 4 4 . . . 
            b 5 5 5 5 d d 4 4 4 4 . . . . . 
            4 d d d 4 4 4 . . . . . . . . . 
            4 4 4 4 . . . . . . . . . . . . 
            `, SpriteKind.Player)
    } else {
        Pizza = sprites.create(img`
            . . . 4 4 b . . 
            . . b b b 4 b . 
            . . 5 5 5 4 4 b 
            . b 5 3 5 5 e e 
            . d 5 5 5 3 5 e 
            b 2 5 5 3 5 d e 
            d 2 5 5 d d 4 . 
            d d 4 . . . . . 
            `, SpriteKind.Player)
    }
    Pizza.setPosition(randint(15, 155), randint(15, 115))
    mySprite5.setStayInScreen(true)
    if (PlayerSpeed <= 0) {
        PlayerSpeed = 100
    }
    if (timer2 <= 0) {
        timer2 = 10
    }
    if (p == 1) {
        controller.player1.moveSprite(mySprite5, 100, PlayerSpeed)
    } else if (p == 2) {
        controller.player2.moveSprite(mySprite5, PlayerSpeed, PlayerSpeed)
    } else if (p == 3) {
        controller.player3.moveSprite(mySprite5, PlayerSpeed, PlayerSpeed)
    } else if (p == 4) {
        controller.player4.moveSprite(mySprite5, PlayerSpeed, PlayerSpeed)
    } else {
        controller.player1.moveSprite(mySprite5, PlayerSpeed, PlayerSpeed)
    }
    if (Countdown == 1) {
        timerlol = true
    } else if (Countdown == 2) {
        timerlol = false
        info.startCountdown(timer2)
    } else {
        timerlol = true
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.TheEndLmao, function (sprite, otherSprite) {
    if (boss) {
        info.stopCountdown()
        boss = false
        sprites.destroy(otherSprite, effects.coolRadial, 100)
        music.stopAllSounds()
        music.stopAllSounds()
        timer.after(1, function () {
            music.stopAllSounds()
            color.setPalette(
            color.DIY
            )
            music.stopAllSounds()
            timer.after(1, function () {
                music.play(music.createSoundEffect(WaveShape.Noise, 1435, 1435, 102, 102, 9999, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                music.stopAllSounds()
                color.setPalette(
                color.Adafruit
                )
                music.stopAllSounds()
            })
        })
        pause(5000)
        game.reset()
    }
})
function fight () {
    story.printDialog("Hello...", 80, 90, 50, 150)
    story.printDialog("Are you ready?", 80, 90, 50, 150)
    controller.moveSprite(mySprite, 0, 0)
    story.showPlayerChoices("Yes", "No")
    controller.moveSprite(mySprite, 100, 100)
    story.printDialog("Doesn't really matter.", 80, 90, 50, 150)
    story.printDialog("Here is the deal.", 80, 90, 50, 150)
    story.printDialog("If you beat me I will leave this game and grant you peace.", 80, 90, 50, 150)
    story.printDialog("But if you don't...", 80, 90, 50, 150)
    story.printDialog("I will stay here.", 80, 90, 50, 150)
    story.printDialog("But you can still fight me.", 80, 90, 50, 150)
    story.printDialog("Basically a loop that will last forever.", 80, 90, 50, 150)
    info.startCountdown(60)
    story.printDialog("A countdown of 60 seconds", 80, 90, 50, 150)
    info.stopCountdown()
    story.printDialog("Is the time you need to beat me.", 80, 90, 50, 150)
    story.printDialog("Also pressing A will shoot a projectile.", 80, 90, 50, 150)
    story.printDialog("Shoot me ten times with it.", 80, 90, 50, 150)
    story.printDialog("The second person will take care of that.", 80, 90, 50, 150)
    story.printDialog("A new thing in Chase The Pizza, eh?", 80, 90, 50, 150)
    story.printDialog("Are you ready?", 80, 90, 50, 150)
    controller.moveSprite(mySprite, 0, 0)
    story.showPlayerChoices("Yes", "")
    controller.moveSprite(mySprite, 100, 100)
    story.printDialog("Sorry if the music is bad.", 80, 90, 50, 150)
    story.printDialog("Kinda rushed the game.", 80, 90, 50, 150)
}
function bgcolor () {
    if (bg == 1) {
        scene.setBackgroundColor(1)
    } else if (bg == 2) {
        scene.setBackgroundColor(2)
    } else if (bg == 3) {
        scene.setBackgroundColor(3)
    } else if (bg == 4) {
        scene.setBackgroundColor(4)
    } else if (bg == 5) {
        scene.setBackgroundColor(5)
    } else if (bg == 6) {
        scene.setBackgroundColor(6)
    } else if (bg == 7) {
        scene.setBackgroundColor(1)
    } else if (bg == 8) {
        scene.setBackgroundColor(8)
    } else if (bg == 9) {
        scene.setBackgroundColor(9)
    } else if (bg == 10) {
        scene.setBackgroundColor(10)
    } else if (bg == 11) {
        scene.setBackgroundColor(11)
    } else if (bg == 12) {
        scene.setBackgroundColor(12)
    } else if (bg == 13) {
        scene.setBackgroundColor(13)
    } else if (bg == 14) {
        scene.setBackgroundColor(14)
    } else if (bg == 15) {
        scene.setBackgroundColor(15)
    } else {
        if (blockSettings.readNumber("act") == 2) {
            scene.setBackgroundColor(1)
        } else if (blockSettings.readNumber("act") == 1) {
            scene.setBackgroundColor(7)
        }
    }
}
function game2m () {
    players = 2
    scene.setBackgroundColor(0)
    Game1 = false
    scene.setTileMap(img`
        4 4 4 4 4 4 4 4 4 3 5 4 4 4 4 4 4 4 4 4 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        `, TileScale.Eight)
    scene.setTile(4, img`
        c c c c c c c c 
        c c c c c c c c 
        c c c c c c c c 
        c c c c c c c c 
        c c c c c c c c 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        `, true)
    scene.setTile(15, img`
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        `, true)
    scene.setTile(3, img`
        c c c c c c c c 
        c c c c c c c c 
        c c c c c c c c 
        c c c c c c c c 
        c c c c c c c c 
        f f f c c c c c 
        f f f c c c c c 
        f f f c c c c c 
        `, true)
    scene.setTile(12, img`
        c c c c c f f f 
        c c c c c f f f 
        c c c c c f f f 
        c c c c c f f f 
        c c c c c f f f 
        c c c c c f f f 
        c c c c c f f f 
        c c c c c f f f 
        `, true)
    scene.setTile(5, img`
        c c c c c c c c 
        c c c c c c c c 
        c c c c c c c c 
        c c c c c c c c 
        c c c c c c c c 
        c c c c c f f f 
        c c c c c f f f 
        c c c c c f f f 
        `, true)
    info.player1.setScore(0)
    info.player2.setScore(0)
    mySprite = sprites.create(img`
        . 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 
        2 2 f 2 2 f 2 2 
        2 2 f 2 2 f 2 2 
        2 2 2 2 2 2 2 2 
        2 2 f f f f 2 2 
        2 2 2 2 2 2 2 2 
        . 2 2 2 2 2 2 . 
        `, SpriteKind.Player)
    controller.player1.moveSprite(mySprite)
    mySprite2 = sprites.create(img`
        . 8 8 8 8 8 8 . 
        8 8 8 8 8 8 8 8 
        8 8 f 8 8 f 8 8 
        8 8 f 8 8 f 8 8 
        8 8 8 8 8 8 8 8 
        8 8 f f f f 8 8 
        8 8 8 8 8 8 8 8 
        . 8 8 8 8 8 8 . 
        `, SpriteKind.Player2)
    controller.player2.moveSprite(mySprite2)
    Pizza = sprites.create(img`
        . . . 4 4 b . . 
        . . b b b 4 b . 
        . . 5 5 5 4 4 b 
        . b 5 3 5 5 e e 
        . d 5 5 5 3 5 e 
        b 2 5 5 3 5 d e 
        d 2 5 5 d d 4 . 
        d d 4 . . . . . 
        `, SpriteKind.Food)
    Pizza2 = sprites.create(img`
        . . . 4 4 b . . 
        . . b b b 4 b . 
        . . 5 5 5 4 4 b 
        . b 5 3 5 5 e e 
        . d 5 5 5 3 5 e 
        b 2 5 5 3 5 d e 
        d 2 5 5 d d 4 . 
        d d 4 . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 7))
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(14, 3))
    timer.after(1000, function () {
        Pizza.sayText("3!")
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        timer.after(1000, function () {
            Pizza.sayText("2!")
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
            timer.after(1000, function () {
                Pizza.sayText("1!")
                music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
                timer.after(1000, function () {
                    Pizza.sayText("Go!!!!!!", 500, false)
                    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
                    timer.after(500, function () {
                        tiles.placeOnTile(Pizza, tiles.getTileLocation(randint(0, 8), randint(1, 14)))
                        tiles.placeOnTile(Pizza2, tiles.getTileLocation(randint(11, 19), randint(1, 14)))
                        info.startCountdown(40)
                    })
                })
            })
        })
    })
}
sprites.onOverlap(SpriteKind.Player3, SpriteKind.TheEndLmao, function (sprite, otherSprite) {
    if (boss == false) {
        Pizza.setPosition(randint(15, 155), randint(15, 115))
        info.changeScoreBy(1)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        if (act) {
            if (timerlol) {
                info.startCountdown(timer2)
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Game1 == true) {
        tiles.placeOnTile(Pizza2, tiles.getTileLocation(randint(11, 19), randint(1, 6)))
    } else {
        tiles.placeOnTile(Pizza2, tiles.getTileLocation(randint(11, 19), randint(1, 14)))
    }
    info.player2.changeScoreBy(1)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
info.onCountdownEnd(function () {
    if (act == false) {
        if (blockSettings.readNumber("act") == 4 || blockSettings.readNumber("act") == 3) {
            if (boss) {
                boss = false
                music.stopAllSounds()
                music.stopAllSounds()
                timer.after(1, function () {
                    music.stopAllSounds()
                    color.setPalette(
                    color.DIY
                    )
                    music.stopAllSounds()
                    timer.after(1, function () {
                        music.play(music.createSoundEffect(WaveShape.Noise, 1435, 1435, 102, 102, 9999, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                        music.stopAllSounds()
                        color.setPalette(
                        color.Adafruit
                        )
                        music.stopAllSounds()
                    })
                })
                pause(5000)
                game.reset()
            }
        } else {
            if (Sp == true) {
                if (custommode == true) {
                    if (blockSettings.readNumber("act") == 2) {
                        game.splash("Hello:" + info.score(), text_list[textlist])
                    } else {
                        game.splash("Points:" + info.score(), text_list[textlist])
                    }
                    game.reset()
                } else {
                    game.setGameOverMessage(true, text_list._pickRandom())
                    game.gameOver(true)
                }
            } else {
                sprites.destroy(Pizza)
                sprites.destroy(Pizza2)
                if (players == 2) {
                    End2()
                }
            }
        }
    }
})
function playercolor () {
    if (Mini == 1) {
        if (playerColor == 1) {
            mySprite5 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 1 1 1 1 1 1 1 . . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                . . 1 1 1 1 f 1 1 1 f 1 1 1 1 . 
                . 1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 
                . 1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 
                . 1 1 1 1 1 f 1 1 1 f 1 1 1 1 1 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                . 1 1 1 f f 1 1 1 1 1 f f 1 1 1 
                . 1 1 1 f f f 1 1 1 f f f 1 1 1 
                . . 1 1 1 f f f f f f f 1 1 1 . 
                . . 1 1 1 1 f f f f f 1 1 1 1 . 
                . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . . . . 1 1 1 1 1 1 1 . . . . 
                `, SpriteKind.Player3)
        } else if (playerColor == 2) {
            mySprite5 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 2 2 2 2 2 2 2 . . . . 
                . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                . . 2 2 2 2 f 2 2 2 f 2 2 2 2 . 
                . 2 2 2 2 2 f 2 2 2 f 2 2 2 2 2 
                . 2 2 2 2 2 f 2 2 2 f 2 2 2 2 2 
                . 2 2 2 2 2 f 2 2 2 f 2 2 2 2 2 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                . 2 2 2 f f 2 2 2 2 2 f f 2 2 2 
                . 2 2 2 f f f 2 2 2 f f f 2 2 2 
                . . 2 2 2 f f f f f f f 2 2 2 . 
                . . 2 2 2 2 f f f f f 2 2 2 2 . 
                . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
                . . . . . 2 2 2 2 2 2 2 . . . . 
                `, SpriteKind.Player3)
        } else if (playerColor == 3) {
            mySprite5 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 3 3 3 3 3 3 3 . . . . 
                . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
                . . 3 3 3 3 f 3 3 3 f 3 3 3 3 . 
                . 3 3 3 3 3 f 3 3 3 f 3 3 3 3 3 
                . 3 3 3 3 3 f 3 3 3 f 3 3 3 3 3 
                . 3 3 3 3 3 f 3 3 3 f 3 3 3 3 3 
                . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                . 3 3 3 f f 3 3 3 3 3 f f 3 3 3 
                . 3 3 3 f f f 3 3 3 f f f 3 3 3 
                . . 3 3 3 f f f f f f f 3 3 3 . 
                . . 3 3 3 3 f f f f f 3 3 3 3 . 
                . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
                . . . . . 3 3 3 3 3 3 3 . . . . 
                `, SpriteKind.Player3)
        } else if (playerColor == 4) {
            mySprite5 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 4 4 4 4 4 4 4 . . . . 
                . . . 4 4 4 4 4 4 4 4 4 4 4 . . 
                . . 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
                . . 4 4 4 4 f 4 4 4 f 4 4 4 4 . 
                . 4 4 4 4 4 f 4 4 4 f 4 4 4 4 4 
                . 4 4 4 4 4 f 4 4 4 f 4 4 4 4 4 
                . 4 4 4 4 4 f 4 4 4 f 4 4 4 4 4 
                . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                . 4 4 4 f f 4 4 4 4 4 f f 4 4 4 
                . 4 4 4 f f f 4 4 4 f f f 4 4 4 
                . . 4 4 4 f f f f f f f 4 4 4 . 
                . . 4 4 4 4 f f f f f 4 4 4 4 . 
                . . . 4 4 4 4 4 4 4 4 4 4 4 . . 
                . . . . . 4 4 4 4 4 4 4 . . . . 
                `, SpriteKind.Player3)
        } else if (playerColor == 5) {
            mySprite5 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 5 5 5 5 5 5 5 . . . . 
                . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                . . 5 5 5 5 f 5 5 5 f 5 5 5 5 . 
                . 5 5 5 5 5 f 5 5 5 f 5 5 5 5 5 
                . 5 5 5 5 5 f 5 5 5 f 5 5 5 5 5 
                . 5 5 5 5 5 f 5 5 5 f 5 5 5 5 5 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . 5 5 5 f f 5 5 5 5 5 f f 5 5 5 
                . 5 5 5 f f f 5 5 5 f f f 5 5 5 
                . . 5 5 5 f f f f f f f 5 5 5 . 
                . . 5 5 5 5 f f f f f 5 5 5 5 . 
                . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . . . . 5 5 5 5 5 5 5 . . . . 
                `, SpriteKind.Player3)
        } else if (playerColor == 6) {
            mySprite5 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 6 6 6 6 6 6 6 . . . . 
                . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
                . . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
                . . 6 6 6 6 f 6 6 6 f 6 6 6 6 . 
                . 6 6 6 6 6 f 6 6 6 f 6 6 6 6 6 
                . 6 6 6 6 6 f 6 6 6 f 6 6 6 6 6 
                . 6 6 6 6 6 f 6 6 6 f 6 6 6 6 6 
                . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                . 6 6 6 f f 6 6 6 6 6 f f 6 6 6 
                . 6 6 6 f f f 6 6 6 f f f 6 6 6 
                . . 6 6 6 f f f f f f f 6 6 6 . 
                . . 6 6 6 6 f f f f f 6 6 6 6 . 
                . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
                . . . . . 6 6 6 6 6 6 6 . . . . 
                `, SpriteKind.Player3)
        } else if (playerColor == 7) {
            mySprite5 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 7 7 . . . . 
                . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . . 7 7 7 7 f 7 7 7 f 7 7 7 7 . 
                . 7 7 7 7 7 f 7 7 7 f 7 7 7 7 7 
                . 7 7 7 7 7 f 7 7 7 f 7 7 7 7 7 
                . 7 7 7 7 7 f 7 7 7 f 7 7 7 7 7 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                . 7 7 7 f f 7 7 7 7 7 f f 7 7 7 
                . 7 7 7 f f f 7 7 7 f f f 7 7 7 
                . . 7 7 7 f f f f f f f 7 7 7 . 
                . . 7 7 7 7 f f f f f 7 7 7 7 . 
                . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
                . . . . . 7 7 7 7 7 7 7 . . . . 
                `, SpriteKind.Player3)
        } else if (playerColor == 8) {
            mySprite5 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 8 8 8 8 8 8 8 . . . . 
                . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
                . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
                . . 8 8 8 8 f 8 8 8 f 8 8 8 8 . 
                . 8 8 8 8 8 f 8 8 8 f 8 8 8 8 8 
                . 8 8 8 8 8 f 8 8 8 f 8 8 8 8 8 
                . 8 8 8 8 8 f 8 8 8 f 8 8 8 8 8 
                . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                . 8 8 8 f f 8 8 8 8 8 f f 8 8 8 
                . 8 8 8 f f f 8 8 8 f f f 8 8 8 
                . . 8 8 8 f f f f f f f 8 8 8 . 
                . . 8 8 8 8 f f f f f 8 8 8 8 . 
                . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
                . . . . . 8 8 8 8 8 8 8 . . . . 
                `, SpriteKind.Player3)
        } else if (playerColor == 9) {
            mySprite5 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 9 9 9 9 9 9 9 . . . . 
                . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
                . . 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
                . . 9 9 9 9 f 9 9 9 f 9 9 9 9 . 
                . 9 9 9 9 9 f 9 9 9 f 9 9 9 9 9 
                . 9 9 9 9 9 f 9 9 9 f 9 9 9 9 9 
                . 9 9 9 9 9 f 9 9 9 f 9 9 9 9 9 
                . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
                . 9 9 9 f f 9 9 9 9 9 f f 9 9 9 
                . 9 9 9 f f f 9 9 9 f f f 9 9 9 
                . . 9 9 9 f f f f f f f 9 9 9 . 
                . . 9 9 9 9 f f f f f 9 9 9 9 . 
                . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
                . . . . . 9 9 9 9 9 9 9 . . . . 
                `, SpriteKind.Player3)
        } else if (playerColor == 10) {
            mySprite5 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . a a a a a a a . . . . 
                . . . a a a a a a a a a a a . . 
                . . a a a a a a a a a a a a a . 
                . . a a a a f a a a f a a a a . 
                . a a a a a f a a a f a a a a a 
                . a a a a a f a a a f a a a a a 
                . a a a a a f a a a f a a a a a 
                . a a a a a a a a a a a a a a a 
                . a a a a a a a a a a a a a a a 
                . a a a f f a a a a a f f a a a 
                . a a a f f f a a a f f f a a a 
                . . a a a f f f f f f f a a a . 
                . . a a a a f f f f f a a a a . 
                . . . a a a a a a a a a a a . . 
                . . . . . a a a a a a a . . . . 
                `, SpriteKind.Player3)
        } else if (playerColor == 11) {
            mySprite5 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . b b b b b b b . . . . 
                . . . b b b b b b b b b b b . . 
                . . b b b b b b b b b b b b b . 
                . . b b b b f b b b f b b b b . 
                . b b b b b f b b b f b b b b b 
                . b b b b b f b b b f b b b b b 
                . b b b b b f b b b f b b b b b 
                . b b b b b b b b b b b b b b b 
                . b b b b b b b b b b b b b b b 
                . b b b f f b b b b b f f b b b 
                . b b b f f f b b b f f f b b b 
                . . b b b f f f f f f f b b b . 
                . . b b b b f f f f f b b b b . 
                . . . b b b b b b b b b b b . . 
                . . . . . b b b b b b b . . . . 
                `, SpriteKind.Player3)
        } else if (playerColor == 12) {
            mySprite5 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . c c c c c c c . . . . 
                . . . c c c c c c c c c c c . . 
                . . c c c c c c c c c c c c c . 
                . . c c c c f c c c f c c c c . 
                . c c c c c f c c c f c c c c c 
                . c c c c c f c c c f c c c c c 
                . c c c c c f c c c f c c c c c 
                . c c c c c c c c c c c c c c c 
                . c c c c c c c c c c c c c c c 
                . c c c f f c c c c c f f c c c 
                . c c c f f f c c c f f f c c c 
                . . c c c f f f f f f f c c c . 
                . . c c c c f f f f f c c c c . 
                . . . c c c c c c c c c c c . . 
                . . . . . c c c c c c c . . . . 
                `, SpriteKind.Player3)
        } else if (playerColor == 13) {
            mySprite5 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . d d d d d d d . . . . 
                . . . d d d d d d d d d d d . . 
                . . d d d d d d d d d d d d d . 
                . . d d d d f d d d f d d d d . 
                . d d d d d f d d d f d d d d d 
                . d d d d d f d d d f d d d d d 
                . d d d d d f d d d f d d d d d 
                . d d d d d d d d d d d d d d d 
                . d d d d d d d d d d d d d d d 
                . d d d f f d d d d d f f d d d 
                . d d d f f f d d d f f f d d d 
                . . d d d f f f f f f f d d d . 
                . . d d d d f f f f f d d d d . 
                . . . d d d d d d d d d d d . . 
                . . . . . d d d d d d d . . . . 
                `, SpriteKind.Player3)
        } else if (playerColor == 14) {
            mySprite5 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . e e e e e e e . . . . 
                . . . e e e e e e e e e e e . . 
                . . e e e e e e e e e e e e e . 
                . . e e e e f e e e f e e e e . 
                . e e e e e f e e e f e e e e e 
                . e e e e e f e e e f e e e e e 
                . e e e e e f e e e f e e e e e 
                . e e e e e e e e e e e e e e e 
                . e e e e e e e e e e e e e e e 
                . e e e f f e e e e e f f e e e 
                . e e e f f f e e e f f f e e e 
                . . e e e f f f f f f f e e e . 
                . . e e e e f f f f f e e e e . 
                . . . e e e e e e e e e e e . . 
                . . . . . e e e e e e e . . . . 
                `, SpriteKind.Player3)
        } else if (playerColor == 15) {
            mySprite5 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f f . . . . 
                . . . f f f f f f f f f f f . . 
                . . f f f f f f f f f f f f f . 
                . . f f f f 1 f f f 1 f f f f . 
                . f f f f f 1 f f f 1 f f f f f 
                . f f f f f 1 f f f 1 f f f f f 
                . f f f f f 1 f f f 1 f f f f f 
                . f f f f f f f f f f f f f f f 
                . f f f f f f f f f f f f f f f 
                . f f f 1 1 f f f f f 1 1 f f f 
                . f f f 1 1 1 f f f 1 1 1 f f f 
                . . f f f 1 1 1 1 1 1 1 f f f . 
                . . f f f f 1 1 1 1 1 f f f f . 
                . . . f f f f f f f f f f f . . 
                . . . . . f f f f f f f . . . . 
                `, SpriteKind.Player3)
        } else {
            mySprite5 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 5 5 5 5 5 5 5 . . . . 
                . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                . . 5 5 5 5 f 5 5 5 f 5 5 5 5 . 
                . 5 5 5 5 5 f 5 5 5 f 5 5 5 5 5 
                . 5 5 5 5 5 f 5 5 5 f 5 5 5 5 5 
                . 5 5 5 5 5 f 5 5 5 f 5 5 5 5 5 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . 5 5 5 f f 5 5 5 5 5 f f 5 5 5 
                . 5 5 5 f f f 5 5 5 f f f 5 5 5 
                . . 5 5 5 f f f f f f f 5 5 5 . 
                . . 5 5 5 5 f f f f f 5 5 5 5 . 
                . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . . . . 5 5 5 5 5 5 5 . . . . 
                `, SpriteKind.Player3)
        }
    } else {
        if (playerColor == 1) {
            mySprite5 = sprites.create(img`
                . 1 1 1 1 1 1 . 
                1 1 1 1 1 1 1 1 
                1 1 f 1 1 f 1 1 
                1 1 f 1 1 f 1 1 
                1 1 1 1 1 1 1 1 
                1 1 f f f f 1 1 
                1 1 1 1 1 1 1 1 
                . 1 1 1 1 1 1 . 
                `, SpriteKind.Player3)
        } else if (playerColor == 2) {
            mySprite5 = sprites.create(img`
                . 2 2 2 2 2 2 . 
                2 2 2 2 2 2 2 2 
                2 2 f 2 2 f 2 2 
                2 2 f 2 2 f 2 2 
                2 2 2 2 2 2 2 2 
                2 2 f f f f 2 2 
                2 2 2 2 2 2 2 2 
                . 2 2 2 2 2 2 . 
                `, SpriteKind.Player3)
        } else if (playerColor == 3) {
            mySprite5 = sprites.create(img`
                . 3 3 3 3 3 3 . 
                3 3 3 3 3 3 3 3 
                3 3 f 3 3 f 3 3 
                3 3 f 3 3 f 3 3 
                3 3 3 3 3 3 3 3 
                3 3 f f f f 3 3 
                3 3 3 3 3 3 3 3 
                . 3 3 3 3 3 3 . 
                `, SpriteKind.Player3)
        } else if (playerColor == 4) {
            mySprite5 = sprites.create(img`
                . 4 4 4 4 4 4 . 
                4 4 4 4 4 4 4 4 
                4 4 f 4 4 f 4 4 
                4 4 f 4 4 f 4 4 
                4 4 4 4 4 4 4 4 
                4 4 f f f f 4 4 
                4 4 4 4 4 4 4 4 
                . 4 4 4 4 4 4 . 
                `, SpriteKind.Player3)
        } else if (playerColor == 5) {
            mySprite5 = sprites.create(img`
                . 5 5 5 5 5 5 . 
                5 5 5 5 5 5 5 5 
                5 5 f 5 5 f 5 5 
                5 5 f 5 5 f 5 5 
                5 5 5 5 5 5 5 5 
                5 5 f f f f 5 5 
                5 5 5 5 5 5 5 5 
                . 5 5 5 5 5 5 . 
                `, SpriteKind.Player3)
        } else if (playerColor == 6) {
            mySprite5 = sprites.create(img`
                . 6 6 6 6 6 6 . 
                6 6 6 6 6 6 6 6 
                6 6 f 6 6 f 6 6 
                6 6 f 6 6 f 6 6 
                6 6 6 6 6 6 6 6 
                6 6 f f f f 6 6 
                6 6 6 6 6 6 6 6 
                . 6 6 6 6 6 6 . 
                `, SpriteKind.Player3)
        } else if (playerColor == 7) {
            mySprite5 = sprites.create(img`
                . 7 7 7 7 7 7 . 
                7 7 7 7 7 7 7 7 
                7 7 f 7 7 f 7 7 
                7 7 f 7 7 f 7 7 
                7 7 7 7 7 7 7 7 
                7 7 f f f f 7 7 
                7 7 7 7 7 7 7 7 
                . 7 7 7 7 7 7 . 
                `, SpriteKind.Player3)
        } else if (playerColor == 8) {
            mySprite5 = sprites.create(img`
                . 8 8 8 8 8 8 . 
                8 8 8 8 8 8 8 8 
                8 8 f 8 8 f 8 8 
                8 8 f 8 8 f 8 8 
                8 8 8 8 8 8 8 8 
                8 8 f f f f 8 8 
                8 8 8 8 8 8 8 8 
                . 8 8 8 8 8 8 . 
                `, SpriteKind.Player3)
        } else if (playerColor == 9) {
            mySprite5 = sprites.create(img`
                . 9 9 9 9 9 9 . 
                9 9 9 9 9 9 9 9 
                9 9 f 9 9 f 9 9 
                9 9 f 9 9 f 9 9 
                9 9 9 9 9 9 9 9 
                9 9 f f f f 9 9 
                9 9 9 9 9 9 9 9 
                . 9 9 9 9 9 9 . 
                `, SpriteKind.Player3)
        } else if (playerColor == 10) {
            mySprite5 = sprites.create(img`
                . a a a a a a . 
                a a a a a a a a 
                a a f a a f a a 
                a a f a a f a a 
                a a a a a a a a 
                a a f f f f a a 
                a a a a a a a a 
                . a a a a a a . 
                `, SpriteKind.Player3)
        } else if (playerColor == 11) {
            mySprite5 = sprites.create(img`
                . b b b b b b . 
                b b b b b b b b 
                b b f b b f b b 
                b b f b b f b b 
                b b b b b b b b 
                b b f f f f b b 
                b b b b b b b b 
                . b b b b b b . 
                `, SpriteKind.Player3)
        } else if (playerColor == 12) {
            mySprite5 = sprites.create(img`
                . c c c c c c . 
                c c c c c c c c 
                c c f c c f c c 
                c c f c c f c c 
                c c c c c c c c 
                c c f f f f c c 
                c c c c c c c c 
                . c c c c c c . 
                `, SpriteKind.Player3)
        } else if (playerColor == 13) {
            mySprite5 = sprites.create(img`
                . d d d d d d . 
                d d d d d d d d 
                d d f d d f d d 
                d d f d d f d d 
                d d d d d d d d 
                d d f f f f d d 
                d d d d d d d d 
                . d d d d d d . 
                `, SpriteKind.Player3)
        } else if (playerColor == 14) {
            mySprite5 = sprites.create(img`
                . e e e e e e . 
                e e e e e e e e 
                e e f e e f e e 
                e e f e e f e e 
                e e e e e e e e 
                e e f f f f e e 
                e e e e e e e e 
                . e e e e e e . 
                `, SpriteKind.Player3)
        } else if (playerColor == 15) {
            mySprite5 = sprites.create(img`
                . f f f f f f . 
                f f f f f f f f 
                f f 1 f f 1 f f 
                f f 1 f f 1 f f 
                f f f f f f f f 
                f f 1 1 1 1 f f 
                f f f f f f f f 
                . f f f f f f . 
                `, SpriteKind.Player3)
        } else {
            mySprite5 = sprites.create(img`
                . 5 5 5 5 5 5 . 
                5 5 5 5 5 5 5 5 
                5 5 f 5 5 f 5 5 
                5 5 f 5 5 f 5 5 
                5 5 5 5 5 5 5 5 
                5 5 f f f f 5 5 
                5 5 5 5 5 5 5 5 
                . 5 5 5 5 5 5 . 
                `, SpriteKind.Player3)
        }
    }
}
function classic () {
    scene.setBackgroundImage(img`
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    Sp = true
    info.setScore(0)
    mySprite5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 f 5 5 5 f 5 5 5 5 . 
        . 5 5 5 5 5 f 5 5 5 f 5 5 5 5 5 
        . 5 5 5 5 5 f 5 5 5 f 5 5 5 5 5 
        . 5 5 5 5 5 f 5 5 5 f 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 f f 5 5 5 5 5 f f 5 5 5 
        . 5 5 5 f f f 5 5 5 f f f 5 5 5 
        . . 5 5 5 f f f f f f f 5 5 5 . 
        . . 5 5 5 5 f f f f f 5 5 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        `, SpriteKind.Player1)
    controller.moveSprite(mySprite5)
    mySprite5.setStayInScreen(true)
    Pizza = sprites.create(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Pizza.setPosition(randint(15, 155), randint(15, 115))
}
function time () {
    Sp = true
    t = true
    info.setScore(0)
    scene.setBackgroundImage(img`
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    mySprite5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 f 5 5 5 f 5 5 5 5 . 
        . 5 5 5 5 5 f 5 5 5 f 5 5 5 5 5 
        . 5 5 5 5 5 f 5 5 5 f 5 5 5 5 5 
        . 5 5 5 5 5 f 5 5 5 f 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 f f 5 5 5 5 5 f f 5 5 5 
        . 5 5 5 f f f 5 5 5 f f f 5 5 5 
        . . 5 5 5 f f f f f f f 5 5 5 . 
        . . 5 5 5 5 f f f f f 5 5 5 5 . 
        . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        `, SpriteKind.Player2)
    controller.moveSprite(mySprite5)
    mySprite5.setStayInScreen(true)
    Pizza = sprites.create(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Pizza.setPosition(randint(15, 155), randint(15, 115))
    info.startCountdown(40)
}
function singleplayer () {
    story.showPlayerChoices("Classic Mode", "Time Mode", "Custom", "Back")
    if (story.checkLastAnswer("Classic Mode")) {
        color.startFade(color.originalPalette, color.Black, 500)
        scene.setBackgroundImage(img`
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777755577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777755777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777775777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777755555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777775577777757755777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777757777777757775577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777577777777757777577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777775777777777755777577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777757777777777777555777557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777757777777777777777775555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777577777777777777777757775777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777577777777777777777557775777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777775777777777777777777577757777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777775777777777777777775777757777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777775777777777777777775777577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777755777777777777777757777577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777777777777757777577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777777777777757775777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777777777777577775777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777777777777577755777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777777777777577757777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777777777777577557777777557777777777557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777777777775777577777775557777777777557777777777555777777775777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777777777775775577777757755777777777557777777777575777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777755777777777777775775777777757755777777777557777777777575777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777775777777777777775755777777577757777777777575777777777557777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777577777777777775757777775777557777777775775577777777557777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777577777777777557777777777755577777757775557777777557777577777775757777777577777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777757777777777775577777775557777777757755577777775777777757775557757777775577777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777775777777777777755555557757777777755557577775557777777757557777775777775577775555577777777777777777777777777777777777777777777777777777777777777777
            7777777777777777557777777777777777777755777775557777555557777777775555777777775577775777755777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777775577777777777777777775555557777777777777777777555577777777777577755777557777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777755777777777777777777777777777777777777777755557777777777777575557777577777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777577777777777777777777777777777777777777755577777777777555555757777577777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777755777777777777777777777777777777777777777777777775555755577757777577777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777577777777777777777777777777777777777777777777755775557777757777555777777757777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777755777777777777777777777777777777777777777777755555777777755555775555555557777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777775577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777755577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777755777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777755577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777755577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777755557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777775555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775557
            7777777777777777777777777777777777777777777777777777777777777777755555555777777777777777777777777777777777777777777777777777777777777777777777777777775555557777
            7777777777777777777777777777777777777777777777777777777777777777777777777555555555557777777777777777777777777777777777777777777777777777777777555555557777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555557777777777777777777777777777777777555555555555777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555555555555555555555555555777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
        timer.after(500, function () {
            classic()
            Music = true
        })
        color.startFade(color.Black, color.originalPalette, 500)
    } else if (story.checkLastAnswer("Time Mode")) {
        color.startFade(color.originalPalette, color.Black, 500)
        scene.setBackgroundImage(img`
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777755777777755577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777577777777777755777777777777777777757777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777577777777777777555777777777777777557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777775777777777777777775577777777777755777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777777777777777755555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777777777757777777777577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777777777757777777777577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777777775577777777777577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777777775777777777775777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777775777777777757777777777775777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777577777777577777777777775777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777577777775777777777777775777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777755775557777777777777775777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777557777777777777777775777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777775777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777775777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777757777777777775777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777555555577777777777577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777775777777557777777777577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777757777777775777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777757777777775777777777775777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777757777777757777777777775777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777757777777577777777777755777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777577777777577777777777757777777777555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777775777777775777777777755557777777775775777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777777777757777777777577577777777755775777775557777775777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777777777577777777775777577777777577775777757757777555777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777757777777777775777777775557775777777775577775777757757775775777777777777775555777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777775777777777757777777777777775777777755777775777577757757775777777777777755775777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777775777777777577777777777777757777777577777775775777757577775777777777777577775777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777775777777775777777777777777757777775777777775757777575777775777777777775777755777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777577777757777777777777777757777775777777757577777557777757777777777757777577777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777557775577777777777777777577777557777777755777777577777757777777777577775777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777755557777777777777777777577775577777777755777777577777757777777777577755777777777777777777777777777777777777777557777777777777777777777
            7777777777777777777777777777777777777777777777777555557777777777557777775777777757777777775755577777777777777777777777777777777777775555777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777557777757777777755777775555577777777777777777777777777777777777775557777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777775577777757777777777555557757777777777777777777777777777777775555557777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777775777777757777777777777777577777777777777777777777777775555557777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777577777777777777777777775555557777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777577777777777777755555557777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777555555555555555577777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777775777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777775555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777555557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777775555557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777775555557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777775555557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555555555555555777777
            7777777777777777777777777777777777777777777775555555555777777777777777777777777777777777777777777777777777555555555555555555555555555555557777777777777777777777
            7777777777777777777777777777777777777777777777777777777555555555555555555555555555555555555555555555555555777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
        timer.after(500, function () {
            time()
            Music = true
        })
        color.startFade(color.Black, color.originalPalette, 500)
    } else if (story.checkLastAnswer("Back")) {
        insanity()
    } else if (story.checkLastAnswer("Custom")) {
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        color.startFade(color.originalPalette, color.Black, 500)
        timer.after(500, function () {
            cus()
        })
        color.startFade(color.Black, color.originalPalette, 500)
    }
}
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Player, function (sprite, otherSprite) {
    if (boss == false) {
        info.changeScoreBy(1)
        Pizza.setPosition(randint(15, 155), randint(15, 115))
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
})
function bossfight () {
    blockSettings.writeNumber("act", 4)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . a a a a a a a . . . . 
        . . . a a a a a a a a a a a . . 
        . . a a a a a a a a a a a a a . 
        . . a a a a e a a a e a a a a . 
        . a a a a a e a a a e a a a a a 
        . a a a a a e a a a e a a a a a 
        . a a a a a e a a a e a a a a a 
        . a a a a a a a a a a a a a a a 
        . a a a a a a a a a a a a a a a 
        . a a a e e a a a a a e e a a a 
        . a a a e e e a a a e e e a a a 
        . . a a a e e e e e e e a a a . 
        . . a a a a e e e e e a a a a . 
        . . . a a a a a a a a a a a . . 
        . . . . . a a a a a a a . . . . 
        `, SpriteKind.Player)
    shootboss = 0
    controller.moveSprite(mySprite, 100, 100)
    scene.setBackgroundColor(15)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55fff55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55fff55ff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55fff55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff5555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff55ffffffff55f55fff55ffffffffffffffffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffff55ff55fff555f5555555ffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff5555555ff55555555ff55555ffffffffffffffffffffffff55555ffffffffff5555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff5555555fff555555ffff555fffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555ffffffffffff5555fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ff555fffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff44555ffffffffffffffffffffff55d4ffffffffffffffffffffffffffffffff5555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffbe4dddffffffffffffffffffffff444d5544fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffbbbb4ddffffffffffffffffffffff15dddd55d54ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff5f5ffff5ffffffffffffffffffd2eee3d4445ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff5555f555ffffffffffffffff2e222e35114fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555ff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222e5551ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55f55555ff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff222232e5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55f55555ff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff522332555ddfffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff55f55555ff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff85222555dddfffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff6555555555fffffffffffffffffffffffff55ffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff65dd5555555fffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555ffff
        ffffffffffffffffffffffff555555555555555ffffffffff22ffffd552fff3555ffffffffffffffffffff5ffff555ffffffffffffffffffffffffffffffffffffffffffb52ffffffffff55555ffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffbde2ffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffff55ffffffffff55fff55555fffffffffffffffff55fffffffffbe2ffffffffffffffffffff
        ffffffffffffffffffffffff555555555555555ffffffffff32fffffffffffffffffffffffffffffffffff555ff5555555555fffff55ffffffffffffffffffffffff4444fb42ffffffffffffffffffff
        ffffffffffffffffffffffff2558fffffffffffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444ddd4ff43ffffffffffffffffffff
        ffffffffffffffffffffffff32ddfffffffffffffffffffff55ffffffffffffffffffffffffffffffffffff55ffff5fff5555555ffffffffffffffffffffff55555555555555ffffffffffffffffffff
        ffffffffffffffffffffffff32ed55555555555ffffffffffffffffffffffffffffffffffffffffffffffff55ffff5fff5555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffff22e5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ffff5fff55fffffffffffffffffffffffffffffffffffffffffffffffffff55555fffff
        ffffffffffffffffffffffff2f35ffffffffffff4bbffffff55ffffffffffffffffffffffffffffffffffff55ffff5fff55ffffffffffffff........................................555ffff
        ffffffffffffffffffffffffffffffffffffffff44bbfffffffffffff55555555555555fffffffff5555fffffffffffffffffffffffffffff........................................ff55fff
        ffffffffffffffffffffffffffffffffffffffff444bffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffff........................................ff55fff
        ffffffffffffffffffffffffffffffffffffffff4444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................ff55fff
        ffffffffffffffffffffffffffffffffffffffff44444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................ff55fff
        ffffffffffffffffffffffffffffffffffffffffb44444fbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................ff55fff
        fffffffffffffffffffffffffffffffffffffffffb44b4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................ff55fff
        ffffffffffffffffffffffffffffffffffffffffffbbb4bfffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffff5ffff........................................f555fff
        ffffffffffffffffffffffffffffffffffffffffb4ebbbbfffffffffffffffffffffffffffffffff55ffffffffffffffff5fffffffff5ffff........................................555ffff
        ffffffff6fffffffffffffffffffffffffff5ff555f5ffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffff5ffff........................................fffffff
        ffffffffdfffffffffffffffffffffffffff5ffff5f5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffff........................................fffffff
        ffffffff5fffffffffffffffffffffffffff5f5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffff........................................fffffff
        ffffffff5fffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffff........................................fffffff
        ffffffff5fffffffffffffffffffffffffffffffff55ff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffff........................................fffffff
        ffffffffffffffffffffffffffffffffffffffffff55ff5ffffffffff55ff5555555555fffffffffffffffffffffffffffffffffffff5ffff........................................fffffff
        ffffffffffffffffffffffffffffffffffffffffff55ff5ffffffffff55ff5555555555fffffffffffffffffffffffffffffffffffff5ffff........................................fffffff
        ffffffffffffffffffffffffffffffffffffffffff55ff5ffffffffffffff555ffffffffffffffffffffffffffffffffff5fffff555555555........................................fffffff
        ffffffffffffffffffffffffffffffffffffffffff55ff5fffffffffffffff55ffffffffffffffffffffffffffffffffff5fffff555555555........................................fffffff
        ffff5555dffff554fffffbffffffff55ffffffffffffff5fffffffffffffffff55fffffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        ffff55d55ffff55dbffffb555dd44455fffffffffff4ffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        ffffdd665ffffd55bfffbd32d555dd55fffffffff44dffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        ffff56ff6ffff555dbffb52225555555fffffff4fdd5fffffffffffffffffffffff55ffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffff85fffffffffffff3235f532ffffffffffdd53fffffffffffff55ffffffffff55555555ffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffffd5fffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffff55fffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffff55ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffff55fffffffffffffffffffffffffffffffffffff5ff55fffffff55ff5ff55ffffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffffffffffffffffffffffffffffffffffffff555ff5ff55555555f5555fff55ffffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        ffffffffffffffffffffffffffffffffffffffff5555ff5fff555555ff55fffff55ffffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffffffffffffffffffffffffffffffffffff55777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffffffffffffffffffffffffffffffffffff55777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffffffffffffffffffffffffffffffffffff55777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffffffffffffffffffffffffffffffffffff55777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffffffffffffffffffffffffffffff555fffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44fffff4ff........................................fffffff
        fffffffffffffffffffffffffff41554fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................fffffff
        fffffffffffffffffffffffffff41d45ffffffffffffffffffffffffffffff55fffffffffffffffffffffffffffffffffffffffffffff5555........................................fffffff
        ffff5555fffffffffff55555fff4511dffffffffffff55ffffffffffffffff5555ffff55ff55fffffffffff5ffffffff55555555555555555........................................5555fff
        fffffffffffffffffffffffffffb5551ffffffffffff55ffffffffffffffff55555fff55ff55fff55555fffffffffffffffffffffffffffff........................................fffffff
        fffffffffffffffffffffffffffbd5ddfffffffffffff5ffffffffffffffff55555fff55ff55fffffffffffffffffffffffffffffffffffff........................................fffffff
        fff55555fffffffffff55555ffffb55dfffffffffffff55ff55fffffff55fffff55fff55ff55fffffffffff5ffffffff5555555555555ff55........................................5555fff
        ffffffffffffffffffffffffffffbdd5ffffffffffff555ff5555555ff5555fff5555555ff5555555555fffffffffffffffffffffffffff55........................................fffffff
        fffffffffffffffffffffffffffff4d5ffffffffffff555fff5555555f55fffff5555555ff55555ffffffffffffffffffffffffffffffffff........................................fffffff
        fff55555fffffffffff55555fffffb45fffffffffffff55ffffffff55f55fffff55fff55ff55fffffffffff5ffffffff555555555555fffff........................................5555fff
        ffffffffffffffffffffffffffffff48ffffffffffffffffffffffffffff555ffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffff55ffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffff5555ffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffff55555fffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff55ff5f5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffff55555fffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ff5f5f5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ff5ff5fffffffffffffffffffffffffffff44fffffffffffffffffffffffffffffffffff555ffffffffffffffff5ff555ffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ff5f5f5fffffffffffffffffffffffffff4dffffffffffffffffffffffffffffffffffff555ffffffffffffffff55ff55ffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ff5f5f5fff54b44bffffffff3fff25fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff554e44bfffffff555555fffffffffffffffffffffffffffffffffffffffffffffffffffff44bb4d5fffffffffffff
        ffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffff5754f44fffffff555566fffffffffffffffffffffffffffffffffffffffffffffffffffff3444b4dfffffffffffff
        ffffffffffffffff4d4fffffffffffffffff55555ffffffffffffffffffffffffff5555ffffffffffd116fffffffffffffffffffffffff55555bfffffff4d5555fffffffffff4333444dffffffffffff
        fffffffffffffff4dddffffffffffffffffffff55ffffffffffffffffffffffffff32355fffffffff44d1885ffffffffffffffffffffff5557dbfffffffb455d4fffffffffff44333344ffffffffffff
        ffffffffffffffdd444ffffffffffffffffffff55ffffffffffffffffffffffffff22255dffffffff5d41151ffffffffffffffffffffff3235bfffffffffbd4ebfffffffffbb44333334ffffffffffff
        fffffffffffff4d4451ffffffffffffffffffff55ffffffffffffffffffffffffffff555554fffffff55d1d4ffffffffffffffffffffff222dbffffffffff4eb4fffffffffffb4444433ffffffffffff
        ffffffffffff4d45515fffffffffffffff5555555ffffffffffffffffffffffffffffffffffffffffff4dd55ffffffffffffffffffffff323bffffffffffffb433344b4bffffffffffffffffffffffff
        fffffffffffffd4dd55fffffffffffffff5555555fffffffffffffffffffffffffffffffffffffffffffdff4ffffffffffffffffffffff55dbffffffffffff44334bb4bbffffffffffffffffffffffff
        ffffffffffffffffff3fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2f222ffffffffffb44bbb4bfffffffffffffb344bb4bbfffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555ffffff22222ffffffffffb444bbfffffffffffffffbbbb4bbffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22232ffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffd5555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff522332555ffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffff4fffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555fffff55222dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555d4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55554fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffb4bb555fffff5555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffff5fffffffffffffffffffffffffffffffffffffffffffff55fff55ffff55555fffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffbbbbffbffffffffffffffb444bffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    scene.setTileMap(img`
        f f f f f f f f f f f f f f f f f f f f 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        . . . . . . . . . f f 1 1 1 1 1 1 1 1 1 
        `, TileScale.Eight)
    scene.setTile(15, img`
        f 1 d d d d d f 
        f 1 d d d d d f 
        f 1 d d d d d f 
        f 1 1 1 1 1 1 f 
        f d d d d 1 d f 
        f d d d d 1 d f 
        f d d d d 1 d f 
        f 1 1 1 1 1 1 f 
        `, true)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 6))
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f f . 
        . . f f f f 1 f f f 1 f f f f . 
        . f f f f f 1 f f f 1 f f f f f 
        . f f f f f 1 f f f 1 f f f f f 
        . f f f f f 1 f f f 1 f f f f f 
        . f f f f f f f f f f f f f f f 
        . f f f f f f f f f f f f f f f 
        . f f f 1 1 f f f f f 1 1 f f f 
        . f f f 1 1 1 f f f 1 1 1 f f f 
        . . f f f 1 1 1 1 1 1 1 f f f . 
        . . f f f f 1 1 1 1 1 f f f f . 
        . . . f f f f f f f f f f f . . 
        . . . . . f f f f f f f . . . . 
        `, SpriteKind.FoodLmao)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(17, 8))
    fight()
    boss = true
    info.startCountdown(60)
    timer.after(30000, function () {
        superboss = true
    })
}
function game2m2 () {
    players = 2
    bot3 = 2
    scene.setBackgroundColor(0)
    scene.setTileMap(img`
        4 4 4 4 4 4 4 4 4 3 5 4 4 4 4 4 4 4 4 4 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        7 7 7 7 7 7 7 7 7 f c 6 6 6 6 6 6 6 6 6 
        `, TileScale.Eight)
    scene.setTile(4, img`
        c c c c c c c c 
        c c c c c c c c 
        c c c c c c c c 
        c c c c c c c c 
        c c c c c c c c 
        f f f f f f f f 
        f f f f f f f f 
        f f f f f f f f 
        `, true)
    scene.setTile(15, img`
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        f f f c c c c c c c c c c c c c 
        `, true)
    scene.setTile(3, img`
        c c c c c c c c 
        c c c c c c c c 
        c c c c c c c c 
        c c c c c c c c 
        c c c c c c c c 
        f f f c c c c c 
        f f f c c c c c 
        f f f c c c c c 
        `, true)
    scene.setTile(12, img`
        c c c c c f f f 
        c c c c c f f f 
        c c c c c f f f 
        c c c c c f f f 
        c c c c c f f f 
        c c c c c f f f 
        c c c c c f f f 
        c c c c c f f f 
        `, true)
    scene.setTile(5, img`
        c c c c c c c c 
        c c c c c c c c 
        c c c c c c c c 
        c c c c c c c c 
        c c c c c c c c 
        c c c c c f f f 
        c c c c c f f f 
        c c c c c f f f 
        `, true)
    info.player1.setScore(0)
    info.player2.setScore(0)
    mySprite = sprites.create(img`
        . 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 
        2 2 f 2 2 f 2 2 
        2 2 f 2 2 f 2 2 
        2 2 2 2 2 2 2 2 
        2 2 f f f f 2 2 
        2 2 2 2 2 2 2 2 
        . 2 2 2 2 2 2 . 
        `, SpriteKind.Player)
    controller.player1.moveSprite(mySprite)
    mySprite2 = sprites.create(img`
        . 8 8 8 8 8 8 . 
        8 8 8 8 8 8 8 8 
        8 8 f 8 8 f 8 8 
        8 8 f 8 8 f 8 8 
        8 8 8 8 8 8 8 8 
        8 8 f f f f 8 8 
        8 8 8 8 8 8 8 8 
        . 8 8 8 8 8 8 . 
        `, SpriteKind.Player2)
    mySprite2.fx = 12
    mySprite2.fy = 2
    Pizza = sprites.create(img`
        . . . 4 4 b . . 
        . . b b b 4 b . 
        . . 5 5 5 4 4 b 
        . b 5 3 5 5 e e 
        . d 5 5 5 3 5 e 
        b 2 5 5 3 5 d e 
        d 2 5 5 d d 4 . 
        d d 4 . . . . . 
        `, SpriteKind.Food)
    Pizza2 = sprites.create(img`
        . . . 4 4 b . . 
        . . b b b 4 b . 
        . . 5 5 5 4 4 b 
        . b 5 3 5 5 e e 
        . d 5 5 5 3 5 e 
        b 2 5 5 3 5 d e 
        d 2 5 5 d d 4 . 
        d d 4 . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(randint(0, 8), randint(1, 14)))
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(randint(11, 19), randint(1, 14)))
    bot2 = true
    timer.after(1000, function () {
        Pizza.sayText("3!")
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        timer.after(1000, function () {
            Pizza.sayText("2!")
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
            timer.after(1000, function () {
                Pizza.sayText("3!")
                music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
                timer.after(1000, function () {
                    Pizza.sayText("Go!!!!!!", 500, false)
                    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
                    timer.after(500, function () {
                        mySprite2.follow(Pizza2, 100)
                        tiles.placeOnTile(Pizza, tiles.getTileLocation(randint(0, 8), randint(1, 14)))
                        tiles.placeOnTile(Pizza2, tiles.getTileLocation(randint(11, 19), randint(1, 14)))
                        info.startCountdown(40)
                        Game1 = false
                        timer.after(20000, function () {
                            if (blockSettings.readNumber("act") == 2) {
                                if (Math.percentChance(90)) {
                                    mySprite2.setImage(img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . f f f f f f f . . . . 
                                        . . . f f f f f f f f f f f . . 
                                        . . f f f f f f f f f f f f f . 
                                        . . f f f f 1 f f f 1 f f f f . 
                                        . f f f f f 1 f f f 1 f f f f f 
                                        . f f f f f 1 f f f 1 f f f f f 
                                        . f f f f f 1 f f f 1 f f f f f 
                                        . f f f f f f f f f f f f f f f 
                                        . f f f f f f f f f f f f f f f 
                                        . f f f 1 1 f f f f f 1 1 f f f 
                                        . f f f 1 1 1 f f f 1 1 1 f f f 
                                        . . f f f 1 1 1 1 1 1 1 f f f . 
                                        . . f f f f 1 1 1 1 1 f f f f . 
                                        . . . f f f f f f f f f f f . . 
                                        . . . . . f f f f f f f . . . . 
                                        `)
                                    timer.after(10, function () {
                                        mySprite2.setImage(img`
                                            . . . . . . . . . . . . . . . . 
                                            . . . . . f f f f f f f . . . . 
                                            . . . f f f f f f f f f f f . . 
                                            . . f f f f f f f f f f f f f . 
                                            . . f f f f 1 f f f 1 f f f f . 
                                            . f f f f f 1 f f f 1 f f f f f 
                                            . f f f f f 1 f f f 1 f f f f f 
                                            . f f f f f 1 f f f 1 f f f f f 
                                            . f f f f f 2 f f f 2 f f f f f 
                                            . f f f f f 2 f f f 2 f f f f f 
                                            . f f f 1 1 2 f f f 2 1 1 f f f 
                                            . f f f 1 1 2 f f f 2 1 1 f f f 
                                            . . f f f 1 2 1 1 1 2 1 f f f . 
                                            . . f f f f 2 1 1 1 2 f f f f . 
                                            . . . f f f 2 f f f 2 f f f . . 
                                            . . . . . f 2 f f f 2 f . . . . 
                                            `)
                                        timer.after(10, function () {
                                            mySprite2.setImage(img`
                                                . 8 8 8 8 8 8 . 
                                                8 8 8 8 8 8 8 8 
                                                8 8 f 8 8 f 8 8 
                                                8 8 f 8 8 f 8 8 
                                                8 8 8 8 8 8 8 8 
                                                8 8 f f f f 8 8 
                                                8 8 8 8 8 8 8 8 
                                                . 8 8 8 8 8 8 . 
                                                `)
                                        })
                                    })
                                } else {
                                    music.play(music.createSoundEffect(WaveShape.Noise, 5000, 5000, 255, 255, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                                    mySprite2.setImage(img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . f f f f f f f . . . . 
                                        . . . f f f f f f f f f f f . . 
                                        . . f f f f f f f f f f f f f . 
                                        . . f f f f 1 f f f 1 f f f f . 
                                        . f f f f f 1 f f f 1 f f f f f 
                                        . f f f f f 1 f f f 1 f f f f f 
                                        . f f f f f 1 f f f 1 f f f f f 
                                        . f f f f f f f f f f f f f f f 
                                        . f f f f f f f f f f f f f f f 
                                        . f f f 1 1 f f f f f 1 1 f f f 
                                        . f f f 1 1 1 f f f 1 1 1 f f f 
                                        . . f f f 1 1 1 1 1 1 1 f f f . 
                                        . . f f f f 1 1 1 1 1 f f f f . 
                                        . . . f f f f f f f f f f f . . 
                                        . . . . . f f f f f f f . . . . 
                                        `)
                                    timer.after(10, function () {
                                        mySprite2.setImage(img`
                                            . . . . . . . . . . . . . . . . 
                                            . . . . . f f f f f f f . . . . 
                                            . . . f f f f f f f f f f f . . 
                                            . . f f f f f f f f f f f f f . 
                                            . . f f f f 1 f f f 1 f f f f . 
                                            . f f f f f 1 f f f 1 f f f f f 
                                            . f f f f f 1 f f f 1 f f f f f 
                                            . f f f f f 1 f f f 1 f f f f f 
                                            . f f f f f 2 f f f 2 f f f f f 
                                            . f f f f f 2 f f f 2 f f f f f 
                                            . f f f 1 1 2 f f f 2 1 1 f f f 
                                            . f f f 1 1 2 f f f 2 1 1 f f f 
                                            . . f f f 1 2 1 1 1 2 1 f f f . 
                                            . . f f f f 2 1 1 1 2 f f f f . 
                                            . . . f f f 2 f f f 2 f f f . . 
                                            . . . . . f 2 f f f 2 f . . . . 
                                            `)
                                        timer.after(10, function () {
                                            mySprite2.setImage(img`
                                                . 8 8 8 8 8 8 . 
                                                8 8 8 8 8 8 8 8 
                                                8 8 f 8 8 f 8 8 
                                                8 8 f 8 8 f 8 8 
                                                8 8 8 8 8 8 8 8 
                                                8 8 f f f f 8 8 
                                                8 8 8 8 8 8 8 8 
                                                . 8 8 8 8 8 8 . 
                                                `)
                                        })
                                    })
                                }
                            }
                        })
                    })
                })
            })
        })
    })
}
function gamelmao () {
    scene.setBackgroundImage(img`
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbb7777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777b444b77777777777777beebbbb7777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777b444bb7777777777777eebbbb4bb777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777b44bbb4b777777777777eb344bb4bb77777777777777777777
        7777777775555577775577755777755577775555557775555555577777555555555775577775777555555577777777777777777777777b44b4555db77777777777e44334bb4bb7777777777777777777
        777777775555555777557775577755555775555555577555555557777755555555577557777577755555557777777777777777777777b44e455323b77777777777eb433344b4be777777777777777777
        77777775557775557755777557755555557555777557755777777777777777577777755777757775577777777777777777777777777e44e4575222db77777777774eb43344444be77777777777777777
        77777775577777777755777557755777557557777777755777777777777777577777755777757775577777777777777777777777777eeee55553235b777777777bd4eb43333344bb7777777777777777
        77777775577777777755777557755777557557777777755777777777777777577777755777757775577777777777777777777777777eee553235557db7777777b455d4443333444bb777777777777777
        77777775577777777755555557755555557555555577755555777777777777577777755555557775555577777777777777777777777eed5522255555b77777774d5555d444333444bb77777777777777
        777777755777777777555555577555555577555555577555557777777777775777777555555577755555777777777777777777777774edd5323575323b777774555555dd4b4443444be7777777777777
        7777777557777777775577755775577755777777755775577777777777777757777775577775777557777777777777777777777777774edd555555222b7777bd5555d555d4bb444444ee777777777777
        7777777557777755775577755775577755777777755775577777777777777757777775577775777557777777777777777777777777777744ddd555d23db777b55ddd665555bb4b44444ee77777777777
        77777777555555577755777557755777557555555557755555555777777777577777755777757775555555777777777777777777777777774444dd5555b77bd5555677655554ebb44444eb7777777777
        77777777755555777755777557755777557755555577755555555777777777577777755777757775555555777777777777777777777777777777444ddd47743222558855555d4eeb44b4ee7777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777744447b422332ddd555222d4eebbb4be7777777777
        7777777777777777777777777777777777775555555577777555555557777555555555577555555555577777557777777777777777777777777777777777be22232ed55522332db4ebbbbe7777777777
        777777777777777777777777777777777777555777775577777775777777777777777557777777777557775555577777777777777777777777777777777bde22222e555e22232edd4bbbbe7777777777
        777777777777777777777777777777777777555777775577777775777777777777775557777777777557755577557777777777777777777777777777777b52e222e3555e22222eddd4ebee7777777777
        77777777777777777777777777777777777755577777557777777577777777777775577777777775577775577755777777777777777777777777777777bd552eee355552e222e355544eee7777777777
        77777777777777777777777777777777777755577777557777777577777777777755777777777755577775577755777777777777777777777777777777665dd5555555552eee355dd4deee7777777777
        77777777775555555777777777777777777755555555577777777577777777775557777777775557777775555555777777777777777777777777777776776555555555555555551554d4ee7777777777
        77777777555555555557777777777777777755555555777777777577777777755577777777775577777775577755777777777777777777777777777774885222555dddd6655551544d4eee7777777777
        777777755555555555557777777777777777555777777777777775777777775577777777775577777777755777557777777777777777777777777777b45522332555dd677611d444ddeee77777777777
        7777777555555555555577777777777777775557777777777777757777777557777777777555777777777557775577777777777777777777777777774d5222232e55555881d44ddd4eee777777777777
        77777755555f55f55555577777777777777755577777777775555555577775555555555775555555555775577755777777777777777777777777777bdd5e22222e555115114d54d4ee77777777777777
        77777755555f55f55555577777777777777755577777777775555555577775555555555775555555555775577755777777777777777777777777777b55d2e222e351144d1d55eeee7777777777777777
        77777755555f55f5555557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bd5ddd2eee3d444555dd4e77777777777777777777
        7777775555555555555557777777777777777777777777777777777777777777777777777777777777777775557755557577757757575755577777b555115dddd55d544eede777777777777777777777
        77777755ff555555ff55577777777777777777777777777777777777777777777777777777777777777777757757577775777577575757577777774511d444d5544ee7774de777777777777777777777
        777777555ff5555ff5555777777777777777777777777777777777777777777777777777777777777777777577575557757775775775775577777741d4555d4ee7777777744777777777777777777777
        77777755555ffff555555777777777777777777777777777777777777777777777777777777777777777777577575777757775775757575777777741554eede777777777777777777777777777777777
        777777755555555555557777777777777777777777777777777777777777777777777777777777777777777555775555755577557757575557777744ee7774e777777777777777777777777777777777
        7777777555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777755555555555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7775555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7775555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7775555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555557777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    story.showPlayerChoices("Play", "Settings")
    if (blockSettings.readNumber("act") == 2) {
        text_list = [
        "Hello.",
        "Nice game!",
        "You win?",
        "Game over.",
        "Game over!",
        "GAME OVER!",
        "GAME OVER.",
        "Will you come back?",
        "Game.",
        "GAME.",
        "I resonate inside you.",
        "Chase the pizzas! ",
        "Woo Hoo!",
        "WOO HOO!",
        "!!!!"
        ]
    } else {
        text_list = [
        "Game!",
        "Nice game!",
        "You win?",
        "Game over.",
        "Game over!",
        "GAME OVER!",
        "GAME OVER.",
        "Will you come back?",
        "Game.",
        "GAME.",
        "Something resonates inside you.",
        "Chase the pizzas! ",
        "Woo Hoo!",
        "WOO HOO!",
        "!!!!"
        ]
    }
    mug = 0
    Sp = false
    custommode = false
    Music = false
    Game1 = false
    bot2 = false
    if (story.checkLastAnswer("Play")) {
        insanity()
    } else {
        settings2()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (Game1 == true) {
        tiles.placeOnTile(Pizza, tiles.getTileLocation(randint(0, 6), randint(1, 6)))
    } else {
        tiles.placeOnTile(Pizza, tiles.getTileLocation(randint(0, 8), randint(1, 14)))
    }
    info.player1.changeScoreBy(1)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
function cus () {
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        .......................................5555.....................................................................................................................
        ......................................55..5.....................................................................................................................
        ......................................5.........................................................................................................................
        .....................................5..........................................................................................................................
        ...............................5555555..........................................................................................................................
        ..............................5.....5.55........................................................................................................................
        ............................55......5..5........................................................................................................................
        ............................5.......5..5........................................................................................................................
        ...........................5........5555........................................................................................................................
        ..........................5.....................................................................................................................................
        ..........................5.....................................................................................................................................
        ..........................5.....................................................................................................................................
        .........................5......................................................................................................................................
        .........................5......................................................................................................................................
        ........................5.......................................................................................................................................
        ........................5.......................................................................................................................................
        ........................5.......................................................................................................................................
        ........................5.......................................................................................................................................
        .......................5........................................................................................................................................
        .......................5........................................................................................................................................
        .......................5........................................................................................................................................
        .......................5.................55.....................................................................................................................
        .......................5.................55.....................................................................................................................
        .......................5.................55...............................55....................................................................................
        ........................5...............55..................5.............55....................................................................................
        .........5..............5...............5........5..........5.............5.....................................................................................
        ..........5.............5..............55.......55.........55............55.....................................................................................
        ...........5.............5..........555.5.......5..........55......55....55.....................................................................................
        ............55............5........5...5.......55........55..5......55...5......................................................................................
        ..............55..........5.....555....5......5.5.......5....55.......5555......................................................................................
        ................55.........555555......5.....5.5.......5......5.........5.55....................................................................................
        ..................55..................5.....5..5.....55........5.......55......555..............................................................................
        ....................555...............5...55...5....5..........5.....555.......5..55............................................................................
        .......................555............5555.....5...5...........5....5..5......55...5............................................................................
        ..........................55...................5555............55555...5......5....5.....5......................................................................
        ............................555..............................555......5.......5....55...55......................................................................
        ...............................555.........................555........5.......5...555555.5......................................................................
        ..................................55......................555.........5.......5555..5....5......................................................................
        ....................................555...............................5.......5....5.....5...5555.....555.......................................................
        .......................................555............................5.....555...55.....5..5...5..555..5.......................................................
        ..........................................55..........................555555..5..55.....5.55....5.5.....5.......................................................
        ............................................555................................555......55......55......5............................5..........................
        ...............................................555......................................5.......5.......5...........................5...........................
        ..................................................555...................................................5.........................55............................
        .....................................................555.................................................5.......................5..............................
        ........................................................555...............................................555.................555...............................
        ...........................................................5555..............................................55555555555555555..................................
        ...............................................................555..............................................................................................
        ..................................................................5555..........................................................................................
        ......................................................................555.......................................................................................
        .........................................................................5555...................................................................................
        .............................................................................5555...............................................................................
        .................................................................................5555...........................................................................
        .....................................................................................5555.......................................................................
        .........................................................................................5555...................................................................
        .............................................................................................5555...............................................................
        .................................................................................................5555...........................................................
        .....................................................................................................55555......................................................
        ..........................................................................................................55555.................................................
        ...............................................................................................................55555............................................
        ....................................................................................................................55555.......................................
        .........................................................................................................................55555..................................
        ..............................................................................................................................5555555...........................
        .....................................................................................................................................555555555..................
        ..............................................................................................................................................555555555.........
        .......................................................................................................................................................55555....
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    story.showPlayerChoices("Instructions", "Customize", "Back")
    if (story.checkLastAnswer("Instructions")) {
        game.showLongText("Instructions on how to use the custom editor", DialogLayout.Full)
        game.showLongText("Background and Player color", DialogLayout.Full)
        game.showLongText("Requires you to enter 1-15. Each number is a color.", DialogLayout.Full)
        game.showLongText("1=white, 2=red, 3= pink, 4= orange, 5=yellow, 6=teal, 7=green, 8=blue, 9=cyan, 10=purple, 11=light purple, 12=dark purple, 13=tan, 14=brown, 15=black.", DialogLayout.Full)
        game.showLongText("Anything else will be set to green for background and yellow for player color.", DialogLayout.Full)
        game.showLongText("Countdown", DialogLayout.Full)
        game.showLongText("Requires you to enter 1-2. 1 is everytime collect a pizza resets the countdown and 2 is a normal count down.", DialogLayout.Full)
        game.showLongText("Anything else will be set as 1", DialogLayout.Full)
        game.showLongText("Time", DialogLayout.Full)
        game.showLongText("Requires you to enter 1 or more. The number you enter will be the number of seconds than will be applied to the countdown.", DialogLayout.Full)
        game.showLongText("Anything else will be set as 10.", DialogLayout.Full)
        game.showLongText("Mini", DialogLayout.Full)
        game.showLongText("Requires you to enter 1-2. 1 is normal and 2 is mini.", DialogLayout.Full)
        game.showLongText("Mini is when the pizza and the player are small.", DialogLayout.Full)
        game.showLongText("Player Speed", DialogLayout.Full)
        game.showLongText("Requires you to enter 0-999. The number you enter will be the speed of the player.", DialogLayout.Full)
        game.showLongText("0 is no moving and 999 is insanely fast.", DialogLayout.Full)
        game.showLongText("Player", DialogLayout.Full)
        game.showLongText("1 is P1, 2 is P2, 3 is P3, 4 is P4.", DialogLayout.Full)
        game.showLongText("Starting score", DialogLayout.Full)
        game.showLongText("Requires you to enter 1-15. Each number is a death message that is normally randomized.", DialogLayout.Full)
        game.showLongText("Death Message", DialogLayout.Full)
        game.showLongText("1=Game!, 2=Nice game!, 3= You win?, 4= Game over., 5=GAME!, 6=GAME OVER!, 7=GAME OVER., 8=Will you come back?, 9=Game., 10=GAME., 11=Something resonates inside you., 12=Chase the pizzas!, 13=Woo hoo!, 14=WOO HOO!, 15=!!!!.", DialogLayout.Full)
        game.showLongText("Anything else will be set as 1.", DialogLayout.Full)
        game.showLongText("The end.", DialogLayout.Full)
        game.showLongText("Have a nice day.                                                                               Longlinh.", DialogLayout.Full)
        cus()
    } else if (story.checkLastAnswer("Back")) {
        scene.setBackgroundImage(img`
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbb7777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777b444b77777777777777beebbbb7777777777777777777777
            777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777b444bb7777777777777eebbbb4bb777777777777777777777
            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777b44bbb4b777777777777eb344bb4bb77777777777777777777
            7777777775555577775577755777755577775555557775555555577777555555555775577775777555555577777777777777777777777b44b4555db77777777777e44334bb4bb7777777777777777777
            777777775555555777557775577755555775555555577555555557777755555555577557777577755555557777777777777777777777b44e455323b77777777777eb433344b4be777777777777777777
            77777775557775557755777557755555557555777557755777777777777777577777755777757775577777777777777777777777777e44e4575222db77777777774eb43344444be77777777777777777
            77777775577777777755777557755777557557777777755777777777777777577777755777757775577777777777777777777777777eeee55553235b777777777bd4eb43333344bb7777777777777777
            77777775577777777755777557755777557557777777755777777777777777577777755777757775577777777777777777777777777eee553235557db7777777b455d4443333444bb777777777777777
            77777775577777777755555557755555557555555577755555777777777777577777755555557775555577777777777777777777777eed5522255555b77777774d5555d444333444bb77777777777777
            777777755777777777555555577555555577555555577555557777777777775777777555555577755555777777777777777777777774edd5323575323b777774555555dd4b4443444be7777777777777
            7777777557777777775577755775577755777777755775577777777777777757777775577775777557777777777777777777777777774edd555555222b7777bd5555d555d4bb444444ee777777777777
            7777777557777755775577755775577755777777755775577777777777777757777775577775777557777777777777777777777777777744ddd555d23db777b55ddd665555bb4b44444ee77777777777
            77777777555555577755777557755777557555555557755555555777777777577777755777757775555555777777777777777777777777774444dd5555b77bd5555677655554ebb44444eb7777777777
            77777777755555777755777557755777557755555577755555555777777777577777755777757775555555777777777777777777777777777777444ddd47743222558855555d4eeb44b4ee7777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777744447b422332ddd555222d4eebbb4be7777777777
            7777777777777777777777777777777777775555555577777555555557777555555555577555555555577777557777777777777777777777777777777777be22232ed55522332db4ebbbbe7777777777
            777777777777777777777777777777777777555777775577777775777777777777777557777777777557775555577777777777777777777777777777777bde22222e555e22232edd4bbbbe7777777777
            777777777777777777777777777777777777555777775577777775777777777777775557777777777557755577557777777777777777777777777777777b52e222e3555e22222eddd4ebee7777777777
            77777777777777777777777777777777777755577777557777777577777777777775577777777775577775577755777777777777777777777777777777bd552eee355552e222e355544eee7777777777
            77777777777777777777777777777777777755577777557777777577777777777755777777777755577775577755777777777777777777777777777777665dd5555555552eee355dd4deee7777777777
            77777777775555555777777777777777777755555555577777777577777777775557777777775557777775555555777777777777777777777777777776776555555555555555551554d4ee7777777777
            77777777555555555557777777777777777755555555777777777577777777755577777777775577777775577755777777777777777777777777777774885222555dddd6655551544d4eee7777777777
            777777755555555555557777777777777777555777777777777775777777775577777777775577777777755777557777777777777777777777777777b45522332555dd677611d444ddeee77777777777
            7777777555555555555577777777777777775557777777777777757777777557777777777555777777777557775577777777777777777777777777774d5222232e55555881d44ddd4eee777777777777
            77777755555f55f55555577777777777777755577777777775555555577775555555555775555555555775577755777777777777777777777777777bdd5e22222e555115114d54d4ee77777777777777
            77777755555f55f55555577777777777777755577777777775555555577775555555555775555555555775577755777777777777777777777777777b55d2e222e351144d1d55eeee7777777777777777
            77777755555f55f5555557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bd5ddd2eee3d444555dd4e77777777777777777777
            7777775555555555555557777777777777777777777777777777777777777777777777777777777777777775557755557577757757575755577777b555115dddd55d544eede777777777777777777777
            77777755ff555555ff55577777777777777777777777777777777777777777777777777777777777777777757757577775777577575757577777774511d444d5544ee7774de777777777777777777777
            777777555ff5555ff5555777777777777777777777777777777777777777777777777777777777777777777577575557757775775775775577777741d4555d4ee7777777744777777777777777777777
            77777755555ffff555555777777777777777777777777777777777777777777777777777777777777777777577575777757775775757575777777741554eede777777777777777777777777777777777
            777777755555555555557777777777777777777777777777777777777777777777777777777777777777777555775555755577557757575557777744ee7774e777777777777777777777777777777777
            7777777555555555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777755555555555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7775555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7775555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7775555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555557777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
        singleplayer()
    } else {
        customizer()
    }
}
let song = 0
let mySprite8: Sprite = null
let mug = 0
let t = false
let text_list: string[] = []
let Pizza2: Sprite = null
let Game1 = false
let players = 0
let textlist = 0
let startingscore = 0
let p = 0
let playerColor = 0
let bg = 0
let mySprite3: Sprite = null
let shootboss = 0
let mySprite7: Sprite = null
let bot3 = 0
let Tile1: Sprite = null
let mySprite6: Sprite = null
let mySprite2: Sprite = null
let bot2 = false
let timerlol = false
let Countdown = 0
let timer2 = 0
let PlayerSpeed = 0
let mySprite5: Sprite = null
let Mini = 0
let Sp = false
let custommode = false
let Music = false
let mySprite4: Sprite = null
let Pizza: Sprite = null
let boss = false
let mySprite: Sprite = null
let superboss = false
let act = false
music.stopAllSounds()
act = false
superboss = false
if (!(blockSettings.exists("act"))) {
    blockSettings.writeNumber("act", 1)
    game.showLongText("This game is only compatible with devices that allow 2 players", DialogLayout.Bottom)
}
if (blockSettings.readNumber("act") == 3) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player1)
    mySprite.setPosition(567785858568568, 686868568658678)
    color.startFadeFromCurrent(color.GrayScale, 500)
    scene.setBackgroundImage(img`
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbb7777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777b444b77777777777777beebbbb7777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777775555577775577755777777777777777777777777777777777777777777777577775777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777577775777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777577775777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777577775777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777577775777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777555555777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777555555777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777555555555555555555577777555bb4b777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777755554eb777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775555d4e777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777755555555555555555557777755222d4777777777777777777
        777777777777777777777777777777777777777777777777777755555777755555557777777777777777777777777777777777777777777777777777777777777777777522332d777777777777777777
        777777777777777777777777777777777777777777777777777775777777777777777777777777777777777777777777777777777777777777777777777777777777777e22232e777777777777777777
        77777777777777777777777777bb4bbbbee7777777777777bb444b777777777777777777777777777777777777777777777777777777777555555555555555555577777e22222e777777777777777777
        7777777777777777777777777bb4bb443be777777777777b4bbb44b777777777777777777777777777777777777777777777777777777777777777777777777777777772e222e3777777777777777777
        777777777777777777777777bb4bb43344e77777777777bd5554b44b777777777777777777777775555555777777777777777777777777777777777777777777777777752eee355dd4deee7777777777
        77777777777777777777777eb4b443334be77777777777b323554e44b77777777777777777777775555555777777777777777777777777777777777777777777777777755555551554d4ee7777777777
        7777777777777777777777eb44444334be47777777777bd2225754e44e777777777777777777777777775577777777777777777777777777777777777777777777777776655551544d4eee7777777777
        777777777777777777777bb44333334be4db777777777b53235555eeee7777777777777777777777777755777777777777777777777777777777777777777777777777777611d444ddeee77777777777
        77777777777777777777777443333444d554b7777777bd755532355eee77777777777777777777777777557777777777777777777777777777777777777777777777775881d44ddd4eee777777777777
        777777777777777777777774333444d5555d47777777b5555522255dee777777777777777777777775555577777777777777777777777777777777777777777777777715114d54d4ee77777777777777
        777777777777777777777773444b4d777777777777777777777755555477777777777777777777777555557777777777777777777777777777777777777777777777774d1d55eeee7777777777777777
        7777777777777777777777744bb4d57777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777755dd4e77777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775775757577777777777777777777777774eede777777777777777777777
        77777755ff5555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777577575757777777777777777777777777774de777777777777777777777
        777777555ff55557777777777777777777777777777777777777777777777777777777777777777777777777777777777777757757757777777777777777777777777777744777777777777777777777
        77777755555ffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777757757575777777777777777777777777777777777777777777777777777
        7777777555555557777777777777777777777777777777777777777777777777777777777777777777777777777777777777775577575777777777777777777777777777777777777777777777777777
        7777777555555557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777755555557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777555557777777777777777777777777777777777777777777777777777777777777b77777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777677777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777776777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777774877777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77755555555555577777777777777777777777777777777777775555555555555555577777b4577777777777777777777777555555555577777777777777777777775777777777777777777755555777
        777777777777777775577755775577755755777777775577777777777777777777777777774d577777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777755555557755555557555555577755555777777777777777777777777bdd577777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7775555555555577755555557755555557755555557755555775555555555555555557777b55d77777777777777777777777555555555577777777777777777777775777777777777777777755555777
        777777777777777775577755775577755777777755775577777777777777777777777777bd5dd77777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777775775577755775577755777777755775577777777777777777777777777b555177777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7775555555555577755777557755777557555555557755555555555555555555555557774511d77777777777777777777777555555555577777777777777777777775777777777777777777755557777
        77777777777777777557775577557775577555555777555555577777777777777777777741d4577777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777774155477777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777555555557777755577777777777777777777744ee7774e7777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777755577777557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777755577777557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777755577777557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777755577777557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777755777777777777777777755555555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777755557777777777777777755555555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777755555777777777777777755577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777755555777777777777777755577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777755555577777777777777755577777777775557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777755555577777777777777755577777777775557777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777555555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777edd5323575323b777774555555d77777777
        777777777777775555557777777777777777777777777777777777777777777777777777777777777777777777777775577777777775577555775577777774edd555555222b7777bd5555d5577777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777557777557775577777777744ddd555d23db777b55ddd66577777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777755577775577755777777777774444dd5555b77bd5555677677777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775557777775555555777777777777777777777777777777778577777777
        777777777777777777777777777777777777777777777777777777777777777777757777755555555577577777777777777777557777777557775577777777777777777777777777777777d577777777
        7777777777777777777777777777777777777777777777777777777777777777777577777555555555775777777777777777557777777775577755777777777777777777777777777777775577777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777757777775777777777777775557777777775577755777777777777777777777777777777775577777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777757777775777777777755775555555555775577755777777777777777777777777777777775577777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777757777775777777777755775555555555775577755777777777777777777777777777777777577777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777757777775777777777777777777777777777777777777777777777777777777777777777777577777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777757777775777777777777777777777777777755577555575777777777777777777777777777577777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777757777777777777777777777777777777777757757577775777777777777777777777777777d77777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777757777777777777777777777777777777777757757555775777777777777777777777777777677777777
        7777555555577777777777777777777777777777777777777777777777777777777577777777757777777777777777777777777777777777757757577775777777777777777777777777777777777777
        7775557775577777777777777777777777777777777777777777777777777777777577777777757777777777777777777777777777777777755577555575557777777777777777777777777777777777
        7775577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7775577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7775577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7775577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7775577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7775577777577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777555555577777777777777777777777777777777777777777777755777757775577777777777777777777777777755555555555555555555555555555557777777777777777777777777777777777
        7777755555777777777777777777777777777777777777777777777755777757775577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777755777757775555555777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777755777757775555555777777777777777777777755555555555555555555555555555557777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777444ddd47743222558777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777555775555555555777775577777777777777777777777744447b422332dd777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777755777777777755777555557777777777777777755777777777be22232ed555555555557777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777757777777777777777777777777777777777777777777777777bde22222e5777777777777777777777777777777777777777777777
        777777555557777777777777d552eee35557777777777777777777757777555777777777777777777777777777777777777777777b52e222e357777777777774bb777777777777777777777777777777
        77775555555777777777777765dd55555557777777777777777777777777577777777777777777777777777777777777777777777777777777777777777777744bb77777777777777777777777777777
        7775555555577777777777777655555555577777777777777777777777775577777777777777777777777777777777777777777777777777777777777777777444be7777777777777777777777777777
        77755555555777777777777785222555ddd777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777774444ee777777777777777777777777777
        7755555f55f7777777777777522332555dd7777777777777777777777777555777777777777777777777777777777777777777777777777777777777777777744444ee77777777777777777777777777
        7755555f55f7777777777777222232e555577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777b44444eb7777777777777777777777777
        7755555f55f7777777777777e22222e555177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eb44b4ee7777777777777777777777777
        7755555555577777777777772e222e3511477777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eebbb4be7777777777777777777777777
        777777777777777777777777d2eee3d444577777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777b4ebbbbe7777777777777777777777777
        77777777777777777777777715dddd55d5477777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777dd4bbbbe7777777777777777777777777
        777777777777777777777777444d5544ee777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddd4ebee7777777777777777777777777
        77777777777777777777777755d4ee777777777777777777777777777777555555555555555555555577777777777777777777777777777777777777777777755544eee7777777777777777777777777
        777777777777777777777777eede777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775ff55577777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777755555555555555555555557777777777ff555577777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777755555577777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777755555777777777777777777777777755577775555557775555555777777777777777
        7777777777777777777777777777777777777777777777777777777777775555555555555555555555777777777755555777777777777777777777777555557755555555775555555777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777755557777777777777777777777775555555755577755775577777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777755777777777777777777777777775577755755777777775577777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777755555555555555555555555555555555555557777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777755777557777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777757755777557777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777755777557777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    boss = false
    story.showPlayerChoices("Play", "Settings")
    story.showPlayerChoices("Play?", "Welcome Back")
    story.showPlayerChoices("Ready?", "Not Ready?")
    story.showPlayerChoices("Doesn't Really", "Matter")
    story.showPlayerChoices("Play", "")
    bossfight()
} else if (blockSettings.readNumber("act") == 4) {
    color.startFadeFromCurrent(color.GrayScale, 0)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player1)
    mySprite.setPosition(-567785858568568, 686868568658678)
    story.showPlayerChoices("Welcome Back", "Player")
    bossfight2()
} else if (blockSettings.readNumber("act") == 5) {
    gamelmao()
} else {
    gamelmao()
}
game.onUpdateInterval(20000, function () {
    if (boss == true) {
        timer.after(20000, function () {
            sprites.destroyAllSpritesOfKind(SpriteKind.TheEndLmao, effects.ashes, 100)
        })
    }
})
game.onUpdateInterval(500, function () {
    if (boss == true) {
        if (superboss) {
            for (let index = 0; index < 2; index++) {
                timer.after(500, function () {
                    mySprite8 = sprites.create(img`
                        . . . . . . b b b b . . . . . . 
                        . . . . . . b 4 4 4 b . . . . . 
                        . . . . . . b b 4 4 4 b . . . . 
                        . . . . . b 4 b b b 4 4 b . . . 
                        . . . . b d 5 5 5 4 b 4 4 b . . 
                        . . . . b 3 2 3 5 5 4 e 4 4 b . 
                        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
                        . . . b 5 3 2 3 5 5 5 5 e e e e 
                        . . b d 7 5 5 5 3 2 3 5 5 e e e 
                        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
                        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
                        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
                        b d 3 2 d 5 5 5 d d d 4 4 . . . 
                        b 5 5 5 5 d d 4 4 4 4 . . . . . 
                        4 d d d 4 4 4 . . . . . . . . . 
                        4 4 4 4 . . . . . . . . . . . . 
                        `, SpriteKind.TheEndLmao)
                    mySprite8.setPosition(mySprite3.x, mySprite3.y)
                    mySprite8.setFlag(SpriteFlag.GhostThroughWalls, true)
                    mySprite3.setPosition(mySprite3.x, mySprite.y)
                    mySprite8.setVelocity(-150, 0)
                })
            }
        } else {
            for (let index = 0; index < 2; index++) {
                timer.after(500, function () {
                    mySprite8 = sprites.create(img`
                        . . . . . . b b b b . . . . . . 
                        . . . . . . b 4 4 4 b . . . . . 
                        . . . . . . b b 4 4 4 b . . . . 
                        . . . . . b 4 b b b 4 4 b . . . 
                        . . . . b d 5 5 5 4 b 4 4 b . . 
                        . . . . b 3 2 3 5 5 4 e 4 4 b . 
                        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
                        . . . b 5 3 2 3 5 5 5 5 e e e e 
                        . . b d 7 5 5 5 3 2 3 5 5 e e e 
                        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
                        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
                        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
                        b d 3 2 d 5 5 5 d d d 4 4 . . . 
                        b 5 5 5 5 d d 4 4 4 4 . . . . . 
                        4 d d d 4 4 4 . . . . . . . . . 
                        4 4 4 4 . . . . . . . . . . . . 
                        `, SpriteKind.TheEndLmao)
                    mySprite8.setPosition(mySprite3.x, mySprite3.y)
                    mySprite8.setFlag(SpriteFlag.GhostThroughWalls, true)
                    mySprite3.setPosition(mySprite3.x, mySprite.y)
                    mySprite8.setVelocity(-100, 0)
                })
            }
        }
    }
})
forever(function () {
    if (boss) {
        music.play(music.createSong(assets.song`Tetris1`), music.PlaybackMode.UntilDone)
    }
})
forever(function () {
    if (shootboss == 10) {
        boss = false
        music.stopAllSounds()
        story.printDialog("Wow, you beat me.", 80, 90, 50, 150)
        music.stopAllSounds()
        story.printDialog("I will keep my promise.", 80, 90, 50, 150)
        music.stopAllSounds()
        story.printDialog("I will leave.", 80, 90, 50, 150)
        story.printDialog("Goodbye.", 80, 90, 50, 150)
        story.printDialog("Even if you don't miss me.", 80, 90, 50, 150)
        blockSettings.writeNumber("act", 5)
        music.play(music.createSong(assets.song`morse`), music.PlaybackMode.UntilDone)
        game.reset()
    }
})
forever(function () {
    if (Music) {
        if (blockSettings.readNumber("Music") == 0) {
            if (blockSettings.readNumber("act") == 2) {
                if (Math.percentChance(10.2443264643754)) {
                    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
                } else {
                    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
                }
            } else {
                music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.UntilDone)
            }
        } else if (blockSettings.readNumber("Music") == 1) {
            if (blockSettings.readNumber("act") == 1) {
                if (Math.percentChance(50)) {
                    music.play(music.createSong(assets.song`Tetris`), music.PlaybackMode.UntilDone)
                    song = 1
                } else if (Math.percentChance(50)) {
                    music.play(music.createSong(assets.song`chopstckwalz`), music.PlaybackMode.UntilDone)
                    song = 2
                }
                if (song == 1) {
                    music.play(music.createSong(assets.song`Tetris0`), music.PlaybackMode.UntilDone)
                } else if (song == 2) {
                    music.play(music.createSong(assets.song`chopstckwalz`), music.PlaybackMode.UntilDone)
                }
            } else if (blockSettings.readNumber("act") == 2) {
                if (mug == 0) {
                    if (Math.percentChance(25)) {
                        music.play(music.createSong(assets.song`Tetris`), music.PlaybackMode.UntilDone)
                        song = 1
                        mug = 1
                    } else if (Math.percentChance(25)) {
                        music.play(music.createSong(assets.song`chopstckwalz0`), music.PlaybackMode.UntilDone)
                        song = 2
                        mug = 1
                    } else if (Math.percentChance(25)) {
                        music.play(music.createSong(assets.song`Tetris0`), music.PlaybackMode.UntilDone)
                        song = 1
                        mug = 1
                    } else if (Math.percentChance(25)) {
                        music.play(music.createSong(assets.song`chopstckwalz`), music.PlaybackMode.UntilDone)
                        song = 2
                        mug = 1
                    }
                } else {
                    if (Math.percentChance(50)) {
                        music.play(music.createSong(assets.song`Tetris`), music.PlaybackMode.UntilDone)
                        song = 1
                    } else if (Math.percentChance(50)) {
                        music.play(music.createSong(assets.song`chopstckwalz`), music.PlaybackMode.UntilDone)
                        song = 2
                    }
                    if (song == 1) {
                        music.play(music.createSong(assets.song`Tetris0`), music.PlaybackMode.UntilDone)
                    } else if (song == 2) {
                        music.play(music.createSong(assets.song`chopstckwalz`), music.PlaybackMode.UntilDone)
                    }
                }
            }
        } else if (blockSettings.readNumber("Music") == 2) {
            music.play(music.createSong(assets.song`Tetris`), music.PlaybackMode.UntilDone)
        } else if (blockSettings.readNumber("Music") == 3) {
            music.play(music.createSong(assets.song`chopstckwalz`), music.PlaybackMode.UntilDone)
        } else {
            if (Math.percentChance(50)) {
                music.play(music.createSong(assets.song`Tetris`), music.PlaybackMode.UntilDone)
                song = 1
            } else {
                music.play(music.createSong(assets.song`chopstckwalz`), music.PlaybackMode.UntilDone)
                song = 2
            }
            if (song == 1) {
                music.play(music.createSong(assets.song`Tetris`), music.PlaybackMode.UntilDone)
            } else if (song == 2) {
                music.play(music.createSong(assets.song`chopstckwalz`), music.PlaybackMode.UntilDone)
            }
        }
    }
})
game.onUpdateInterval(2000, function () {
    if (bot2) {
        if (Math.percentChance(50)) {
            mySprite2.follow(Pizza2, 0)
            mySprite2.setVelocity(randint(-100, 100), randint(-100, 100))
            timer.after(1050, function () {
                mySprite2.follow(Pizza2, 100)
            })
        } else if (Math.percentChance(18)) {
            mySprite2.follow(Pizza2, -100)
            timer.after(500, function () {
                mySprite2.follow(Pizza2, 100)
            })
        } else {
            mySprite2.follow(Pizza2, 0)
            mySprite2.setVelocity(50, 0)
            timer.after(500, function () {
                mySprite2.setVelocity(0, 100)
                timer.after(1203, function () {
                    mySprite2.follow(Pizza2, 100)
                })
            })
        }
    }
})
