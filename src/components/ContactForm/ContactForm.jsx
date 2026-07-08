// import { useState } from 'react'
// import styles from './ContactForm.module.css'
// import { useForm, ValidationError } from '@formspree/react'

// const INITIAL = {
//   name: '',
//   email: '',
//   subject: '',
//   message: '',
// }

// function validate(fields) {
//   const errors = {}

//   if (!fields.name.trim()) {
//     errors.name = 'Please enter your name.'
//   }

//   if (!fields.email.trim()) {
//     errors.email = 'Please enter your email address.'
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
//     errors.email = 'Please enter a valid email address.'
//   }

//   if (!fields.subject.trim()) {
//     errors.subject = 'Please enter a subject.'
//   }

//   if (!fields.message.trim()) {
//     errors.message = 'Please enter your message.'
//   } else if (fields.message.trim().length < 20) {
//     errors.message = 'Your message should be at least 20 characters.'
//   }

//   return errors
// }

// function Field({ label, id, error, children }) {
//   return (
//     <div className={styles.field}>
//       <label htmlFor={id} className={styles.label}>{label}</label>
//       {children}
//       {error && <span className={styles.error}>{error}</span>}
//     </div>
//   )
// }

// export default function ContactForm() {
//   const [fields, setFields] = useState(INITIAL)
//   const [errors, setErrors] = useState({})
//   const [touched, setTouched] = useState({})

//   // Formspree state controller
//   const [state, handleFormspreeSubmit, resetFormspree] = useForm('xeebpdyq')

//   const update = (e) => {
//     const { name, value } = e.target
//     const next = { ...fields, [name]: value }
//     setFields(next)

//     if (touched[name]) {
//       const errs = validate(next)
//       setErrors((prev) => ({
//         ...prev,
//         [name]: errs[name],
//       }))
//     }
//   }

//   const blur = (e) => {
//     const { name } = e.target
//     setTouched((prev) => ({ ...prev, [name]: true }))

//     const errs = validate(fields)
//     setErrors((prev) => ({
//       ...prev,
//       [name]: errs[name],
//     }))
//   }

//   const localSubmitCheck = async (e) => {
//     e.preventDefault()
//     const errs = validate(fields)

//     if (Object.keys(errs).length) {
//       setErrors(errs)
//       setTouched({
//         name: true,
//         email: true,
//         subject: true,
//         message: true,
//       })
//       return
//     }

//     handleFormspreeSubmit(e)
//   }

//   // Smooth local reset instead of heavy window.location.reload()
//   const handleReset = () => {
//     setFields(INITIAL)
//     setErrors({})
//     setTouched({})
//     resetFormspree() // Resets Formspree's internal state.succeeded back to false
//   }

//   const inputClass = (name) =>
//     `${styles.input} ${errors[name] && touched[name] ? styles.inputError : ''}`

//   // Modified Success Screen Layout
//   if (state.succeeded) {
//     return (
//       <div className={styles.success}>
//         <span className={styles.successIcon}>✓</span>
//         <h4>Thank You, {fields.name}!</h4>

//         {/* Forces client data to sit inline smoothly */}
//         <p className={styles.successInlineMsg}>Your message has been sent successfully. I'll get back to you soon.</p>
//         <button className={styles.resetBtn} onClick={handleReset}>Send Another Message</button>
//       </div>
//     )
//   }

//   return (
//     <form className={styles.form} onSubmit={localSubmitCheck} noValidate>
//       <div className={styles.row}>
//         <Field label="Full Name" id="name" error={touched.name && errors.name}>
//           <input id="name" name="name" type="text" value={fields.name} onChange={update} onBlur={blur} className={inputClass('name')} />
//           <ValidationError prefix="Name" field="name" errors={state.errors} />
//         </Field>

//         <Field label="Email Address" id="email" error={touched.email && errors.email}>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             value={fields.email}
//             onChange={update}
//             onBlur={blur}
//             className={inputClass('email')}
//           />
//           <ValidationError prefix="Email" field="email" errors={state.errors} />
//         </Field>
//       </div>

//       <Field label="Subject" id="subject" error={touched.subject && errors.subject}>
//         <input
//           id="subject"
//           name="subject"
//           type="text"
//           value={fields.subject}
//           onChange={update}
//           onBlur={blur}
//           className={inputClass('subject')}
//         />
//         <ValidationError prefix="Subject" field="subject" errors={state.errors} />
//       </Field>

