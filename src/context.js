import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = createContext();

export const AppPrivider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [seearchTerm, setSearchTerm] = useState("a");

  const fetchDrinks = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}${seearchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    }
  }, [seearchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [seearchTerm, fetchDrinks]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        cocktails,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
