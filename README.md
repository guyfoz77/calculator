# calculator

Live preview: https://guyfoz77.github.io/calculator/ 

The code behind this is really quite simple. It stores two numbers into variables:
- the `screenContent` variable, which is updated every time the user presses a number or . button on the calcuator.
- the `prevAnswer` variable, which is updated with the number entered by the user if no prevous answer exists, or is updated with the result of an operation between the `prevAnswer` and `screenContent` when the user presses equals or one of the operator buttons.

Another variable is stored, the `previousOpButton` variable which stores the previous operator key the user selects.

When the user hits equals, or another operator button, the `evaluate(prevAnswer, screenContent, previousOpButton)` function is run. This is where the switch statement selects the correct operation to use on the two numbers depending on the value of `previousOpButton`.

Future possible updates:
- Ability to type and enter values using the keyboard
- More operations: powers, square roots, factorial, percentage...

