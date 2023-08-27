import styles from './Count.module.css'

export function Count() {
  return(
    <article className={styles.container}>
      
      <strong 
        className={styles.tasksCreated}>
          Tarefas criadas
          <span className={styles.taskCount}>0</span>
      </strong>

      <strong 
        className={styles.tasksDone}>
          Concluídas 
        <span className={styles.taskCount}>0</span>
      </strong>
    </article>
  )
}