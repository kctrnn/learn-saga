import cityApi from "api/cityApi";
import { Counter } from "features/counter/Counter";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchCityList = async () => {
      try {
        const response = await cityApi.getAll();
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCityList();
  }, []);

  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
