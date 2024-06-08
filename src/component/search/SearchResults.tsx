import React, { useEffect, useState } from 'react';
import ArticleItem from '../../routes/article/ArticleItem';
import { NavLink, useParams } from 'react-router-dom';
import "./searchBar.module.scss"
const SearchResults = ({ searchValue }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {id} = useParams()

  useEffect(() => {
    const fetchData = async () => {
      if (searchValue !== "") { // Only fetch data if searchValue is not empty
        try {
          setLoading(true);
          const response = await fetch(`http://localhost:8080/api/v1/articles`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const json = await response.json();
          const results = json.filter((article) => {
            return (
              searchValue &&
              article &&
              article.title.includes(searchValue)
            );
          });
          setSearchResults(results);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      } else {
        setSearchResults([]); // Clear the search results if searchValue is empty
      }
    };

    fetchData();
  }, [searchValue]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div  className="bg-black h-full">
    <div className="bg-black h-full">
      <ul>
        {searchResults.map((article) => (
          <li className="bg-black mx-auto p-4 flex flex-col w-full text-yellow-500"
             key={article.id}>
            <NavLink to={`/article/${article.id}`}>{article.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>

    </div>

  );
};

export default SearchResults;
