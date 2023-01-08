import logo from './logo.svg';
import './App.css';
import MoviesUsableNav from './components/navbar/moviesUsableNav';
import Collection from './components/collection/collection';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Action from './components/setting/setting'
import Adventure from './components/profile/profile'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
<Route path='/' element={<Collection/>}/>
<Route path='setting' element={<Action/>}/>
<Route path='profile' element={<Adventure/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
