import { FunctionalComponent, h } from 'preact';
import Clock from '../../components/clock';
import style from './style.css';

const Home: FunctionalComponent = () => {
  return (
    <div class={style.home}>
      <Clock />
    </div>
  );
};

export default Home;
