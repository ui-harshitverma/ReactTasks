import logo from './logo.svg';
import './App.css';
import { Name } from './Components/RenderProps/RenderProps';
import { Vikas } from './Components/HOC/Vikas';
import { Ajay } from './Components/HOC/Ajay';
import { Sushant } from './Components/HOC/Sushant';
import Subjects from './Components/HOC/HOC';

function App() {
  return (
    <>
      <div className="App">
        {/* <EnhancedLikes /> */}
        {/* <EnhancedComments /> */}
        <Name />
        <Subjects/>
        <Vikas/>
        <Ajay/>
        <Sushant/>
      </div>
    </>
  );
}

export default App;
