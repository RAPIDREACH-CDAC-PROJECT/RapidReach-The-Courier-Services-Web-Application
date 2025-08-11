// import React, { useEffect, useRef, useState } from 'react';
// import api from '../api'; // ✅ you're already using this

// function AdminProfile() {
//   const [admin, setAdmin] = useState('');
//   const [updatedAdmin, setUpdatedAdmin] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//   });

//   const handleUpdatedAdmin = (event) => {
//     const { name, value } = event.target;
//     setUpdatedAdmin(prev => ({ ...prev, [name]: value }));
//   };

//   // ✅ Get current user & token from localStorage
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     const token = localStorage.getItem('token');
//     const id = user?.userId;

//     if (id && token) {
//       api
//         .get(`/admin/profile/${id}`, {
//           headers: { Authorization: `Bearer ${token}` }
//         })
//         .then((response) => {
//           setAdmin(response.data);
//           setUpdatedAdmin(response.data);
//         })
//         .catch((error) => {
//           alert('Failed to load profile.');
//         });
//     }
//   }, []);

//   const updateProfile = (event) => {
//     event.preventDefault();
//     const user = JSON.parse(localStorage.getItem('user'));
//     const token = localStorage.getItem('token');
//     const id = user?.userId;

//     api
//       .put(`/admin/profile/${id}`, updatedAdmin, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then((response) => {
//         setAdmin(updatedAdmin);
//         closeModal();
//         alert('Profile updated successfully.');
//       })
//       .catch((error) => {
//         alert('Error updating profile.');
//       });
//   };

//   const modalRef = useRef(null);

//   const openModal = () => {
//     modalRef.current.classList.add('show');
//     modalRef.current.style.display = 'block';
//     document.body.classList.add('modal-open');
//   };

//   const closeModal = () => {
//     modalRef.current.classList.remove('show');
//     modalRef.current.style.display = 'none';
//     document.body.classList.remove('modal-open');
//   };

//   return (
//     <>
//       <div className='container my-5'>
//         <h3 className='utext my-5'>Your Profile</h3>
//         <div className='row'>
//           <div className='col-md-5 my-3'>
//             <label className='form-label'>First Name</label>
//             <p className='lead'>{admin.firstName}</p>
//           </div>
//           <div className='col-md-5 my-3'>
//             <label className='form-label'>Last Name</label>
//             <p className='lead'>{admin.lastName}</p>
//           </div>
//           <div className='col-md-5 my-3'>
//             <label className='form-label'>Phone</label>
//             <p className='lead'>{admin.phone}</p>
//           </div>
//           <div className='col-md-5 my-3'>
//             <label className='form-label'>Email</label>
//             <p className='lead'>{admin.email}</p>
//           </div>
//         </div>
//         <button type='button' className='btn btn-info' onClick={openModal}>
//           Update Profile
//         </button>
//       </div>

//       {/* Modal */}
//       <div className='modal fade' id='staticBackdrop' tabIndex='-1' ref={modalRef}>
//         <div className='modal-dialog'>
//           <div className='modal-content'>
//             <div className='modal-header'>
//               <h1 className='modal-title fs-5'>Update Profile</h1>
//             </div>
//             <form className='row g-3'>
//               <div className='modal-body'>
//                 {['firstName', 'lastName', 'phone', 'email'].map((field) => (
//                   <div className='col-md-5 my-3' key={field}>
//                     <label htmlFor={field} className='form-label'>
//                       {field.charAt(0).toUpperCase() + field.slice(1)}
//                     </label>
//                     <input
//                       type='text'
//                       name={field}
//                       value={updatedAdmin[field]}
//                       onChange={handleUpdatedAdmin}
//                       className='form-control'
//                       required
//                     />
//                   </div>
//                 ))}
//               </div>
//               <div className='modal-footer'>
//                 <button
//                   type='button'
//                   className='btn btn-outline-info'
//                   onClick={() => {
//                     setUpdatedAdmin(admin);
//                     closeModal();
//                   }}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type='submit'
//                   className='btn btn-info mx-3'
//                   onClick={updateProfile}
//                 >
//                   Confirm
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AdminProfile;



import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:44324/api';

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' }
});

// ================== AUTH APIs ==================
const loginUser = (data) => api.post('/Auth/login', data);
const registerUser = (data) => api.post('/Auth/register', data);
const requestPasswordReset = (email) => api.post('/Auth/request-password-reset', { email });
const verifyResetToken = (token) => api.get(`/Auth/verify-reset-token?token=${token}`);
const resetPassword = (token, newPassword) => api.post('/Auth/reset-password', { token, newPassword });

// ================== SHIPMENT APIs ==================
const createShipment = (token, shipment) =>
  api.post('/Shipments', shipment, {
    headers: { Authorization: `Bearer ${token}` }
  });

const getShipments = (token) =>
  api.get('/Shipments', {
    headers: { Authorization: `Bearer ${token}` }
  });

export {
  loginUser,
  registerUser,
  requestPasswordReset,
  verifyResetToken,
  resetPassword,
  createShipment,
  getShipments
};

export default api;
