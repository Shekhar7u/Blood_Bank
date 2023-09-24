import React, { useState } from 'react'
import InputType from '../../InputType'

const Form = ({submitBtn, formTitle}) => { //use props here
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('donar')
    const [name, setName] = useState('')
    const [organisationName, setorganisationName] = useState('')
    const [hospitalName, setHospitalName] = useState('')
    const [website, setWebsite] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    return (
        <div>
            <form>
                <h1 className='text-center'>{formTitle}</h1>
                <hr />
                <InputType
                    labelText={'email'}
                    labelFor={'forEmail'}
                    inputType={'email'}
                    name={'email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputType
                    labelText={'Password'}
                    labelFor={'forPassword'}
                    inputType={'password'}
                    name={'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <InputType
                    labelText={'Name'}
                    labelFor={'forName'}
                    inputType={'text'}
                    name={'name'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <InputType
                    labelText={'Organization Name'}
                    labelFor={'forOrganizationName'}
                    inputType={'text'}
                    name={'OrganizationName'}
                    value={organisationName}
                    onChange={(e) => setorganisationName(e.target.value)}
                />
                <InputType
                    labelText={'Hospital Name'}
                    labelFor={'forHospitalName'}
                    inputType={'text'}
                    name={'hospitalName'}
                    value={hospitalName}
                    onChange={(e) => setHospitalName(e.target.value)}
                />
                <InputType
                    labelText={'Website'}
                    labelFor={'forWebsite'}
                    inputType={'text'}
                    name={'website'}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                />
                <InputType
                    labelText={'Address'}
                    labelFor={'forAddress'}
                    inputType={'text'}
                    name={'address'}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <InputType
                    labelText={'Phone'}
                    labelFor={'forPhone'}
                    inputType={'text'}
                    name={'phone'}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <div className='d-flex'>
                    <button className='btn btn-primary' type='submit'>{submitBtn}</button>
                </div>
            </form>
        </div>
    )
}

export default Form