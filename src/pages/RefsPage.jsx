import { Layout, Typography } from 'antd';
const style = { textAlign: 'left', width: '100%', marginBottom: '10px' };

const { Title, Paragraph } = Typography;
export function RefsPage() {
  return (
    <Layout style={{ padding: '10px' }}>
      <Title level={3}> Refs</Title>
      <Paragraph style={style} strong>
        Refs (далее просто “ссылки”) предоставляет способ доступа к DOM-узлам или React-элементам,
        созданным в методе render.{' '}
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`//Управление фокусом
import React, { useEffect, useState, Fragment, useRef } from 'react'

const Test = () => {
    const [text, setText] = useState('')
    const textInput = useRef(null)
    const valid = () => {
        textInput.current.focus()
    }
    return (
        <div>
            <input ref={textInput} value={text} />
            <button onClick={() => valid()}>
                Click to focus
            </button>
        </div>
    )
}

export default Test`}
        </pre>
      </Paragraph>
      <Paragraph style={style} mark>
        Есть несколько хороших примеров использования ссылок: управление фокусом, выделение текста,
        выполнение анимацийб интеграция со сторонними библиотеками, взаимодействующие с DOM.
      </Paragraph>
      <Paragraph mark strong>
        UseRef is a React Hook that lets you reference a value that’s not needed for rendering.
      </Paragraph>
      <Paragraph style={style} code>
        {`const ref = useRef(initialValue)`}
      </Paragraph>
      <Paragraph style={style} strong>
        Parameters
      </Paragraph>
      <Paragraph style={style}>
        initialValue: The value you want the ref object’s current property to be initially. It can
        be a value of any type. This argument is ignored after the initial render.
      </Paragraph>
      <Paragraph style={style} strong>
        UseRef returns an object with a single property:
      </Paragraph>
      <Paragraph style={style}>
        current: Initially, it’s set to the initialValue you have passed. You can later set it to
        something else. If you pass the ref object to React as a ref attribute to a JSX node, React
        will set its current property.
      </Paragraph>
      <Paragraph style={style} strong mark>
        {' '}
        By using a ref, you ensure that:{' '}
      </Paragraph>
      <Paragraph style={style}>
        You can store information between re-renders (unlike regular variables, which reset on every
        render).{' '}
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        Changing it does not trigger a re-render (unlike state variables, which trigger a
        re-render).{' '}
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        The information is local to each copy of your component (unlike the variables outside, which
        are shared).{' '}
      </Paragraph>
      <Paragraph style={style} strong mark>
        {' '}
        Do not write or read ref.current during rendering, except for initialization. This makes
        your component’s behavior unpredictable.
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`
function MyComponent() {
  // ...
  // 🚩 Don't write a ref during rendering
  myRef.current = 123;
  // ...
  // 🚩 Don't read a ref during rendering
  return <h1>{myOtherRef.current}</h1>;
}`}
        </pre>
      </Paragraph>
      <Paragraph style={style} strong mark>
        {' '}
        You can read or write refs from event handlers or effects instead.
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`function MyComponent() {
  // ...
  useEffect(() => {
    // ✅ You can read or write refs in effects
    myRef.current = 123;
  });
  // ...
  function handleClick() {
    // ✅ You can read or write refs in event handlers
    doSomething(myOtherRef.current);
  }
  // ...
}`}
        </pre>
      </Paragraph>
      <Paragraph style={style} strong>
        You can pass refs from parent component to child components just like any other prop.
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`import { useRef } from 'react';

function MyInput({ ref }) {
  return <input ref={ref} />;
}

export default function MyForm() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
`}
        </pre>
      </Paragraph>
      <Title level={3}>ForwardRef</Title>
      <Paragraph>const SomeComponent = forwardRef(render)</Paragraph>
      <Paragraph style={style} strong>
        forwardRef lets your component expose a DOM node to parent component with a ref.
      </Paragraph>
      <Paragraph style={style} strong>
        forwardRef accepts a render function as an argument. React calls this function with props
        and ref:
      </Paragraph>
      <Paragraph style={style} strong mark>
        Return
      </Paragraph>
      <Paragraph style={style} strong>
        forwardRef returns a React component that you can render in JSX. Unlike React components
        defined as plain functions, the component returned by forwardRef is able to take a ref prop.
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`const MyInput = forwardRef(function MyInput(props, ref) {
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      <input {...otherProps} ref={ref} />
    </label>
  );
});

function Form() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <form>
      <MyInput label="Enter your name:" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}
`}
        </pre>
      </Paragraph>
    </Layout>
  );
}
