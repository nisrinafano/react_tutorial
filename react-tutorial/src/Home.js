import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My blog title 1', body: 'lorem ipsum...', author: 'author1', id: 1},
        {title: 'My blog title 2', body: 'lorem ipsum...', author: 'author2', id: 2},
        {title: 'My blog title 3', body: 'lorem ipsum...', author: 'author3', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <BlogList blogs = { blogs } title = "All blog" handleDelete = {handleDelete}/>
        </div>
     );
}
 
export default Home;