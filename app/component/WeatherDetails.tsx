import style from "@/app/styles/Home.module.scss"
import { BsSunrise, BsSunset } from "react-icons/bs"
import { GiWindSlap, GiCompass } from "react-icons/gi"
import { WiHumidity } from "react-icons/wi"
import { MdAir } from "react-icons/md"
import { CiTempHigh } from "react-icons/ci"
import { FaEye } from "react-icons/fa"

interface WeatherDetailsProps {
  data: {
    current: {
      wind_kph: number
      wind_dir: number
      humidity: number
      pressure_mb: number
      feelslike_c: number
      vis_km: number
    }
    forecast: {
      forecastday: {
        astro: {
          sunrise: string
          sunset: string
        }
      }[]
    }
  }
}

const WeatherDetails: React.FC<{ data: any }> = ({data}) =>  {
  return (
    <>
      <div className="p-12">
        <h1 className={style.weatherDetails__title}>Подробно о погоде на сегодня</h1>
        <div className={style.weatherDetails}>
          {/* Рассвет */}
          <div className={style.weatherDetails__item}>
            <div>
              <h3>Рассвет</h3>
              <p>{data.forecast.forecastday[0].astro.sunrise}</p>
            </div>
            <div className={style.weatherDetails__icon}>
              <BsSunrise fontSize={40} />
            </div>
          </div>
          {/* Закат */}
          <div className={style.weatherDetails__item}>
            <div>
              <h3>Закат</h3>
              <p>{data.forecast.forecastday[0].astro.sunset}</p>
            </div>
            <div className={style.weatherDetails__icon}>
              <BsSunset fontSize={40} />
            </div>
          </div>
          {/* Скорость ветра */}
          <div className={style.weatherDetails__item}>
            <div>
              <h3>Скорость ветра</h3>
              <p>{Math.round(data.current.wind_kph / 3.6)} м/с</p>
            </div>
            <div className={style.weatherDetails__icon}>
              <GiWindSlap fontSize={40} />
            </div>
          </div>
          {/* Направление ветра */}
          <div className={style.weatherDetails__item}>
            <div>
              <h3>Направление ветра</h3>
              <p>{data.current.wind_dir}</p>
            </div>
            <div className={style.weatherDetails__icon}>
              <GiCompass fontSize={40} />
            </div>
          </div>
          {/* Ощущается как */}
          <div className={style.weatherDetails__item}>
            <div>
              <h3>Ощущается как</h3>
              <p>{data.current.feelslike_c}°</p>
            </div>
            <div className={style.weatherDetails__icon}>
              <CiTempHigh fontSize={40} />
            </div>
          </div>
          {/* Влажность */}
          <div className={style.weatherDetails__item}>
            <div>
              <h3>Влажность</h3>
              <p>{data.current.humidity} %</p>
            </div>
            <div className={style.weatherDetails__icon}>
              <WiHumidity fontSize={40} />
            </div>
          </div>
          {/* Видимость */}
          <div className={style.weatherDetails__item}>
            <div>
              <h3>Видимость</h3>
              <p>{data.current.vis_km} км</p>
            </div>
            <div className={style.weatherDetails__icon}>
              <FaEye fontSize={40} />
            </div>
          </div>
          {/* Давление */}
          <div className={style.weatherDetails__item}>
            <div>
              <h3>Давление</h3>
              <h3>
                {Math.round(data.current.pressure_mb * 0.750061683)} мм рт. ст
              </h3>
            </div>
            <div className={style.weatherDetails__icon}>
              <MdAir fontSize={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherDetails
