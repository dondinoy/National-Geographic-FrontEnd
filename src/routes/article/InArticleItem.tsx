import { useContext } from "react";
import { Article } from "../../@types/types";
import { Card } from "../../component/card/Card";
import DOMPurify from 'dompurify'
import { AuthContext } from "../../context/AuthConext";
import { NavLink } from "react-router-dom";
import { ArticleService } from "../../services/article_service";

  const InArticleItem = ({ id, title, description, content, imageData }: Article & { imageData: string }) => {
    const binar=atob(imageData)
    console.log("binar",binar)
    

    const { role } = useContext(AuthContext);
      const handleDelete = async (id) => {
    try {
        await ArticleService.deleteArticle(id);
        console.log(`Article ${id} deleted successfully.`);
    } catch (error) {
        console.error("Error deleting article:", error);
    }
};

let src="data:image/jpg ; base64,"+imageData;
console.log(src)
const handleError=(event: React.SyntheticEvent<HTMLAnchorElement,Event>)=>{
  console.error(event)
}
  return (
    <div>
      <div className="max-w-6xl mx-auto p-6">    
      <div className="flex flex-col lg:flex-row justify-around  mb-6">
        <div className="flex space-x-4 text-center ">
        {role==="admin" && <NavLink to={"/createPage/"} 
        className="bg-slate-900 p-5 text-white hover:text-yellow-300">Create New article</  NavLink>}

        {role==="admin" && <NavLink to={"/updatePage/"+id} 
        className="bg-slate-900 p-5 text-white hover:text-yellow-300">Update  article</NavLink>}

        {role==="admin"&&   <button className="bg-slate-900 p-5 text-white hover:text-yellow-300" onClick={() => handleDelete(id)}>
            Delete Article
        </button> }
      
        </div>
      </div>
      
       <div className="bg-white shadow-md rounded-lg overflow-hidden">
       
        {imageData && (
          <img src={`data:image/jpg;base64,${imageData}`} 
          alt="Main Image" height="500px" className="w-full  object-cover" />
        )}
      
      <div className="bg-black">
      <div className=" sm:p-1, md:p-3 lg:p-5 justify-center">
      <h3 className=" font-black  p-5 text-center text-white">
        {title}</h3>
        <div className="flex flex-row text-center">
          <p className="text-3xl  divide-x text-white" dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(description)}}/>
        </div>
      </div>
     
        <div className="bg-white p-4 prose text-2xl flex flex-col mt-3 text-justify center " dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
    </div>
     </div>
    
  );
};

export default InArticleItem;