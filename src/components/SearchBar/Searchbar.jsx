import React from 'react'
import { Form, Input, Button } from 'antd'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
}

const Searchbar = (props) => {
  const [form] = Form.useForm();

  const handleOk = (values) => {
    const { onSubmitted } = props;

    onSubmitted(Object.assign({}, values));
  }


  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Form layout="horizontal" {...formItemLayout} form={form} onFinish={handleOk}>
        <Form.Item name="search">
          <Input style={{ width: '450px' }} placeholder='Example: help, health' />
        </Form.Item>

        <ButtonWrapper>
          <Button type='primary' size='large' onClick={form.submit} htmlType='button'>
            Generate By Keyword
          </Button>
        </ButtonWrapper>
      </Form>
    </div>
  )
}

export default Searchbar
