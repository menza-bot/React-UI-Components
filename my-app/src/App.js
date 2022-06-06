import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Content } from './components/Content';
import { Navbar } from './components/Navbar';
import { Carousel } from './components/UI-kits/Carousel';
import { Loader } from './components/UI-kits/Loader';
import { NotificationBar } from './components/UI-kits/NotificationBar';
import { SearchBar } from './components/UI-kits/SearchBar';


const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
`

const routes = [
  {
    title: 'Carousel',
    route: 'carousel'
  },
  {
    title: 'Search Bar',
    route: 'searchBar'
  },
  {
    title: 'Notification bar', 
    route: 'notificationBar'
  },
  {
    title: 'Loader',
    route: 'loader'
  }
]

function App() {

  return (
    <Wrapper>
      <Navbar routes = { routes }/>
      <Routes>
        <Route 
          path = '/'
          element = { <Content /> }
        />
        <Route
          path = 'carousel'
          element = { <Carousel /> }
        />
        <Route
          path = 'searchbar'
          element = { <SearchBar /> }
        />
        <Route
          path = 'notificationbar'
          element = { <NotificationBar /> }
        />
        <Route
          path = 'loader'
          element = { <Loader /> }
        />
      </Routes>
    </Wrapper>
  );
}

export default App;
