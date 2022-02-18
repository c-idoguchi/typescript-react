import React from 'react';
import Counter from './Counter';

interface AppProps {
  message?: string ;
  description?: string
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      { message }
      <Counter/>
    </div>
  );
};

App.defaultProps = {
  message: 'Hello-default props',
}

export default App;
