import { Layout, Typography } from 'antd';
const style = { textAlign: 'left', width: '100%', marginBottom: '10px' };

const { Title, Paragraph } = Typography;
export function PropsPage() {
  return (
    <Layout style={{ padding: '10px' }}>
      <Title level={3}> Props</Title>
      <Paragraph style={style} strong>
        Пропсы (сокращение от properties) - это данные, которые передаются в компоненты React для
        настройки их поведения и внешнего вида. Они позволяют передавать информацию из родительского
        компонента в дочерний компонент.
      </Paragraph>
      <Paragraph style={style} strong mark>
        React component functions accept a single argument, a props object
      </Paragraph>
      <Paragraph style={style} strong>
        Пропсы передаются в компоненты в виде атрибутов при их использовании в JSX.
      </Paragraph>
      <Paragraph strong underline>
        {' '}
        В функциональных компонентах пропсы доступны как параметр функции компонента. Например,{' '}
        {`(props) => {...}`}
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`// Родительский компонент
const ParentComponent = () => {
  const message = "Привет, Redev!";
  return <ChildComponent message={message} />;
}

// Дочерний компонент
const ChildComponent = (props) => {
  return <div>{props.message}</div>;
}

// либо сразу сделать деструктуризацию, ведь props это обычный объект
const ChildComponent = ({message}) => {
  return <div>{message}</div>;
// spread syntax
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
}`}
        </pre>
      </Paragraph>
      <Paragraph strong underline>
        В классовых компонентах пропсы доступны через this.props. Например, this.props.message.
      </Paragraph>
      <Paragraph style={style} mark underline>
        Props можно использовать для передачи любых данных, включая строки, числа, массивы, объекты
        и функции.{' '}
      </Paragraph>
      <Paragraph style={style} mark underline>
        Пропсы являются неизменяемыми (immutable), их нельзя изменять напрямую:
      </Paragraph>
      <Paragraph>
        When a component needs to change its props (for example, in response to a user interaction
        or new data), it will have to “ask” its parent component to pass it different props—a new
        object!
      </Paragraph>
      <Paragraph style={style} strong mark>
        Specifying a default value for a prop
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`function Avatar({ person, size = 100 }) {
  // ...
}`}
        </pre>
      </Paragraph>
      <Paragraph style={style}>
        The default value is only used if the size prop is missing or if you pass{' '}
        {`size={undefined}`}. But if you pass {`size={null}`} or size={0}, the default value will
        not be used.
      </Paragraph>

      <Paragraph style={style} strong mark>
        Passing JSX as children
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}`}
        </pre>
      </Paragraph>
      <Paragraph style={style}>
        {`When you nest content inside a JSX tag, the parent component will receive that content in a prop called children. For example, the Card component below will receive a children prop set to <Avatar /> and render it in a wrapper div`}{' '}
      </Paragraph>
      <Paragraph style={style} strong mark>
        Good to know!
      </Paragraph>
      <Paragraph style={style} strong>
        {' '}
        You can only use curly braces in two ways inside JSX:
      </Paragraph>
      <Paragraph style={style}>
        {`As text directly inside a JSX tag: <h1>{name}'s To Do List</h1> works, but <{tag}> Gregorio Y.`}{' '}
      </Paragraph>
      <Paragraph style={style}>
        {`As attributes immediately following the = sign: src={avatar} will read the avatar variable, but src="{avatar}" will pass the string "{avatar}".`}
      </Paragraph>
    </Layout>
  );
}
