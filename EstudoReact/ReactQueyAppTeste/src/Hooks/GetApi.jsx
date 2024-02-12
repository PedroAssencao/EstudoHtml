import { useQuery } from "react-query"


const fetchData = async () => {
      const response = await fetch("http://www.omdbapi.com/?apikey=224f1e56&s=naruto");
      const jsonData = await response.json();
      return(jsonData.Search);
  };

export function getApi(){

    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['ConteudoData']
    })

    return query

}
