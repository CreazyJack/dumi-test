import React from 'react'
import Input from '.'
import Card from '../Cord'
import useDebounce from '../hooks/useDebounce'

export default () => {
  const [value, setValue] = React.useState('0')
  const [count, setCount] = React.useState(0)
  const debounce = useDebounce((v) => console.log(v))
  React.useEffect(() => {
    const interval = setInterval(() => setValue(Math.random().toFixed(2)), 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <Card title="不同大小">
        <div style={{ marginBottom: 16 }}>
          <div>{value}</div>
          <div
            onClick={useDebounce(() => {
              console.log(count)
              setCount(count + 1)
            })}
          >
            {count}
          </div>
          <Input size="small" placeholder="small" />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input placeholder="middle" />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input size="large" placeholder="large" />
        </div>
      </Card>
      <Card title="前缀">
        <Input prefix="prefix" />
      </Card>
      <Card title="后缀">
        <Input suffix="suffix" />
      </Card>
      <Card title="前后缀">
        <Input prefix="prefix" suffix="suffix" />
      </Card>
      <Card title="禁用">
        <Input disabled prefix="prefix" suffix="suffix" />
      </Card>
      <Card title="防抖">
        <Input prefix="prefix" suffix="suffix" onChange={debounce} />
      </Card>
    </>
  )
}
