import React, { createContext, useState } from 'react';

const MyContext = createContext();

const ParentComponent = () => {
  const [data, setData] = useState(['item 1', 'item 2', 'item 3']);

  return (
    <MyContext.Provider value={{ data, setData }}>
      {data.map((item, index) => (
        <ChildComponent key={index} />
      ))}
    </MyContext.Provider>
  );
};

const ChildComponent = () => {
  const { data, setData } = React.useContext(MyContext);

  return (
    <div>
      <p>{data}</p>
      <button onClick={() => setData(data + ' updated')}>Update Data</button>
    </div>
  );
};

export default ParentComponent;