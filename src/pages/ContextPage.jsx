import { Layout, Typography } from 'antd';
const style = { textAlign: 'left', width: '100%', marginBottom: '10px' };

const { Title, Paragraph } = Typography;
export function ContextPage() {
  return (
    <Layout style={{ padding: '10px' }}>
      <Title level={3}> Context</Title>
      <Paragraph style={style} strong>
        Какую проблему решает context? В React пропс-дриллинг (props drilling) - это паттерн,
        который возникает, когда компоненту нужно передать данные через несколько уровней других
        компонентов.
      </Paragraph>
      <Title level={4}> CreateContext</Title>
      <Paragraph>const SomeContext = createContext(defaultValue)</Paragraph>
      <Paragraph style={style} mark strong>
        defaultValue:
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        The value that you want the context to have when there is no matching context provider in
        the tree above the component that reads context. If you don’t have any meaningful default
        value, specify null. The default value is meant as a “last resort” fallback. It is static
        and never changes over time.
      </Paragraph>
      <Paragraph style={style} mark strong>
        Return
      </Paragraph>
      <Paragraph style={style}>createContext returns a context object.</Paragraph>
      <Paragraph style={style} strong>
        {' '}
        The context object itself does not hold any information. It represents which context other
        components read or provide. Typically, you will use SomeContext.Provider in components above
        to specify the context value, and call useContext(SomeContext) in components below to read
        it. The context object has a few properties:
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        - SomeContext.Provider lets you provide the context value to components.{' '}
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        - SomeContext.Consumer is an alternative and rarely used way to read the context value.
      </Paragraph>
      <Paragraph style={style} strong>
        SomeContext.Consumer
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        Значение контекста будет доступно внутри функции-рендерера в виде аргумента.
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`function Button() {
  // 🟡 Legacy way (not recommended)
  return (
    <ThemeContext.Consumer>
      {theme => (
        <button className={theme} />
      )}
    </ThemeContext.Consumer>
  );
}
`}
        </pre>
      </Paragraph>
      <Paragraph style={style} mark>
        {' '}
        You can override the context for a part of the tree by wrapping that part in a provider with
        a different value.
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`<ThemeContext.Provider value="dark">
  ...
  <ThemeContext.Provider value="light">
    <Footer />
  </ThemeContext.Provider>
  ...
</ThemeContext.Provider>
`}
        </pre>
      </Paragraph>
      <Paragraph style={style} strong>
        If you forget to specify value, it’s like passing value= undefined.
      </Paragraph>

      <Title level={4}> UseContext</Title>
      <Paragraph>const value = useContext(SomeContext)</Paragraph>
      <Paragraph style={style} mark strong>
        SomeContext:
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        The context that you’ve previously created with createContext. The context itself does not
        hold the information, it only represents the kind of information you can provide or read
        from components.
      </Paragraph>
      <Paragraph style={style} mark strong>
        Return
      </Paragraph>
      <Paragraph style={style}>
        useContext returns the context value for the calling component. It is determined as the
        value passed to the closest SomeContext.Provider above the calling component in the tree. If
        there is no such provider, then the returned value will be the defaultValue you have passed
        to createContext for that context. The returned value is always up-to-date. React
        automatically re-renders components that read some context if it changes.
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        useContext() call in a component is not affected by providers returned from the same
        component. The corresponding Context.Provider needs to be above the component doing the
        useContext() call.
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        React automatically re-renders all the children that use a particular context starting from
        the provider that receives a different value. The previous and the next values are compared
        with the Object.is comparison. Skipping re-renders with memo does not prevent the children
        receiving fresh context values.{' '}
      </Paragraph>
      <Paragraph style={style} strong mark>
        Updating data passed via context:
      </Paragraph>

      <Paragraph style={style}>
        <pre>
          {`function MyPage() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <Button onClick={() => {
        setTheme('light');
      }}>
        Switch to light theme
      </Button>
    </ThemeContext.Provider>
  );
}
`}
        </pre>
      </Paragraph>
    </Layout>
  );
}
