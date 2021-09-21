import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import CreateSprint from "./views/CreateSprint";
import EditSprint from "./views/EditSprint";
import Home from "./views/Home";
import MenuBar from "./views/MenuBar";
import NotFound from "./views/NotFound";

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/createSprint" component={CreateSprint} />
        <Route path="/editSprint/:id" component={EditSprint} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
