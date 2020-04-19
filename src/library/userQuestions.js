export function userQuestions(values, errors) {
  return {
    email: {
      // text box
      value: values.email,
      key: 'email',
      label: 'Username',
      /* max: 5,
            min: 5, */
      error: errors.email,
    },
    password: {
      value: values.password,
      key: 'password',
      label: 'Password',
      // max: 5,
      type: 'password',
      error: errors.password,
    },
    phone: {
      value: values.phone,
      key: 'phone',
      label: 'Phone Number',
      type: 'tel',
      max: 14,
      error: errors.phone,
    },
    date: {
      value: values.date,
      key: 'date',
      label: 'Today Date',
      type: 'date',
      error: errors.date,
    },
    accept: {
      // single check box return true or false
      value: values.accept,
      key: 'accept',
      label: 'Accept Term and Condition',
      error: errors.accept,
    },
    countries: {
      // single choice dropdown
      value: values.countries,
      key: 'countries',
      label: 'Choose From List of Countries',
      data: [
        { value: 'India', label: 'India' },
        { value: 'USA', label: 'USA' },
        { value: 'UK', label: 'UK' },
        { value: 'Germany', label: 'Germany' },
        { value: 'Russia', label: 'Russia' },
        { value: 'Italy', label: 'Italy' },
      ],
      error: errors.countries,
    },
    country: {
      // Radio Button for single choices
      value: values.country,
      key: 'country',
      label: 'List of Countries',
      data: [
        { value: 'India', label: 'India' },
        { value: 'USA', label: 'USA' },
        { value: 'UK', label: 'UK' },
        { value: 'Germany', label: 'Germany' },
        { value: 'Russia', label: 'Russia' },
        { value: 'Italy', label: 'Italy' },
      ],
      error: errors.country,
    },
    sport: {
      // Group Check boxes
      value: values.sport,
      key: 'sport',
      label: 'What is your favorite Sport',
      data: [
        { value: 'Soccer', label: 'Soccer' },
        { value: 'Cricket', label: 'Cricket' },
        { value: 'Football', label: 'FootBall' },
        { value: 'Hockey', label: 'Hockey' },
        { value: 'Table Tennis', label: 'Table Tennis' },
        { value: 'Boxing', label: 'Boxing' },
      ],
      error: errors.sport,
    },
    hello: {
      // Group Check boxes
      value: values.hello,
      key: 'hello',
      label: 'What is your favorite Sport',
      data: [
        { value: 'Soccer', label: 'Soccer' },
        { value: 'Cricket', label: 'Cricket' },
        { value: 'Football', label: 'FootBall' },
        { value: 'Hockey', label: 'Hockey' },
        { value: 'Table Tennis', label: 'Table Tennis' },
        { value: 'Boxing', label: 'Boxing' },
      ],
      error: errors.hello,
    },
  }
}
