import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';

import './Registration.scss';

import {getPositions, sendFormData, loadUsers} from '../../api';
import { setUsers } from '../../store/store';

export const Registration = () => {
  const [nameInputValue, setNameInputValue] = useState('');
  const [nameInputIsValid, setNameInputIsValid] = useState(true);
  const [emailInputValue, setEmailInputValue] = useState('');
  const [emailInputIsValid, setEmailInputIsValid] = useState(true);
  const [phoneInputValue, setPhoneInputValue] = useState('');
  const [phoneInputIsValid, setPhoneInputIsValid] = useState(true);
  const [positionInputValue, setPositionInputValue] = useState('')
  const [positionInputIsValid, setPositionInputIsValid] = useState(true);
  const [photoInputValue, setPhotoInputValue] = useState(undefined)
  const [photoInputIsValid, setPhotoInputIsValid] = useState(true);
  const [positions, setPositions] = useState([]);
  const dispatch = useDispatch()


  useEffect(() => {
    async function getData() {
      setPositions(await getPositions())
    }

    getData()
  }, [])

  const nameIsValid = () => {
    if (nameInputValue.length >= 2) {
      setNameInputIsValid(true)
      return true;
    } else {
      setNameInputIsValid(false)
      return false;
    }
  }

  const emailIsValid = () => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailInputValue.length >= 2 && pattern.test(emailInputValue)) {
      setEmailInputIsValid(true)
      return true;
    } else {
      setEmailInputIsValid(false);
      return false;
    }
  }

  const phoneIsValid = () => {
    const pattern = /^\+?3?8?(0\d{9})$/

    if (pattern.test(phoneInputValue)) {
      setPhoneInputIsValid(true);
      return true;
    } else {
      setPhoneInputIsValid(false);
      return false;
    }
  }

  const positionIsValid = () => {
    if (positionInputValue) {
      setPositionInputIsValid(true)
      return true;
    } else {
      setPositionInputIsValid(false)
      return false;
    }
  }

  const photoIsValid = () => {
    if (photoInputValue) {
      if ((photoInputValue.type === 'image/jpeg' || photoInputValue.type === 'image/jpg') && photoInputValue.size < 5242880) {
        setPhotoInputIsValid(true)
        return true;
      } else {
        setPhotoInputIsValid(false)
        return false;
      }
    } else {
      setPhotoInputIsValid(false)
      return false;
    }
  }

  const submit = async (e) => {
    e.preventDefault()
    if (nameIsValid() && phoneIsValid() && positionIsValid() && emailIsValid() && photoIsValid()) {
      const formData = new FormData()
      const positionID = positions.find(position => position.name === positionInputValue).id;
      formData.append('position_id', positionID);
      formData.append('name', nameInputValue);
      formData.append('email', emailInputValue);
      formData.append('phone', phoneInputValue);
      formData.append('photo', photoInputValue);

      const result = await sendFormData(formData);
      dispatch(setUsers((await loadUsers(6)).users))
      if (result.success) {
        document.querySelector(".registration__form").reset();
      }
    }
  }

  const setPosition = (e) => {
   
    if (e.target.tagName === 'INPUT') {
      setPositionInputValue(e.target.parentElement.innerText)
    }
  }

  const x = () => {
    // const file = document.querySelector('input[type="file"]')
    // console.log(file.files[0])
    console.log(positions.find(position => position.name === positionInputValue).id)
  }


  return (
    <section className="registration">
      <h3 className="registration__title">Register to get a work</h3>
      <h4 className="registration__semi-title">
        Attention! After successful registration and alert, update the
        liat of users in the block from the top
      </h4>
      <form className="registration__form">
        <label className="registration__text">Name</label>
        <input
          className={nameInputIsValid ? "registration__input" : "registration__input registration__input--error"}
          type="text"
          placeholder="Your name"
          maxLength={60}
          name="name"
          onChange={(e) => { setNameInputValue(e.target.value) }}
        />
        <p
          className="registration__error-message"
          style={nameInputIsValid ? { opacity: 0 } : { opacity: 1 }}
        >
          Enter valid name
        </p>
        <label className="registration__text">Email</label>
        <input
          className={emailInputIsValid ? "registration__input" : "registration__input registration__input--error"}
          type="text"
          placeholder="Your email"
          onChange={(e) => { setEmailInputValue(e.target.value) }}
        />
        <p
          className="registration__error-message"
          style={emailInputIsValid ? { opacity: 0 } : { opacity: 1 }}
        >
          Enter valid Email
        </p>
        <label className="registration__text">Phone number</label>
        <input
          className={phoneInputIsValid ? "registration__input" : "registration__input registration__input--error"}
          type="text"
          placeholder="+380 XX XXX XX XX"
          onChange={(e) => { setPhoneInputValue(e.target.value) }}
        />
        <p
          className="registration__error-message"
          style={phoneInputIsValid ? { opacity: 0 } : { opacity: 1 }}
        >
          Enter valid phone number
        </p>
        <div className="registration__select" onChange={setPosition}>
          <p className="registration__text">Select our position</p>
          {positions.map(position => (
            <label className="registration__text" key={position.id}>
              <input name="position" type="radio"/>
            {position.name}
            </label>
          ))}
          <p
            className="registration__error-message"
            style={positionInputIsValid ? { opacity: 0 } : { opacity: 1 }}
          >
          Please choose your position
          </p>
        </div>
        <label className="registration__text">Photo</label>
        <div className="registration__photo-wrapper">
        <input type="file" className="registration__photo" onChange={(e) => setPhotoInputValue(e.target.files[0])} />
        <div className={photoInputIsValid ? "registration__fake-input-wrapper" : "registration__fake-input-wrapper--error"}>
          <input
            className="registration__fake-input"
            placeholder={photoInputValue ? photoInputValue.name : "Upload your photo"}
          />
          <button className="registration__fake-button">Brouse</button>
        </div>
        <p
          className="registration__error-message"
          style={photoInputIsValid ? { opacity: 0 } : { opacity: 1 }}
        >
        The photo format must be jpeg/jpg type. The photo size must not be greater than 5 Mb.
        </p>
        </div>
        <button type='submit' className="registration__btn" onClick={submit}>Sing up now</button>
        <button type="button" onClick={x}>fuck</button>
      </form> 
    </section>
  )
}
