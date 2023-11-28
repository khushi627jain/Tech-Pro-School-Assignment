import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/navbar';
import CourseCard from './Components/CourseCard';
import {Box} from "@chakra-ui/react"
import { useSelector } from 'react-redux';

function App() {
  const { textColor, themeColor, Color,currentTheme } = useSelector(store => store) 
  return (
    <Box>
   <Navbar textColor={textColor} themeColor={themeColor} Color={Color} currentTheme={currentTheme}/>
   <CourseCard textColor={textColor} themeColor={themeColor} Color={Color}/>
   </Box>
  );
}

export default App;
