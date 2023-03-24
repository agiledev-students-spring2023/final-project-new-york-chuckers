import { useState, useEffect, React } from 'react';
import { useNavigate, Link, redirect } from 'react-router-dom';
import { InputTitle } from '../../common/input/InputTitle';
import './NewPosition.css';

function NewPosition(){

    const navigate = useNavigate();
    const [state, setState] = useState({});

    const handleSubmit = e => {
        e.preventDefault();

        const info = {
            'name': e.target.name.value,
            'description': e.target.description.value,
            'pay': e.target.pay.value || '0',
            'contact': e.target.contact.value
        };

        console.log("Position Submitted!");
        console.log(info);
        alert("Position Submitted");
        setState(info);
        navigate('/');
    }

    return(
        <div className='new-position__wrapper'>
            <form onSubmit={handleSubmit}>
                <div className='item__wrapper'>
                    <InputTitle>Position Name:</InputTitle>
                    <div className='text-field__wrapper'>
                        <input type="text" name="name" placeholder='My New Cool Position' />
                    </div>
                </div>
                <div className='item__wrapper'>
                    <InputTitle>Description:</InputTitle>
                    <div className='text-field__wrapper'>
                        <input type='text' name='description' placeholder='My New Cool Position Description' />
                    </div>
                </div>
                <div className='item__wrapper'>
                    <InputTitle>Pay:</InputTitle>
                    <div className='text-field__wrapper'>
                        <input type='number' step='0.1' name='pay' placeholder='My New Cool Pay For Position' />
                    </div>
                </div>
                <div className='item__wrapper'>
                    <InputTitle>Recruiter Contact:</InputTitle>
                    <div className='text-field__wrapper'>
                        <input type='text' name='contact' placeholder='My New Cool Position Recruiter Contact' />
                    </div>
                </div>
                <input className='submit-btn' type='submit' value='Post' />
                <div className='cancel-btn'>
                    <Link to='/'>Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export default NewPosition;