import React from 'react'
import {Input, Button} from './index'
import {useForm} from 'react-hook-form'

function Signup() {
  const {register, handleSubmit} = useForm();

  const create = () =>console.log('button signup clicked')
  return (
    <form onSubmit={handleSubmit(create)}>
      <Input />
      <Button>Signup</Button>
    </form>
  )
}

export default Signup