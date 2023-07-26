
import { useState } from 'react'
import './App.css'
import Header from './components/header'
import CoronaForCountry from './components/coronaforcountry';
import RecordedCorona from './components/recordedcorona';
import CoronaForContinent from './components/coronaforcontinent';

function App() {
  const [key, setKey] = useState(1);
  return (
    <>
      <Header onMenuChange={(key) => {
        setKey(key);
      }} />
      <div className="md:container md:mx-auto p-8 page-content">
        {key === 1 && <CoronaForCountry />}
        {key === 2 && <RecordedCorona />}
        {key === 3 && <CoronaForContinent />}

      </div>
    </>
  )
}

export default App
