import { useReducer } from 'react'
import { Field, Form } from 'react-final-form'

type InitialValues = {
	firstName: string
	lastName: string
	employed: boolean
}

const initialValues: InitialValues = { firstName: '', lastName: '', employed: false }

type InitialState = InitialValues | {}

const initialState: InitialState = {}

export const MyForm = () => {
	const onSubmit = (values: any): void => {
		console.log(values)
	}

	const [state, dispatch] = useReducer((prevState: any, values: any) => ({ ...prevState, ...values }), initialState)

	return (
		<Form
			onSubmit={onSubmit}
			initialValues={initialValues}
			render={({ handleSubmit, form, submitting, pristine, values }) => (
				<form onSubmit={handleSubmit}>
					<div>
						<label>First Name</label>
						<Field name='firstName' component='input' type='text' placeholder='First Name' />
					</div>
					<div>
						<label>Last Name</label>
						<Field name='lastName' component='input' type='text' placeholder='Last Name' />
					</div>
					<div>
						<label>Employed</label>
						<Field name='employed' component='input' type='checkbox' />
					</div>
					<div className='buttons'>
						<button type='submit' disabled={submitting || pristine}>
							Submit
						</button>
					</div>
				</form>
			)}
		/>
	)
}
