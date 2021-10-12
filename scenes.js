let scenes = {
    'far from gate': {
        imageSource: './Renders/FarFromGate.png',
        collisionBoxes: [
            {
                x: 0.38,
                y: 0.44,
                w: 0.13,
                h: 0.24,
                target: 'in front of gate'
            },
            {
                x: 0.00,
                y: 0.00,
                w: 0.10,
                h: 0.10,
                targetType: 'book',
                target: 'bookFarFromGate.html'
            }
        ]
    },
    'in front of gate': {
        imageSource: './Renders/InFrontOfGate.png',
        collisionBoxes: [
            {
                x: 0.28,
                y: 0.21,
                w: 0.44,
                h: 0.79,
                spriteSheetSource: './Renders/Animations/GateOpen.png',
                spriteSheet: new Image(),
                spriteAmount: 20,
                target: 'far from gate'
            }
        ]
    }
}