namespace SpriteKind {
    export const fire = SpriteKind.create()
    export const sword = SpriteKind.create()
    export const treasure = SpriteKind.create()
    export const treeList = SpriteKind.create()
    export const rock = SpriteKind.create()
    export const smallTree = SpriteKind.create()
    export const house = SpriteKind.create()
    export const doctor = SpriteKind.create()
    export const hospital = SpriteKind.create()
    export const weapon = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const key = SpriteKind.create()
    export const BigBoss = SpriteKind.create()
    export const Orb = SpriteKind.create()
    export const BigBossProjectile = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    pickGenerator = randint(0, 3)
    if (pickGenerator < 0) {
        randomX = MonsterGenerator[0]
        randomY = MonsterGenerator[0]
    } else if (pickGenerator == 1) {
        randomX = MonsterGenerator[0]
        randomY = MonsterGenerator[1]
    } else if (pickGenerator == 2) {
        randomX = MonsterGenerator[1]
        randomX = MonsterGenerator[0]
    } else {
        randomX = MonsterGenerator[1]
        randomX = MonsterGenerator[1]
    }
    sprite.setFlag(SpriteFlag.BounceOnWall, true)
    sprite.setPosition(randomX, randomY)
    sprite.follow(mySprite, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.hospital, function (sprite, otherSprite) {
    sprite_list2 = sprites.allOfKind(SpriteKind.Enemy)
    for (let value of sprite_list2) {
        value.destroy()
    }
    tiles.setTilemap(tiles.createTilemap(hex`0a0008000409120a0a0a0a120a020c0101010101010101060f0101010101010101100d0101010101010101060d01010101010101010b0f0101010101010101100c010101010101010106050711080e0e08110803`, img`
        2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . . 2 
        2 . . . . . . . . 2 
        2 . . . . . . . . 2 
        2 . . . . . . . . 2 
        2 . . . . . . . . 2 
        2 . . . . . . . . 2 
        2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,sprites.dungeon.floorLight2,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.stairNorth,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterNorth2], TileScale.Sixteen))
    myHospital.destroy()
    doctor2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f a 5 2 5 a 6 f . . . . 
        . . . f a 6 6 6 6 6 a 6 f . . . 
        . . . f 6 6 4 4 4 4 6 a f . . . 
        . . . f 6 4 c 4 4 c 4 6 f . . . 
        . . f 6 4 4 7 4 4 7 4 4 6 f . . 
        . . f 6 4 4 4 4 4 4 4 4 6 f . . 
        . . f 6 6 4 c 4 4 c 4 6 6 f . . 
        . f 6 6 f 1 4 c c 4 1 f 6 6 f . 
        . . f f 4 1 1 2 2 1 1 4 f f . . 
        . . f 4 4 1 2 2 2 2 1 4 4 f . . 
        . . . f f 1 2 2 2 2 1 f f . . . 
        . . . f 1 1 1 2 2 1 1 1 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.doctor)
    doctor2.setPosition(80, 60)
    mySprite.setPosition(80, 90)
    doctor2.say("Welcome to the Hospital. I can cure 1HP for every 500 points.", 9000)
    pause(10000)
    if (game.askForString("Do you want me to proceed? (y/n)", 1) == "y") {
        info.changeLifeBy(Math.round(info.score() / 500))
        info.setScore(info.score() % 500)
    }
    doctor2.destroy()
    tiles.setTilemap(tiles.createTilemap(hex`32003200030303020303030606060202030303030303030302020202020606060c0202020c0c0202020c0c0c02020202020203030c0c030101020303030606060101010203030303030302020202020606060c0202020c0c02020c0c0c0c0c0c0c02020203030c0c0302020203010102020202020202020203030c0c02020203030306060c0c0c0c0c0c0c0c0c0c0c0c0c0c0c02020202020202030202020c0c0c0202020202020202020202020c0c0c030303030303030c0c0c06060c0c0c100c100c100c02020202020102030202020c0c06020202010102020202020202020302030303030303030c0c0c0c060c0c0c1112141212020202020202020203030101010c060c0c0c0c0c0c0c0202030202020202020203030303030c0c0c0c060c0c0c1213110f0f0202020101030303010103030c0c0c0c0c0c0c030c0c0603030202020202020202020c0c030c0c0c0c0c0c0c0c0f0f150f1102020201010303030303030c0c0c0c0c0c0c0c0d0d0206030303020c0202020202020202020c0c0c0c0c0c030c0c0c0602020e0e0e0e010303030303030c0c010101010d0d0d0d0d0d0303030c0c0c0c0c0c020202020202020c0c0c0c0c0c0c0c0c03030e0e0e0e010102020c0c0c0101010c0c0d0d01010d0d0d0d0d0d0c0c0c0c0c0c030208080802020202020c0c0c0c0c0c030e0e0e0e0e0e0102020c0c0c0101010c0c0c0c0c0101010d0d0d0c0c0c0c0c0c0c080108080802020202020c0c0c0c0c0c0e0e0e0e0e0e0101020202020101010202020c0c0c0808080d0d0d0c0c0c0c0c0808080108080801030202020c0c0c0c0c0e0e0e0e0e0e0e0101020202020201010202020201010808080c0c0c0c0c0c0c0c0c0c0c030808080d0d0d0d01020c0c0c0e0e0e0e0e0e0e0e01010102020202010102020202010101010c0c0101010c0c0c0c0c0c0c0d0d0d0d0d0d0d0d0102030e0e0e0e0e0e0e0e0e0101020202020202010202020202010101010202020c0c0c0c0c0c0c0c0c0c0d0d0d0d0d0d0d0d0d0e0e0e0e0e0e0e0e0e0e0c0c0102020203020202030202010101020202020202020808080808080c0c0c0c0d0d030d0d0d0d0e0e0e04040e0e0e0e0c0c0c0202020202020202020302020101020202020202020208080808080c0c0c0c0c0d0d0d0d0d0d0e0e0e04040e0e0e0c0c0c0c02020202020202020202020201030202020203020202030c0808080c0c0c0c0c0c0c0c0c0c0e0e0e0e040e0e0e0c0c0c0101010202020202020202020202020202020202020202020201010101010c0808080c0c0c0c0e0e0e0e0e0e0e030c0c0c0c0c0102020202020203020202020202020202020202020202020101010c0d0d080303080c0e0e0e0e0e0e0e0e03030c0c0c010c0c0c02020202020203030202020202020202020202020c0c0c0c0c0d0d0d080808080e0e0e0e0e0e0e0101030c0c0c0c0c0c010c020203020203030202020202030303020203030c0c0c0c030d0d0d0d0c0c0e080e0e0e0e0e0e020c0c0c0c0c0c010c010c0c020203030303030303030303030303030303030c0c0c0c030d0d0d0d0c0e0e0e0e0e0e0e0e08080c0c0c0c0c0c010c0c0c0d0d0d0303030202020202020203020203030303030c0c02030d0d0d030c0c0e0e0e0e0e0e0808080c0c01010103030c0c0d0d0d0d0203030203020203020202030203020203030c0c020d0d0d0d03030201010e0e0e0c080808080c0c0c0c03030c0d0d0d0202030203020303020e020203020203020202020c0c0c0c0d0c0c0c03080808080c0c0c0808080808020202020d0d0d0d0d0102020202030302040404040e0202030203020c0c0c0c0c0d0c0c0c02080808080c0c0c0c080808080202020202020d0d0d010103020203020e0404040e0e0e02020202020c0c0c0c0c0d0c0c0c03080808080c0c0c0d0c0101080c02020202020d0d02020102030203030204040404020202030203030202020c0c0c0d0d0d0d0d0d0d0808080d0d0d0c0c0c0c0c0202020201010202020203020303020e0e0e03030303030302030c0c0c0c0c0c0d0d0101010d0d0808080d0d0d0d0c0c0c0c0c0d0303010202020202030202030302030202030302030302020c0c0c0c0c0c0d0d0d0d0d0d030801010d0d0d0d01010c0c0c0c0c02020202020202020203020303030303030303020303020c0c0c0c0c01010d0d0d0d01010108080d080808080d0c0202020c0202020202020d0d0202020202030303030302020303030c0c0c0c0c0102020202020d0d0d0d0d0d080808080d0d0202020c0202020202020d0d0d02030202020303030202030303030c0c0c08010102020202020d0d0d0d0d0d0808080801010202020c0302020202020d0d0d0302020202020303020202020203030c0c01010d02020202020d0d0d020201010101010101010101010302020202020d0d0d0d02030202020303030203020303030c0c01010d0d0d0d0d0d0d0d020202010101010301010102010102020202020202020d0d0202030303030202020d020302030c0c01010c0c0c0c0c0c0c0c02020c0c0c0c010101010101010102030202020203020d0d0d0203030302020202050607030c0c0c0c0c0c0c0c0c0c0c0c0c02020c0c0c0c010101010101010c0c030c0c0c0c0d0d0d0d0d0d0d0d0303030203010c0b030c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c030101010e0101010c0c0c0c0c0c0c0d0d02020d0d0d020d0d02020303090a030c0c0c01020102010c0303030c0303030c0c0301010e0e0e03080c0c0c0c0c0c0c0d0d0d0d02020d0d0202020203030303020c0c0c0c0c0c0c0c0c0303030c0303030c0c0101010e0e0e0e0e0c0c0c0c0c0c0c030303030303030d0d0203030303030303030303030303030303030303080303030801010101010e0e0e0e0c0c0c0c0c0c0c030303030303080c0c0c03030101010201010202020103030303030c0c0c0c0c080801010101010e0e0e0e0e0c0c0c0c0c0c0303030c0c0c080c0c0c08010303020201020202020808080303030c0c0c0c0c020201010101080e0202020c0c0c0c0c0c0c0303020c0c0c08080808080103030302020202010101010101010c0c0c0c0c0c02020101010101020202020202020c0c0c0c0303020c0c0c03030302020803030302020201010101010101010c0c0c0c0c0c020201010101010101020c0c0c0c0c0c0c0c03030202030303030303010808010101010101010101010101010c0c0c0808080808010101010101010c0c0c0c0c0c0c0c08030303020303020303030c0808010101010101010101080808080303030303010101010101010101010c0c0c0c0c0c0c0c03030303030302020303020202030101010101010101080808080303030303030101010101010101030303030c0c0c0c0c03030303030303030303030303030303030303030308080803030303030303030301010101010101030303030303030303030303`, img`
        ..................................................
        ..................................................
        ..................................................
        .....................................2.2.2........
        .....................................22222........
        .....................................22222........
        .....................................2...2........
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `, [myTiles.tile0,sprites.castle.tilePath4,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass1,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass3,sprites.dungeon.floorDark0,sprites.dungeon.floorDark2,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,sprites.dungeon.floorDark3,sprites.dungeon.doorLockedNorth,myTiles.tile5,myTiles.transparency16,myTiles.tile3,myTiles.tile1,myTiles.tile2,myTiles.tile4], TileScale.Sixteen))
    myHospital = sprites.create(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4eeeeeeeeee44ee66c4eddddddde666
        666edffdffde4c66f4e11111111ef4ee66c4edffdffde666
        666edccdccde4c66f4e11122111eeeee66c4edccdccde666
        666eddddddde4c66f4e11122111eeeee66c4eddddddde666
        c66edffdffde4c66e4e12222221e44ee66c4edffdffde66c
        c66edccdccde4c66e4e12222221e44ee66c4edccdccde66c
        cc66666666664c66e4e11122111eeeee66c46666666666cc
        .c66444444444c66e4e11122111efffe66c44444444466c.
        ..c64eee4eee4c66f4e11111111e44fe66c4eee4eee46c..
        ...c4eee4eee4c66f4eeeeeeeeeeffee66c4eee4eee4c...
        ....644444444c66f4e44e44e44e44ee66c444444446....
        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
        `, SpriteKind.hospital)
    tiles.placeOnTile(myHospital, tiles.getTileLocation(SpritePositionCol(houseX), SpritePositionRow(houseY)))
    mySprite.setPosition(houseX + 0, houseY + 40)
    drawWalls()
    HospitalVisits = HospitalVisits + 1
    if (HospitalVisits == 3) {
        myHospital.destroy(effects.fire, 5000)
        mySprite.say("OH NO! The Hospital is on fire!", 5000)
    }
})
function GenerateMonsters () {
    value9 = randint(1, 6)
    if (value9 == 1) {
        myEnemy = sprites.create(img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `, SpriteKind.Enemy)
    } else if (value9 == 2) {
        myEnemy = sprites.create(img`
            . . . . . c c c c c c c . . . . 
            . . . . c 6 7 7 7 7 7 6 c . . . 
            . . . c 7 c 6 6 6 6 c 7 6 c . . 
            . . c 6 7 6 f 6 6 f 6 7 7 c . . 
            . . c 7 7 7 7 7 7 7 7 7 7 c . . 
            . . f 7 8 1 f f 1 6 7 7 7 f . . 
            . . f 6 f 1 f f 1 f 7 7 7 f . . 
            . . . f f 2 2 2 2 f 7 7 6 f . . 
            . . c c f 2 2 2 2 7 7 6 f c . . 
            . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
            c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
            f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
            f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
            f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
            . f 6 1 1 1 1 1 6 6 6 6 c . . . 
            . . f f c c c c c c c c . . . . 
            `, SpriteKind.Enemy)
    } else if (value9 == 3) {
        myEnemy = sprites.create(img`
            . . . f f f f f f f . . . 
            . . . f 5 8 5 8 5 f . . . 
            . . . b 5 5 b 5 5 b . . . 
            . . . b 5 5 b 5 5 b . . . 
            . . . . b 2 5 2 b . . . . 
            . . . c f f 1 f f c . . . 
            . b f f 1 1 f 1 1 f f b . 
            b f f f 1 1 1 1 1 f f f b 
            c 5 5 5 1 1 f 1 1 f f f c 
            5 f 5 f 5 1 1 1 1 f f f c 
            4 f 4 f 4 1 f 1 1 5 5 5 c 
            c c c f 1 1 1 1 5 f 5 f 5 
            c c b f 1 1 f 1 4 c 4 c 4 
            b c c f f f f f f f c c c 
            c b c f f c f f f f b c c 
            c c c f f f f c f f c c b 
            b c b f f c c f f f c b . 
            c c . f f . . . f f . . . 
            . . . f f . . . f f . . . 
            . c c f f c . c f f c . . 
            . c f f f c . c f f c . . 
            `, SpriteKind.Enemy)
    } else if (value9 == 4) {
        myEnemy = sprites.create(img`
            . . . . . . . . f f . . . . . 
            . . . . . . . f f f f . . . . 
            . . . . . . f f f f f f . . . 
            . . . . . f f f f . f . . . . 
            7 . . . f f f c f f . . . . . 
            . 7 7 f f f c f b f f . 7 7 . 
            7 . 7 5 7 5 7 5 5 7 5 7 . . . 
            . . 7 5 2 5 5 5 5 2 5 7 7 . . 
            . 7 . 5 5 5 5 5 5 5 5 . 7 7 . 
            7 . 7 5 5 c b c 5 5 5 7 7 . . 
            . 7 . f f 2 e e e f f . 7 7 . 
            . . f f f a 2 a f f f f . . . 
            . 5 c f f a a a f f c f 5 . . 
            . 5 f f f a a a f f f c 5 . 4 
            . . . . f f f f f f . e 4 e 4 
            e e e e f f e e f f e 4 e 4 4 
            . . . . f f . . f f . e 4 e 4 
            . . . a a a . . a a . . . . 4 
            `, SpriteKind.Enemy)
    } else if (value9 == 5) {
        myEnemy = sprites.create(img`
            ...eeeeeee....999.
            ...eeee111....e999
            ...eeb1181....e999
            ...ed1111e....e999
            ...eeeeee1....e999
            .f2f5f2f252f..999.
            f2f2e2f2fef2f.e...
            2f.fef2f2e2f2fe...
            f2.2e2f2fef.f2e...
            2f.fef2f2e2.2fe...
            f2.2e2f2fef.f2e...
            2111ef2f2e..111...
            .11f52f2f5...11...
            ...eeeeeeeee......
            ..eeeeeeeeeee.....
            ..ffff...ffff.....
            ..effe...effe.....
            ..ffff...ffff.....
            ..f5ff...ff5f.....
            .fffff...fffff....
            `, SpriteKind.Enemy)
    } else {
        myEnemy = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .....fffc1111111f.......
            ...fc111cd1111111f......
            ...f1b1b1b1111dddf......
            ...fbfbffcf11fcddf......
            ......fcf111111bbf......
            .......ccbdb1b1fcf......
            .......fffbfbfdff.......
            ........ffffffff........
            ........fffffffffff.....
            .........fffffc111cf....
            .........fffff1b1b1f....
            ..........ffffbfbfbf....
            ...........ffff.........
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
    }
}
function createSmallBoss () {
    smallBoss = sprites.create(img`
        ........77777bb77...
        ........7bb777bb7...
        .......b7b7755557...
        .......b7b75cddc5...
        ......bb7b755dd55...
        .....b777b75cddc5...
        ...bb77bbb7522227...
        ..77777b7777d22dc777
        ....bb7b777ee22becb7
        ...7777bbb77ebb5ecbb
        ......b7.ce77555444.
        .....777.4ceebbb4b4.
        .........44ce5555c..
        .......cc4.cebb55c..
        ......ceec.ce55bbc..
        c....ceeeecceb555c..
        ec..ceeeeeeee5b55c..
        5ecceeb5b5b5b55b5c..
        .5eeeb5...5b5b55c...
        ..b5b5.....5b5bcc...
        `, SpriteKind.Boss)
    smallBossLife = 200
    smallBoss.setFlag(SpriteFlag.BounceOnWall, true)
    smallBoss.follow(mySprite, 80)
}
function drawMap () {
    tiles.setTilemap(tiles.createTilemap(hex`32003200030303020303030606060202030303030303030302020202020606060c0202020c0c0202020c0c0c02020202020203030c0c030101020303030606060101010203030303030302020202020606060c0202020c0c02020c0c0c0c0c0c0c02020203030c0c0302020203010102020202020202020203030c0c02020203030306060c0c0c0c0c0c0c0c0c0c0c0c0c0c0c02020202020202030202020c0c0c0202020202020202020202020c0c0c030303030303030c0c0c06060c0c0c100c100c100c02020202020102030202020c0c06020202010102020202020202020302030303030303030c0c0c0c060c0c0c1112141212020202020202020203030101010c060c0c0c0c0c0c0c0202030202020202020203030303030c0c0c0c060c0c0c1213110f0f0202020101030303010103030c0c0c0c0c0c0c030c0c0603030202020202020202020c0c030c0c0c0c0c0c0c0c0f0f150f1102020201010303030303030c0c0c0c0c0c0c0c0d0d0206030303020c0202020202020202020c0c0c0c0c0c030c0c0c0602020e0e0e0e010303030303030c0c010101010d0d0d0d0d0d0303030c0c0c0c0c0c020202020202020c0c0c0c0c0c0c0c0c03030e0e0e0e010102020c0c0c0101010c0c0d0d01010d0d0d0d0d0d0c0c0c0c0c0c030208080802020202020c0c0c0c0c0c030e0e0e0e0e0e0102020c0c0c0101010c0c0c0c0c0101010d0d0d0c0c0c0c0c0c0c080108080802020202020c0c0c0c0c0c0e0e0e0e0e0e0101020202020101010202020c0c0c0808080d0d0d0c0c0c0c0c0808080108080801030202020c0c0c0c0c0e0e0e0e0e0e0e0101020202020201010202020201010808080c0c0c0c0c0c0c0c0c0c0c030808080d0d0d0d01020c0c0c0e0e0e0e0e0e0e0e01010102020202010102020202010101010c0c0101010c0c0c0c0c0c0c0d0d0d0d0d0d0d0d0102030e0e0e0e0e0e0e0e0e0101020202020202010202020202010101010202020c0c0c0c0c0c0c0c0c0c0d0d0d0d0d0d0d0d0d0e0e0e0e0e0e0e0e0e0e0c0c0102020203020202030202010101020202020202020808080808080c0c0c0c0d0d030d0d0d0d0e0e0e04040e0e0e0e0c0c0c0202020202020202020302020101020202020202020208080808080c0c0c0c0c0d0d0d0d0d0d0e0e0e04040e0e0e0c0c0c0c02020202020202020202020201030202020203020202030c0808080c0c0c0c0c0c0c0c0c0c0e0e0e0e040e0e0e0c0c0c0101010202020202020202020202020202020202020202020201010101010c0808080c0c0c0c0e0e0e0e0e0e0e030c0c0c0c0c0102020202020203020202020202020202020202020202020101010c0d0d080303080c0e0e0e0e0e0e0e0e03030c0c0c010c0c0c02020202020203030202020202020202020202020c0c0c0c0c0d0d0d080808080e0e0e0e0e0e0e0101030c0c0c0c0c0c010c020203020203030202020202030303020203030c0c0c0c030d0d0d0d0c0c0e080e0e0e0e0e0e020c0c0c0c0c0c010c010c0c020203030303030303030303030303030303030c0c0c0c030d0d0d0d0c0e0e0e0e0e0e0e0e08080c0c0c0c0c0c010c0c0c0d0d0d0303030202020202020203020203030303030c0c02030d0d0d030c0c0e0e0e0e0e0e0808080c0c01010103030c0c0d0d0d0d0203030203020203020202030203020203030c0c020d0d0d0d03030201010e0e0e0c080808080c0c0c0c03030c0d0d0d0202030203020303020e020203020203020202020c0c0c0c0d0c0c0c03080808080c0c0c0808080808020202020d0d0d0d0d0102020202030302040404040e0202030203020c0c0c0c0c0d0c0c0c02080808080c0c0c0c080808080202020202020d0d0d010103020203020e0404040e0e0e02020202020c0c0c0c0c0d0c0c0c03080808080c0c0c0d0c0101080c02020202020d0d02020102030203030204040404020202030203030202020c0c0c0d0d0d0d0d0d0d0808080d0d0d0c0c0c0c0c0202020201010202020203020303020e0e0e03030303030302030c0c0c0c0c0c0d0d0101010d0d0808080d0d0d0d0c0c0c0c0c0d0303010202020202030202030302030202030302030302020c0c0c0c0c0c0d0d0d0d0d0d030801010d0d0d0d01010c0c0c0c0c02020202020202020203020303030303030303020303020c0c0c0c0c01010d0d0d0d01010108080d080808080d0c0202020c0202020202020d0d0202020202030303030302020303030c0c0c0c0c0102020202020d0d0d0d0d0d080808080d0d0202020c0202020202020d0d0d02030202020303030202030303030c0c0c08010102020202020d0d0d0d0d0d0808080801010202020c0302020202020d0d0d0302020202020303020202020203030c0c01010d02020202020d0d0d020201010101010101010101010302020202020d0d0d0d02030202020303030203020303030c0c01010d0d0d0d0d0d0d0d020202010101010301010102010102020202020202020d0d0202030303030202020d020302030c0c01010c0c0c0c0c0c0c0c02020c0c0c0c010101010101010102030202020203020d0d0d0203030302020202050607030c0c0c0c0c0c0c0c0c0c0c0c0c02020c0c0c0c010101010101010c0c030c0c0c0c0d0d0d0d0d0d0d0d0303030203010c0b030c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c030101010e0101010c0c0c0c0c0c0c0d0d02020d0d0d020d0d02020303090a030c0c0c01020102010c0303030c0303030c0c0301010e0e0e03080c0c0c0c0c0c0c0d0d0d0d02020d0d0202020203030303020c0c0c0c0c0c0c0c0c0303030c0303030c0c0101010e0e0e0e0e0c0c0c0c0c0c0c030303030303030d0d0203030303030303030303030303030303030303080303030801010101010e0e0e0e0c0c0c0c0c0c0c030303030303080c0c0c03030101010201010202020103030303030c0c0c0c0c080801010101010e0e0e0e0e0c0c0c0c0c0c0303030c0c0c080c0c0c08010303020201020202020808080303030c0c0c0c0c020201010101080e0202020c0c0c0c0c0c0c0303020c0c0c08080808080103030302020202010101010101010c0c0c0c0c0c02020101010101020202020202020c0c0c0c0303020c0c0c03030302020803030302020201010101010101010c0c0c0c0c0c020201010101010101020c0c0c0c0c0c0c0c03030202030303030303010808010101010101010101010101010c0c0c0808080808010101010101010c0c0c0c0c0c0c0c08030303020303020303030c0808010101010101010101080808080303030303010101010101010101010c0c0c0c0c0c0c0c03030303030302020303020202030101010101010101080808080303030303030101010101010101030303030c0c0c0c0c03030303030303030303030303030303030303030308080803030303030303030301010101010101030303030303030303030303`, img`
        ..................................................
        ..................................................
        ..................................................
        .....................................2.2.2........
        .....................................22222........
        .....................................22222........
        .....................................2...2........
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `, [myTiles.tile0,sprites.castle.tilePath4,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass1,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass3,sprites.dungeon.floorDark0,sprites.dungeon.floorDark2,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,sprites.dungeon.floorDark3,sprites.dungeon.doorLockedNorth,myTiles.tile5], TileScale.Sixteen))
    for (let index = 0; index < 10; index++) {
        foodList = sprites.create(img`
            b b b b b b b b b b b b b b b b 
            b c b b b b b b b b b b b b c b 
            b b b e 1 1 1 1 1 1 1 1 e b b b 
            b b e 1 1 1 1 1 1 1 1 1 1 e b b 
            b b 1 1 1 1 1 2 2 1 1 1 1 1 b b 
            b b 1 1 1 1 1 2 2 1 1 1 1 1 b b 
            b b 1 1 1 2 2 2 2 2 2 1 1 1 b b 
            b b 1 1 1 2 2 2 2 2 2 1 1 1 b b 
            b b 1 1 1 1 1 2 2 1 1 1 1 1 b b 
            b b 1 1 1 1 1 2 2 1 1 1 1 1 b b 
            b b 1 1 1 1 1 1 1 1 1 1 1 1 b b 
            b b 4 1 1 1 1 1 1 1 1 1 d 4 b b 
            b b c 4 d d d d d d d d 4 c b b 
            b b b c c c c c c c c c c b b b 
            b c b b b b b b b b b b b b c b 
            b b b b b b b b b b b b b b b b 
            `, SpriteKind.Food)
    }
    for (let value2 of sprites.allOfKind(SpriteKind.Food)) {
        randomY = randint(10, 780)
        randomX = randint(10, 780)
        tiles.setWallAt(tiles.getTileLocation(SpritePositionCol(randomX), SpritePositionRow(randomY)), false)
        value2.setPosition(randomX, randomY)
    }
    for (let index = 0; index < 10; index++) {
        treasureList = sprites.create(img`
            . b b b b b b b b b b b b b b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b 9 5 5 2 5 b c c b 5 5 5 2 5 b 
            b 9 5 d d 9 9 b b 5 9 5 d 2 5 b 
            b 5 2 2 5 9 9 5 5 5 d 5 5 d 5 b 
            b 5 5 5 5 d c d c 5 5 2 2 5 2 b 
            b b b b b b b b b b b b b b b b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.treasure)
    }
    for (let value3 of sprites.allOfKind(SpriteKind.treasure)) {
        randomY = randint(10, 780)
        randomX = randint(10, 780)
        tiles.setWallAt(tiles.getTileLocation(SpritePositionCol(randomX), SpritePositionRow(randomY)), false)
        value3.setPosition(randomX, randomY)
    }
    for (let index = 0; index < 15; index++) {
        LT1 = sprites.create(img`
            ......cc66......
            .....c6576c.....
            ....c677576c....
            ....cc677666....
            ...cc6c6667cc...
            ..6c666777cc6c..
            ..c76666766776..
            ..c6777777776c..
            ..cc67777776cc..
            .c67cc76676676c.
            .c777666667777c.
            .c6777777777766.
            .cc7767776776666
            c676cc6766666776
            c777766666677776
            cc7777777777776c
            .c676777677767c.
            ..cc667666766c..
            ...ccc6c66ccc...
            .....cccccc.....
            .......ee.......
            ......eeee......
            .....eeeeee.....
            .......ee.......
            `, SpriteKind.treeList)
        LT2 = sprites.create(img`
            ................86..................
            ...........6688867886...............
            ...........8666877688868............
            ............868777767768............
            .........688667777776688............
            ........67767777777778666...........
            .........6776667767666868...........
            ..........866667667677688...........
            .........8666666666667778...........
            ........667766666666666676..........
            .......67766667666776667776.........
            ......886667776676777666688.........
            .....67766777667767777666768........
            ....6776666666777667776666776.......
            .....8667776667766676677776776......
            ......8777666666667776777776688.....
            ....6887766776677677777777776776....
            ..8866666677767777777777766666778...
            .86666666777667767777766666776668...
            ..88677666666777677677666667776668..
            ..86776677666666666666667776666668..
            886666677766667666666776677766668...
            6668666676667766767767766677666668..
            88866666666777677677667666666776668.
            .86668866666766776776666667766666668
            .86688666666666776666667667776666688
            .668866666666666666666677666666688..
            ..8866686666666666677667776666668...
            ...866886666666666677667776666668...
            ...86886668666666667666666666888....
            ....88866886686666666666666668......
            ......86886668666866668666868.......
            ......88866688668866688866888.......
            ........8888888688888ce868..........
            ..............e88e88.ec.8...........
            ...............eeee..e..............
            ...............ceef.ce..............
            ...............ceefcec..............
            ...............feefce...............
            ...............fceeec...............
            ...............ffceec...............
            `, SpriteKind.treeList)
        LT3 = sprites.create(img`
            ...............cc...............
            ............ccc65c66............
            ............c6c55c76............
            ...........6cc7557c66...........
            ..........cc77777577c6..........
            .........666c677776cc66.........
            ........c7776c7c67657576........
            ........ccc666c666655666........
            ......c66cc7666667777c6766......
            .....c777c77667667767767776.....
            .....cc66cccc77c677cc666666.....
            ....c6766666c7c6767677777766....
            ...cc777666666677767777667c66...
            .666cc6677666667777777776677666.
            .67776677c676677777776677677776.
            cc6666ccc67767776777776cc7767666
            c666777667766776c776777c67776c66
            .c6777666ccc667c676cc666667776c.
            .cc6666766666cc66666666776cc666.
            ...66776c666666666677667766cccc.
            ...cc76c66766666667677667776c...
            ...6cccc677666666776777c77666...
            ......6ccc7c67767776c776cc......
            ........ccc6777c67776cc6........
            ...........cc77c67766...........
            .............6c6666.............
            ............ffeeeef.............
            ..........ffeeeeeeeef...........
            .............feeeffe............
            ..............fef...............
            ..............fef...............
            ...............f................
            `, SpriteKind.treeList)
    }
    for (let index = 0; index < 15; index++) {
        ST1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . c c c c 6 . . . . . 
            . . . . c c 6 7 7 5 5 6 6 . . . 
            . . c c 6 6 6 6 7 5 5 7 c c . . 
            . c 6 6 6 7 7 7 7 7 7 5 6 c c . 
            . c 6 6 7 7 7 5 7 6 7 7 7 6 c c 
            c 6 6 7 7 6 7 7 7 6 7 7 6 6 6 c 
            c c 6 6 6 7 6 7 6 6 6 6 5 7 6 c 
            c c c c 6 7 7 6 7 7 7 6 7 6 6 c 
            . c c 6 6 6 6 c 6 6 6 6 6 c c c 
            . c c 6 6 c 6 6 c 6 c 6 6 c c . 
            . . c c f f 6 6 c f f c c f . . 
            . . . . c f c c c f c f f . . . 
            . . . . . 4 f f f c . e . . . . 
            . . . . . . e e e . . 4 . . . . 
            . . . . . . . e e . e . . . . . 
            `, SpriteKind.smallTree)
        ST2 = sprites.create(img`
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . c 6 7 7 6 c . . . . . 
            . . . . c 6 7 5 7 7 6 c . . . . 
            . . 6 6 c c 6 5 5 6 c c 6 6 . . 
            6 6 6 5 5 5 6 7 5 6 5 5 7 6 6 6 
            6 6 7 7 7 5 7 6 7 5 5 7 7 7 7 6 
            . c c c 6 6 7 6 6 5 7 6 c c 6 . 
            6 c 6 6 6 6 6 c c 6 6 6 6 6 c 6 
            6 6 7 7 7 c c c c c c 7 7 7 6 6 
            6 7 7 7 6 6 c c c c 6 6 7 7 7 6 
            c 6 c c 6 7 6 c c 6 7 6 c c 6 c 
            . c c 5 5 7 6 7 7 6 7 5 5 c c . 
            . c 6 7 5 5 6 7 7 6 5 5 7 6 c . 
            . 6 6 7 7 6 6 5 5 6 6 7 7 6 6 . 
            . . 6 6 6 6 c 6 7 6 c 6 6 6 . . 
            . . . 6 6 c . 6 6 6 . c 6 . . . 
            `, SpriteKind.smallTree)
        ST3 = sprites.create(img`
            . . . . . . . c c . . . . . . . 
            . . . . c c c 6 5 c 6 6 . . . . 
            . . . . c 6 c 5 5 c 7 6 . . . . 
            . . . 6 c c 7 5 5 7 c 6 6 . . . 
            . . c c 7 7 7 7 7 5 7 7 c 6 . . 
            . 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
            c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
            c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
            . c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
            . c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
            . c c c c 7 7 6 f 7 7 c c c c . 
            . . . . c 7 c f f c 7 c . . . . 
            . . . . . 6 f e e e c . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e . e e . e e . . . . 
            . . . . . . . e e . . . . . . . 
            `, SpriteKind.smallTree)
    }
    for (let value4 of sprites.allOfKind(SpriteKind.treeList)) {
        tiles.placeOnTile(value4, tiles.getTileLocation(SpritePositionCol(randint(0, 780)), SpritePositionRow(randint(0, 780))))
    }
    for (let value5 of sprites.allOfKind(SpriteKind.smallTree)) {
        randomY = randint(10, 780)
        randomX = randint(10, 780)
        tiles.placeOnTile(value5, tiles.getTileLocation(SpritePositionCol(randomX), SpritePositionRow(randomY)))
        tiles.setWallAt(tiles.getTileLocation(SpritePositionCol(randomX), SpritePositionRow(randomY)), true)
    }
    for (let index = 0; index < 15; index++) {
        Rock1 = sprites.create(img`
            . . . . . . . . . b b b b . . . 
            . . . . . . b b b d d d d b . . 
            . . . . . . b d d d d d d b . . 
            . . . . b b d d d d d b b d . . 
            . . . . b d d d d d d b b d b . 
            . . . . c d d d d d b b d b c . 
            . . . b c c b b b b d d b c c . 
            . . b b c c c b d d b c c c c . 
            . b b d d d b b b b b b c c c c 
            . c d d d d d d b d b c c c b c 
            . c b d d d b b d b c c c b b c 
            c b c c c c b d d b b b b b c c 
            c c b b b d d b c c b b b b c c 
            c c c c c c c c c b b b b c c . 
            . c c c c b b b b b b b c c . . 
            . . . . c c c c c c c c . . . . 
            `, SpriteKind.rock)
        Rock2 = sprites.create(img`
            . . . . . c c b b b . . . . . . 
            . . . . c b d d d d b . . . . . 
            . . . . c d d d d d d b b . . . 
            . . . . c d d d d d d d d b . . 
            . . . c b b d d d d d d d b . . 
            . . . c b b d d d d d d d b . . 
            . c c c c b b b b d d d b b b . 
            . c d d b c b b b b b b b b d b 
            c b b d d d b b b b b d d b d b 
            c c b b d d d d d d d b b b d c 
            c b c c c b b b b b b b d d c c 
            c c b b c c c c b d d d b c c b 
            . c c c c c c c c c c c b b b b 
            . . c c c c c b b b b b b b c . 
            . . . . . . c c b b b b c c . . 
            . . . . . . . . c c c c . . . . 
            `, SpriteKind.rock)
        Rock3 = sprites.create(img`
            . . b d b . . . . . b b b b . . 
            . c b d d b . . . b b d d d b . 
            . b c c b . . . b c d d d d b . 
            . . . . . . b b c c b d b b b . 
            . . . . . b d d b c c b b b c . 
            . . b b b c d d b b c c c c . . 
            . b d d d b c b b c . . . . . . 
            c b d d d d c c c c . b b b . . 
            c c b b b b c c c . b d d d b . 
            . c c c b b . . b c b b d d b b 
            . b b . . . . . b c c b b b b . 
            b d d b b . . . . . c c c b . . 
            b b d d b c . . b b b b b b b . 
            . b c c c b . b d d d b b c b . 
            . . . . . . b d d d b c c b . . 
            . . . . . . b b b c c c b . . . 
            `, SpriteKind.rock)
    }
    for (let value6 of sprites.allOfKind(SpriteKind.rock)) {
        randomY = randint(10, 780)
        randomX = randint(10, 780)
        tiles.placeOnTile(value6, tiles.getTileLocation(SpritePositionCol(randomX), SpritePositionRow(randomY)))
        tiles.setWallAt(tiles.getTileLocation(SpritePositionCol(randomX), SpritePositionRow(randomY)), true)
    }
    myHospital = sprites.create(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4eeeeeeeeee44ee66c4eddddddde666
        666edffdffde4c66f4e11111111ef4ee66c4edffdffde666
        666edccdccde4c66f4e11122111eeeee66c4edccdccde666
        666eddddddde4c66f4e11122111eeeee66c4eddddddde666
        c66edffdffde4c66e4e12222221e44ee66c4edffdffde66c
        c66edccdccde4c66e4e12222221e44ee66c4edccdccde66c
        cc66666666664c66e4e11122111eeeee66c46666666666cc
        .c66444444444c66e4e11122111efffe66c44444444466c.
        ..c64eee4eee4c66f4e11111111e44fe66c4eee4eee46c..
        ...c4eee4eee4c66f4eeeeeeeeeeffee66c4eee4eee4c...
        ....644444444c66f4e44e44e44e44ee66c444444446....
        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
        `, SpriteKind.hospital)
    houseY = randint(20, 700)
    houseX = randint(20, 700)
    tiles.placeOnTile(myHospital, tiles.getTileLocation(SpritePositionCol(houseX), SpritePositionRow(houseY)))
    ClearObstacles()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.sword, function (sprite, otherSprite) {
    mySprite.say("I got the mighty SWORD!", 1000)
    WeaponAvailable.push(1)
    Weapons.push("sword")
    WeaponSpeed.push(200)
    WeaponReload.push(200)
    WeaponDamage.push(25)
    WeaponSprites.push(sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 9 9 . . . . . 
        . . . . . . . . 9 9 9 . . . . . 
        . . . . . . . 9 9 9 . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . e 9 9 9 . . . . . . . . 
        . . . . e e 9 . . . . . . . . . 
        . . . e e e e . . . . . . . . . 
        . . . e e . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile))
    WeaponSprites[WeaponSprites.length - 1].destroy()
    sword2.destroy()
    CurrentWeapon = WeaponSprites.length - 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    pause(WeaponReloadTime)
    projectile = sprites.createProjectileFromSprite(WeaponSprites[CurrentWeapon].image, mySprite, XshootingDirection, YShootingDirection)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    if (smallBossLife <= 0) {
        projectile.destroy()
        otherSprite.destroy(effects.fire, 500)
        music.baDing.play()
        info.changeScoreBy(1000)
        key = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . b b . . . . . b b b b b . 
            . . b 5 5 b . . . . b 5 b 5 b . 
            . b 5 5 5 5 b b b b b 5 b 5 b . 
            b 5 5 b b 5 5 5 5 5 5 5 5 5 b . 
            b 5 5 b b 5 5 5 5 5 5 5 5 5 b . 
            . b 5 5 5 5 b b b b b b b b b . 
            . . b 5 5 b . . . . . . . . . . 
            . . . b b . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.key)
        key.setPosition(smallBoss.x, smallBoss.y)
    } else {
        smallBossLife += -1 * WeaponDamage[CurrentWeapon]
        projectile.destroy()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BigBossProjectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(120)
})
function drawWalls () {
    for (let value7 of sprites.allOfKind(SpriteKind.smallTree)) {
        randomY = value7.y
        randomX = value7.x
        tiles.setWallAt(tiles.getTileLocation(SpritePositionCol(randomX), SpritePositionRow(randomY)), true)
        for (let value8 of sprites.allOfKind(SpriteKind.rock)) {
            randomY = value8.y
            randomX = value8.x
            tiles.setWallAt(tiles.getTileLocation(SpritePositionCol(randomX), SpritePositionRow(randomY)), true)
        }
    }
}
sprites.onOverlap(SpriteKind.key, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.say("I found the key!", 1000)
    key.destroy(effects.rings, 500)
    music.baDing.play()
    info.changeScoreBy(1000)
    havetheKey = 1
    tiles.setTilemap(tiles.createTilemap(hex`32003200030303020303030606060202030303030303030302020202020606060c0202020c0c0202020c0c0c02020202020203030c0c030101020303030606060101010203030303030302020202020606060c0202020c0c02020c0c0c0c0c0c0c02020203030c0c0302020203010102020202020202020203030c0c02020203030306060c0c0c0c0c0c0c0c0c0c0c0c0c0c0c02020202020202030202020c0c0c0202020202020202020202020c0c0c030303030303030c0c0c06060c0c0c100c100c100c02020202020102030202020c0c06020202010102020202020202020302030303030303030c0c0c0c060c0c0c1112141212020202020202020203030101010c060c0c0c0c0c0c0c0202030202020202020203030303030c0c0c0c060c0c0c1213110f0f0202020101030303010103030c0c0c0c0c0c0c030c0c0603030202020202020202020c0c030c0c0c0c0c0c0c0c0f0f150f1102020201010303030303030c0c0c0c0c0c0c0c0d0d0206030303020c0202020202020202020c0c0c0c0c0c030c0c0c0602020e0e0e0e010303030303030c0c010101010d0d0d0d0d0d0303030c0c0c0c0c0c020202020202020c0c0c0c0c0c0c0c0c03030e0e0e0e010102020c0c0c0101010c0c0d0d01010d0d0d0d0d0d0c0c0c0c0c0c030208080802020202020c0c0c0c0c0c030e0e0e0e0e0e0102020c0c0c0101010c0c0c0c0c0101010d0d0d0c0c0c0c0c0c0c080108080802020202020c0c0c0c0c0c0e0e0e0e0e0e0101020202020101010202020c0c0c0808080d0d0d0c0c0c0c0c0808080108080801030202020c0c0c0c0c0e0e0e0e0e0e0e0101020202020201010202020201010808080c0c0c0c0c0c0c0c0c0c0c030808080d0d0d0d01020c0c0c0e0e0e0e0e0e0e0e01010102020202010102020202010101010c0c0101010c0c0c0c0c0c0c0d0d0d0d0d0d0d0d0102030e0e0e0e0e0e0e0e0e0101020202020202010202020202010101010202020c0c0c0c0c0c0c0c0c0c0d0d0d0d0d0d0d0d0d0e0e0e0e0e0e0e0e0e0e0c0c0102020203020202030202010101020202020202020808080808080c0c0c0c0d0d030d0d0d0d0e0e0e04040e0e0e0e0c0c0c0202020202020202020302020101020202020202020208080808080c0c0c0c0c0d0d0d0d0d0d0e0e0e04040e0e0e0c0c0c0c02020202020202020202020201030202020203020202030c0808080c0c0c0c0c0c0c0c0c0c0e0e0e0e040e0e0e0c0c0c0101010202020202020202020202020202020202020202020201010101010c0808080c0c0c0c0e0e0e0e0e0e0e030c0c0c0c0c0102020202020203020202020202020202020202020202020101010c0d0d080303080c0e0e0e0e0e0e0e0e03030c0c0c010c0c0c02020202020203030202020202020202020202020c0c0c0c0c0d0d0d080808080e0e0e0e0e0e0e0101030c0c0c0c0c0c010c020203020203030202020202030303020203030c0c0c0c030d0d0d0d0c0c0e080e0e0e0e0e0e020c0c0c0c0c0c010c010c0c020203030303030303030303030303030303030c0c0c0c030d0d0d0d0c0e0e0e0e0e0e0e0e08080c0c0c0c0c0c010c0c0c0d0d0d0303030202020202020203020203030303030c0c02030d0d0d030c0c0e0e0e0e0e0e0808080c0c01010103030c0c0d0d0d0d0203030203020203020202030203020203030c0c020d0d0d0d03030201010e0e0e0c080808080c0c0c0c03030c0d0d0d0202030203020303020e020203020203020202020c0c0c0c0d0c0c0c03080808080c0c0c0808080808020202020d0d0d0d0d0102020202030302040404040e0202030203020c0c0c0c0c0d0c0c0c02080808080c0c0c0c080808080202020202020d0d0d010103020203020e0404040e0e0e02020202020c0c0c0c0c0d0c0c0c03080808080c0c0c0d0c0101080c02020202020d0d02020102030203030204040404020202030203030202020c0c0c0d0d0d0d0d0d0d0808080d0d0d0c0c0c0c0c0202020201010202020203020303020e0e0e03030303030302030c0c0c0c0c0c0d0d0101010d0d0808080d0d0d0d0c0c0c0c0c0d0303010202020202030202030302030202030302030302020c0c0c0c0c0c0d0d0d0d0d0d030801010d0d0d0d01010c0c0c0c0c02020202020202020203020303030303030303020303020c0c0c0c0c01010d0d0d0d01010108080d080808080d0c0202020c0202020202020d0d0202020202030303030302020303030c0c0c0c0c0102020202020d0d0d0d0d0d080808080d0d0202020c0202020202020d0d0d02030202020303030202030303030c0c0c08010102020202020d0d0d0d0d0d0808080801010202020c0302020202020d0d0d0302020202020303020202020203030c0c01010d02020202020d0d0d020201010101010101010101010302020202020d0d0d0d02030202020303030203020303030c0c01010d0d0d0d0d0d0d0d020202010101010301010102010102020202020202020d0d0202030303030202020d020302030c0c01010c0c0c0c0c0c0c0c02020c0c0c0c010101010101010102030202020203020d0d0d0203030302020202050607030c0c0c0c0c0c0c0c0c0c0c0c0c02020c0c0c0c010101010101010c0c030c0c0c0c0d0d0d0d0d0d0d0d0303030203010c0b030c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c030101010e0101010c0c0c0c0c0c0c0d0d02020d0d0d020d0d02020303090a030c0c0c01020102010c0303030c0303030c0c0301010e0e0e03080c0c0c0c0c0c0c0d0d0d0d02020d0d0202020203030303020c0c0c0c0c0c0c0c0c0303030c0303030c0c0101010e0e0e0e0e0c0c0c0c0c0c0c030303030303030d0d0203030303030303030303030303030303030303080303030801010101010e0e0e0e0c0c0c0c0c0c0c030303030303080c0c0c03030101010201010202020103030303030c0c0c0c0c080801010101010e0e0e0e0e0c0c0c0c0c0c0303030c0c0c080c0c0c08010303020201020202020808080303030c0c0c0c0c020201010101080e0202020c0c0c0c0c0c0c0303020c0c0c08080808080103030302020202010101010101010c0c0c0c0c0c02020101010101020202020202020c0c0c0c0303020c0c0c03030302020803030302020201010101010101010c0c0c0c0c0c020201010101010101020c0c0c0c0c0c0c0c03030202030303030303010808010101010101010101010101010c0c0c0808080808010101010101010c0c0c0c0c0c0c0c08030303020303020303030c0808010101010101010101080808080303030303010101010101010101010c0c0c0c0c0c0c0c03030303030302020303020202030101010101010101080808080303030303030101010101010101030303030c0c0c0c0c03030303030303030303030303030303030303030308080803030303030303030301010101010101030303030303030303030303`, img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `, [myTiles.tile0,sprites.castle.tilePath4,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass1,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass3,sprites.dungeon.floorDark0,sprites.dungeon.floorDark2,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,sprites.dungeon.floorDark3,sprites.dungeon.doorLockedNorth,myTiles.tile5], TileScale.Sixteen))
    drawWalls()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.treasure, function (sprite, otherSprite) {
    music.magicWand.play()
    mySprite.say("I found a reward!", 2500)
    mySprite.startEffect(effects.rings, 500)
    info.changeScoreBy(100)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Orb, function (sprite, otherSprite) {
    if (OrbLife <= 0) {
        projectile.destroy()
        otherSprite.destroy(effects.fire, 500)
        music.baDing.play()
        info.changeScoreBy(1500)
    } else {
        OrbLife += -1 * WeaponDamage[CurrentWeapon]
        projectile.destroy()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fire, function (sprite, otherSprite) {
    mySprite.say("I got the FIRE!", 1000)
    WeaponAvailable.push(1)
    Weapons.push("fire")
    WeaponSpeed.push(110)
    WeaponReload.push(800)
    WeaponDamage.push(200)
    WeaponSprites.push(sprites.create(img`
        . . 4 2 4 . . . . . 4 4 4 4 . . 
        . 5 4 2 2 4 . . . 4 4 2 2 2 4 . 
        . 4 5 5 4 . . . 4 5 2 2 2 2 4 . 
        . . . . . . 4 4 5 5 4 2 4 4 4 . 
        . . . . . 4 2 2 4 5 5 4 4 4 5 . 
        . . 4 4 4 5 2 2 4 4 5 5 5 5 . . 
        . 4 2 2 2 4 5 4 4 5 . . . . . . 
        5 4 2 2 2 2 5 5 5 5 . 4 4 4 . . 
        5 5 4 4 4 4 5 5 5 . 4 2 2 2 4 . 
        . 5 5 5 4 4 . . 4 5 4 4 2 2 4 4 
        . 4 4 . . . . . 4 5 5 4 4 4 4 . 
        4 2 2 4 4 . . . . . 5 5 5 4 . . 
        4 4 2 2 4 5 . . 4 4 4 4 4 4 4 . 
        . 4 5 5 5 4 . 4 2 2 2 4 4 5 4 . 
        . . . . . . 4 2 2 2 4 5 5 4 . . 
        . . . . . . 4 4 4 5 5 5 4 . . . 
        `, SpriteKind.Projectile))
    WeaponSprites[WeaponSprites.length - 1].destroy()
    fire2.destroy(effects.fire, 1000)
    CurrentWeapon = WeaponSprites.length - 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass3, function (sprite, location) {
    mySprite.say("I AM GETTING WET!", 1000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    mySprite.say("It's Lava!!!", 1000)
    game.over(false)
})
function StartMenu () {
    startScreen = 0
    mySprite2 = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f 7 7 f f 6 f . . . 
        . . f 6 f 7 f 7 7 f 7 f 6 f . . 
        . . f 6 f 7 3 7 7 3 7 f 6 f . . 
        . . f 6 6 f 7 7 7 7 f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f 7 3 5 3 3 5 3 7 f f . . 
        . . f 7 7 f 3 5 5 3 f 7 7 f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(80, 110)
    tiles.setTilemap(tiles.createTilemap(hex`0a0008000505050505050505050505050505050505050505050101020101020101050502060403040407020505010706070406080105050201010201020201050505050505050505050505050505050505050505`, img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.dungeon.hazardLava1,sprites.dungeon.hazardLava0,sprites.dungeon.floorLight0,sprites.dungeon.floorLight4,sprites.dungeon.floorLight2,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight1,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen))
    mySprite2.setPosition(80, 60)
    pause2 = 3000
    mySprite2.say("I am the ZOMBIE QUEEN!", pause2)
    pause(pause2)
    pause2 = 6000
    mySprite2.say("The King is dead and my minioms have taken over the kindgdom", pause2)
    pause(pause2)
    mySprite2.say("I am locked in my castle protected by the magic stone", pause2)
    pause(pause2)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f 7 7 f f 6 f . . . 
        . . f 6 f 7 f 7 7 f 7 f 6 f . . 
        . . f 6 f 7 3 7 7 3 7 f 6 f . . 
        . . f 6 6 f 7 7 7 7 f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f 3 3 5 3 3 5 3 7 f f . . 
        . . . f 7 f 3 5 5 3 f f 7 f . . 
        . . . f 7 f 3 3 3 3 3 f f . . . 
        . . . f f 3 5 3 3 5 3 3 f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . . . . . . f f . . . . . 
        `,img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f 7 7 f f 6 f . . . 
        . . f 6 f 7 f 7 7 f 7 f 6 f . . 
        . . f 6 f 7 3 7 7 3 7 f 6 f . . 
        . . f 6 6 f 7 7 7 2 f 6 6 f . . 
        . f 6 6 f 3 f f f f 2 f 6 6 2 . 
        . . f f 3 3 5 3 3 5 3 2 f 2 . . 
        . . . f 7 f 3 5 5 3 f f 2 f . . 
        . . . f 7 f 3 3 3 3 3 2 f 2 . . 
        . . . f f 3 5 3 3 5 2 3 f . 2 . 
        . . . . f f f f f f f f f . . . 
        . . . . . . . . . f f . . . . . 
        `],
    1000,
    true
    )
    mySprite2.say("Be Gone!", pause2)
    pause(1000)
    mySprite.startEffect(effects.coolRadial, 3500)
    pause(3500)
    startScreen = 1
}
function MainGame () {
    mySprite2.destroy()
    scene.cameraFollowSprite(mySprite)
    fire2 = sprites.create(img`
        . . 4 2 4 . . . . . 4 4 4 4 . . 
        . 5 4 2 2 4 . . . 4 4 2 2 2 4 . 
        . 4 5 5 4 . . . 4 5 2 2 2 2 4 . 
        . . . . . . 4 4 5 5 4 2 4 4 4 . 
        . . . . . 4 2 2 4 5 5 4 4 4 5 . 
        . . 4 4 4 5 2 2 4 4 5 5 5 5 . . 
        . 4 2 2 2 4 5 4 4 5 . . . . . . 
        5 4 2 2 2 2 5 5 5 5 . 4 4 4 . . 
        5 5 4 4 4 4 5 5 5 . 4 2 2 2 4 . 
        . 5 5 5 4 4 . . 4 5 4 4 2 2 4 4 
        . 4 4 . . . . . 4 5 5 4 4 4 4 . 
        4 2 2 4 4 . . . . . 5 5 5 4 . . 
        4 4 2 2 4 5 . . 4 4 4 4 4 4 4 . 
        . 4 5 5 5 4 . 4 2 2 2 4 4 5 4 . 
        . . . . . . 4 2 2 2 4 5 5 4 . . 
        . . . . . . 4 4 4 5 5 5 4 . . . 
        `, SpriteKind.fire)
    sword2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 9 9 . . . . . 
        . . . . . . . . 9 9 9 . . . . . 
        . . . . . . . 9 9 9 . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . e 9 9 9 . . . . . . . . 
        . . . . e e 9 . . . . . . . . . 
        . . . e e e e . . . . . . . . . 
        . . . e e . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.sword)
    startRow = randint(2, 48)
    startCol = randint(2, 48)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(startCol, startRow))
    controller.moveSprite(mySprite)
    fireColumn = randint(2, 48)
    fireRow = randint(2, 48)
    tiles.placeOnTile(fire2, tiles.getTileLocation(fireColumn, fireRow))
    swordCol = randint(2, 48)
    swordRow = randint(2, 48)
    tiles.placeOnTile(sword2, tiles.getTileLocation(swordCol, swordRow))
    info.setScore(0)
    info.setLife(5)
    Mylife = 5
    MonsterGenerator = [randint(20, 90), randint(700, 720)]
    HospitalVisits = 0
    Weapons = ["rock"]
    WeaponAvailable = [1]
    WeaponSpeed = [100]
    WeaponReload = [400]
    WeaponDamage = [15]
    CurrentWeapon = 0
    WeaponSprites = sprites.allOfKind(SpriteKind.Projectile)
    WeaponSprites.push(sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . c a f b c . . . . . . . 
        . . . . b f f b c c . . . . . . 
        . . . a a f b a b a c . . . . . 
        . . . c a c b b f f b . . . . . 
        . . . . b f f b f a b . . . . . 
        . . . . a f f b b b a . . . . . 
        . . . . . a b b c c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile))
    WeaponSprites[WeaponSprites.length - 1].destroy()
    startScreen = 100
    drawMap()
    havetheKey = 0
}
function SpritePositionRow (num: number) {
    return Math.round(Math.abs(num - 7)) / 16
}
function ClearObstacles () {
    castleY = 96
    castleX = 626
    for (let value4 of sprites.allOfKind(SpriteKind.treeList)) {
        if (Math.abs(value4.x - houseX) < 60 && Math.abs(value4.y - houseY) < 60) {
            value4.destroy()
        } else if (Math.abs(value4.x - castleX) < 60 && Math.abs(value4.y - castleY) < 60) {
            value4.destroy()
        } else {
        	
        }
    }
    for (let value5 of sprites.allOfKind(SpriteKind.smallTree)) {
        if (Math.abs(value5.x - houseX) < 30 && Math.abs(value5.y - houseY) < 30) {
            value5.destroy()
        } else if (Math.abs(value5.x - castleX) < 30 && Math.abs(value5.y - castleY) < 30) {
            value5.destroy()
        } else {
        	
        }
    }
    for (let value6 of sprites.allOfKind(SpriteKind.rock)) {
        if (Math.abs(value6.x - houseX) < 60 && Math.abs(value6.y - houseY) < 60) {
            value6.destroy()
        } else if (Math.abs(value6.x - castleX) < 60 && Math.abs(value6.y - castleY) < 60) {
            value6.destroy()
        } else {
        	
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.magicWand.play()
    mySprite.say("More life!", 2500)
    mySprite.startEffect(effects.rings, 500)
    info.changeLifeBy(1)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    if (havetheKey == 1) {
        mySprite.say("I'm IN!", 1000)
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000409120a0a0a0a120a020c0101010101010101060f1313131313131313100d0101010101010101060d01010101010101010b0f0101010101010101100c010101010101010106050711080e0e08110803`, img`
            2 2 2 2 2 2 2 2 2 2 
            2 . . . . . . . . 2 
            2 . . . . . . . . 2 
            2 . . . . . . . . 2 
            2 . . . . . . . . 2 
            2 . . . . . . . . 2 
            2 . . . . . . . . 2 
            2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,sprites.dungeon.floorLight2,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.stairNorth,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.hazardLava1], TileScale.Sixteen))
        mySprite.setPosition(80, 100)
        sprite_list2 = sprites.allOfKind(SpriteKind.Enemy)
        for (let value of sprite_list2) {
            value.destroy()
        }
        sprite_list2 = sprites.allOfKind(SpriteKind.rock)
        for (let value of sprite_list2) {
            value.destroy()
        }
        sprite_list2 = sprites.allOfKind(SpriteKind.smallTree)
        for (let value of sprite_list2) {
            value.destroy()
        }
        sprite_list2 = sprites.allOfKind(SpriteKind.treeList)
        for (let value of sprite_list2) {
            value.destroy()
        }
        zombieQueen = sprites.create(img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f 7 7 f f 6 f . . . 
            . . f 6 f 7 f 7 7 f 7 f 6 f . . 
            . . f 6 f 7 3 7 7 3 7 f 6 f . . 
            . . f 6 6 f 7 7 7 7 f 6 6 f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f f 7 3 5 3 3 5 3 7 f f . . 
            . . f 7 7 f 3 5 5 3 f 7 7 f . . 
            . . . f f 3 3 3 3 3 3 f f . . . 
            . . . f 3 3 5 3 3 5 3 3 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.BigBoss)
        zombieQueen.setPosition(100, 24)
        Orb = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . 6 6 6 5 5 6 6 6 . . . . 
            . . . 7 7 7 7 6 6 6 6 6 6 . . . 
            . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
            . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
            . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
            . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
            . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
            . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
            . . . 6 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 6 6 8 8 8 8 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Orb)
        Orb.setPosition(140, 24)
        OrbLife = 200
        QueenLife = 200
    } else {
        mySprite.say("It's locked!", 1000)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.BigBoss, function (sprite, otherSprite) {
    if (OrbLife > 0) {
        projectile.destroy(effects.coolRadial, 1000)
    } else {
        if (QueenLife <= 0) {
            projectile.destroy()
            otherSprite.destroy(effects.fire, 2000)
            music.baDing.play()
            info.changeScoreBy(1500)
            pause(2000)
            game.over(true, effects.confetti)
        } else {
            QueenLife += -1 * WeaponDamage[CurrentWeapon]
            projectile.destroy()
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (EnemyLife == 0) {
        projectile.destroy()
        otherSprite.destroy(effects.fire, 200)
        music.baDing.play()
        info.changeScoreBy(100)
    } else {
        let proyectileDamage = 0
        EnemyLife += proyectileDamage
        projectile.destroy()
    }
})
function SpritePositionCol (num2: number) {
    return Math.round(Math.abs(num2 - 8)) / 16
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(500)
})
let projectileOrb: Sprite = null
let projectileQueen: Sprite = null
let EnemyLife = 0
let QueenLife = 0
let Orb: Sprite = null
let zombieQueen: Sprite = null
let castleX = 0
let castleY = 0
let Mylife = 0
let swordRow = 0
let swordCol = 0
let fireRow = 0
let fireColumn = 0
let startCol = 0
let startRow = 0
let pause2 = 0
let mySprite2: Sprite = null
let startScreen = 0
let fire2: Sprite = null
let OrbLife = 0
let key: Sprite = null
let YShootingDirection = 0
let XshootingDirection = 0
let projectile: Sprite = null
let WeaponReloadTime = 0
let CurrentWeapon = 0
let sword2: Sprite = null
let WeaponSprites: Sprite[] = []
let WeaponDamage: number[] = []
let WeaponReload: number[] = []
let WeaponSpeed: number[] = []
let Weapons: string[] = []
let WeaponAvailable: number[] = []
let Rock3: Sprite = null
let Rock2: Sprite = null
let Rock1: Sprite = null
let ST3: Sprite = null
let ST2: Sprite = null
let ST1: Sprite = null
let LT3: Sprite = null
let LT2: Sprite = null
let LT1: Sprite = null
let treasureList: Sprite = null
let foodList: Sprite = null
let smallBossLife = 0
let smallBoss: Sprite = null
let myEnemy: Sprite = null
let value9 = 0
let HospitalVisits = 0
let houseY = 0
let houseX = 0
let doctor2: Sprite = null
let myHospital: Sprite = null
let sprite_list2: Sprite[] = []
let mySprite: Sprite = null
let randomY = 0
let MonsterGenerator: number[] = []
let randomX = 0
let pickGenerator = 0
let havetheKey = 0
StartMenu()
havetheKey = 1
let toggleNightDay = 0
game.onUpdateInterval(5000, function () {
    if (startScreen == 100 && havetheKey == 0) {
        GenerateMonsters()
    } else if (startScreen == 1) {
        MainGame()
    }
})
game.onUpdateInterval(randint(800, 1000), function () {
    if (QueenLife > 0 && havetheKey > 0) {
        projectileQueen = sprites.createProjectileFromSprite(img`
            . . 6 5 5 8 . . 
            . 6 5 5 8 . . . 
            . 8 5 8 . . 5 8 
            . 8 5 8 . 5 5 8 
            . . 8 6 8 8 8 . 
            . . . 8 6 8 . . 
            . 6 . . 8 5 8 . 
            . 6 6 8 5 5 8 . 
            . 8 8 5 5 8 . . 
            . 8 5 5 8 . . . 
            . 8 5 8 . . . . 
            . 8 5 8 . . . . 
            . . 8 6 8 . . . 
            . . . 5 6 5 . . 
            . . . 5 8 5 . . 
            . . . 6 5 . . . 
            `, zombieQueen, (mySprite.x - 100) * 1.25, 80)
        projectileQueen.setKind(SpriteKind.BigBossProjectile)
    }
})
game.onUpdateInterval(randint(900, 1100), function () {
    if (OrbLife > 0 && havetheKey > 0) {
        projectileOrb = sprites.createProjectileFromSprite(img`
            . . 6 6 6 6 . . 
            . 6 d 7 7 7 6 . 
            6 1 b 1 1 7 d 6 
            c 1 b b 7 7 1 c 
            . c b b b d c . 
            . . c c c c . . 
            `, Orb, randint(-100, 10), 80)
        projectileOrb.setKind(SpriteKind.BigBossProjectile)
    }
})
game.onUpdateInterval(60000, function () {
    if (toggleNightDay == 1 && havetheKey == 0) {
        tiles.setTilemap(tiles.createTilemap(hex`3200320004040404040404040404030304040403030303030505050304040404030404040404040404040404040404050505040404040404040404040404050505040404040303030303050505040404040404040404040404050404040404040405050504040404040404040404040405050504040404040404040405050504040404040404040404040404040404040404040505050404040505050504040404040505050404040404050404040404040404040405050504040404040405050504040404040404040404040505050404040404040404040404040505050404040404040404040505050404040404040505050404040404040404040404050505040303050505040404040404050505050504050404040404050505040404040404050505030303030303030303030305050404030305050505050404040405050505050404040403030505040404040404040403030305030303030303030305050505040405040505050505040404040505050505040404040403040404040404040404040303030303030202020203030505050504040404040505050504040404040405050504040404040404040405040404040404030305030303020202020303050504040404040404040404040404040405050504040404040404040404040404040404040403030303030202020202020305030404040404040404040405050404040505050404040405050505050404040404030305030303030302020202020203030503040404040404040404040404040404050505040404050505050404040404040403030503030303020202020202020303030303040404040404050404040404040404040404050505050505040404040404040303030303030202020202020202030303030305030405050504040404040404050504040505050505050404040404040404030303030202020202020202020303030303030303040505050404040505050404040404050505050504040303040404040503030302020202020202020202030304040405050504050505040404050505050505040505050504040404030304040404040303030202020101020202020303030404050505050405040404040405050505050505050505050404040405030303030303030303020202010102020203030503040404050505040404040404040405050505050505050504040404030303030503030303030202020201020202030303030303030303040404040404040404040404040405050505040404040403030303030303030302020202020202030303030303030303030404040404040404040404040404040505050404040404040303030303030302020202020202020303030303040404040404040505050404040404040404040404050404040404040404030303030303020202020202020303030404040404040404040404050505040404040404040404040404040404040404040403030303020302020202020203030304040404040404040404040405050504040404030303040404040404040404040404040503030202020202020202030303030404040404040405050504040404040404030303030303030303030304040404040404030303030202020202020303030303040404040404040505050404040404040303030303050303030503030404040404040403030303030302020203030303030405050504040404050505040303050303030302030303030303030404040404040404040303030503030303030303030303040505050404040404040404030303050303010101010203030305040404040404040504030303030303030303030303030505050505040404040404040405030503050301010102020203030504040404040404040403030303030303030503030305050505050504040404040404040303030303030101010103030305030404040404040404040404040404040403050303040505050505040404040404040404030303030303020202030303030303040404050505040404040404040404040303030505050505040404040404040404040404040503030303030303030303030404040405050504040404040404040404030303040404040404040405050504040404030404040303030303030305030303040404040505050504050404040404040404040404040404040404040505050404030303040404050303050505030303030404040404050505050504050404040404040404040504040404040404050505040303030303030303030303030303030304040404040404040404040404040404040404040404040404040404040404040303030303030303030503030303030303040404050404040505050404040404040404050404040404040404040404040403040404030303050303030303030303040404050504040404040405040404040405050504040404040405040403030303030304040403030303030303040404040404040404040404040404040504040505050404040404040303030503030305030303030404040303030304040504040404040505040404040404040405040505040405050504040404030303030303030303030303030303030303040404040404040404050505040404050505050505040404040505050403030303030303030303020303050303030305050504040404040404040404040405050504040404040404040404050505040303030503030303030202020303030303030505050404040405040404040504040404040404040404040404040404040404030505050505030303020202020203030503050505040404040504040405040404040404040404040404040404040404040403030505050503050303020202020303030303030304040404040404050504040404040404040404040404040404040403030303050505050303030302020202020303030303030404040404040404050505050404040404040404040505050404040303040404040404030303030203030303030303030303040404040404040405050505050404040404040404050505040404030305040404040405030303030303030303030303030304040404040404040505050505040404040404040405050504040403030504040303030303030303030305030505050503030404040404040404040405050504040404040404040404040404040404040305050503030503030303030305050505040403050303030304040404040404040404040404040404040404040404040404030505050503030303030505050505050504040303030303030303030303030404040404040404040404040404040404040403050505030505030303030303030303040404030303030305030303030303040404040303030303030303030303030303030303050303030303050303050303030303030303`, img`
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            `, [myTiles.tile0,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,myTiles.transparency16,myTiles.tile1,myTiles.tile2], TileScale.Sixteen))
        toggleNightDay = 0
    } else if (toggleNightDay == 0 && havetheKey == 0) {
        tiles.setTilemap(tiles.createTilemap(hex`32003200030303020303030606060202030303030303030302020202020606060c0202020c0c0202020c0c0c02020202020203030c0c030101020303030606060101010203030303030302020202020606060c0202020c0c02020c0c0c0c0c0c0c02020203030c0c0302020203010102020202020202020203030c0c02020203030306060c0c0c0c0c0c0c0c0c0c0c0c0c0c0c02020202020202030202020c0c0c0202020202020202020202020c0c0c030303030303030c0c0c06060c0c0c100c100c100c02020202020102030202020c0c06020202010102020202020202020302030303030303030c0c0c0c060c0c0c1112141212020202020202020203030101010c060c0c0c0c0c0c0c0202030202020202020203030303030c0c0c0c060c0c0c1213110f0f0202020101030303010103030c0c0c0c0c0c0c030c0c0603030202020202020202020c0c030c0c0c0c0c0c0c0c0f0f150f1102020201010303030303030c0c0c0c0c0c0c0c0d0d0206030303020c0202020202020202020c0c0c0c0c0c030c0c0c0602020e0e0e0e010303030303030c0c010101010d0d0d0d0d0d0303030c0c0c0c0c0c020202020202020c0c0c0c0c0c0c0c0c03030e0e0e0e010102020c0c0c0101010c0c0d0d01010d0d0d0d0d0d0c0c0c0c0c0c030208080802020202020c0c0c0c0c0c030e0e0e0e0e0e0102020c0c0c0101010c0c0c0c0c0101010d0d0d0c0c0c0c0c0c0c080108080802020202020c0c0c0c0c0c0e0e0e0e0e0e0101020202020101010202020c0c0c0808080d0d0d0c0c0c0c0c0808080108080801030202020c0c0c0c0c0e0e0e0e0e0e0e0101020202020201010202020201010808080c0c0c0c0c0c0c0c0c0c0c030808080d0d0d0d01020c0c0c0e0e0e0e0e0e0e0e01010102020202010102020202010101010c0c0101010c0c0c0c0c0c0c0d0d0d0d0d0d0d0d0102030e0e0e0e0e0e0e0e0e0101020202020202010202020202010101010202020c0c0c0c0c0c0c0c0c0c0d0d0d0d0d0d0d0d0d0e0e0e0e0e0e0e0e0e0e0c0c0102020203020202030202010101020202020202020808080808080c0c0c0c0d0d030d0d0d0d0e0e0e04040e0e0e0e0c0c0c0202020202020202020302020101020202020202020208080808080c0c0c0c0c0d0d0d0d0d0d0e0e0e04040e0e0e0c0c0c0c02020202020202020202020201030202020203020202030c0808080c0c0c0c0c0c0c0c0c0c0e0e0e0e040e0e0e0c0c0c0101010202020202020202020202020202020202020202020201010101010c0808080c0c0c0c0e0e0e0e0e0e0e030c0c0c0c0c0102020202020203020202020202020202020202020202020101010c0d0d080303080c0e0e0e0e0e0e0e0e03030c0c0c010c0c0c02020202020203030202020202020202020202020c0c0c0c0c0d0d0d080808080e0e0e0e0e0e0e0101030c0c0c0c0c0c010c020203020203030202020202030303020203030c0c0c0c030d0d0d0d0c0c0e080e0e0e0e0e0e020c0c0c0c0c0c010c010c0c020203030303030303030303030303030303030c0c0c0c030d0d0d0d0c0e0e0e0e0e0e0e0e08080c0c0c0c0c0c010c0c0c0d0d0d0303030202020202020203020203030303030c0c02030d0d0d030c0c0e0e0e0e0e0e0808080c0c01010103030c0c0d0d0d0d0203030203020203020202030203020203030c0c020d0d0d0d03030201010e0e0e0c080808080c0c0c0c03030c0d0d0d0202030203020303020e020203020203020202020c0c0c0c0d0c0c0c03080808080c0c0c0808080808020202020d0d0d0d0d0102020202030302040404040e0202030203020c0c0c0c0c0d0c0c0c02080808080c0c0c0c080808080202020202020d0d0d010103020203020e0404040e0e0e02020202020c0c0c0c0c0d0c0c0c03080808080c0c0c0d0c0101080c02020202020d0d02020102030203030204040404020202030203030202020c0c0c0d0d0d0d0d0d0d0808080d0d0d0c0c0c0c0c0202020201010202020203020303020e0e0e03030303030302030c0c0c0c0c0c0d0d0101010d0d0808080d0d0d0d0c0c0c0c0c0d0303010202020202030202030302030202030302030302020c0c0c0c0c0c0d0d0d0d0d0d030801010d0d0d0d01010c0c0c0c0c02020202020202020203020303030303030303020303020c0c0c0c0c01010d0d0d0d01010108080d080808080d0c0202020c0202020202020d0d0202020202030303030302020303030c0c0c0c0c0102020202020d0d0d0d0d0d080808080d0d0202020c0202020202020d0d0d02030202020303030202030303030c0c0c08010102020202020d0d0d0d0d0d0808080801010202020c0302020202020d0d0d0302020202020303020202020203030c0c01010d02020202020d0d0d020201010101010101010101010302020202020d0d0d0d02030202020303030203020303030c0c01010d0d0d0d0d0d0d0d020202010101010301010102010102020202020202020d0d0202030303030202020d020302030c0c01010c0c0c0c0c0c0c0c02020c0c0c0c010101010101010102030202020203020d0d0d0203030302020202050607030c0c0c0c0c0c0c0c0c0c0c0c0c02020c0c0c0c010101010101010c0c030c0c0c0c0d0d0d0d0d0d0d0d0303030203010c0b030c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c030101010e0101010c0c0c0c0c0c0c0d0d02020d0d0d020d0d02020303090a030c0c0c01020102010c0303030c0303030c0c0301010e0e0e03080c0c0c0c0c0c0c0d0d0d0d02020d0d0202020203030303020c0c0c0c0c0c0c0c0c0303030c0303030c0c0101010e0e0e0e0e0c0c0c0c0c0c0c030303030303030d0d0203030303030303030303030303030303030303080303030801010101010e0e0e0e0c0c0c0c0c0c0c030303030303080c0c0c03030101010201010202020103030303030c0c0c0c0c080801010101010e0e0e0e0e0c0c0c0c0c0c0303030c0c0c080c0c0c08010303020201020202020808080303030c0c0c0c0c020201010101080e0202020c0c0c0c0c0c0c0303020c0c0c08080808080103030302020202010101010101010c0c0c0c0c0c02020101010101020202020202020c0c0c0c0303020c0c0c03030302020803030302020201010101010101010c0c0c0c0c0c020201010101010101020c0c0c0c0c0c0c0c03030202030303030303010808010101010101010101010101010c0c0c0808080808010101010101010c0c0c0c0c0c0c0c08030303020303020303030c0808010101010101010101080808080303030303010101010101010101010c0c0c0c0c0c0c0c03030303030302020303020202030101010101010101080808080303030303030101010101010101030303030c0c0c0c0c03030303030303030303030303030303030303030308080803030303030303030301010101010101030303030303030303030303`, img`
            ..................................................
            ..................................................
            ..................................................
            .....................................2.2.2........
            .....................................22222........
            .....................................22222........
            .....................................2...2........
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            `, [myTiles.tile0,sprites.castle.tilePath4,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass1,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass3,sprites.dungeon.floorDark0,sprites.dungeon.floorDark2,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,sprites.dungeon.floorDark3,sprites.dungeon.doorLockedNorth,myTiles.tile5,myTiles.transparency16,myTiles.tile3,myTiles.tile1,myTiles.tile2,myTiles.tile4], TileScale.Sixteen))
        toggleNightDay = 1
    }
    drawWalls()
    if (game.runtime() > 40000 && havetheKey == 0) {
        createSmallBoss()
    }
})
forever(function () {
    if (controller.B.isPressed()) {
        value9 = WeaponAvailable.length - 1
        if (CurrentWeapon == value9) {
            CurrentWeapon = 0
        } else {
            CurrentWeapon = CurrentWeapon + 1
        }
        mySprite.say(Weapons[CurrentWeapon], 500)
    }
    WeaponReloadTime = WeaponReload[CurrentWeapon]
    if (controller.right.isPressed()) {
        mySprite.setImage(img`
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . f f e e 4 e e e f b b f . 
            . . . . f 2 2 2 4 d d e b b f . 
            . . . . e 2 2 2 e d d e b f . . 
            . . . . f 4 4 4 f e e f f . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
        XshootingDirection = WeaponSpeed[CurrentWeapon]
        YShootingDirection = 0
    }
    if (controller.left.isPressed()) {
        mySprite.setImage(img`
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f f . . . 
            . f b b e d d 4 2 2 2 f . . . . 
            . . f b e d d e 2 2 2 e . . . . 
            . . . f f e e f 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `)
        YShootingDirection = 0
        XshootingDirection = -1 * WeaponSpeed[CurrentWeapon]
    }
    if (controller.down.isPressed()) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `)
        YShootingDirection = WeaponSpeed[CurrentWeapon]
        XshootingDirection = 0
    }
    if (controller.up.isPressed()) {
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        YShootingDirection = -1 * WeaponSpeed[CurrentWeapon]
        XshootingDirection = 0
    }
})
