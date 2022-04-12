import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./components/about/About";
import { Home } from "./components/home/Home";
import { SingleStoryPost } from "./components/SingleStoryPost";
import { StoryCategory } from "./components/StoryCategory";
import { StoryPosts } from "./components/StoryPosts";
import { Layout } from "./hoc/Layout";
function App() {
  return (
    <div className="">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/story-posts" component={StoryPosts} />
            <Route exact path="/category/:id" component={StoryCategory} />
            <Route exact path="/story-posts/:id" component={SingleStoryPost} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
