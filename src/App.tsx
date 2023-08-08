import { Header } from "./components/Header"
import styles from './App.module.css'
import './global.css'


export function App() {
  return (
    <div>
      <div className={styles.wrapper}></div>
      <Header />
      </div>
  )
}