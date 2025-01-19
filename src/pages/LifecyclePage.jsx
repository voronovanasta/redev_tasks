import { Layout, Typography } from 'antd';
const style = { textAlign: 'left', width: '100%', marginBottom: '10px' };

const { Title, Paragraph } = Typography;
export function LifecyclePage() {
  return (
    <Layout style={{ padding: '10px' }}>
      <Title level={3}> Lifecycle</Title>
      <Paragraph style={style} strong>
        LifeCycle === Жизненный цикл
      </Paragraph>
      <Paragraph style={style} strong>
        Жизненный цикл в React - это набор этапов, через которые компонент проходит, чтобы правильно
        работать на странице.{' '}
      </Paragraph>
      <Paragraph style={style} strong mark>
        {' '}
        Методы монтирования (Mounting Methods):{' '}
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`    - constructor()
    - render()
    - componentDidMount()`}
        </pre>
      </Paragraph>
      <Paragraph style={style} strong mark>
        {' '}
        Методы обновления (Updating Methods):{' '}
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`    - shouldComponentUpdate()
    - render()
    - componentDidUpdate()`}
        </pre>
      </Paragraph>
      <Paragraph style={style} strong mark>
        {' '}
        Методы размонтирования (Unmounting Methods):{' '}
      </Paragraph>
      <Paragraph style={style}>
        <pre>{`    componentWillUnmount()`}</pre>
      </Paragraph>
      <Paragraph style={style} strong mark>
        {' '}
        Методы обработки ошибок (Error Handling Methods):{' '}
      </Paragraph>
      <Paragraph style={style}>
        <pre>{`    componentDidCatch()`}</pre>
      </Paragraph>
      <Paragraph strong mark>
        {' '}
        Жизненный цикл функциональных компонентов:{' '}
      </Paragraph>
      <Paragraph style={style}>
        useEffect - это хук в React, предназначенный для работы с методами жизненного цикла в
        функциональных компонентах. По сути вот ОДИН ТАКОЙ ХУК заменяет ОСНОВНЫЕ методы жизненного
        цикла.
      </Paragraph>
      <Paragraph style={style} strong mark>
        useEffect(setup, dependencies?){' '}
      </Paragraph>
      <Paragraph style={style} strong>
        Parameters{' '}
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        - setup
      </Paragraph>
      <Paragraph style={style}>
        setup: The function with your Effect’s logic. Your setup function may also optionally return
        a cleanup function. When your component is added to the DOM, React will run your setup
        function. After every re-render with changed dependencies, React will first run the cleanup
        function (if you provided it) with the old values, and then run your setup function with the
        new values. After your component is removed from the DOM, React will run your cleanup
        function.{' '}
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        - optional dependencies:
      </Paragraph>
      <Paragraph style={style}>
        The list of all reactive values referenced inside of the setup code. Reactive values include
        props, state, and all the variables and functions declared directly inside your component
        body [dep1, dep2, dep3]. If you omit this argument, your Effect will re-run after every
        re-render of the component.
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        Notice that you can’t “choose” the dependencies of your Effect. Every reactive value used by
        your Effect’s code must be declared as a dependency.{' '}
      </Paragraph>
      <Paragraph style={style} italic>
        {' '}
        If your Effect wasn’t caused by an interaction (like a click), React will generally let the
        browser paint the updated screen first before running your Effect. If your Effect is doing
        something visual (for example, positioning a tooltip), and the delay is noticeable (for
        example, it flickers), replace useEffect with useLayoutEffect.{' '}
      </Paragraph>
      <Paragraph style={style} strong>
        <pre>
          {`// Отработает как componentDidMount: The dependency list is empty, so the Effect doesn’t re-run on re-renders.
useEffect(() => { console.log("componentDidMount") }, []) 

// Отработает как componentDidUpdate
useEffect(() => { console.log("componentDidUpdate") }, [dependency]) 

// Отработает как componentDidMount и componentDidUpdate after every single render (and re-render) 
useEffect(() => { console.log("componentDidMount и componentDidUpdate") }) 

 // Отработает как componentWillUnmount
useEffect(() => {
  return () => console.log('componentWillUnmount')
}, [])`}
        </pre>
      </Paragraph>
      <Paragraph style={style} underline>
        При первом рендере компонента useEffect также будет вызван, даже если он имеет зависимость и
        при этом первоначальное значение зависимости не изменилось. Это не является ошибкой, а
        предполагаемое поведение хуков.
      </Paragraph>
      <Paragraph style={style} strong mark>
        useLayoutEffect(setup, dependencies?){' '}
      </Paragraph>
      <Paragraph style={style} strong>
        useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
        Before your component is added to the DOM, React will run your setup function.
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        The code inside useLayoutEffect and all state updates scheduled from it block the browser
        from repainting the screen. When used excessively, this makes your app slow. When possible,
        prefer useEffect.
      </Paragraph>
      <Paragraph strong mark>
        {' '}
        Жизненный цикл классовых компонентов:{' '}
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        1. Mounting (Монтирование):{' '}
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        - constructor(): Вызывается при создании экземпляра компонента. Используется для
        инициализации состояния и привязки методов.
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        - render(): Отрисовывает компонент и возвращает React элементы.{' '}
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        - componentDidMount(): Вызывается после рендеринга компонента и его добавления в DOM.
        Используется для выполнения запросов к серверу, подписки на события и других побочных
        эффектов.{' '}
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        2. Updating (Обновление):{' '}
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        - shouldComponentUpdate(nextProps, nextState): Вызывается перед обновлением компонента.
        Используется для оптимизации перерисовки компонента путем возврата false, если обновление не
        требуется.
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        - render(): Отрисовывает компонент и возвращает React элементы.{' '}
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        - componentDidUpdate(prevProps, prevState): Вызывается после обновления компонента и его
        рендеринга. Используется для выполнения дополнительных действий после обновления компонента,
        например, для выполнения запросов к серверу на основе новых пропсов.{' '}
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        3. Unmounting (Размонтирование):{' '}
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        - componentWillUnmount(): Вызывается перед удалением компонента из DOM. Используется для
        выполнения необходимых очисток, отписки от событий и освобождения ресурсов.
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        4. Error Handling (Обработка ошибок):{' '}
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        - componentDidCatch(error, info): Вызывается при возникновении ошибки в дочерних
        компонентах. Используется для отлавливания и обработки ошибок.
      </Paragraph>
    </Layout>
  );
}
