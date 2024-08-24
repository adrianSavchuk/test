import styles from "./App.module.css"
import AppHeader from "./Components/AppHeader/AppHeader"
import OlMap from "./Components/OlMap/OlMap"

function App() {

  return (
    <div className={styles.appContainer}>
      <AppHeader />
      <div className={styles.mapContainer}>
        <OlMap />
      </div>
    </div>
  )
}

export default App
