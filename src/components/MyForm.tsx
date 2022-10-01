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

const formReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'HANDLE TEXT':
			return {
				...state,
				[action.field]: action.payload,
			}
		case 'TOGGLE EMPLOYED':
			return {
				...state,
				employed: !state.employed,
			}
	}
}

export const MyForm = () => {
	const [formState, dispatch] = useReducer(formReducer, initialState)

	const onSubmit = (values: any): void => {
		console.log(values)
	}

	const handleTextChange = (e: any) => {
		console.log(e.target.value)
		dispatch({ type: 'HANDLE TEXT', field: e.target.firstName, payload: e.target.value })
	}
	return (
		<Form
			onSubmit={onSubmit}
			initialValues={initialValues}
			render={({ handleSubmit, form, submitting, pristine, values }) => (
				<form onSubmit={handleSubmit}>
					<div>
						<label>First Name</label>
						<input
							name='firstName'
							value={formState.firstName}
							type='text'
							placeholder='First Name'
							onChange={(e: any) => handleTextChange(e)}
						/>
					</div>
					<div>
						<label>Last Name</label>
						<input
							name='lastName'
							value={formState.lastName}
							type='text'
							placeholder='Last Name'
							onChange={(e: any) => handleTextChange(e)}
						/>
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
