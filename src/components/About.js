import React from 'react';

const About = () =>{
  return(
      <p className="App-intro">
            The Goal in this game is to guess what number is hidden, the number should have 4 different digits (no repeted).
            you're gonna have turns to guess that number and you will have as many attempts as it's necessary to guess it.
            When you Attempt there are two conditions that helps you to guess what number is int there.
            <ul>
              <li>If you got one number of four ones you have that also is in the Number you need to guess that means you have a <strong>Point</strong></li>
              <li>If you got one number of four ones you have that also is in the Number you need to guess and is in the same position that means you have a <strong>Star</strong></li>
            </ul>
        </p>
  )
}

export default About;