import s from './App.module.css'
import Header from "./assets/components/Header/Header.tsx";

function App() {
  return (
    <main className={s.main}>
        <div className={s.container}>
            <Header />
        </div>
    </main>
  )
}

export default App
