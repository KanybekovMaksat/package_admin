//import useContext
import { useContext } from 'react'


//import lib
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ProgressBar } from 'react-loader-spinner'


//import context
import { MyContext } from '../helpers/MyContext'


//import components
import Card from '../components/Card'
import Sort from '../components/Sort'



const Home = () => {

  //import value from context
  const { category, sort } = useContext(MyContext)

  
  return (
    <div className='App'>
      <h1 className='App__title'>Выгодные услуги от Beeline</h1>
      <div className='App__sort-wrapper'>
        {/* conditional for loading and empty data */}
        {category.map(item => {
          return <Sort {...item} key={item.id} />
        })}
      </div>
      {sort.length === 0 ? (
        <>
          <p>В процессе</p>
          <ProgressBar
            height='80'
            width='80'
            ariaLabel='progress-bar-loading'
            wrapperStyle={{}}
            wrapperClass='progress-bar-wrapper'
            borderColor='#000000'
            barColor='#FFCD00'
          />
        </>
      ) : (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          layout
          className='App__card-wrapper'
        >
          {sort.map(item => (
            <Card {...item} key={item.id} />
          ))}
        </motion.div>
      )}
      <Link className='App__link' to='/create-tariff'>
        Создать тариф
      </Link>
    </div>
  )
}

export default Home
