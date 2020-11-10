import React, { useState, useEffect,createContext } from 'react';
import './App.css';
import { API,Storage } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import {HeadMenu,MainContents} from './templates'
import { Auth } from "aws-amplify"

//const initialFormState = { name: '', description: '' }
const initilalAuthState = {
  isSignedIn: false,
  role: "",
  uid: "",
  username: ""
}





export const countContext = createContext()
export const authContext = createContext()

function App() {
  /* useState([]) returns [any[],React.Dispatch<React.SetStateAction<any[]>>] 
  const [notes, setNotes] = useState([]);
  /* useState(initialFormState) returns [any[],React.Dispatch<React.SetStateAction<any[]>>] 
  const [formData, setFormData] = useState(initialFormState); */

  const [auth,setAuth] = useState(initilalAuthState)
  const [count,setCount] = useState(100)

/*  const getUser = async () =>{
    console.log("aaaa")
    const [auth,setAuth] = useState(initilalAuthState)
  
    await Auth.currentAuthenticatedUser()
      .then(res => {
        console.log(res.username)
        setAuth({username: res.username})
        return res.username
      }).catch(error => {
        console.log(error)
      })
    console.log("cccc")  
  }

  getUser()
*/
  /*
  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    await Promise.all(notesFromAPI.map(async note => {
      if (note.image) {
        const image = await Storage.get(note.image);
        note.image = image;
      }
      return note;
    }))
    setNotes(apiData.data.listNotes.items);
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
    setNotes([ ...notes, formData ]);
    setFormData(initialFormState);
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteNoteMutation, variables: { input: { id } }});
  }

  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchNotes();
  }
  */

  return (
    <div className="App">
      test さん 
      <countContext.Provider value ={[count,setCount]}>
        <authContext.Provider value = {[auth,setAuth]}>
          <HeadMenu />
          <MainContents/>
        </authContext.Provider>
      </countContext.Provider>
      {/*
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Note name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Note description"
        value={formData.description}
      />
      <input
        type="file"
        onChange={onChange}
      />
      <button onClick={createNote}>Create Note</button>
      <div style={{marginBottom: 30}}>
      {
        notes.map(note => (
          <div key={note.id || note.name}>
            <h2>{note.name}</h2>
            <p>{note.description}</p>
            <button onClick={() => deleteNote(note)}>Delete note</button>
            {
              note.image && <img src={note.image} style={{width: 400}} />
            }
          </div>
        ))
      }
    </div> */}
      <AmplifySignOut />
    </div>
  );
}
export default App;
/* export default withAuthenticator(App); */