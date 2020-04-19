import { Validators } from './utils/Validator'

export default function validate(values) {
  const errors = {}
  if (Validators.required(values.email)) {
    errors.email = 'Email is required'
  } else if (Validators.email(values.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (Validators.required(values.password)) {
    errors.password = 'password is required'
  } else if (Validators.password(values.password)) {
    errors.password = 'Please try Stronger Password'
  }
  if (Validators.required(values.accept)) {
    errors.accept = 'Please Check this Box'
  }
  if (Validators.required(values.countries)) {
    errors.countries = 'Please Choose one'
  }
  if (Validators.required(values.country)) {
    errors.country = 'Please Choose one'
  }
  if (Validators.required(values.sport)) {
    errors.sport = 'Please Choose More then one'
  }
  if (Validators.required(values.phone)) {
    errors.phone = 'Please Enter your Phone Number'
  }
  if (Validators.phone(values.phone)) {
    errors.phone = 'Please Valid Phone Number'
  }
  if (Validators.required(values.date)) {
    errors.date = 'Please Enter the date'
  }
  if (!values.hello || Object.keys(values.hello).length === 0) {
    errors.hello = 'Please Choose More then one'
  }
  return errors
}
