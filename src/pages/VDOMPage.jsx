import { Layout, Typography } from 'antd';
const style = { textAlign: 'left', width: '100%', marginBottom: '10px' };

const { Title, Text, Paragraph } = Typography;
export function VDOMPage() {
  return (
    <Layout style={{ padding: '10px' }}>
      <Title level={3}> Virtual DOM</Title>
      <Paragraph style={style} strong>
        DOM — это представление пользовательского интерфейса (user interface, UI) в приложении.
      </Paragraph>
      <Paragraph style={style} strong>
        Виртуальный DOM (VDOM) — это концепция программирования, где идеальное или «виртуальное»
        представление UI хранится в памяти и синхронизируется с «реальным» DOM, используемая такими
        библиотеками, как ReactDOM. Данный процесс называется согласованием (reconcilation).
      </Paragraph>
      <Paragraph style={style}>
        <Text strong>Reconciliation</Text>: Определяются узлы, представляющие элементы UI, состояние
        которых изменилось. После этого вычисляется разница между предыдущей и текущей версиями
        виртуального DOM-дерева. Затем все родительское поддерево подвергается повторному рендерингу
        для представления обновленного UI. Наконец, это обновленное дерево используется для
        обновления RDOM.
      </Paragraph>
      <Paragraph style={style}>
        1. React использует паттерн проектирования «Наблюдатель» (observer) и реагирует на изменения
        состояния
      </Paragraph>
      <Paragraph style={style}>
        2. React использует механизм пакетного (batch) обновления RDOM
      </Paragraph>
      <Paragraph style={style}>
        3. React использует эвристический O(n) (линейный) алгоритм, основываясь на двух
        предположениях:
        <Paragraph style={style} italic>
          - Два элемента разных типов приводят к построению разных деревьев;
        </Paragraph>
        <Paragraph style={style} italic>
          - Разработчик может обеспечить стабильность элементов между рендерингами посредством пропа
          key (ключ)
        </Paragraph>
      </Paragraph>
      <Paragraph style={style} strong mark>
        Good to know!
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        - React preserves a component’s state for as long as it’s being rendered at its position in
        the UI tree.
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        - It’s the position in the UI tree—not in the JSX markup—that matters to React!{' '}
      </Paragraph>
      <Paragraph style={style}> - Different components at the same position reset state!</Paragraph>
      <Paragraph style={style}>
        {' '}
        - When you render a different component in the same position, it resets the state of its
        entire subtree!
      </Paragraph>
      <Paragraph style={style}>
        {' '}
        - Don’t nest component definitions, or you’ll reset state by accident.
      </Paragraph>
      <Paragraph style={style} strong>
        Resetting state at the same position
      </Paragraph>
      <Paragraph style={style}>
        There are two ways to reset state when switching between them:
      </Paragraph>
      <Paragraph style={style}>1.Render components in different positions</Paragraph>
      <Paragraph style={style}>
        2.Give each component an explicit identity with key
        <Paragraph strong>
          Remember that keys are not globally unique. They only specify the position within the
          parent.
        </Paragraph>
      </Paragraph>
    </Layout>
  );
}
