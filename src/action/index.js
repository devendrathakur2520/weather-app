
export const SHOW_MODEL="SHOW_MODEL";
export const USER_DETAILS="USER_DETAILS";
export const SET_CITY="SET_CITY";
export const SHOW_CITY_WEATHER="SHOW_CITY_WEATHER"

export const  showModel= (payload) =>({type: "SHOW_MODEL",payload});
export const  userDetails= (payload) =>({type: "USER_DETAILS",payload});
export const  setCity= (payload) =>({type: "SET_CITY",payload});
export const  showCityWeather= (payload) =>({type: "SHOW_CITY_WEATHER",payload});
