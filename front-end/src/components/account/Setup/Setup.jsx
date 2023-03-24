import React, { useState, useEffect } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
//import { Navigate } from 'react-router-dom';
import { InputTitle } from '../../common/input/InputTitle';
import './Setup.css';

function Setup(){

    const [status, setStatus] = useState({});

    let gender = "N";
    let role = "N";
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        console.log("You submitted!");

        const info = {
            'name': e.target.name.value,
            'gender': gender,
            'birthday': e.target.birthday.value,
            'school': e.target.school.value,
            'role': role
        };
        setStatus(info);
        console.log(info);
        alert("Profile Saved");
        if (role === "FL") {navigate('/create-freelancer');}
        else {navigate('/');}
    }

    function maleGenderClick(){
        gender = "M"
    }
    function femaleGenderClick(){
        gender = "F"
    }

    function recruiterClick(){
        role = "R"
    }
    function freelancerClick(){
        role = "FL"
    }


    return (
        <div className='setup__wrapper'>
            <form onSubmit={handleSubmit}>
                <div className='item__wrapper'>
                    <InputTitle>Name:</InputTitle>
                    <div className='text-field__wrapper'>
                        <input type="text" name="name" placeholder="Luke Skywalker" />
                    </div>
                </div>
                <div className='item__wrapper'>
                    <InputTitle>Gender:</InputTitle>
                    <div className='selection-buttons'>
                        <button type="button" className='selection-btn-individual' onClick={maleGenderClick}>Male</button>
                        <button type="button" className="selection-btn-individual" onClick={femaleGenderClick}>Female</button>
                    </div>
                </div>
                <div className='item__wrapper'>
                    <InputTitle>Date of Birth:</InputTitle>
                    <div className='text-field__wrapper'>
                        <input type="date" name="birthday" />
                    </div>
                </div>
                <div className='item__wrapper'>
                    <InputTitle>School:</InputTitle>
                    <div className='text-field__wrapper'>
                        <input type="text" name="school" placeholder='Hogwarts' />
                    </div>
                </div>
                <div className='item_wrapper'>
                    <div className='selection-buttons'>
                        <button type="button" className='selection-btn-individual' onClick={recruiterClick}>I'm a Recruiter</button>
                        <button type="button" className='selection-btn-individual' onClick={freelancerClick}>I'm a Freelancer</button>
                    </div>
                </div>
                <input className="submit-btn" type="submit" value="Save" />
            </form>
        </div>
        );


}

export default Setup;