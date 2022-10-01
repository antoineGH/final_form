import React from 'react'
import { FormContextProvider } from './FormContext'

type Props = {
	children: React.ReactNode
}

export const Contexts = ({ children }: Props) => <FormContextProvider>{children}</FormContextProvider>
