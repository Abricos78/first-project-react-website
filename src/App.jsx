import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Music from './components/Content/Music/Music';
import News from './components/Content/News/News';
import MessagesContainer from './components/Content/Messages/MessagesContainer';
import ProfileContainer from './components/Content/Profile/ProfileContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import FindFriendContainer from './components/Find friend/FindFriendContainer';

const App = () => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" render={ () => <ProfileContainer />} />
          <Route path="/dialogs" render={ () => <MessagesContainer />} />
          <Route path="/music" component={Music} />
          <Route path="/news" component={News} />
          <Route path="/findFriend" render={() => <FindFriendContainer />}/>
        </div>
        <FriendsContainer />
      </div>
  
  );
}

export default App;
