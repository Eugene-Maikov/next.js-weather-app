import { getCurrentData } from "../utils/currentData";
import { MdLocationOn } from "react-icons/md";
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

const Current = ({ data }: CurrentProps) => {
  const currentData = getCurrentData(); //Сегодняшняя дата
  const weatherIcon = data.current.condition.icon; //Иконка из API
  return (
    <div>
      <div>
        <div>
          <h1>Сегодня</h1>
          <p>{currentData}</p>
        </div>
        {/* Иконка */}
        {weatherIcon && (
          <div>
            <img src={weatherIcon}
              alt={data.current.condition.text}
                 className={style.icon}
            />
          </div>
        )}
      </div>
      {/* Температура */}
      <div>
        <p className="text-5xl text-white">
          {data.current.temp_c.toFixed()} <span>°</span>
        </p>
        <span className="text-white">{data.current.condition.text}</span>
      </div>
      <div>
        <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
          <MdLocationOn />
          <span>{data.location.name}, {data.location.region}</span>
        </div>
      </div>
    </div>
  );
};

export default Current;
