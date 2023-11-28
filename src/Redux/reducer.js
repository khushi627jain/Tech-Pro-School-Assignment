import React from 'react'
import { theme } from '../Theme/theme'


let initialState={
    
    themeColor:theme.primaryMainColor,
    textColor:theme.primaryTextColor,
    Color:theme.themeColor,
    currentTheme:"light"
   
}

export default function Reducer(state=initialState,{type,payload}) {
 
  if(type==="changeColor"){
      return {...state,Color:payload}
  }
  if(type==="changeTheme"){
     return payload=="light"?
     {...state,   themeColor:theme.primaryTextColor,
      textColor:theme.primaryMainColor,
      currentTheme:"dark"}:
     {...state,   themeColor:theme.primaryMainColor,
      textColor:theme.primaryTextColor,
      currentTheme:"light"}
  }
  
     return state
    
  }
  