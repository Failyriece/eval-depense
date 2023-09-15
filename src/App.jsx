import './App.css'
import DepenseProvider from './context/depense'
import Button from './components/Button'
import ListeDepense from './components/ListeDepense'
import AllDepense from './components/AllDepense'


function App() {


  return (
    <>
      <DepenseProvider>
        <ListeDepense/>
        <Button/>
        <AllDepense/>
      </DepenseProvider>
    </>
  )
}

export default App
