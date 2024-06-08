import React, { useContext, useEffect, useState } from "react";
import { Category as CategoryType } from "../../@types/types";
import { CategoryService } from "../../services/category_service";
import Spinner from "../../component/Spinner";
import CategoryItem from "../category/CategoryItem";
import { Card } from "../../component/card/Card";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthConext";

const Animals = () => {
  const [category, setCategory] = useState<CategoryType | undefined>();

  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await CategoryService.getCategoriesAxios();
        const category = res.find(
          (category: { id: number }) => category.id === 303
        );
        if (category) {
          setCategory(category);
        } else {
          setError("Category not found");
        }
      } catch (e) {
        console.error(e);
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const { role } = useContext(AuthContext);


  return (
    <div>
      <div
        className="p-5 text-center bg-image rounded-3"
         style={{
          backgroundImage: "url('src/assets/animalsheader.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "400px",
          width:"100%",
        }}
      >
        
      </div>
      <div className="flex flex-col text-center mb-5 mt-7">
        {role==="admin" && <NavLink to={"/createPage/"} 
        className="bg-slate-900 p-3  text-white hover:text-yellow-300">Create New article</  NavLink>}
      </div>
      
      {/* <h2>{JSON.stringify(category)}</h2> */}
      {loading && <Spinner />}
      {error && <div>Error: {error}</div>}
      {!error && !loading && (
      
      <div style={{    display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap"}}>
          {category && <CategoryItem key={category.id} {...category} />}
        </div>
      )}
    </div>
  );
};

export default Animals;
