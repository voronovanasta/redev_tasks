import { Layout, Typography } from 'antd';
const style = { textAlign: 'left', width: '100%', marginBottom: '10px' };

const { Title, Paragraph } = Typography;
export function ReactMemoPage() {
  return (
    <Layout style={{ padding: '10px' }}>
      <Title level={3}> React.memo</Title>
      <Paragraph style={style} strong>
        React.memo — это функция высшего порядка (Higher Order Component) в библиотеке React,
        которая оптимизирует производительность функциональных компонентов. Она предназначена для
        предотвращения ненужного повторного рендеринга компонента, когда его пропсы и состояние не
        изменились.
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`const MemoizedComponent = memo(SomeComponent, arePropsEqual?)
`}
        </pre>
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        Memo returns a new React component
      </Paragraph>
      <Paragraph style={style}>
        React.memo использует механизм мемоизации, чтобы запоминать предыдущий результат рендеринга
        компонента и сравнивать его с текущими пропсами. Если пропсы не изменились, React.memo
        предотвращает повторный рендеринг компонента, возвращая сохраненный результат.
      </Paragraph>
      <Paragraph style={style} mark>
        React.memo также принимает второй необязательный аргумент в виде функции сравнения
        (compareFunction), которая позволяет контролировать, какие пропсы должны считаться равными.
        Если функция сравнения не указана, React.memo будет использовать поверхностное сравнение
        (shallow comparison) для сравнения пропсов.
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`import React from 'react';

const MyComponent = React.memo((props) => {
  // Компонент будет перерисовываться только при изменении пропсов с помощью 
  // compareFunction
  return (
    <div>
      {props.text}
    </div>
  );
}, (prevProps, nextProps) => {
  // compareFunction - пользовательская функция сравнения пропсов
  // Возвращает true, если пропсы должны считаться равными и компонент не должен перерисовываться
});
`}
        </pre>
      </Paragraph>
      <Paragraph style={style} strong mark>
        Even when a component is memoized, it will still re-render when its own state changes and
        when a context that it’s using changes. Memoization only has to do with props that are
        passed to the component from its parent.
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        To get the most out of memo, minimize the times that the props change. For example, if the
        prop is an object, prevent the parent component from re-creating that object every time by
        using useMemo{' '}
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        When you need to pass a function to memoized component, either declare it outside your
        component so that it never changes, or useCallback to cache its definition between
        re-renders.
      </Paragraph>
    </Layout>
  );
}
