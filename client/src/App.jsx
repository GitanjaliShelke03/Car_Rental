import React from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const[setLogin,setShowLogin] = useState(false)
const isOwnerPath = useLocation().pathname.startWith('/') 

  return (
    
    <>
    {isOwnerPath && <Navbar setShowLogin={setShowLogin} /> }   {/*shows navbar on every page */}
    </>
  )
}

export default App