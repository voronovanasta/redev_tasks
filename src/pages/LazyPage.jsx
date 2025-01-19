import { Layout, Typography } from 'antd';
const style = { textAlign: 'left', width: '100%', marginBottom: '10px' };

const { Title, Paragraph } = Typography;
export function LazyPage() {
  return (
    <Layout style={{ padding: '10px' }}>
      <Title level={3}> Lazy API</Title>
      <Paragraph>const SomeComponent = lazy(load)</Paragraph>
      <Paragraph style={style} mark strong>
        load:
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        load: A function without parameters that returns a Promise or another thenable (a
        Promise-like object with a then method). React will not call load until the first time you
        attempt to render the returned component. After React first calls load, it will wait for it
        to resolve, and then render the resolved value’s .default as a React component. Both the
        returned Promise and the Promise’s resolved value will be cached, so React will not call
        load more than once. If the Promise rejects, React will throw the rejection reason for the
        nearest Error Boundary to handle.
      </Paragraph>
      <Paragraph style={style}>
        Load has to return a Promise or some other thenable (a Promise-like object with a then
        method). It needs to eventually resolve to an object whose .default property is a valid
        React component type, such as a function, memo, or a forwardRef component.
      </Paragraph>
      <Paragraph style={style} mark strong>
        Return
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        lazy returns a React component you can render in your tree. While the code for the lazy
        component is still loading, attempting to render it will suspend. Use Suspense to display a
        loading indicator while it’s loading.
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        lazy lets you defer loading component’s code until it is rendered for the first time.{' '}
      </Paragraph>
      <Paragraph style={style} strong>
        Call lazy outside your components to declare a lazy-loaded React component:
      </Paragraph>
      <Paragraph style={style} underline>
        {' '}
        This code relies on dynamic import(), which might require support from your bundler or
        framework. Using this pattern requires that the lazy component you’re importing was exported
        as the default export.{' '}
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`// App.js
import React, { Suspense, lazy } from 'react';

const DogImage = lazy(() => import('./DogImage'));

const App = () => {
  return (
    <div>
      <h1>Random Dog Image</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <DogImage />
      </Suspense>
    </div>
  );
};

export default App;
`}
        </pre>
      </Paragraph>
    </Layout>
  );
}
