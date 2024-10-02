
import './App.css'
import Button from './components/Button'

function App() {

  return (
    <>
      <Button type="button" text="Clicca qui" handleClick={() => alert('Ciao!')} />
    </>
  )
}

export default App
