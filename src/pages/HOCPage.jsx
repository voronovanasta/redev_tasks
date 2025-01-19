import { Layout, Typography } from 'antd';
const style = { textAlign: 'left', width: '100%', marginBottom: '10px' };

const { Title, Paragraph } = Typography;
export function HOCPage() {
  return (
    <Layout style={{ padding: '10px' }}>
      <Title level={3}> HOC</Title>
      <Paragraph>Higher Order Components</Paragraph>
      <Paragraph style={style} mark strong>
        HOC — это функции высшего порядка, которые принимают компонент и возвращают новый компонент
        с расширенным функционалом.{' '}
      </Paragraph>
      <Paragraph style={style} mark strong>
        Создание{' '}
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`import React, { useEffect } from 'react';

const withLogger = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log(Component WrappedComponent.name mounted.);
    }, []);

    return <WrappedComponent {...props} />;
  };
};
`}
        </pre>
      </Paragraph>
      <Paragraph style={style} mark strong>
        HOC решает несколько проблем в разработке React-приложений:
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        1. Логическое переиспользование: HOC позволяют выделить общую логику компонентов, такую как
        обработка аутентификации или получение данных, и применять ее ко множеству компонентов без
        дублирования кода.
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = checkAuthStatus(); // Предположим, здесь происходит проверка аутентификации.
    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return <p>Please log in to access this content.</p>;
    }
  };
};

const AuthenticatedComponent = withAuth(ProfileComponent);
`}
        </pre>
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        2. Прокинуть дополнительные props: HOC позволяют добавлять или модифицировать props
        компонентов. Это удобно, например, для передачи данных из контекста или оборачивания
        компонентов в дополнительные компоненты высшего порядка.{' '}
      </Paragraph>
      <Paragraph style={style}>
        3. Обертывание компонентов: HOC могут использоваться для обертывания компонентов
        дополнительным функциональным слоем, например, для логирования, манипуляции с состоянием и
        т.д.
      </Paragraph>
      <Paragraph style={style} mark strong>
        {' '}
        Props могут быть переданы из HOC в оборачиваемый компонент следующим образом:
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`const withExtraProps = (WrappedComponent) => {
  return (props) => {
    const extraProps = { additionalProp: "I'm extra!" };
    return <WrappedComponent {...props} {...extraProps} />;
  };
};
`}
        </pre>
      </Paragraph>
      <Paragraph style={style} strong mark>
        Пример HOC для передачи рефов
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`Пример HOC для передачи рефов

Создаем HOC withForwardedRef:
javascript

 Копировать код
import React, { forwardRef, useEffect } from 'react';

// HOC для передачи рефа
const withForwardedRef = (WrappedComponent) => {
  const ForwardedRefComponent = (props, ref) => {
    useEffect(() => {
      console.log('Компонент смонтирован');
      return () => {
        console.log('Компонент размонтирован');
      };
    }, []);

    return <WrappedComponent {...props} ref={ref} />;
  };

  // Используем forwardRef для передачи рефа
  return forwardRef(ForwardedRefComponent);
};

Создание простого компонента, который будет обернут в HOC:
javascript

 Копировать код
import React, { forwardRef } from 'react';

// Простой компонент
const MyInput = forwardRef((props, ref) => {
  return <input ref={ref} type="text" placeholder="Введите текст" />;
});

Оборачиваем компонент в HOC:
javascript

 Копировать код
// Оборачиваем MyInput в HOC
const MyInputWithRef = withForwardedRef(MyInput);

Используем HOC в родительском компоненте:
javascript

 Копировать код
import React, { useRef } from 'react';

const ParentComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Устанавливаем фокус на поле ввода
    }
  };

  return (
    <div>
      <MyInputWithRef ref={inputRef} />
      <button onClick={focusInput}>Фокус на вводе</button>
    </div>
  );
};

export default ParentComponent;
`}
        </pre>
      </Paragraph>
      <Paragraph style={style} strong mark>
        Ошибки в HOC
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`const withErrorBoundary = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = { hasError: false };
        }

        static getDerivedStateFromError(error) {
            return { hasError: true };
        }

        componentDidCatch(error, errorInfo) {
            console.error("Ошибка:", error, errorInfo);
        }

        render() {
            if (this.state.hasError) {
                return <h1>Что-то пошло не так.</h1>;
            }
            return <WrappedComponent {...this.props} />;
        }
    };
};
`}
        </pre>
      </Paragraph>
    </Layout>
  );
}
