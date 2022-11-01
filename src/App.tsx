import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { PageNotFound } from './Pages/PageNotFound';

export function App() {
    return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
            <Route path='pageNotFound' element={<PageNotFound />} />
          <Route />
        </Routes>
      </BrowserRouter>
   )
}

