import csx from 'classnames'
import React, { forwardRef } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import styles from '@/components/TextInput/TextInput.module.scss'

interface TextInputProps {
  label?: string
  defaultValue?: string
  description?: string
  error: FieldError | undefined
}

const TextInput = forwardRef<
  HTMLInputElement,
  TextInputProps & ReturnType<UseFormRegister<any>>
>(
  (
    { onChange, onBlur, name, label, defaultValue, description, error },
    ref
  ) => {
    return (
      <div className={styles.textInput}>
        {label && (
          <label className={styles.textInputLabel} htmlFor={name}>
            {label}
          </label>
        )}

        <div className={styles.textInputWrapper}>
          <input onChange={onChange} onBlur={onBlur} name={name} ref={ref} />
        </div>

        {description && (
          <div className={styles.textInputDescription}>{description}</div>
        )}

        {error && (
          <div
            className={csx(styles.textInputDescription, styles.textInputError)}
          >
            {error.message}
          </div>
        )}
      </div>
    )
  }
)
TextInput.displayName = 'TextInput'

export { TextInput }
