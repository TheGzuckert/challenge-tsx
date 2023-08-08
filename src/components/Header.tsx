import styles from './Header.module.css';
import { CreateTask } from './CreateTask';
// import { Tasks } from './ListTasks'

import todoIcon from '../assets/todoIcon.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoIcon} alt='Todo Icon' />
      <CreateTask />
      {/* <Tasks /> */}
    </header>
    
  );
}