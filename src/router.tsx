import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/Projects';
import Skills from './views/Skills';
import AppLayout from './layouts/AppLayout';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout/>}>
                    <Route path='' element={<Home/>}/>
                    <Route path='projects' element={<Projects/>}/>
                    <Route path='skills' element={<Skills/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}