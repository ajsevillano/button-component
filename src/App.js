import './App.css';
import Button from './components/Button/Index';

function App() {
  return (
    <div className="App">
      <div className="button-container default-button">
        <Button variant="default" />
      </div>
      <div className="button-container outline-button">
        <Button variant="outline" />
      </div>
      <div className="button-container text-button">
        <Button variant="text" />
      </div>
    </div>
  );
}

export default App;
