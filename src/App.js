import PersonList from './components/PersonList';
import PersonAdd from './components/PersonAdd';
import PersonRemove from './components/PersonRemove';
import LoginButton from './login';
import LogoutButton from './logout';
import React from 'react';

export default function App() {
  return (<div className='app'>
    <PersonAdd/>
      <PersonList/>
      <PersonRemove/>
      <LoginButton/>
      <LogoutButton/>
      
</div>
  )
}



