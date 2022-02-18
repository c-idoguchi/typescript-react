import React from 'react';

interface AppProps {
  message?: string ;
  description?: string
}

const App: React.FunctionComponent<AppProps> = ({ message }, {description}) => {
  return <div>{ message },{ description }</div>;
};

App.defaultProps = {
  message: 'Hello-default props',
  description: 'This is App component.',
}

export default App;
