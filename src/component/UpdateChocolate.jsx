import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Header from './Header';
import Swal from 'sweetalert2';

const UpdateChocolate = () => {
    const chocolate = useLoaderData();
    const { _id, name, country, category, photo } = chocolate;
   
    const handleUpdateChocolate = e =>{
        e.preventDefault;

        const form = e.target;

        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const photo = form.photo.value;

        const updatedChocolate = {  name, country, category, photo }

        fetch(`http://localhost:5000/chocolates/${_id}`,{
            method:"PUT",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(updatedChocolate)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                
                Swal.fire(
                    'Good job!',
                    'Chocolate Updated',
                    'success'
                )
            }
        })
    }
    return (
        <main>
            <section>
                <div className='my-5 lg:my-10 px-5 lg:px-14'>
                    <Header></Header>

                    <Link to="/">
                        <button className='inline-flex items-center gap-1 border p-2'>
                            <FaArrowLeft />
                            <span className='font-bold'>All Chocolates</span>
                        </button>
                    </Link>

                    

                </div>
            </section>
            <section className='flex items-center justify-center bg-primary bg-opacity-10'>
                <div className='py-5 px-10 lg:px-20 w-full'>
                    <div className='text-center my-4'>
                        <h2 className='text-3xl text-secondary font-bold'>Add New Chocolate</h2>
                        <p className='my-4 font-medium'>Use the below form to create a new product</p>
                    </div>
                    <form className='w-full' onSubmit={handleUpdateChocolate}>
                        {/* Name */}
                        <div>
                            <div>
                            <label className="label">
                                <span className="font-semibold">Name</span>
                            </label>
                            <input type="text"
                            name='name' 
                            defaultValue={name}
                            placeholder="Enter chocolate name" className="w-full inputField" />
                            </div>
                            
                        </div>
                        {/* Country*/}
                        <div className='mt-2'>
                            <div>
                            <label className="label">
                                <span className="font-semibold">Country/Factory</span>
                            </label>
                            <input type="text"
                            name='country' defaultValue={country}placeholder="Enter chocolate Country/Factory" className="w-full inputField" />
                            </div>
                           
                        </div>
                        {/* Category */}
                        <div className='mt-2'>
                            <div>
                            <label className="label">
                                <span className="font-semibold">Category</span>
                            </label>
                            <input type="text"
                            defaultValue={category}
                            name='category' placeholder="Enter chocolate category" className="w-full inputField" />
                            </div>
                            
                        </div>
                        {/* Photo url */}
                        <div className='mt-2'>
                            <div>
                            <label className="label">
                                <span className="font-semibold">Photo</span>
                            </label>
                            <input type="url"
                            defaultValue={photo}
                            name='photo' 
                            placeholder="Enter photo URL" className="w-full inputField" />
                            </div>
                            
                        </div>
                        <input className='myAddBtn w-full my-5' type="submit" value="Save Update" />
                    </form>
                </div>
            </section>
        </main>
    );
};

export default UpdateChocolate;