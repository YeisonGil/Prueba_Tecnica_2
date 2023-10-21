import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Notes } from './components/pages/Notes'
import { CreateNote } from './components/pages/CreateNote'
import { CreateUser } from './components/pages/CreateUser'
import { Nav } from './components/nav/Nav'
import { NoteProvier } from './context/noteContext'
import { UserProvider } from './context/userContext'

function App() {

  return (
    <>
      <NoteProvier>
        <UserProvider>
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={<Notes />} />
              <Route path="/createNote" element={<CreateNote />} />
              <Route path="/createUser" element={<CreateUser />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </NoteProvier>
    </>
  )
}

export default App
