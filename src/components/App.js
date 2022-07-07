import '../styles/App.css';
import Heading  from "./Heading";
import SubHeading from './SubHeading';
import SubmitButton from './SubmitButton';
import InputQuery from './InputQuery';

const App = () => {
  return (
    <div id="main">
      <Heading />
      <SubHeading />
      <SubmitButton />
      <InputQuery />
    </div>
  )
}

export default App;