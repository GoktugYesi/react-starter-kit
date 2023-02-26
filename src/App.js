import logo from './logo.svg';
import Test from './Test';
import { Title } from './Components';
import Bottstrap from './Bootstrap';


import styles from './App.module.css';

function App() {

  if (process.env.NODE_ENV === 'production') {
    //analtics bilgi gönderimi
  }

  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.NODE_ENV}</Title>
      <p>
        {process.env.REACT_APP_API_URL}
      </p>
      {process.env.NODE_ENV === 'production' && 
      <img src="/logo192.png" alt="" />
      }
      <Test />
      <Bottstrap />
    </div>
    
  );
}

export default App;
