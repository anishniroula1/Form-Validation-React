import React from 'react'
import styles from './styles.module.css'
import useForm from './library/utils/useForm'
import validate, { userQuestions } from './library/userQuestions'
import TextboxQuestion from './library/questions/textbox-question/textbox-question'

export const ExampleComponent = ({ text }) => {
  const submitFunction = async () => {
    console.log(values)
  }

  const initialState = { email: 'email@gmail.com', phone: '1234567890' }
  // call the hook
  const { handleSubmit, handleChange, handleBlur, values, errors } = useForm(
    validate,
    submitFunction,
    initialState
  )
  const question = userQuestions(values, errors)
  return (
    <div>
      <TextboxQuestion
        question={question.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  )
}
