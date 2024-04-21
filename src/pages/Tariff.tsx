import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Controller, useForm } from 'react-hook-form'
import { ISFormField, IOption } from '../helpers/form.interface'
import ReactSelect from 'react-select'
import { MyContext } from '../helpers/MyContext'


const options: IOption[] = [
  {
    value: ' [0, 1]',
    label: 'Для интернета'
  },
  {
    value: '[0, 2]',
    label: 'Для звоноков'
  },
  {
    value: '[0, 3]',
    label: 'Для развлечений'
  },
  {
    value: '[0, 4]',
    label: 'Подписки'
  },
  {
    value: ' [0, 5]',
    label: 'Прочие'
  }
]

const getValue = (selectedValue: string) =>
  options.find(option => option.value === selectedValue)

const Tariff = () => {
  const redirect = useNavigate()

  const { fetchData } = useContext(MyContext)
  const { register,  formState: { errors }, handleSubmit, reset, control } = useForm<ISFormField>({
    mode: 'onChange'
  })

  const onSubmit = async (data: any) => {
    try {
      await axios.post('http://localhost:4000/card', data)
      alert('Данные успешно отправлены!')
      reset()
      redirect('/')
    } catch (error) {
      alert('Ошибка сервера!')
      reset()
    } finally {
      fetchData()
    }
  }

  return (
    <div className='modal__content'>
      <form className='modal__content-form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='type'>Выберите категорию</label>
        <Controller
          control={control}
          rules={{required:'Выберите категорию' }}
          name='category'
          render={({ field: { onChange, value } }) => (
            <ReactSelect
              placeholder={''}
              options={options}
              value={getValue(value)}
              onChange={(selectedOption: IOption | null) =>
                onChange(selectedOption ? selectedOption.value : '')
              }
            />
          )}
        />
              {errors?.category && (<p className="form__error">{errors.category.message}</p>)}
        
        <label htmlFor='title'>Выберите заголовок</label>
        <input {...register('title', { required: 'Придумайте название' })} />
        {errors?.title && (<p className="form__error">{errors.title.message}</p>)}

        <label htmlFor='subtitle'>Выберите подзаголовок</label>
        <input {...register('subtitle', { required: 'Обязательно добавьте описание' })}/>
        {errors?.subtitle && (<p className="form__error">{errors.subtitle.message}</p>)}

        <label htmlFor='price'>Выберите цену</label>
        <input  type="number"  {...register('price', { required: 'Укажите цену' })}  />
        {errors?.price && (<p className="form__error">{errors.price.message}</p>)}

        <label htmlFor='date'>Выберите период</label>
        <input {...register('date',{ required: 'Укажите период' })}  />
        {errors?.date && (<p className="form__error">{errors.date.message}</p>)}

        <label htmlFor='image'>Выберите картинку</label>
        <input {...register('image', { required: 'Выберите картинку' })}  />
        {errors?.image && (<p className="form__error">{errors.image.message}</p>)}

        <input className='modal__form-send' type='submit' value='Send' />
      </form>
    </div>
  )
}

export default Tariff
