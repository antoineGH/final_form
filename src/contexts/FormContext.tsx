import { createContext, ReactNode, useContext, useReducer, useState } from 'react'

type Values = {
	firstName: string
	lastName: string
	employed: boolean
}

type Form = {
	firstName: string
	lastName: string
	employed: boolean
}

type ContextState = {
	form: Form | {}
	setForm: (values: Values) => void
}

type InitialState = Omit<ContextState, 'setForm'>

type FormContextProviderProps = {
	children: ReactNode
}

const INITIAL_STATE: InitialState = {
	form: {},
}

const CONTEXT_STATE: ContextState = {
	...INITIAL_STATE,
	setForm: () => {},
}

export const FormContext = createContext<ContextState>(CONTEXT_STATE)

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
	const [contextState, dispatch] = useReducer(
		(prevState: any, values: any) => ({ ...prevState, ...values }),
		INITIAL_STATE
	)

	const setForm = (values: Values): void => {
		dispatch({ form: values })
	}

	return <FormContext.Provider value={{ ...contextState, setForm }}>{children}</FormContext.Provider>
}

export const useForm = () => useContext(FormContext)
