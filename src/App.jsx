import './styles/scss/App.scss';
import AppRoutes from './Routes';
import { BrowserRouter } from "react-router-dom";
import Header from "../src/components/Header";


function App() {
  return (


    <div className='App'>
      <BrowserRouter>
      <Header />
      <AppRoutes />
      </BrowserRouter>
       
    </div>
  )
}

export default App
