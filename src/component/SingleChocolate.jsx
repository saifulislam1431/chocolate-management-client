import React from 'react';
import { FaPen } from 'react-icons/fa';
import { HiXMark } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleChocolate = ({ chocolate, chocolates, setChocolates }) => {
    const { _id, name, country, category, photo } = chocolate;
    const handleDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/chocolates/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = chocolates.filter(choco => choco._id !== _id);
                            setChocolates(remaining);
                        }
                    })
            }
        })
    }
    return (
        <tr>
            <th>
                <img src={photo} alt="" className='w-10' />
            </th>
            <th>{name}</th>
            <th>{country}</th>
            <th>{category}</th>
            <th>
                <Link to = {`/updateChocolate/${_id}`}>
                    <button className='myBtn mr-4'><FaPen className='text-[#774320]' /></button>
                </Link>
                <button className='myBtn' onClick={() => handleDelete(_id)}><HiXMark className='text-[#774320]' /></button>
            </th>
        </tr>
    );
};

export default SingleChocolate;