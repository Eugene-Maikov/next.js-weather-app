"use client"
import {MdLocationOn} from "react-icons/md";
import style from "@/app/styles/Home.module.scss";

// Типы
interface DayForecast {
  date: string
  day: {
    condition: {
      icon: string
      text: string
    }
    maxtemp_c: number
    mintemp_c: number
  }
}
interface WeekForecastProps {
  data: {
    forecast: {
      forecastday: DayForecast[]
    }
  }
}

const WeekForecast = ({ data }: WeekForecastProps) => {
  return (
    <div className={style.week}>
      {data.forecast.forecastday.map((day, index) => (
        <div key={index} className={style.week__item}>
          {/* Вывод дней недели */}
          <p>
            {new Date(day.date).toLocaleString("RU", { weekday: "short" })}
          </p>
          <img src={day.day.condition.icon} alt={day.day.condition.text} className={style.week__icon} />
          <div>
            <p>
              Макс {day.day.maxtemp_c.toFixed()}
              <span>°</span>
            </p>
            <p>
              Мин {day.day.mintemp_c.toFixed()}
              <span>°</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WeekForecast
