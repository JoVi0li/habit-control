
import { HeaderComponent, SummaryTableComponent } from './components';
import './styles/global.css';

function App() {

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full max-w-5xl px-6 flex flex-col'>
        <HeaderComponent />
        <SummaryTableComponent />
      </div>

    </div>
  )
}

export default App
