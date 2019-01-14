import React from 'react'

import Clock from './components/Clock'
import Welcome from './components/fnComponent'
import Comment from './components/Comment'
import Greeting from './components/Greeting'
import LoginControl from './components/LoginControl';


const comment = {
   date: new Date(),
   text: "I hope you enjoy learning React!",
   author: {
       name: 'Hello Kitty',
       avatarUrl: 'https://placekitten.com/g/64/64',
   },
};

function App() {
   return (
       <div>
         <Clock />

         <Welcome name="Prakash"/>

         <Comment 
            date={comment.date}
            author={comment.author}
            text={comment.text}
         />
         
         <Greeting isLoggedIn = {false} />

         <LoginControl />

       </div>
   )
} 

export default App;