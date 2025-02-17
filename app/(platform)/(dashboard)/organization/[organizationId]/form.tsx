"use client"

import { create } from "@/actions/create-board"
import { useFormState } from "react-dom"
import { FormButton } from "./form-button"
import { FormInput } from "./form-input"

export const Form=()=>{
    const initialState={message:null,errors:{}}
    const [state,dispatch] = useFormState(create,initialState)
    return (
        <form action={dispatch}>
            <FormInput errors={state?.errors} />
            <FormButton />
        </form>
    )
}