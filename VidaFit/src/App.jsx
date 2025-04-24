import './App.css'
import { GlobalContextProvider } from './Context/GlobalContext'

function App() {
 
  return (
    <>
      <GlobalContextProvider>
        <h1>Router</h1>
      </GlobalContextProvider>
    </>
  )
}

export default App
