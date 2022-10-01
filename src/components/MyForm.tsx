import { Field, Form } from 'react-final-form'

type Values = {
	firstName: string
	lastName: string
	employed: boolean
}

const initialValues: Values = { firstName: '', lastName: '', employed: false }

export const MyForm = () => {
	const onSubmit = (values: Values): void => {
		console.log(values)
	}

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
