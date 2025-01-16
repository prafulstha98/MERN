import React from "react";
import Programcard from "./components/Programcard";

const App = () => {
  return (
    <div className="p-4">
      <Programcard
        label={"Node.js"}
        author={"Mark Zuckerberg"}
        url={
          "https://plus.unsplash.com/premium_photo-1682192408471-a7cf432b3fdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm9kZXxlbnwwfHwwfHx8MA%3D%3D"
        }
      />
    </div>
  );
};

export default App;
