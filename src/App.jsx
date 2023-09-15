import './App.css'
import DepenseProvider from './context/depense'
import Button from './components/Button'

function App() {


  return (
    <>
      <DepenseProvider>
        <Button/>
      </DepenseProvider>
    </>
  )
}

export default App
