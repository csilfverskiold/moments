import styles from './App.module.css';
import NavBar from './components/NavBar';

function App() {
  return (
    /** The styles object here relates to the  name we gave our import at the top,  
and the .App here relates to the .App class we set  in our css file. */
    <div className={styles.App}>
      <NavBar />
    </div>
  );
}

export default App;