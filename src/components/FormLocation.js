import React from 'react'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

/* eslint-disable react/display-name */
// React Bootstrap way to change default structure: from toogleButtom to CustomFormControl
const CustomFormControl = React.forwardRef(
  (
    {
      placeholder,
      disabled,
      'arial-labelledby': arial,
      onClick,
      onChange,
      onClear,
      value
    },
    ref
  ) => (
    <InputGroup>
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
        onSelect={e => e.stopPropagation()} // Form stays open
      />
      <Button onClick={onClear}>Clear</Button>
    </InputGroup>
  )
)

export function FormLocation ({
  location,
  onChangeLocation,
  typingLocationResults
}) {
  const currentPositionHandler = eventCheckbox => {
    // These are the states in Location Context
    onChangeLocation({
      actionCheckbox: true,
      stateCheckbox: eventCheckbox.target.checked
    })
  }

  const typingPositionHandler = eventInput => {
    // These are the states in Location Context
    onChangeLocation({
      actionCheckbox: false,
      name: eventInput.target.value,
      value: ''
    })
  }

  const selectedPositionHandler = selection => {
    // These are the states in Location Context
    const { name, center } = selection.geo
    onChangeLocation({
      actionCheckbox: false,
      name: name,
      value: `${center.latitude},${center.longitude}`
    })
  }

  const clearPositionHandler = () => {
    // These are the states in Location Context
    if (location.type !== 'current') {
      onChangeLocation({
        actionCheckbox: true,
        stateCheckbox: false
      })
    }
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
          onClear={clearPositionHandler}
          value={inputValue}
          as={CustomFormControl} // Here we change default toggleButton for above CustomFormControl
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
