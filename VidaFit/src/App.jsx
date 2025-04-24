import './App.css'
import { GlobalProvider } from './Context/GlobalContext'

function App() {
 
  return (
    <>
      <GlobalProvider>
        <h1>Router</h1>
      </GlobalProvider>
    </>
  )
}

export default App
