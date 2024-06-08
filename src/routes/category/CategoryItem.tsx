import React, { useContext } from "react";
import { Article, Category } from "../../@types/types";
import { Card } from "../../component/card/Card";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthConext";
import { FaArrowRight } from "react-icons/fa";

const CategoryItem = ({ articles, id }: Category) => {
  const { role } = useContext(AuthContext);
  return (
    <div>
      {articles.map((article: Article) => (
        <div
          className="mt-3 lg:w-[53vw] sm:w-[100vw] md:w-full  flex flex-col justify-center bg-slate-100 text-x l p-4 text-slate-900 hover:bg-slate-300  dark:text-black shadow-lg mb-4  ml-2 text-center"
          key={article.id}
        >
          {article.imageData && (
            <img
              src={`data:image/jpg;base64,${article.imageData}`}
              alt="Main Image"
              className="w-full h-500 object-cover"
            />
          )}
          <h3 className="font-black p-4">{article.title}</h3>
          <p>{article.description}</p>
          <div className=" flex flex-row justify-center mt-4">
            <div className="p-1">
              <FaArrowRight />
            </div>
            <div>
              <NavLink
                className="p-3 hover:font-black"
                to={`/article/${article.id}`}>
                Read
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryItem;
