import './App.css'
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom'

// page components
import Home from './Pages/Home.js'
import About from './Pages/About.js'
import Contact from './Pages/Contact.js'
import Article from './Pages/Article.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />  
          </Route>
          <Route path="/about">
            <About />  
          </Route>
          <Route path="/contact">
            <Contact />  
          </Route>
          <Route path="/articles/:id">
            <Article />
          </Route>
        </Switch>
<Route path="*"> <Redirect to="/"/> </Route>
      </BrowserRouter>
    </div>
  );
}

export default App