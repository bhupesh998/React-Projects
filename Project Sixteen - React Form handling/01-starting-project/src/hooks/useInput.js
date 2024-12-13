import { useState } from "react"



export function useInput(defaultValue, validationFn) {
    const [enteredValue, setEnteredValue] = useState(defaultValue)

    const [didEdit, setDidEdit] = useState(false)

    const valueIsValid = validationFn(enteredValue)

    function handleInputChange(event) {
        setEnteredValue(event.target.value)
        setDidEdit(false) // doing this for case where user is again back on the error input field and is typing again
    }


    function handleInputBlur() {
        setDidEdit(true)
    }

    return {
        value: enteredValue,
        handleInputBlur,
        handleInputChange,
        hasError: didEdit && !valueIsValid
    }
}