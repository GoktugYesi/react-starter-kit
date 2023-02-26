import { Title } from './Components';
import Bottstrap from './Bootstrap';
import Tailwind from './Tailwind';
import logo from './logo.svg';
import Test from './Test';

import styles from './App.module.css';
//import './tailwind.css'
import './style.scss'

function Styles() {
    return (
        <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.NODE_ENV}</Title>
      <p className='env'>
        {process.env.REACT_APP_API_URL}
        <span>scss test</span>
      </p>
      {process.env.NODE_ENV === 'production' && 
      <img src="/logo192.png" alt="" />
      }
      <Test />
      <Bottstrap />
      <Tailwind />
    </div>
    );
    
}

export default Styles;