"use client"
import { AiOutlineSearch } from "react-icons/ai"
import style from "@/app/styles/Home.module.scss"

// Типы
interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void
  setLocation: React.Dispatch<React.SetStateAction<string>>
}

// Создание INPUT
const Input = ({handleSearch, setLocation}: InputProps) => {
  return (
    <form className={style.header__form}>
      <input
        type="text"
        placeholder="Поиск города"
        className={style.header__input}
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className={style.header__search}>
        <AiOutlineSearch />
      </div>
    </form>
  )
}

export default Input
