import { Layout, Typography } from 'antd';
const style = { textAlign: 'left', width: '100%', marginBottom: '10px' };

const { Title, Paragraph } = Typography;
export function KeyPage() {
  return (
    <Layout style={{ padding: '10px' }}>
      <Title level={3}> Key</Title>
      <Paragraph style={style} strong>
        Ключи помогают React определять, какие элементы были изменены, добавлены или удалены. Их
        необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени:
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li key={number}>
        {number}
    </li>
);
`}
        </pre>
      </Paragraph>
      <Paragraph style={style}>
        Добавляя key, мы помогаем механизму reconciliation тем, что с key он сверяет не попарно
        между текущим и новым VDOM, а ищет компоненты с тем же key (тег / имя компонента при этом
        учитывается) — это уменьшает количество перерисовок интерфейса. Обновлены/добавлены будут
        только те элементы, которые были изменены/не встречались в предыдущем дереве.
      </Paragraph>
      <Paragraph style={style} strong mark>
        Rules of keys{' '}
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        - Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes
        in different arrays.{' '}
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        - Keys must not change or that defeats their purpose! Don’t generate them while rendering.
      </Paragraph>
    </Layout>
  );
}
