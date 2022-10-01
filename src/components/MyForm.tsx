import { useReducer } from 'react'
import { Field, Form } from 'react-final-form'

type InitialValues = {
	firstName: string
	lastName: string
	employed: boolean
}

const initialValues: InitialValues = { firstName: '', lastName: '', employed: false }

type InitialState = InitialValues

const initialState: InitialState = initialValues

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

	const onSubmit = (e: any): void => {
		e.preventDefault()
		console.log(formState)
	}

	const handleTextChange = (e: any) => {
		dispatch({ type: 'HANDLE TEXT', field: e.target.name, payload: e.target.value })
	}
	const handleToggleEmployed = () => {
		dispatch({ type: 'TOGGLE EMPLOYED' })
	}
	return (
		<Form
			onSubmit={onSubmit}
			initialValues={initialValues}
			render={({ handleSubmit }) => (
				<form onSubmit={(e) => onSubmit(e)}>
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
						<input name='employed' type='checkbox' onChange={handleToggleEmployed} />
					</div>
					<div className='buttons'>
						<button type='submit'>Submit</button>
					</div>
				</form>
			)}
		/>
	)
}
