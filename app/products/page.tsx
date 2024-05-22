import { client } from "../config/contentful";
import Image from "next/image";
import imageLoader from "@/app/ContentfulImage/Contentfulimage";

const fetchProducts = async () => {
  try {
    const blog = await client.getEntries({
      content_type: 'blog',
    });

    // Log the full response 
    console.log(blog.items[0].fields)
    return blog.items;
  } catch (error) {
    console.error('Error fetching data from Contentful:', error);
    return [];
  }
};


async function Blog() {
  
  const data = await fetchProducts();
  

  return (
    <div>
      <h1>List of Blogs</h1>
      {data?.map((item:any, i:any) => { 

        return <div key={i}>
          <h1>title : {item.fields.title} </h1>
          <p>content : {item.fields.content}</p>

         
          
           
         
 
        </div> 
      })}

    </div>
  );
}

export default Blog;

