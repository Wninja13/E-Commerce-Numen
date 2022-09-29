import  Navbar  from './components/navbar/Navbar'
import ShoppingContextProvider from './components/ShoppingContextProvider'
import './css/navbar.css'


function App() {
	return <>
		<ShoppingContextProvider>
			<Navbar />
			
			{/* Componentes para productos del carrito iran dentro de ShoppingContextProvider */}

		</ShoppingContextProvider>
	</>
}

export default App
