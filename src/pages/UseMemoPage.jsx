import { Layout, Typography } from 'antd';
const style = { textAlign: 'left', width: '100%', marginBottom: '10px' };

const { Title, Paragraph } = Typography;
export function UseMemoPage() {
  return (
    <Layout style={{ padding: '10px' }}>
      <Title level={3}> UseMemo Hook</Title>
      <Paragraph>useMemo(calculateValue, dependencies)</Paragraph>
      <Paragraph style={style} strong>
        React хук useMemo предназначен для мемоизации вычислений в функциональных компонентах. Он
        позволяет сохранять результат вычислений и повторно использовать его, если входные значения
        (зависимости) не изменились.
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`import React, { useMemo } from 'react';

const MyComponent = ({ data }) => {
  const processedData = useMemo(() => {
    // Вычисления, требующие много времени или ресурсов
    // Например, фильтрация или сортировка массива данных
    return processData(data);
  }, [data]); // Зависимость - значение пропса "data"

  return (
    <div>
      {processedData}
    </div>
  );
};
`}
        </pre>
      </Paragraph>
      <Paragraph style={style} strong>
        calculateValue: The function calculating the value that you want to cache. It should be
        pure, should take no arguments, and should return a value of any type.
      </Paragraph>
      <Paragraph style={style} strong>
        Caching return values like this is also known as memoization, which is why this Hook is
        called useMemo.{' '}
      </Paragraph>
      <Paragraph strong mark>
        Memoization unnecessary when{' '}
      </Paragraph>
      <Paragraph style={style} mark>
        {' '}
        a component visually wraps other components, let it accept JSX as children. This way, when
        the wrapper component updates its own state, React knows that its children don’t need to
        re-render.{' '}
      </Paragraph>
      <Paragraph style={style} mark>
        {' '}
        React sees the same exact JSX as during the previous render, it won’t try to re-render your
        component. This is because JSX nodes are immutable.{' '}
      </Paragraph>
    </Layout>
  );
}
