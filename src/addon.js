import './App.css';
import logo from './logo.svg'

function Reactme(){
    return(
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello MoMo</h1>
        </header>
      </div>
    )
}
function Momo(){
    return(
      <div>
        <h1>Momo Company</h1>
      </div>
    )
  }
  export {Momo,Reactme}