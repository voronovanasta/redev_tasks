import { Layout, Typography } from 'antd';
const style = { textAlign: 'left', width: '100%', marginBottom: '10px' };

const { Title, Paragraph } = Typography;
export function FragmentPage() {
  return (
    <Layout style={{ padding: '10px' }}>
      <Title level={3}> Fragment</Title>
      <Paragraph style={style} strong>
        С помощью фрагментов можно сгруппировать список дочерних элементов без добавления
        дополнительных узлов в DOM.
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`//Способ 1 
import React, { Fragment } from 'react';

//Заменяем теги div на Fragment:
const ChildComponent = () => <Fragment>
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</Fragment>
`}
        </pre>
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`//сокращенный способ 2: нельзя использовать атрибуты, в том числе key
import React, { Fragment } from 'react';

//так хорошо
const ChildComponent = () => <>
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</>

// так нельзя. Будет ошибка
const ChildComponent = () => < className="child" >
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</>
`}
        </pre>
      </Paragraph>
      <Paragraph style={style} mark strong>
        Assigning multiple elements to a variable
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`
function CloseDialog() {
  const buttons = (
    <>
      <OKButton />
      <CancelButton />
    </>
  );
  return (
    <AlertDialog buttons={buttons}>
      Are you sure you want to leave this page?
    </AlertDialog>
  );
}`}
        </pre>
      </Paragraph>
      <Paragraph style={style} strong mark>
        {' '}
        Grouping elements with text{' '}
      </Paragraph>
      <Paragraph style={style}>
        <pre>
          {`function DateRangePicker({ start, end }) {
  return (
    <>
      From
      <DatePicker date={start} />
      to
      <DatePicker date={end} />
    </>
  );
}`}
        </pre>
      </Paragraph>
    </Layout>
  );
}
