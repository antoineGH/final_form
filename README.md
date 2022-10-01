# Final Form

Form to collect user input in the global state

-   react final form

    -   https://final-form.org/docs/react-final-form/getting-started

-   subscription to avoid crazy rerenders

    -   https://final-form.org/docs/react-final-form/types/FormSpyProps#subscription

-   validation

    -   https://final-form.org/docs/react-final-form/examples/field-level-validation

-   debounce

    -   debounce: returns a function that can be called any number of times (possibly in quick successions) but will only invoke the callback after waiting for x ms from the last call.

-   render MUI text field

    -   https://mui.com/material-ui/react-text-field/

-   react contextAPI

    -   Check context project

-   useReducer with types (read documentation) : useReducer can replace multiple useStates with an input form

STEPS

-   Create a simple form with basic fields
-   Style the form with CSS (MUI?)
-   Bind the form with the state

    -   Create initialState object with differents fields, properties: value String, touched Boolean, hasError Boolean, error String
    -   Create form reducer
    -   Instanciate useReducer hook
    -   Update value in form with reducer value
    -   Create form handler
    -   Create validations
    -   Display error message
    -   Adding form level validation

    https://www.codingdeft.com/posts/react-form-validation/#react-final-form
