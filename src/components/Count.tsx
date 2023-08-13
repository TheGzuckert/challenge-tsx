import styles from './Count.module.css'

export function Count() {
  return(
    <article className={styles.container}>
      <strong className={styles.tasksCreated}>Tarefas criadas</strong>
      <strong className={styles.tasksDone}>Concluídas</strong>
    </article>
  )
}