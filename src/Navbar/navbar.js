import React from 'react'
import {
  Box, Text, Input, InputGroup, InputRightAddon, UnorderedList, ListItem, Button, Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton, Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import "./navbar.css"
import { useDispatch } from 'react-redux'
import { Search2Icon, ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import { FiSun } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { arr } from '../Theme/theme'
import { TbEggFilled } from "react-icons/tb";


const Navbar = ({ textColor, themeColor, Color, currentTheme }) => {

  let listStyling = { color: Color, textDecoration: "underLine", textUnderlineOffset: "5px" }
  const dispatch = useDispatch()

  function changeColor(val) {
    dispatch({ type: "changeColor", payload: val })
  }

  function changeTheme() {
    console.log(currentTheme)
    dispatch({ type: "changeTheme", payload: currentTheme })
  }


  return (
   
      <Box className='parent' bg={themeColor} color={textColor}>
        <Box className='parent-navbar' display={["none","none","flex"]}>
          <Box>
            <Text color={Color} fontSize={"25px"} fontWeight={1000} fontFamily={"cursive"}
              whiteSpace={"nowrap"} cursor={"pointer"}> Course Boot </Text>
            <Box className='explore-btn'>
              <Button bg={Color} color={themeColor}
                _hover={{ color: Color, bg: themeColor }}
              >Explore
                <span><ChevronDownIcon fontWeight={1000} fontSize={"larger"} /></span>
              </Button>
              <Box className='explore-details'>
                <Box overflowY={"scroll"} height="40vw" bg={Color} mt={"13px"} p="20px" color={textColor}>
                  <Text m={"0px 0"} fontSize={"25px"} fontWeight={500} >Goals</Text>
                  <ul>
                    <li> Take a free course</li>
                    <li> Earn a Degree. Goals section.</li>
                    <li> Earn a Certificate. Goals section.</li>
                    <li> Find your new career</li>
                  </ul>


                  <Text m={"20px 0"} fontSize={"25px"} fontWeight={500}>Subjects</Text>
                  <ul>
                    <li>Data Science.</li>
                    <li>Business.</li>
                    <li>Computer Science.</li>
                    <li>Information Technology.</li>
                    <li>Language Learning.</li>
                    <li>Health.</li>
                    <li>Personal Development.</li>
                    <li>Physical Science and Engineering.</li>
                    <li>Social Sciences.</li>
                    <li>Arts and Humanities.</li>
                  </ul>
                  <Button m={"20px 0"} bg={textColor} color={Color} p={"0 20px"}>Math and Logic</Button>
                </Box>
              </Box>
            </Box>
            <InputGroup display={["none","none","none","flex","flex"]} pl="10px" color={textColor} size='md'>
              <Input focusBorderColor={Color} color={Color} w="17vw" placeholder="What do you want to learn ?" variant="outline" />
              <InputRightAddon color={themeColor} bg={Color} children=<Search2Icon /> />
            </InputGroup>
          </Box>
          <Box className='list-option'>
            <UnorderedList>
              <ListItem _hover={listStyling}>COURSES</ListItem>
              <ListItem _hover={listStyling}>FEES</ListItem>
              <ListItem _hover={listStyling}>CAREER OPPORTUNITY</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Button m="0 20px" bg={Color} _hover={{ color: Color, bg: themeColor }} color={themeColor} p={"0 20px"}>SIGN UP</Button>
          </Box>
          <Box>
            <Popover placement="bottom-start">
              <PopoverTrigger>
                <Button bg={themeColor} border={`2px solid ${Color}`} color={Color} borderRadius={"50%"}>{currentTheme == "light" ? <MdDarkMode /> : <FiSun />}</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody zIndex={10}>
                  <Button bg={Color} color={themeColor} _hover={{ bg: textColor, color: Color }} onClick={changeTheme} >Change Theme</Button>
                  <Text fontFamily={"cursive"} m="10px 0" color={Color} fontWeight={600} textAlign={"left"}>Colors:</Text>
                  <Box display="flex" gap="1vw" flexWrap={"wrap"} >
                    {
                      arr.map((ele, idx) => {
                        return (
                          <Box
                            onClick={() => changeColor(ele.colorName)}
                            _hover={{ boxShadow: `5px 5px ${ele.colorName}`, backgroundColor: "black" }}
                            p="0.5vw" borderRadius={"5px"} border={"0.5px solid #c5c0bd"} bg="#d3d3d3">
                            <TbEggFilled fontSize={22} color={ele.colorName} />
                          </Box>

                        )
                      })
                    }

                  </Box>

                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        </Box>
        <Box display={["flex","flex","none"]} w="100%" p="10px" 
        justifyContent={"space-between"} alignItems={"center"}>
          <Text color={Color} fontSize={"30px"} fontWeight={1000} fontFamily={"cursive"}
            whiteSpace={"nowrap"} cursor={"pointer"}>
            Course Boot
          </Text>
          <Menu  closeOnSelect={false}  >
  <MenuButton   _hover={{ bg: 'gray.400' }}
    _expanded={{ bg: Color }}
    _focus={{ boxShadow: 'outline' }}
   as={Button}  bg={themeColor} color={textColor} rightIcon={<HamburgerIcon  m={"auto"} fontSize={"25px"} />}>
    
  </MenuButton>
  <MenuList>
  <MenuItem color={"gray"}>Data Science.</MenuItem>
  <MenuItem color={"gray"}>Business.</MenuItem>
  <MenuItem color={"gray"}>Computer Science.</MenuItem>
  <MenuItem color={"gray"}>Information Technology.</MenuItem>
  <MenuItem color={"gray"}>Language Learning.</MenuItem>
  <MenuItem color={"gray"}>Health.</MenuItem>
  <MenuItem color={"gray"}>Personal Development.</MenuItem>
  <MenuItem color={"gray"}>Physical Science and Engineering.</MenuItem>
  <MenuItem color={"gray"}>Social Sciences.</MenuItem>
  <MenuItem color={"gray"}>Arts and Humanities.</MenuItem>
  <MenuItem> <Popover placement="end-end">
              <PopoverTrigger>
                <Button bg={themeColor} border={`2px solid ${Color}`} color={Color} borderRadius={"50%"}>{currentTheme == "light" ? <MdDarkMode /> : <FiSun />}</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody zIndex={10}>
                  <Button bg={Color} color={themeColor} _hover={{ bg: textColor, color: Color }} onClick={changeTheme} >Change Theme</Button>
                  <Text fontFamily={"cursive"} m="10px 0" color={Color} fontWeight={600} textAlign={"left"}>Colors:</Text>
                  <Box display="flex" gap="1vw" flexWrap={"wrap"} >
                    {
                      arr.map((ele, idx) => {
                        return (
                          <Box
                            onClick={() => changeColor(ele.colorName)}
                            _hover={{ boxShadow: `5px 5px ${ele.colorName}`, backgroundColor: "black" }}
                            p="0.5vw" borderRadius={"5px"} border={"0.5px solid #c5c0bd"} bg="#d3d3d3">
                            <TbEggFilled fontSize={22} color={ele.colorName} />
                          </Box>

                        )
                      })
                    }

                  </Box>

                </PopoverBody>
              </PopoverContent>
            </Popover></MenuItem>
  </MenuList>
</Menu>
        </Box>
      </Box>
  )
}

export default Navbar
