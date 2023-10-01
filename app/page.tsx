"use client"
import React, { useState } from "react"
import style from './styles/Home.module.scss'
import Input from "./component/Input"
import Current from "./component/Current"

const Home = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const [error, setError] = useState("")
  const keyAPI = "8f9f8fd41cb841b7b96195204233009"

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${keyAPI}&q=${location}&days=7&aqi=yes&alerts=yes`

  // Обработка поиска
  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error()
        }
        const data = await response.json()
        setData(data)
        setLocation("")
        setError("")
      } catch (error) {
        setError("Город не найден")
        setData({})
      }
    }
  }

  // Вывод контента
  let content;
  // При первой загрузке
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div>
        <h2>Добро пожаловать в Weather App</h2>
        <p>Введите название города чтобы получить прогноз погоды</p>
      </div>
    );
  } else if (error !== "") { // При ошибке
    content = (
      <div>
        <p className={style.text}>Город не найден</p>
        <p className={style.text}>Введите верное название</p>
      </div>
    );
  } else { // Если город введен правильно выводить данные о погоде
    content = (
      <>
        <div>
          <Current data={data}/>
          {/*<WeekForecast data={data} />*/}
        </div>
        <div>
          {/*<WeatherDeatils data={data} />*/}
        </div>
      </>
    );
  }

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.container}>
          <div className={style.header__inner}>
            <Input handleSearch={handleSearch} setLocation={setLocation} />
            <div className={style.header__logo}>Weather App</div>
          </div>
        </div>
      </div>
      {content}
    </div>
  )
}
export default Home