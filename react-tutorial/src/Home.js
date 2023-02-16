import {useState} from 'react';

const Home = () => {
    //let name = 'testname';
    const [name, setName] = useState('testname');
    const [age, setAge] = useState(20);

    const handleClick = () => {
        setName('new_test_name');
        setAge(23);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick = {handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;