import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './MyForm.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const onSubmit = (data) => {
    fetch('https://manath-mansion-backend.onrender.com/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
            toast.success('Data saved successfully',{autoClose:2000});
            navigate('/');
        } else {
          throw new Error('Failed to save data');
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error('Failed to save data');
      });
  };

  const onError = (errors) => {
    console.log(errors);
    toast.error('Errors detected in Form data. Please correct them and try again.',{autoClose:2000});
  };

  const handleCancel = () => {
    reset({
      name: '',
      address: '',
      phone: '',
      email: '',
      dateOfShift: '',
      room: '1',
    });
    navigate('/'); // Navigate to the home page when cancel is clicked
  };

  return (
    <div className="formdiv">
      <h1>Resident Add</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <label>
            Name:
            <input type="text" {...register('name', { required: 'Name is required' })} />
          </label>
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
        {/* <div>
          <label>
            Age:
            <input type="text" {...register('age', {
              required: 'Age is required',
              validate: {
                isNumber: value => !isNaN(value) || 'Age must be a number',
                min: value => value >= 18 || 'Age must be at least 18',
                max: value => value <= 50 || 'Age must be at most 50',
              },
            })} />
          </label>
          {errors.age && <span className="error">{errors.age.message}</span>}
        </div> */}
        <div>
          <label>
            Phone:
            <input type="text" {...register('phone', { required: 'Phone is required' })} />
          </label>
          {errors.phone && <span className="error">{errors.phone.message}</span>}
        </div>
        <div>
          <label>
            Address:
            <input type="text" {...register('address', { required: 'Address is required' })} />
          </label>
          {errors.address && <span className="error">{errors.address.message}</span>}
        </div> 
        <div>
          <label>
            Email:
            <input type="text" {...register('email', { required: 'Email is required' })} />
          </label>
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>
        <div>
          <label>
            Date of Shift:
            <input type="date" {...register('dateOfShift')} />
          </label>
        </div>
        <div>
          <label>
            Room:
            <select {...register('room')}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
            </select>
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
