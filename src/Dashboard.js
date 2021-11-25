//import { render } from "@testing-library/react";
import axios from "axios";
import { useEffect ,useState} from "react";
import { setCity } from './action/index.js';
import { useSelector,useDispatch } from "react-redux";


export default function Dashboard() {

   const [Weather,setWeather]=useState();
   //const [WeatherAPI,setWeather]=useState();
   const dispatch= useDispatch();
   const City = useSelector((state)=>state.login.city)
   const LoadData=()=>{
      axios.get(`
      http://api.openweathermap.org/data/2.5/weather?q=${City}&APPID=9295e4f3269a8aead4ab1e4b8644cc12`).then((response)=>{
         setWeather(response.data)
         console.log(response.data)
      })
   }
   useEffect(() => {
      LoadData();
  }, []);

  const onSubmit=()=>{
     dispatch(setCity(City))
  }
   return(
       <div>
<h1>Dashboard</h1>
    <form action="/" method="get">
    <label htmlFor="header-search">
        <span className="visually-hidden">Search blog posts</span>
    </label>
    <input
        type="text"
        id="header-search"
        placeholder="Search City"
        name="s" 
        value={City}
        onChange={(e)=>dispatch(setCity(e.target.value))}
    />
    <button type="button" onClick={onSubmit}>Search</button>
    <p>{Weather}</p>
</form>
</div>

   )
} 
