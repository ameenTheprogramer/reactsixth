
import './App.css';
import About from './container/About';
import Profile from './container/Profile';
import { useState } from 'react';
import { Route, Routes, Link, useNavigate} from 'react-router-dom'
import { AppContext } from './AppContext';

function App() {
  const [state, setState]= useState(40910)
  const navigate = useNavigate()
  // let component
  // if(state === 'About'){
  //   component=<About></About>

  // }
  // if(state === 'Profile'){
  //   component=<Profile></Profile>

  // }
  return (
      <div>
        {/* <button onClick={()=>setState('About')} >about</button>
        <button onClick={()=>setState('Profile')} >profile</button> */}


            {/* <Link to='/about'>about page       .</Link> */}
            {/* <Link to='/profile'>profile page       </Link> */}

            <button onClick={()=>navigate('/about')}>about page</button>
            <button onClick={()=>navigate('/profile')}>profile</button>
            <AppContext.Provider value={{data:state}}>
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
            </AppContext.Provider>

      </div>
      
  )
}

export default App;
