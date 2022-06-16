import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './parameters';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard} from '@fortawesome/free-solid-svg-icons';

function App() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(16);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeUpperLetters, setIncludeUpperLetters] = useState(false);
  const [includeLowerLetters, setIncludeLowerLetters] = useState(false);
  const [includeSpecial, setIncludeSpecial] = useState(false);

  const generatePassword = (e) => {
    if (
      !includeNumbers && !includeUpperLetters && !includeLowerLetters && !includeSpecial
    ) {
      notify('Select at least one option', true)
    }
    let characterList = ''

    if (includeNumbers) {
      characterList = characterList + numbers
    }
    
    if (includeUpperLetters) {
      characterList = characterList + upperCaseLetters
    }
    
    if (includeLowerLetters) {
      characterList = characterList + lowerCaseLetters
    }
    
    if (includeSpecial) {
      characterList = characterList + specialCharacters
    }

    setPassword(createPassword(characterList))
  }
  
  const createPassword = (characterList) => {
    let password = ''
    const characterListLength = characterList.length

    for (let i=0; i<passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex) 
    }
    return password;
  }

  const copyToClipboard = () => {
    const newTextArea = document.createElement('textarea')
    newTextArea.innerText = password
    document.body.appendChild(newTextArea)
    newTextArea.select()
    document.execCommand('copy')
    newTextArea.remove()
  }

  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      })
    } else {
      toast(message, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      })
    }
  }

  const copyPassword = (e) => {
    if (password === '') {
      notify('ERROR: empty password', true)
    } else {
      copyToClipboard()
      notify("Password copied to your clipboard")
    }
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='generator'>
          <h2 className='generator_header'>React Password Generator</h2>
          <div className='generator_password'>
            <h3>{password}</h3>
            <button onClick={copyPassword} className='button_copy'>
            <FontAwesomeIcon icon={faClipboard} />
            </button>
          </div>

          <div className='form-group'>
            <label htmlFor='password-strength'>Set password length</label>
            <input
              defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              type='number'
              id='password-strength'
              name='password-strength'
              max='20'
              min='10'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='include-numbers'>Include numbers</label>
            <input
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              type='checkbox'
              id='include-numbers'
              name='include-numbers'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='include-uppercase-letters'>Include uppercase letters</label>
            <input
              checked={includeUpperLetters}
              onChange={(e) => setIncludeUpperLetters(e.target.checked)}
              type='checkbox'
              id='include-uppercase-letters'
              name='include-uppercase-letters'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='include-lowercase-letters'>Include lowercase letters</label>
            <input
              checked={includeLowerLetters}
              onChange={(e) => setIncludeLowerLetters(e.target.checked)}
              type='checkbox'
              id='include-lowercase-letters'
              name='include-lowercase-letters'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='include-special-characters'>Include special characters</label>
            <input
              checked={includeSpecial}
              onChange={(e) => setIncludeSpecial(e.target.checked)}
              type='checkbox'
              id='include-special-characters'
              name='include-special-characters'
            />
          </div>

          <button onClick={generatePassword} className='button_password'>
            GENERATE PASSWORD
          </button>
          <ToastContainer
            position='top-center'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
          />
        </div>
      </div>
    </div>
  )
}

export default App;
