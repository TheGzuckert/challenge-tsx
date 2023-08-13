import styles from './Header.module.css';

import todoIcon from '../assets/todoIcon.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoIcon} alt='Todo Icon' />
    </header>
  );
}