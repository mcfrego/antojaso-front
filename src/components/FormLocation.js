import React from 'react'
import Form from 'react-bootstrap/Form'
import { Dropdown } from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'

/* eslint-disable react/display-name */
const CustomFormControl = React.forwardRef(
  (
    {
      placeholder,
      disabled,
      'arial-labelledby': arial,
      onClick,
      onChange,
      value
    },
    ref
  ) => (
    <Form.Control
      ref={ref}
      value={value}
      placeholder={placeholder}
      arial-labelledby={arial}
      disabled={disabled}
      onClick={e => {
        e.preventDefault()
        onClick(e)
      }}
      onChange={onChange}
      onSelect={e => e.stopPropagation()}
    />
  )
)

export function FormLocation ({
  location,
  onChangeLocation,
  typingLocationResults
}) {
  const currentPositionHandler = eventCheckbox => {
    onChangeLocation({
      actionCheckbox: true,
      stateCheckbox: eventCheckbox.target.checked
    })
  }

  const typingPositionHandler = eventInput => {
    onChangeLocation({
      actionCheckbox: false,
      name: eventInput.target.value,
      value: ''
    })
  }

  const selectedPositionHandler = selection => {
    const { name, center } = selection.geo
    onChangeLocation({
      actionCheckbox: false,
      name: name,
      value: `${center.latitude},${center.longitude}`
    })
  }

  const inputValue = location.selectedName
  const checkboxLabel = `Get current location ${
    !location.currentValue ? '(not available)' : ''
  }`
  const isInputDisabled = location.type === 'current'
  const isCheckboxDisabled = !location.currentValue

  return (
    <Form className='mb-4'>
      <Form.Label>Location</Form.Label>
      <Dropdown>
        <DropdownToggle
          className='mb-2'
          placeholder='e.g. Las Palmas'
          aria-labelledby='e.g. Las Palmas'
          disabled={isInputDisabled}
          onChange={typingPositionHandler}
          value={inputValue}
          as={CustomFormControl}
        ></DropdownToggle>

        {typingLocationResults?.length > 0 && (
          <Dropdown.Menu>
            {typingLocationResults?.map((item, key) => (
              <Dropdown.Item
                key={key}
                onClick={() => selectedPositionHandler(item)}
              >
                {item.geo.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        )}
      </Dropdown>
      <Form.Check className='checkbox mt-2'>
        <Form.Check.Label>{checkboxLabel}</Form.Check.Label>
        <Form.Check.Input
          disabled={isCheckboxDisabled}
          onClick={currentPositionHandler}
        />
      </Form.Check>
    </Form>
  )
}
