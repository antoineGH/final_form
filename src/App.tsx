import React from 'react'
import './App.css'
import { Comp } from './components/Comp'
import { MyForm } from './components/MyForm'
import { Contexts } from './contexts/indexs'

function App() {
	return (
		<Contexts>
			<div className='App'>
				<MyForm />
				<Comp />
			</div>
		</Contexts>
	)
}

export default App
