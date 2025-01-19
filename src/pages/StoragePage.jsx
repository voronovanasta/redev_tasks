import { Layout, Typography } from 'antd';
const style = { textAlign: 'left', width: '100%', marginBottom: '10px' };

const { Title, Paragraph, Link } = Typography;
export function StoragePage() {
  return (
    <Layout style={{ padding: '10px' }}>
      <Title level={3}> Storages</Title>
      <Paragraph strong> Local Storage</Paragraph>
      <Paragraph style={style}>
        Local Storage - это механизм, который позволяет веб-приложениям сохранять данные локально в
        браузере. Это означает, что данные будут сохранены после закрытия браузера и перезагрузки
        страницы.{' '}
      </Paragraph>
      <Paragraph style={style} strong>
        Для записи данных в LocalStorage можно использовать localStorage объекта window в
        JavaScript.{' '}
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`localStorage.setItem('myData', 'Hello, Redev!');

const myData = localStorage.getItem('myData');
console.log(myData); // Выводится "Hello, Redev!"

`}
        </pre>
      </Paragraph>
      <Paragraph strong> Cookies </Paragraph>
      <Paragraph style={style}>
        {' '}
        Cookies - это небольшие текстовые файлы, которые веб-сайты отправляют и хранят на компьютере
        пользователя через его веб-браузер. Они представляют собой удобный механизм для хранения
        небольших данных, связанных с пользователем и веб-сайтом. В контексте React приложений,
        cookies могут быть использованы для сохранения состояния приложения и обеспечения
        персонализации, аутентификация и авторизация{' '}
      </Paragraph>
      <Paragraph style={style} mark strong>
        {' '}
        Отличие от LocalStorage
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        - Емкость данных: Cookies могут содержать до 4KB данных, в то время как Local Storage
        позволяет хранить около 5MB данных.
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        - Срок хранения: Cookies имеют срок хранения, который можно указать, в то время как данные в
        Local Storage хранятся неограниченное время, пока их явно не удалить.
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        - !!!Передача данных!!!: Cookies автоматически включаются в заголовки каждого HTTP-запроса к
        определенному домену, что делает их более подходящими для некоторых сценариев, таких как
        авторизация. Local Storage данные не автоматически передаются с каждым запросом.
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`// Установка cookie на определенное количество дней
document.cookie = "user_id=123; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";

// Получение всех cookie в виде строки
const allCookies = document.cookie;

// Разбивка строки на отдельные cookie
const cookiesArray = allCookies.split("; ");
const cookies = {};
cookiesArray.forEach(cookie => {
  const [name, value] = cookie.split("=");
  cookies[name] = value;
});

// Удаление cookie путем установки срока действия в прошлое
document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
`}
        </pre>
      </Paragraph>
      <Paragraph strong> Session Storage</Paragraph>
      <Paragraph style={style}>
        Session Storage - это еще один механизм хранения данных в браузере, который работает так же,
        как и LocalStorage. Однако Session Storage имеет ряд отличий от LocalStorage.{' '}
      </Paragraph>
      <Paragraph style={style}>
        Session Storage сохраняет данные только на время сеанса браузера. Это означает, что данные
        будут удалены после закрытия браузера или вкладки. Это может быть полезно для хранения
        временных данных, таких как формы, которые не нужно сохранять после закрытия браузера.
      </Paragraph>
      <Paragraph style={style} strong>
        Чтобы записать данные в Session Storage, можно использовать объект sessionStorage в
        JavaScript.
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`sessionStorage.setItem('myData', 'Hello, Redev!');

const myData = sessionStorage.getItem('myData');
console.log(myData); // Выводится "Hello, Redev!"
`}
        </pre>
      </Paragraph>
      <Paragraph style={style} mark>
        Обрати внимание, что данные в LocalStorage и SessionStorage хранятся в виде строк. При
        необходимости данные могут быть преобразованы в другие типы данных с помощью методов
        JavaScript, например parseInt() или JSON.parse().{' '}
      </Paragraph>
      <Paragraph strong> localForage </Paragraph>
      <Paragraph style={style}>
        localForage - это JavaScript-библиотека, предоставляющая удобный асинхронный интерфейс для
        работы с локальными хранилищами в браузерах. Эта библиотека позволяет сохранять данные в
        браузере пользователя, используя различные хранилища, такие как IndexedDB, WebSQL и
        localStorage, в зависимости от поддержки браузера.
      </Paragraph>
      <Link href='https://www.npmjs.com/package/localforage' target='_blank'>
        {' '}
        Документация{' '}
      </Link>
      <Paragraph style={style}>
        <pre>
          {`npm install localforage

import localforage from 'localforage';

import React, { useState, useEffect } from 'react';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  useEffect(() => {
    // Извлекаем сохраненный язык при загрузке компонента
    localforage.getItem('language').then(language => {
      if (language) {
        setSelectedLanguage(language);
      }
    });
  }, []);

  const handleLanguageChange = (language) => {
    // Сохраняем выбранный язык в локальном хранилище
    localforage.setItem('language', language).then(() => {
      setSelectedLanguage(language);
    });
  };

  return (
    <>
      <h1>Настройки</h1>
      <select value={selectedLanguage} onChange={(e) => handleLanguageChange(e.target.value)}>
        <option value="en">Английский</option>
        <option value="fr">Французский</option>
        <option value="es">Испанский</option>
      </select>
    </>
  );
};

export default App;
`}
        </pre>
      </Paragraph>
    </Layout>
  );
}
