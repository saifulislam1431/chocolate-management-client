import React from 'react';
import {  FaPen } from 'react-icons/fa';
import { HiXMark } from "react-icons/hi2";

const SingleChocolate = ({ chocolate, chocolates, setChocolates }) => {
    const { name, country, category, photo } = chocolate;
    console.log(chocolate);
    return (
        <tr>
            <th>
                <img src={photo} alt="" className='w-10' />
            </th>
            <th>{name}</th>
            <th>{country}</th>
            <th>{category}</th>
            <th>
                <button className='myBtn mr-4'><FaPen className='text-[#774320]'/></button>
                <button className='myBtn'><HiXMark className='text-[#774320]'/></button>
            </th>
        </tr>
    );
};

export default SingleChocolate;