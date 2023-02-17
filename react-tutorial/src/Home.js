import {useState} from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My blog title 1', body: 'lorem ipsum...', author: 'author1', id: 1},
        {title: 'My blog title 2', body: 'lorem ipsum...', author: 'author2', id: 2},
        {title: 'My blog title 3', body: 'lorem ipsum...', author: 'author3', id: 3}
    ]);
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;