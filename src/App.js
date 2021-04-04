import './App.scss';

const App = props => {
  return (
    <div className="app">
      <div className="app__container">{props.children}</div>
    </div>
  );
};

export default App;
