import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './pages/Header';
import NotesListPage from './pages/NotesListPage';
import SingleNotePage from './pages/SingleNotePage';

function App() {
  return (
    <div>
      <Header/>
      
      <Routes>
        <Route path='/' exact element={<NotesListPage />} />

        <Route path='/note/:id' element={<SingleNotePage />} />
      </Routes>
    </div>
  );
}

export default App;
