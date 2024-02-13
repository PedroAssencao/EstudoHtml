import { useQuery } from "react-query";

const fetchData = async (location) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=pt&appid=595255065fc3938d770ed6c340c99b30`);

    if (!response.ok) {
        throw new Error("Erro ao carregar dados");
    }

    const jsonData = await response.json();
    return jsonData;
};

export function useWeatherQuery(location) {
    return useQuery(['ConteudoData', location], () => fetchData(location), {
        retry: false,
        enabled: false,
    });
}
