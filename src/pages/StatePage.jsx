import { Layout, Typography } from 'antd';
const style = { textAlign: 'left', width: '100%', marginBottom: '10px' };

const { Title, Paragraph } = Typography;
export function StatePage() {
  return (
    <Layout style={{ padding: '10px' }}>
      <Title level={3}> State</Title>
      <Paragraph style={style} strong>
        Cостояние (state) представляет собой данные, которые используются внутри компонента для
        отслеживания и обновления информации. Состояние позволяет компонентам быть динамичными и
        реагировать на изменения данных или взаимодействие пользователя.{' '}
      </Paragraph>
      <Paragraph style={style} strong>
        В React есть возможность использовать state в функциональных компонентах, путем
        использования хука useState.
      </Paragraph>
      <Paragraph style={style} strong mark>
        {' '}
        Хук UseState возвращает массив с парой значений:{' '}
      </Paragraph>
      <Paragraph style={style}>- state: текущее значение состояния.</Paragraph>
      <Paragraph style={style}>
        - setState: функция для обновления значения состояния. Aсинхронная операция!
      </Paragraph>
      <Paragraph style={style}>
        При вызове setState передается новое значение состояния или функция. Когда новое состояние
        зависит от предыдущего, то лучше использовать функциональное обновление.
      </Paragraph>
      <Paragraph style={style} mark strong>
        Параметры
      </Paragraph>
      <Paragraph style={style}>
        initialState (необязательный): начальное значение состояния. Может быть примитивным типом
        данных, объектом или функцией. Присваивается только один раз при инициализации компонента.
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={increment}>Увеличить</button>
    </div>
  );
};`}
        </pre>
      </Paragraph>
      <Paragraph style={style} mark>
        State можно передавать в дочерние компоненты при помощи props.
      </Paragraph>
      <Paragraph style={style} mark>
        Важно помнить, что хуки могут использоваться только внутри функциональных компонентов или
        других хуков.
      </Paragraph>
      <Paragraph style={style} mark strong>
        State с объектом
      </Paragraph>
      <Paragraph style={style}>
        1. Не изменяй существующее состояние напрямую: Вместо этого создавай новый объект с помощью
        оператора spread. Это позволяет React правильно отслеживать изменения состояния и
        ререндерить компонент при необходимости.
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        2. Используй функцию для обновления состояния: Когда новое состояние зависит от предыдущего,
        всегда! используй функцию для обновления, чтобы избежать проблем с конкурентным обновлением
        состояния.
      </Paragraph>
      <Paragraph mark strong>
        Batching
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        React waits until all code in the event handlers has run before processing your state
        updates. This is why the re-render only happens after all these setNumber() calls
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
  setNumber(42);
}}>`}
        </pre>
      </Paragraph>
      <Paragraph style={style}>
        Here’s how React works through these lines of code while executing this event handler:
      </Paragraph>
      <Paragraph style={style}>
        1. setNumber(number + 5): number is 0, so setNumber(0 + 5). React adds “replace with 5” to
        its queue.
      </Paragraph>
      <Paragraph
        style={style}
      >{`2. setNumber(n => n + 1): n => n + 1 is an updater function. React adds that function to its queue.`}</Paragraph>
      <Paragraph style={style}>
        3. setNumber(42): React adds “replace with 42” to its queue.
      </Paragraph>

      <Paragraph style={style} mark strong>
        State в классах{' '}
      </Paragraph>
      <Paragraph style={style}>State создается в конструкторе компонента.</Paragraph>
      <Paragraph style={style}>
        Метод setState используется для обновления состояния компонента.
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  ...
}


this.setState({ count: this.state.count + 1 });
this.setState((state)=> { count: state.count + 1 });`}
        </pre>
      </Paragraph>
    </Layout>
  );
}
