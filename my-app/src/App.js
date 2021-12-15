import './App.css';

const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}


function App() {
  return (
    <div className="App">
      <img src={employee.profileImg} className="employee-pic" alt="logo" />
      <header className="App-header">
        <h1  id='name'>{employee.name}</h1>
        <h5 className='details'>Location</h5>
        <h3 className='data'>{employee.location}</h3>
        <h5 className='details'>Blood group</h5>
        <h3 className='data'>{employee.bloodGroup}</h3>
        <h5 className='details'>Age</h5>
        <h3 className='data'>{employee.age}</h3>

      </header>
    </div>
  );
}

export default App;
