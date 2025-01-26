import s from './App.module.css'
import Header from "./assets/components/Header/Header.tsx";
import Posts from "./assets/components/Posts/Posts.tsx";

function App() {
  return (
    <main className={s.main}>
        <Header />
        <div className={s.container}>
            <Posts />
        </div>
    </main>
  )
}

export default App
