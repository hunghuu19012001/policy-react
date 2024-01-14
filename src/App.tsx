
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Term from './component/main/Term/Term';
import Policy from './component/main/Policy/Policy';
import Contact from './component/contact/Contact';
function App() {

  return (
    <div>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Policy />} />
            <Route path='/term' element={<Term />} />
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
