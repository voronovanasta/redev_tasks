import { Layout, Typography } from 'antd';
const style = { textAlign: 'left', width: '100%', marginBottom: '10px' };

const { Title, Paragraph } = Typography;
export function UseCallbackPage() {
  return (
    <Layout style={{ padding: '10px' }}>
      <Title level={3}> UseCallback Hook</Title>
      <Paragraph>const cachedFn = useCallback(fn, dependencies)</Paragraph>
      <Paragraph style={style} mark strong>
        fn:
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        The function value that you want to cache. It can take any arguments and return any values.
        React will return (not call!) your function back to you during the initial render. On next
        renders, React will give you the same function again if the dependencies have not changed
        since the last render. Otherwise, it will give you the function that you have passed during
        the current render, and store it in case it can be reused later. React will not call your
        function. The function is returned to you so you can decide when and whether to call it.
      </Paragraph>
      <Paragraph style={style} mark strong>
        Return
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        - On the initial render, useCallback returns the fn function you have passed.
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        - During subsequent renders, it will either return an already stored fn function from the
        last render (if the dependencies haven’t changed), or return the fn function you have passed
        during this render.
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`import { useCallback } from 'react';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
`}
        </pre>
      </Paragraph>
    </Layout>
  );
}
