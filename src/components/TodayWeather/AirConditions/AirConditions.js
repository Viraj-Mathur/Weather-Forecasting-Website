import React from 'react';
import ErrorBox from '../../Reusable/ErrorBox';
import AirConditionsItem from './AirConditionsItem';
import Layout from '../../Reusable/Layout';

const TodayWeatherAirConditions = ({ data }) => {
  const noDataProvided =
    !data || Object.keys(data).length === 0 || data.cod === '404';

  let content = <ErrorBox flex="1" type="error" />;

  // the <></> syntax is a shorthand syntax for a fragment in React.

        // In React, a fragment is a way to group multiple elements together without adding an additional parent container element to the DOM. Fragments are useful when you want to return multiple elements from a component's render method without introducing unnecessary elements in the DOM tree.

        // The shorthand syntax <></> is equivalent to using <React.Fragment></React.Fragment>



  if (!noDataProvided)
    content = (

      //  cod property refers to a property within the data object that represents the status code of the weather data response request for API
      
      <>
        <AirConditionsItem
          title="Real Feel"
          value={`${Math.round(data.main.feels_like)} °C`}
          type="temperature"
        />
        <AirConditionsItem
          title="Wind"
          value={`${data.wind.speed} m/s`}
          type="wind"
        />
        <AirConditionsItem
          title="Clouds"
          value={`${Math.round(data.clouds.all)} %`}
          type="clouds"
        />
        <AirConditionsItem
          title="Humidity"
          value={`${Math.round(data.main.humidity)} %`}
          type="humidity"
        />
      </>
    );
  return (
    <Layout
      title="AIR CONDITIONS"
      content={content}
      mb="1rem"
      sx={{ marginTop: '2.9rem' }}
    />
  );
};

export default TodayWeatherAirConditions;
