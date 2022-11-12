const Home = () => {

  const handleClick = (e) => {
    console.log('hello, ninjas', e)
  }

// we dont want to invoke the function on line 12
// only need to reference the function for now 
// if we want to pass in an arugment, must wrap inside an anonymos function 
// event parameter, we automatically have access to this when an event occurs
// the anonymous function is what gets access to the e object automatically

const handleClickAgain = (name, e) => {
  console.log('hello ' + name, e.target)
} 
  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button> 
      <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
       
        
    </div>
   );
}
 
export default Home;