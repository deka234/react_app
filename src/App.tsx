import { useState } from 'react'
import FileUploader from './pages/UploadFiles'
import './App.css'
import Login from './pages/Login'
import { Button } from "@/components/ui/button"
import Page from './pages/dashboard/page'
function App() {
  const [count, setCount] = useState(0)

  return (
  
  
      
     
    <>
      <FileUploader/>
    </>
  )
}

export default App
