import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader: React.FC = () => (
  <div className={styles.loader}>
    <Oval height={80} width={80} color="blue" />
  </div>
);

export default Loader;
