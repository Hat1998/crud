import React from "react";
import axios from "axios";

function Test() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://63e225d4109336b6cb00a67d.mockapi.io/myDb").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <ul>
        {
        
        data.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))
        
        }
      </ul>
    </div>
  );
}

export default Test;
