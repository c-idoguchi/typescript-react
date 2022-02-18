import React from 'react';

interface AppProps {
  message?: string ;
  description?: string
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return <div>{ message }</div>;
};

App.defaultProps = {
  message: 'Hello-default props',
}

export default App;
