import { Button, WhiteSpace, WingBlank, List, Checkbox } from 'antd-mobile';
import './App.less'
const CheckboxItem = Checkbox.CheckboxItem;


function App() {
  const data = [
    { value: 0, label: 'Ph.D.' },
    { value: 1, label: 'Bachelor' },
    { value: 2, label: 'College diploma' },
  ];

  const onChange = (val) => {
    console.log(val);
  }
  return (
    <div className='full'>
      <ButtonExample />
      <div className='half'></div>
      <div>
        <List renderHeader={() => 'CheckboxItem demo'}>
          {data.map(i => (
            <CheckboxItem key={i.value} onChange={() => onChange(i.value)}>
              {i.label}
            </CheckboxItem>
          ))}
        </List>
      </div>
    </div>

  );
}


const ButtonExample = () => (
  <WingBlank>
    <Button>default</Button><WhiteSpace />
    <Button disabled>default disabled</Button><WhiteSpace />

    <Button type="primary">primary</Button><WhiteSpace />
    <Button type="primary" disabled>primary disabled</Button><WhiteSpace />

    <Button type="warning">warning</Button><WhiteSpace />
    <Button type="warning" disabled>warning disabled</Button><WhiteSpace />

    <Button loading>loading button</Button><WhiteSpace />
    <Button icon="check-circle-o">with icon</Button><WhiteSpace />
    <Button icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" alt="" />}>with custom icon</Button><WhiteSpace />
    <Button icon="check-circle-o" inline size="small" style={{ marginRight: '4px' }}>with icon and inline</Button>
    <Button icon="check-circle-o" inline size="small">with icon and inline</Button>
    <WhiteSpace />

    {/* <Button activeStyle={false}>无点击反馈</Button><WhiteSpace /> */}
    {/* <Button activeStyle={{ backgroundColor: 'red' }}>custom feedback style</Button><WhiteSpace /> */}

    <WhiteSpace />
    <Button type="primary" inline style={{ marginRight: '4px' }}>inline primary</Button>
    {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
    <Button type="ghost" inline style={{ marginRight: '4px' }} className="am-button-borderfix">inline ghost</Button>

    <WhiteSpace />
    <Button type="primary" inline size="small" style={{ marginRight: '4px' }}>primary</Button>
    <Button type="primary" inline size="small" disabled>primary disabled</Button>
    <WhiteSpace />
    <Button type="ghost" inline size="small" style={{ marginRight: '4px' }}>ghost</Button>
    {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
    <Button type="ghost" inline size="small" className="am-button-borderfix" disabled>ghost disabled</Button>
  </WingBlank>
);

export default App;