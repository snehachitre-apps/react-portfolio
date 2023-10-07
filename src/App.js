import logo from './logo.svg';
//usigng sass extension
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';


function App() {
  return (
  <>
    {/* router-dom */}
    <Routes>
        <Route path="/" element={<Layout />}>

        </Route>
    </Routes>
  </>
  );
}

export default App;
