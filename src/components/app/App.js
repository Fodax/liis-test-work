import LoginPage from '../loginPage/LoginPage';
import MainPage from '../mainPage/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (     
        <Router>
                <div className="app">
                    <main>
                        <Routes>
                            <Route path='/' element={<MainPage/>}/>
                            <Route path='/login' element={<LoginPage/>}/>   
                        </Routes>
                    </main>
                </div>
        </Router>
    )
}

export default App;