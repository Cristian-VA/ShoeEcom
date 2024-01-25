import QueryProvider from './lib/queries/QueryProvider.tsx'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <QueryProvider>
  <AuthProvider>
    <App />
    </AuthProvider>
    </QueryProvider>
  </BrowserRouter>,
)
