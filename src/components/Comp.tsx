import { useForm } from '../contexts/FormContext'
import { useEffect } from 'react'

export const Comp = () => {
	const { form } = useForm()

	useEffect(() => {
		console.log(form)
	}, [form])

	return <p>Comp</p>
}
