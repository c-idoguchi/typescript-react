import React from 'react';

interface AppProps {
  message: string ;
}

const App = ({message}: {message: string}) => {
  return <div>{ message }</div>;
};

export default App;
