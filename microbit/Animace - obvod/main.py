def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

for index in range(3):
    basic.show_leds("""
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        """)
    basic.pause(100)
    basic.show_leds("""
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        """)
    basic.pause(100)
    basic.show_leds("""
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        """)
    basic.pause(100)