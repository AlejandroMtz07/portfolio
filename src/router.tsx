import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/Projects';
import Skills from './views/Skills';
import AppLayout from './layouts/AppLayout';
import NotFound from './views/NotFound';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout/>}>
                    <Route path='' element={<Home/>}/>
                    <Route path='projects' element={<Projects/>}/>
                    <Route path='skills' element={<Skills/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}