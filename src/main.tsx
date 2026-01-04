import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApiReferenceReact } from '@scalar/api-reference-react'
import '@scalar/api-reference-react/style.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ApiReferenceReact
        configuration={{
          // url: 'http://0.0.0.0:8000/v1/auth/doc.json',
          
          url: 'https://fnapi.llamatracker.net/v1/auth/doc.json',
        }}
      />
    </StrictMode>,
)
