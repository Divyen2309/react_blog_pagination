import { Route, Routes } from 'react-router-dom';
import AddBlog from './Pages/AddBlog';
import Blogcomments from './Pages/Blogcomments';
import BlogDetail from './Pages/BlogDetail';
// import logo from './logo.svg';
import BlogList from './Pages/BlogList';
// import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route index element={<BlogList />} />

        <Route path="blogData/:id" element={<AddBlog />} />
        <Route path="blog/:id" element={<BlogDetail />} >
          <Route path="comments/:id" element={<Blogcomments />} />
        </Route>
        {/* <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}

      </Routes>
    </>
  );
}

export default App;
