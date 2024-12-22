import './App.css'
import NavBar from './components/NavBar/NavBar'

function App() {
const items =["Home","About","Service","New Property","Contact"]
  return (
    <>
      <NavBar logo="assets/img/logo.png" items={items}  btn="login"/>
    </>
  );
}

export default App
