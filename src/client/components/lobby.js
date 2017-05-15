import './lobby.scss';
 
 import React, { Component } from 'react'
 
 class LobbyContainer extends Component {
   render () {
     return (
       <div>
         <p>LOBBY!</p>
       </div>
     );
   }
 }

 class LobbySidebar extends Component {
   render () {
     return (
       <div>
         <p>lobbySidebar</p>
       </div>
     );
   }
 }
 
 export default {
   main: LobbyContainer,
   siderbar: LobbySidebar
 }