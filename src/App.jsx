import './App.css'
import DepenseProvider from './context/depense'
import Button from './components/Button'
import ListeDepense from './components/ListeDepense'


function App() {


  return (
    <>
      <DepenseProvider>
        <ListeDepense/>
        <Button/>
      </DepenseProvider>
    </>
  )
}

export default App
