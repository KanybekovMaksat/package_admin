//import lib
import { motion } from "framer-motion";
import { useSlicer } from "../../hook/useSlicer";


//interface for card props
export interface CardProps {
  id: number;
  price: number;
  date: string;
  title: string;
  subtitle: string;
  image: string;
}


const Card: React.FC<CardProps> = ({
  id,
  price,
  date,
  title,
  subtitle,
  image,
}: CardProps) => {

  useSlicer('.card__heading-title', 22)
  useSlicer('.card__heading-subtitle', 35)

  return (
    <motion.div layout className="card">
      <div className="card__info">
        <div className="card__info-heading">
          <p className="card__heading-title">{title}</p>
          <p className="card__heading-subtitle">{subtitle}</p>
        </div>
        <img src={image} alt={title} className="card__info-img" />
      </div>
      <div className="card__price">
        <div className="card__price-box">
          <p className="card__price-cash">{price} сом</p>
          <p className="card__price-date">/{date}</p>
        </div>
        <button className="card__price-btn">Подключить</button>
      </div>
    </motion.div>
  );
};

export default Card;
