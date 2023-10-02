"use client"
import {getCurrentData} from "../utils/currentData";
import {MdLocationOn} from "react-icons/md";
import style from "@/app/styles/Home.module.scss";

// Типы
interface CurrentProps {
  data: {
    current: {
      condition: {
        icon: string
        text: string
      }
      temp_c: number
    }
    location: {
      name: string
      region: string
    }
  }
}

const Current: React.FC<{ data: any }> = ({data}) => {
  const currentData = getCurrentData(); //Сегодняшняя дата
  const weatherIcon = data.current.condition.icon; //Иконка из API
  return (
    <div className={style.today}>
      <div>
        <h1 className={style.today__title}>Сегодня</h1>
        <p className={style.today__subtitle}>{currentData}</p>
      </div>
      {/* Температура */}
      <div className={style.today__temperature}>
        <div>
          <p className={style.today__weatherNumber}>{data.current.temp_c.toFixed()}°</p>
          <p className={style.today__weatherText}>{data.current.condition.text}</p>
        </div>
        {/* Иконка */}
        {weatherIcon && (<div><img src={weatherIcon} alt={data.current.condition.text} className={style.today__icon} /></div>)}
      </div>
      <div>
        <div className={style.today__location}>
          <MdLocationOn className={style.today__locationIcon}/>
          <p className={style.today__locationText}>{data.location.name}, {data.location.region}</p>
        </div>
      </div>
    </div>
  );
};

export default Current;
