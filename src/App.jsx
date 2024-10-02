
import Button from './components/Button'
import Chip from './components/Chip'
import CustomShape from './components/CustomShape'
import Logo from './components/Logo'
import MainImage from './components/MainImage'

function App() {

  const chipList = [
    {
      id: 1,
      text: 'Social',
    },
    {
      id: 2,
      text: 'Educació'
    },
    {
      id: 3,
      text: 'Cuinar'
    },
    {
      id: 4,
      text: 'Relaxació'
    },
    {
      id: 5,
      text: 'Treball Intens'
    },
    {
      id: 6,
      text: 'Caritat'

    },
    {
      id: 7,
      text: 'Recreatiu'
    }
  ]

  return (
    <div className="min-h-screen">
      <header className="p-5">
        <Logo />
      </header>
      <main className='p-5 grid grid-cols-1 lg:grid-cols-2 items-center justify-center h-full'>
        <div className="flex flex-col items-center justify-center border-r-2 p-6 border-transparent border-dashed lg:border-black">
          <ul className="flex flex-wrap gap-2 items-center justify-center">
            {
              chipList.map(chip => <li key={chip.id}>
                <Chip text={chip.text} handleClick={() => alert(chip.text)} />
              </li>)
            }
          </ul>
          <div className='relative flex flex-col items-center justify-center gap-5'>
            <MainImage />
            <CustomShape />
            <h1 className="text-3xl font-bold uppercase text-center max-w-[300px]">trova alguna cosa a fer</h1>
            <Button type="button" text="Generar" handleClick={() => alert('Ciao!')} />
          </div>

        </div>
        <div className="flex flex-col items-center justify-center p-6 mt-10 lg:mt-0">
          <h2 className="text-3xl font-semibold my-3">Activitat:</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </main>

    </div>
  )
}

export default App
