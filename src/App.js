import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/Header/Header';
import * as utility from './utility/utility';
import './App.css';

const LazyHome = React.lazy(() => import('./components/Home/Home'));
const LazyForm = React.lazy(() => import('./components/Form/Form'));
const LazyDetails = React.lazy(() => import('./components/Article/ArticleDetails/ArticleDetails'));
const LazySearch = React.lazy(() => import('./components/Search/Search'));

function App() {
  const [posts, setPosts] = React.useState(utility.DEFAULT_POSTS);
  const [displayed, setDisplayed] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState('');
  const itemsPerPage = 5;

  React.useEffect(() => {
    const copyPosts = [...posts];
    const items = copyPosts.splice((page - 1) * itemsPerPage, itemsPerPage);
    
    setDisplayed(items);
  }, [page, posts]);

  React.useEffect(() => {
    if (!sort) return;

    const postsCopy = posts.map(p => {
      return {...p}
    });

    postsCopy.sort((a, b) => {
      if (sort === 'title') return (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1;
      if (sort === 'date') return new Date(b.date) - new Date(a.date);
    });

    setPosts(postsCopy);
  }, [sort]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/post/:slug" render={(props) => {
              const post = posts.find(p => p.slug === props.match.params.slug);
              if (!post) return <Redirect to='/' />
              return (
                <Suspense fallback={<div></div>}>
                  <LazyDetails 
                    {...props} 
                    post={post} 
                    posts={posts} 
                    action={setPosts} />
                </Suspense>
              );
            }} />

            <Route path="/update-post/:slug" render={(props) => {
              const post = posts.find(p => p.slug === props.match.params.slug);
              if (!post) return <Redirect to='/' />
              return (
                <Suspense fallback={<div></div>}>
                  <LazyForm 
                    {...props} 
                    action={setPosts} 
                    posts={posts} 
                    post={post}
                    flag='update' />
                </Suspense>
              );
            }} />

            <Route path="/search/:keyword" render={(props) => {
              return (
                <Suspense fallback={<div></div>}>
                  <LazySearch {...props} posts={posts} />
                </Suspense>
              );
            }} />

            <Route path="/create-post" exact render={(props) => {
              return (
                <Suspense fallback={<div></div>}>
                  <LazyForm 
                    {...props} 
                    action={setPosts} 
                    posts={posts}
                    post={{id: null, title: null, slug: null, content: null, date: null}} 
                    flag='create' />
                </Suspense>
              );
            }} />

            <Route path="/" exact render={(props) => {
              return (
                <Suspense fallback={<div></div>}>
                  <LazyHome 
                    {...props} 
                    posts={displayed} 
                    page={page} 
                    itemsPerPage={itemsPerPage} 
                    totalItems={posts.length}
                    setPage={setPage}
                    sort={sort}
                    setSort={setSort} />
                </Suspense>
              );
            }} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
