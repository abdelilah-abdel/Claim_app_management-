import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



function FooterBlogs() {
  
  
  
  const [blogs, setblogs] = useState([
    {
      title: "use our chatBot to set your claims !! ",
      body: "CIH BOT will help you interact with our system to costumise your claims and get more information ",
      id: 1,
    },
    {
      title: "track your claims ",
      body: "enter your claim reference to know the progress of your claim !",
      id: 2,
    },
    { title: "contact us !", body: "contact us at 545465465", id: 3 },
  ]);

  
  
  return (
    <div className="footer">
      {blogs.map((blog) => (
        <footer className="footer-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.body}</p>
        </footer>
      ))}

      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
          </ul>
          <p className="text-center text-muted">© 2022 Company, Inc</p>
        </footer>
      </div>



    </div>
  );
}

export default FooterBlogs
