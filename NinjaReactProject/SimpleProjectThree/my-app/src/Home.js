import { useState } from 'react';

const Home = () => {
 //let name = 'Mario'
 const [name, setName] = useState('mario')
 const [age, setAge] = useState(25)

const handleClick = () => {
setName('Luigi')
setAge('28')
}


  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button> 
      
       
        
    </div>
   );
}
 
export default Home;