import { Layout, Typography } from 'antd';
const style = { textAlign: 'left', width: '100%', marginBottom: '10px' };

const { Title, Paragraph } = Typography;
export function EventsPage() {
  return (
    <Layout style={{ padding: '10px' }}>
      <Title level={3}> Events</Title>
      <Paragraph style={style} strong>
        В React события (events) являются важной частью взаимодействия с пользователем. Они
        позволяют обрабатывать действия пользователя, такие как клики, наведение, отправка формы и
        другие.
      </Paragraph>
      <Paragraph style={style} strong mark>
        {' '}
        onClick, onChange, onSubmit, onMouseOver, onKeyDown{' '}
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`const handleClick = () => {
  console.log('Кликнули!');
}

const MyComponent = () => {
  return (
    <button onClick={handleClick}>Нажми меня</button>
  );
}`}
        </pre>
      </Paragraph>
      <Paragraph style={style} mark strong>
        target VS currentTarget
      </Paragraph>
      <Paragraph style={style}>
        {`event.target.value: Это значение, которое было изменено в результате действия пользователя. Например, если есть текстовое поле <input> и пользователь вводит в него текст, то event.target.value будет содержать значение этого текста.`}{' '}
      </Paragraph>
      <Paragraph style={style}>
        {`event.currentTarget.value: Это значение, которое ассоциировано с элементом, к которому привязан обработчик событий. В контексте React currentTarget обычно ссылается на элемент, к которому был привязан обработчик событий, и значение value будет доступно только если этот элемент имеет свойство value, например, <input>, <textarea> или <select>.`}
      </Paragraph>
    </Layout>
  );
}
