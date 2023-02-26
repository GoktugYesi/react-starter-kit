import logo from './logo.svg';
import './style.css';


function App() {

  if (process.env.NODE_ENV === 'production') {
    //analtics bilgi gönderimi
  }

  return (
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
      <p>
        {process.env.REACT_APP_API_URL}
      </p>
      {process.env.NODE_ENV === 'production' && 
      <img src="/logo192.png" alt="" />
      }
    </div>
  );
}

export default App;
