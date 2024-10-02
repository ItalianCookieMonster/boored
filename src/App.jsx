
import './App.css'
import Button from './components/Button'
import Chip from './components/Chip'
import Logo from './components/Logo'
import MainImage from './components/MainImage'

function App() {

  return (
    <>
      <Logo />
      <MainImage />
      <Button type="button" text="Clicca qui" handleClick={() => alert('Ciao!')} />
      <Chip text="Social"/>
    </>
  )
}

export default App
