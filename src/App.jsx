import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Music from './components/Content/Music/Music';
import News from './components/Content/News/News';
import MessagesContainer from './components/Content/Messages/MessagesContainer';
import ProfileContainer from './components/Content/Profile/ProfileContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import UsersContainer from './components/Content/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={ () => <ProfileContainer />} />
          <Route path="/dialogs" render={ () => <MessagesContainer />} />
          <Route path="/music" component={Music} />
          <Route path="/news" component={News} />
          <Route path="/findUsers" render={() => <UsersContainer />}/>
        </div>
        <FriendsContainer />
      </div>
  
  );
}

export default App;
