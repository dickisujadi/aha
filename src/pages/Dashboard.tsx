import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Sidebar } from '../components/Sidebar';
import { Home } from './Home';
import { Search } from './Search';
import { Tags } from './Tags';

export function Dashboard() {
    const [menus, setMenus] = useState([
        {
            id: 1,
            location: 'home',
            link: '/',
            isLoaded: true
        },
        {
            id: 2,
            location: 'tags',
            link: '/tags',
            isLoaded: false
        }
    ])

    const loadedHandler = (location: string, status: boolean) => {
        setMenus(currentMenu => {
            let selectedMenu = currentMenu.find(menu => menu.location == location);
            if(selectedMenu) {
                selectedMenu.isLoaded = status;
            }
            return [...currentMenu]
        })
    }

    return <div className="App flex xs:flex-col w-screen">
        <Router>
            <Sidebar menus={menus} onChangeLoaded={loadedHandler}/>
            <Routes>
                <Route path='/' element={<Home onChangeLoaded={loadedHandler}/>} />
                <Route path='/tags' element={<Tags onChangeLoaded={loadedHandler}/>} />
            </Routes>
            <Footer menus={menus} onChangeLoaded={loadedHandler}/>
        </Router>
  </div>
}