import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import notes from './constants/notes';


// function createNotes(noteItem) {
//   return <Note
//     title={noteItem.title}
//     content={noteItem.content}
//     key={noteItem.key} />
// }

function App() {
  return (
    <div className="App">
      <Header />
      {notes.map(noteItem => {
        return <Note
          title={noteItem.title}
          content={noteItem.content}
          key={noteItem.key} />
      })}
      <Footer />
    </div>
  );
}

export default App;
