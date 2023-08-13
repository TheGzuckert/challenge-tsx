import { Header } from "./components/Header"
import { CreateTask } from "./components/CreateTask"
import { Count } from "./components/Count"
import styles from './App.module.css'
import './global.css'


export function App() {
  return (
    <article>
      <article className={styles.wrapper}></article>
      <Header />
      <CreateTask />
      <Count />

      </article>
  )
}