import { useState } from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Chat from "@/components/chat"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
