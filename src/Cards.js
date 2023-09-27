

import Card from './Card';
import cities from './Cities';
import './App.css'
export default function Cards(){
  return(
    <div className="myCard">
    {
      cities.map((city)=>{
        return(
          <Card locationName={city.locationName} date={city.date} description={city.description} imageSrc={city.imageSrc} buttonText={city.buttonText} />
        )
      })
    }
    </div>

);
}




  

  















  