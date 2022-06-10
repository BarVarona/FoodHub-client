import logo from './logo.svg';
import './App.css';
import GeneralPage from './pages/GeneralPage';
import { ROUTES } from './consts/routes.const';
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {

  return (
    <div className="App fill-window" style={{height: '100%'}}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      <Router>
          <Routes>
            <Route path="/" element={<Navigate replace to={ROUTES.DASHBOARD} />} />,
            <Route exact key={ROUTES.LOGIN} path={ROUTES.LOGIN} element={<LoginPage/>}/>
            <Route exact key={ROUTES.SIGNUP} path={ROUTES.SIGNUP} element={<SignupPage/>}/>
            <Route exact key={ROUTES.DASHBOARD} path={ROUTES.DASHBOARD} element={<GeneralPage/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
