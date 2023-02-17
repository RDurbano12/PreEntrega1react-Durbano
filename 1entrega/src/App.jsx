
import './App.css'
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

function App() {
  

  return (
    <div className='back'>
      <Navbar />
      <ItemListContainer  greeting={ "bienvenidos a consultorio consciencia"}/>

    </div>
  )
}

export default App
