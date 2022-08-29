import {useState} from 'react'

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
    </div>
  );
}

export default FooterBlogs
