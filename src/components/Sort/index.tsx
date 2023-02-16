//import useContext
import { useContext } from 'react'


//import context
import { MyContext } from '../../helpers/MyContext';



//interface for sort component props
export interface SortProps {
  id: number;
  title: string;
  type: number
}


const Sort: React.FC<SortProps> = ({ id, title }: SortProps) => {

  //import value from context
  const { type, setType } = useContext(MyContext);


  //function replacement id for sorted tariffs
  const handleClick = (id: number): void => {
    setType(id);
  }

  
  return (
    <button onClick={() => handleClick(id)} className={type === id ? "sort__select-active" : "sort__select"}>{title}</button>
  )
}

export default Sort