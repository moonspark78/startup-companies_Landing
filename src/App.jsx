import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  

  return (
    <main className='relative min-h-screen. overflow-x-hidden'>
      <div className='absolute -top-28 -left-28'>
        <Navbar/>
        <Hero/>
      </div>
    </main>
  )
}

export default App
