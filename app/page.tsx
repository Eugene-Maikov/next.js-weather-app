import style from './styles/Home.module.scss'
import Input from "./component/Input";

const Home = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.header__inner}>
          <Input />
          <div className={style.header__logo}>Weather App</div>
        </div>
      </div>
    </div>
  )
}
export default Home