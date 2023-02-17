import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;

/** The styles object here relates to the  name we gave our import at the top,  
and the .App here relates to the .App class we set  in our css file. */
/** The Switch holds all our Routes,  and renders a given component when  
a Route path matches the current URL. The render prop on our Route component  
accepts a function that returns a component to  be rendered when the Route path is matched.
The path prop is the browser url  the user will be at when they see  
the component in our render prop. The “exact” prop tells the route to  
only render its component when the  url entered is exactly the same. */
