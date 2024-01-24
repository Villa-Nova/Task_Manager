import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'
import { CyclesContextProvider } from './context/CyclesContext'

export function App() {
  return (
    <>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
    </>
  )
}
