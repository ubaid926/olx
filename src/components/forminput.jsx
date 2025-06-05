import { useState, useContext,useId } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormValues from '../config/context';
function FormInput({ title, border, placeholder, func }) {
  const { contextInit, setcontextInit } = useContext(FormValues)
   const addId = useId()
  const addPrice = (e) => {
    setcontextInit(prevInput => ({
      ...prevInput,
      price: e.target.value
    }))
    setcontextInit(prevInput => ({
      ...prevInput,
      id: addId
    }))
  }
  const addTitle = (e) => {
    setcontextInit(prevInput => ({
      ...prevInput,
      title: e.target.value
    }))
  }
  const addMake = (e) => {
    setcontextInit(prevInput => ({
      ...prevInput,
      make: e.target.value
    }))
  }
  const addName = (e) => {
    setcontextInit(prevInput => ({
      ...prevInput,
      name: e.target.value
    }))
  }
  const addNum = (e) => {
    setcontextInit(prevInput => ({
      ...prevInput,
      number: e.target.value
    }))
  }
  const addAdress = (e) => {
    setcontextInit(prevInput => ({
      ...prevInput,
      adress: e.target.value
    }))
  }

  return (
    <InputGroup style={border && { borderBottom: 'solid 2px #a3b4b6' }}
      className=" flex p-6  ">
      <div style={{ width: '30%' }}>
        <InputGroup.Text className='inputtext font-bold' id="inputGroup-sizing-sm">{title}</InputGroup.Text>
      </div>
      <Form.Control className='formcontrol'
        type={func == 'mobilenum' ? 'number' : func == 'price' ? "number" : "text"
        }
        onChange={(e) => {

          if (func === 'price') {
            addPrice(e);
          } else if (func === 'title') {
            addTitle(e);
          } else if (func === 'name') {
            addName(e);
          } else if (func === 'mobilenum') {
            addNum(e);
          } else if (func === 'adress') {
            addAdress(e);
          } else if (func === 'make') {
            addMake(e);
          }

        }
        } placeholder={placeholder} style={{ width: '70%', height: '42px', border: 'solid 1px #002f34', borderRadius: '4px', padding: '5px' }}
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
      />
    </InputGroup>
  )
}
export default FormInput