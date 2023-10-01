"use client"
import { AiOutlineSearch } from "react-icons/ai";
import style from "@/app/styles/Home.module.scss";

// Создание INPUT
const Input = () => {
  return (
    <form className={style.header__form}>
      <input
        type="text"
        placeholder="Поиск города"
        className={style.header__input}
      />
      <div className={style.header__search}>
        <AiOutlineSearch />
      </div>
    </form>
  )
}

export default Input;
