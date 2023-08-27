import styles from './CreateTask.module.css';
import plus from '../assets/plus.svg'
import { useState } from 'react';


export const CreateTask: React.FC = () => {
  const [taskText, setTaskText] = useState<string>('');

  const handleInputTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  const handleCreateTask = () => {
    taskText.trim() !== ''
      ? (console.log('Nova task', taskText), setTaskText(''))
      : null;
  };

  
  return (
    <nav>
      <input
        className={styles.input}
        placeholder='Adicione uma nova tarefa'
        value={taskText}
        onChange={handleInputTask}
      />

      <button
        type='submit'
        className={styles.button}
        onClick={handleCreateTask}
        >
        Criar
        <img src={plus} alt='Todo Icon'/>
      </button>
    
    </nav>
  );
};

