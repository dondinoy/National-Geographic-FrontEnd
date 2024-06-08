import { useForm } from "react-hook-form";
import * as z from "zod";
import { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthConext";

import { CategoryService } from "../../services/category_service";
import { Category } from "../../@types/types";
import { baseUrl } from "../../services/auth-service";
import { addArticleToCategory } from "../../services/article_service";
import './createPage.scss'
export default function CreatePage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [token, setToken] = useState<string | null>(localStorage.getItem('token')); 
  const [imageData, setMainImage] = useState<File | null>(null); 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await CategoryService.getCategoriesAxios();
        setCategories(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);
  // const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedCategory(e.target.value);
  // };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "code",
    "color",
    "background",
    "code-block",
    "align",
  ];
  const modules = {
    toolbar: {
      container: [
        [{ header: [2, 3, 4, false] }],
        ["bold", "italic", "underline", "blockquote"],
        [{ color: [] }],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
      ],
    },
    clipboard: {
      matchVisual: true,
    },
  };

  const { role, isLoggedIn } = useContext(AuthContext);
  const nav = useNavigate();
  const [value, setValue] = useState("");


  if (!isLoggedIn || role === "ROLE_USER") {
    nav("/");
  }

  const formScheme = z.object({
    title: z
      .string()
      .min(5, { message: "MustBe More Than 5 Letters For Title" }),
    description: z
      .string()
      .min(5, { message: "MustBe More Than 5 Letters For Description" }),
    content: z.string(),

    selectedCategory:z.string()
    .min(1, { message: "MustBe More Than 5 Letters For Description" }),

  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formScheme>>({
    resolver: zodResolver(formScheme),
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      content: "",
    },
  });
  const quillRef = useRef<any>();
  // Frontend code
  const onSubmit = async (values) => {
    debugger
    try {
      values.content = value;
      const newArticle = {
        title: values.title,
        description: values.description,
        content: values.content,
        imageData:  imageData ,
      };
      const category=values.selectedCategory
      // Ensure selectedCategory is not empty before proceeding
      if (!category) {
        throw new Error("Please select a category");
      }

       await addArticleToCategory(newArticle, category);
      console.log("Article added successfully");
    } catch (error) {
      console.error("Error adding article:", error);
    }
  };

  return (
    <main className="p-24">
      <div className="flex flex-col text-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col shadow-xl m-5">
            <input placeholder="Title" {...register("title")} />
            {errors.title && <span>{errors.title.message}</span>}
          </div>

          <div className="flex flex-col shadow-xl m-5">
            <textarea
              placeholder="Description"
              {...register("description")}
            ></textarea>
            {errors.description && <span>{errors.description.message}</span>}
          </div>

          <div>
            <QuillEditor
              className="ql-editor"
              ref={(el) => (quillRef.current = el)}
              theme="snow"
              value={value}
              onChange={setValue}
              modules={modules}
              formats={formats}
            />
            ;
       
            {errors.content && <span>{errors.content.message}</span>}
          </div>
      
          <div className="flex flex-row justify-center mb-10">
            <select {...register("selectedCategory")}>
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id.toString()}>
                  {category.name}
                </option>
              ))}
            </select>
                {errors.selectedCategory && <span className="p-5 flex flex-row">{errors.selectedCategory.message}</span>}
          </div>

          <div>
            <div>
              <input
                type="file"
                onChange={(e) => setMainImage(e.target.files[0] || null)}
              />
            </div>
            {imageData && (
              <div className="flex flex-col p-9 mt-9">
                <img src={URL.createObjectURL(imageData)} alt="Main" />
              </div>
              )}
          </div>
         
          

          <div className=" shadow-xl m-5 bg-black text-white p-9">
            <button type="submit" className="flex flex-row  w-full justify-center">Submit</button>
          </div>
        </form>
      </div>
    </main>
  );
}
