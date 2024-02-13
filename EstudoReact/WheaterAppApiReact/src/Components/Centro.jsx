// ...

import { useEffect } from 'react';
import { useWeatherQuery } from "../Hooks/GetWheater";
import LocationFound from "./LocationFound";
import Loading from "./Loading";
import LocationNotFound from "./LocationNotFound";

function Centro({ locate }) {
    const weatherQuery = useWeatherQuery(locate);

    useEffect(() => {
        if (locate !== undefined) {
            weatherQuery.refetch();
        }
    }, [locate]);

    const { data, isLoading, isError } = weatherQuery;
    return (
        <div className="container d-flex justify-content-center align-itemns-center">
            {isLoading ? (
                <Loading />
            ) : isError ? (
                <LocationNotFound />
            ) : data && (
                <>
                    <LocationFound
                        key={0}
                        Nome={data.name}
                        Title={data.weather[0].description}
                        img={data.weather[0].icon}
                        temp={data.main.temp}
                        humidity={data.main.humidity}
                        wind={data.wind.speed}
                        
                    />
                </>
            ) }
        </div>
    );
}

export default Centro;
