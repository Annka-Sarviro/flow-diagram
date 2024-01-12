import { clearBoard } from '../../redux/slices/NodeSlice';
import { useAppDispatch } from '../../redux/store';

import styles from './ClearButton.module.scss';

export const ClearButton = () => {
  const dispatch = useAppDispatch();
  const handleClearClick = () => {
    dispatch(clearBoard());
    localStorage.removeItem('persist:root');
  };

  return (
    <button onClick={handleClearClick} className={styles.btn}>
      Clear board
    </button>
  );
};
