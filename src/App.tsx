
import './App.css'
import Demo from './components/Demo/Demo'
import Hero from './components/Hero/Hero'

function App() {


  return (
    <main>
      <div className="main">
        <div className='gradient' />
      </div>
      <div className="app">
        <Demo/>
        <Hero/>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div>

    </main>


  )
}

export default App
