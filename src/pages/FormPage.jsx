import { Layout, Typography } from 'antd';
const style = { textAlign: 'left', width: '100%', marginBottom: '10px' };

const { Title, Paragraph, Link } = Typography;
export function FormPage() {
  return (
    <Layout style={{ padding: '10px' }}>
      <Title level={3}> Form </Title>
      <Paragraph style={style}>
        {' '}
        В React существует несколько способов использования форм в приложении, в зависимости от
        потребностей и предпочтений разработчика. Ниже перечислены основные варианты использования
        форм в React приложении:
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        Управляемые компоненты форм:
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        В этом подходе значения полей формы хранятся в состоянии компонента. Каждое поле формы
        связано с состоянием и обновляется через callback-функцию.
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        Неуправляемые компоненты форм:
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        В этом подходе значения полей формы хранятся непосредственно в DOM, а не в состоянии
        компонента.
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        Ref-подход:
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        В этом случае значения полей формы считываются через ref, которые позволяют получить доступ
        к DOM-элементам. Этот подход может быть удобен (нет😐), когда тебе нужно быстро получить
        значения полей без явного сохранения их в состояние компонента.
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        Библиотеки управления формами:
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        Существуют библиотеки, такие как React Hook Form и Formik , которые предоставляют более
        высокоуровневые решения для работы с формами. Они упрощают управление состоянием,
        валидацией, обработкой отправки и другими аспектами работы с формами.
      </Paragraph>
      <Title level={3}> React Hook Form </Title>
      <Link href='https://react-hook-form.com/' target='_blank'>
        {' '}
        Документация{' '}
      </Link>
      <Paragraph style={style}>
        <pre>
          {`
//установка
npm install react-hook-form

//импорт
import { useForm } from 'react-hook-form'

//инициализация хука

const { register, handleSubmit, formState: { errors } } = useForm()

//создание

<form onSubmit={handleSubmit(onSubmit)}>
  {/* Поля формы */}
  <input
  type='number'
  {...register('age', {
    required: 'Обязательное поле',
    min: {
     value: 18,
     message: 'Вам должно быть 18 лет или больше'
    }
   })}
 />
<p>{errors.age?.message}</p>
<button type="submit">Отправить</button>
</form>

//обработка ошибок

const onSubmit = (data) => {
  console.log(data);
};

//Поле с типом radio или checkbox:
<input type="radio" {...register('gender', { required: 'Выберите пол' })} value="male" />
<input type="radio" {...register('gender', { required: 'Выберите пол' })} value="female" />

`}
        </pre>
      </Paragraph>
      <Paragraph style={style} strong mark>
        {' '}
        Controller{' '}
      </Paragraph>
      <Paragraph style={style} strong mark>
        {' '}
        Вот несколько ситуаций, когда стоит использовать Controller:{' '}
      </Paragraph>
      <Paragraph style={style}> - Использование сторонних библиотек (ANTD или MUI) </Paragraph>
      <Paragraph style={style}>
        {' '}
        - Использование сторонних библиотек валидации: Если вы используете сторонние библиотеки
        валидации, такие как yup или joi, Controller позволяет вам интегрировать их правила
        валидации с формой.
      </Paragraph>
      <Paragraph style={style}> Пример интеграции React Hook Form + ANTD + yup</Paragraph>
      <Paragraph style={style}>
        <pre>
          {`
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Radio, Checkbox, DatePicker, Button } from 'antd';
import 'antd/dist/antd.css';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required('Поле обязательно для заполнения').email('Введите корректный email'),
  text: yup.string().required('Поле обязательно для заполнения'),
  number: yup.number().required('Поле обязательно для заполнения'),
  gender: yup.string().required('Выберите пол'),
  checkbox: yup.boolean().oneOf([true], 'Подтвердите выбор'),
  date: yup.date().required('Выберите дату'),
});

const App = () => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input {...field} placeholder="Email" />}
        />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <label>Текст:</label>
        <Controller
          name="text"
          control={control}
          render={({ field }) => <Input {...field} placeholder="Текст" />}
        />
        <p>{errors.text?.message}</p>
      </div>

      <div>
        <label>Число:</label>
        <Controller
          name="number"
          control={control}
          render={({ field }) => <Input type="number" {...field} placeholder="Число" />}
        />
        <p>{errors.number?.message}</p>
      </div>

      <div>
        <label>Пол:</label>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <Radio.Group {...field}>
              <Radio value="male">Мужской</Radio>
              <Radio value="female">Женский</Radio>
            </Radio.Group>
          )}
        />
        <p>{errors.gender?.message}</p>
      </div>

      <div>
        <label>Чекбокс:</label>
        <Controller
          name="checkbox"
          control={control}
          render={({ field }) => <Checkbox {...field}>Я согласен</Checkbox>}
        />
        <p>{errors.checkbox?.message}</p>
      </div>

      <div>
        <label>Дата:</label>
        <Controller
          name="date"
          control={control}
          render={({ field }) => <DatePicker {...field} />}
        />
        <p>{errors.date?.message}</p>
      </div>

      <Button type="primary" htmlType="submit">
        Отправить
      </Button>
    </form>
  );
};

export default App;

`}
        </pre>
      </Paragraph>
      <Title level={3}> Formik</Title>
      <Link href='https://formik.org/docs/overview' target='_blank'>
        {' '}
        Документация{' '}
      </Link>
      <Paragraph style={style}>
        <pre>
          {`
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{ username: '', email: '' }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <Field type="text" name="username" placeholder="Имя пользователя" />
        <ErrorMessage name="username" component="div" />

        <Field
          type="email"
          name="email"
          placeholder="Электронная почта"
          validate={(value) => {
            let error;
            if (!value) {
              error = 'Поле обязательно';
            } else if (!/\\S+@\\S+\\.\\S+/.test(value)) {
              error = 'Некорректный адрес';
            }
            return error;
          }}
        />
        <ErrorMessage name="email" component="div" />

        <button type="submit">Зарегистрироваться</button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
`}
        </pre>
      </Paragraph>
    </Layout>
  );
}
