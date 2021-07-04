basic.showIcon(IconNames.Heart)
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.pause(1000)
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Forever)
for (let index = 0; index < 1; index++) {
    basic.showString("Hello!")
}
basic.showIcon(IconNames.Happy)
music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
basic.showIcon(IconNames.Heart)