//       <Field label="Message" id="message" error={touched.message && errors.message}>
//         <textarea
//           id="message"
//           name="message"
//           rows={6}
//           value={fields.message}
//           onChange={update}
//           onBlur={blur}
//           className={`${inputClass('message')} ${styles.textarea}`}
//         />
//         <ValidationError prefix="Message" field="message" errors={state.errors} />
//       </Field>

//       <button
//         type="submit"
//         className={styles.submitBtn}
//         disabled={state.submitting}
//       >
//         {state.submitting ? (
//           <>
//             <span className={styles.spinner} />
//             Sending...
//           </>
//         ) : (
//           'Send message'
//         )}
//       </button>
//     </form>
//   )
// }

















import { useState } from 'react'
import styles from './ContactForm.module.css'

const INITIAL = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function validate(fields) {
  const errors = {}

  if (!fields.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!fields.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!fields.subject.trim()) {
    errors.subject = 'Please enter a subject.'
  }

  if (!fields.message.trim()) {
    errors.message = 'Please enter your message.'
  } else if (fields.message.trim().length < 20) {
    errors.message = 'Your message should be at least 20 characters.'
  }

  return errors
}

function Field({ label, id, error, children }) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {children}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}

export default function ContactForm() {
  const [fields, setFields] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const update = (e) => {
    const { name, value } = e.target
    const next = { ...fields, [name]: value }

    setFields(next)

    if (touched[name]) {
      const errs = validate(next)
      setErrors((prev) => ({
        ...prev,
        [name]: errs[name],
      }))
    }
  }

  const blur = (e) => {
    const { name } = e.target

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }))

    const errs = validate(fields)

    setErrors((prev) => ({
      ...prev,
      [name]: errs[name],
    }))
  }

  const localSubmitCheck = async (e) => {
    e.preventDefault()

    const errs = validate(fields)

    if (Object.keys(errs).length) {
      setErrors(errs)

      setTouched({
        name: true,
        email: true,
        subject: true,
        message: true,
      })

      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fields),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong.')
      }

      setSuccess(true)
    } catch (err) {
      alert(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setFields(INITIAL)
    setErrors({})
    setTouched({})
    setSuccess(false)
  }

  const inputClass = (name) =>
    `${styles.input} ${errors[name] && touched[name] ? styles.inputError : ''
    }`


  if (success) {
    return (
      <div className={styles.success}>
        <span className={styles.successIcon}>✓</span>

        <h4>Thank You, {fields.name}!</h4>

        <p className={styles.successInlineMsg}>
          Your message has been sent successfully.
          <br />
          I'll get back to you soon.
        </p>

        <button
          type="button"
          className={styles.resetBtn}
          onClick={handleReset}
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form
      className={styles.form}
      onSubmit={localSubmitCheck}
      noValidate
    >
      <div className={styles.row}>
        <Field
          label="Full Name"
          id="name"
          error={touched.name && errors.name}
        >
          <input
            id="name"
            name="name"
            type="text"
            value={fields.name}
            onChange={update}
            onBlur={blur}
            className={inputClass('name')}
          />
        </Field>

        <Field
          label="Email Address"
          id="email"
          error={touched.email && errors.email}
        >
          <input
            id="email"
            name="email"
            type="email"
            value={fields.email}
            onChange={update}
            onBlur={blur}
            className={inputClass('email')}
          />
        </Field>
      </div>

      <Field
        label="Subject"
        id="subject"
        error={touched.subject && errors.subject}
      >
        <input
          id="subject"
          name="subject"
          type="text"
          value={fields.subject}
          onChange={update}
          onBlur={blur}
          className={inputClass('subject')}
        />
      </Field>

      <Field
        label="Message"
        id="message"
        error={touched.message && errors.message}
      >
        <textarea
          id="message"
          name="message"
          rows={6}
          value={fields.message}
          onChange={update}
          onBlur={blur}
          className={`${inputClass('message')} ${styles.textarea}`}
        />
      </Field>

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={loading}
      >
        {loading ? (
          <>
            <span className={styles.spinner}></span>
            Sending...
          </>
        ) : (
          'Send message'
        )}
      </button>
    </form>
  )
}

