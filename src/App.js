import './App.css';
import Button from './components/Button/Index';

function App() {
  const buttonHeaders = {
    default: '<Button />',
    outline: '<Button variant=”outline” />',
    text: '<Button variant=”text” />',
  };

  return (
    <div className="App">
      <div className="button-container" id="default-button">
        <p>{buttonHeaders.default}</p>
        <Button variant="default" />
      </div>
      <div className="button-container" id="outline-button">
        <p>{buttonHeaders.outline}</p>
        <Button variant="outline" />
      </div>
      <div className="button-container" id="text-button">
        <p>{buttonHeaders.text}</p>
        <Button variant="text" />
      </div>
    </div>
  );
}

export default App;
