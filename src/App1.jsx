import React from "react";

const App1 = () => {
  const greet = (personName) => {
    alert(`hello jee ${personName}`);
  };

  return (
    <div className="p-5">
      <button
        onClick={() => greet("shyam")}
        className="bg-slate-500 text-white px-4 py-2 rounded-md hover:ring-2 ring-purple-500 "
      >
        Call Func
      </button>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
        quasi distinctio esse laudantium fugiat! Ratione quae officiis dolorem
        unde numquam commodi perferendis at vel minus, assumenda aliquid
        sapiente provident mollitia.
      </p>
    </div>
  );
};

export default App1;
