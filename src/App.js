import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment } from './redux/store/user/userSlice';
import { Route, Router, Routes } from 'react-router-dom';
import { Home, Login, Public } from './pages/public';
import './scss/main.scss'

function App() {
  const { value } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()
  return (
    <div className="bg-green-300 text-2xl h-24">
        <Routes>
          <Route path='/' element={<Public />}>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
