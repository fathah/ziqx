import React, { createContext, useEffect, useState } from 'react';

const ConnectionContext = createContext(null);

const ConnectionContextProvider = (pops:any) => {
  const [myData, setMyData] = useState<any>([]);

  useEffect(() => {
    const storedData = localStorage.getItem('connections');
    if (storedData) {
      setMyData(JSON.parse(storedData));
    }
  }, []);

  return (
    <ConnectionContext.Provider value={myData}>
      {pops.children}
    </ConnectionContext.Provider>
  );
};

export { ConnectionContext, ConnectionContextProvider };