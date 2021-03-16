import React from 'react'; 
import About from './About';
import View from './View';
import Videos from './Videos';
import Information from './Information';

function Main() { 
    return ( 
      <main>
        <View />
        <About />
        <Videos />
        <Information />
      </main>
    )
}
export default Main;