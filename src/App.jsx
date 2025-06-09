import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  

  return (
    <main className='relative min-h-screen. overflow-x-hidden'>
      <div className='absolute -top-28 -left-28 w-[500px] bg-gradient-to-tr from-indigo-500/20'>
        <Navbar/>
        <Hero/>
      </div>
    </main>
  )
}

export default App
