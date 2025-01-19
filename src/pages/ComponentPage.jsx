import { Layout, Typography } from 'antd';
const style = { textAlign: 'left', width: '100%', marginBottom: '10px' };

const { Title, Paragraph } = Typography;
export function ComponentPage() {
  return (
    <Layout style={{ padding: '10px' }}>
      <Title level={3}> Component</Title>
      <Paragraph style={style} strong>
        Компоненты - это небольшие, переиспользуемые элементы пользовательского интерфейса, которые
        объединены вместе, чтобы создать более крупные приложения.
      </Paragraph>
      <Paragraph style={style} strong>
        Во многом компоненты ведут себя как обычные функции JavaScript. Они принимают произвольные
        входные данные (так называемые «пропсы») и возвращают React-элементы, описывающие, что мы
        хотим увидеть на экране.
      </Paragraph>
      <Paragraph strong>React компоненты могут быть классовыми или функциональными. </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`    class MyComponent extends React.Component {
  render() {
    return <div>Hello, Redev!</div>;
  }
}
export default MyComponent;`}
        </pre>
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`const MyComponent = () => {
  return <div>Hello, Redev!</div>;
}
export default MyComponent;`}
        </pre>
      </Paragraph>
      <Paragraph style={style} strong mark>
        React components are regular JavaScript functions except:
      </Paragraph>
      <Paragraph style={style}>Their names always begin with a capital letter</Paragraph>
      <Paragraph style={style}>They return JSX markup.</Paragraph>
      <Paragraph style={style} strong mark>
        Компонента должна себя вести как чистая функция
      </Paragraph>
      <Paragraph style={style} strong>
        “Чистой” называется функция, которая:
      </Paragraph>
      <Paragraph style={style}>
        1. Для одинаковых входных данных всегда возвращает один результат.
      </Paragraph>
      <Paragraph style={style}>
        2. Не имеет побочных эффектов (то есть не изменяет внешние состояния).
      </Paragraph>
      <Paragraph style={style}>3. Не зависит от внешних состояний.</Paragraph>
      <Paragraph style={style} strong mark>
        Stateless компоненты
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`const Greeting = ({name}) => {
  return <h1>Hello, {name}!</h1>;
};`}
        </pre>
      </Paragraph>
      <Paragraph style={style} underlined>
        {' '}
        Эти компоненты не имеют внутреннего состояния и не могут изменять свое поведение в
        зависимости от событий или действий пользователя.
      </Paragraph>
      <Paragraph style={style} strong mark>
        Statelfull компоненты
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};`}
        </pre>
      </Paragraph>
      <Paragraph style={style} underlined>
        Stateful компоненты **могут управлять состоянием** и изменять свое поведение в зависимости
        от событий. Они используют внутреннее состояние, чтобы отслеживать изменения и обновлять UI
        в ответ на действия пользователя или другие события. С появлением хуков в React 16.8
        функциональные компоненты могут также управлять состоянием и эффектами. Теперь можно
        создавать stateful функциональные компоненты с помощью хуков **`useState`** и
        **`useEffect`**.{' '}
      </Paragraph>
    </Layout>
  );
}
