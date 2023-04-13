import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { Navigate } from 'react-router-dom';
import { InputTitle } from '../../common/input/InputTitle';
//I set up a 
import './Setup.css';

function Setup(){

    const [status, setStatus] = useState({});
    const [gender, setGender] = useState({male:"",female:"",sel:""});
    const [role, setRole] = useState({recruiter:"",freelancer:"",sel:""});

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        const info = {
            "name":e.target.name.value,
            "gender":gender.sel,
            "birthday":e.target.birthday.value,
            "school":e.target.school.value,
            "role":role.sel
        }

        const response = await axios.post(window.backend+"/setup", info);
        if (response.data.status === "approve"){
            setStatus(response.data);
            if (info.role==="FR"){navigate("/create-freelancer")}
            else{navigate("/")}
        }
        else{
            alert(response.alert);
        }

    }

    function maleGenderClick(){
        setGender({male:"S", female:"", sel:"M"});
    }
    function femaleGenderClick(){
        setGender({male:"", female:"S", sel:"F"});
    }

    function recruiterClick(){
        setRole({recruiter:"S", freelancer:"", sel:"RE"});
    }
    function freelancerClick(){
        setRole({recruiter:"", freelancer:"S", sel:"FR"});
    }


    return (
        <div className='setup__wrapper'>
            <form onSubmit={handleSubmit}>
                <div className='item__wrapper'>
                    <InputTitle>Name:</InputTitle>
                    <div className='text-field__wrapper'>
                        <input type="text" name="name" placeholder="Harry Potter" />
                    </div>
                </div>
                <div className='item__wrapper'>
                    <InputTitle>Gender:</InputTitle>
                    <div className='selection-buttons'>
                        <div className='button__padding'>
                        <button type="button" className={"selection-btn-ind" + gender.male} onClick={maleGenderClick}>Male</button></div>
                        <button type="button" className={"selection-btn-ind" + gender.female} onClick={femaleGenderClick}>Female</button>
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
                        <div className='button__padding'>
                        <button type="button" className={"selection-btn-ind" + role.recruiter} onClick={recruiterClick}>I'm a Recruiter</button></div>
                        <button type="button" className={"selection-btn-ind" + role.freelancer} onClick={freelancerClick}>I'm a Freelancer</button>
                    </div>
                </div>
                <input className="submit-btn" type="submit" value="Save" />
            </form>
        </div>
        );


}

export default Setup;