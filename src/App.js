
import './App.css';
import HomePage from './pages/home-page/home-page.component'
import ShopPage from './pages/shop-page/shop-page.component'
import SneakersPage from './pages/sneakers-page/sneakers-page.component';
import HatsPage from './pages/hats-page/hats-page.component';

// attaching application with router
import{Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

    <Route exact path='/' component ={HomePage}/>
    <Route path='/hats' component={HatsPage}/>  
    <Route path='/sneakers' component={SneakersPage}/>  
    <Route path='/clothing' component={ShopPage}/>  
  
   
    </div>
  );
}
 
export default App;
