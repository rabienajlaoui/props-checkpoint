import './App.css';
import Profile from './Profile/Profile';
import Rabie from './Profile/Rabie.jpg';


function App() {
  const fullname="Rabie Najlaoui"
  const bio="I am the best developer"
  const profession="I can make you a very nice website"

  const handleName = (fullname) => {
        alert (`The fullname is ${fullname}`)
}

return (
  <div>
    <Profile fullname={fullname} bio={bio} profession={profession} handleName={handleName}>
      <img style={{width:200,height:200,position:'absolute', top:22, left:20}} src={Rabie} alt='Mypic'/>
      </Profile>
  </div>
);
}

export default App;
