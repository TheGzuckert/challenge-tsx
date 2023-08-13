import styles from './CreateTask.module.css';
import plus from '../assets/plus.svg'

export function CreateTask() {
  return (
    <article>
      <input
        className={styles.input}
        placeholder='Adicione uma nova tarefa'
      />

      <button
        type='submit'
        className={styles.button}>
        Criar
        <img src={plus} alt='Todo Icon'/>
      </button>
      
    </article>
  )
}

