import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Features from "./components/Features.tsx";
import Calendar from "./components/Calendar.tsx";
import LoginForm from "./components/LoginForm.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/features" element={<Features />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/login" element={<LoginForm />} />
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
