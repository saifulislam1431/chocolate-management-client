import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AddChocolate = () => {
    const handleAddChocolate = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const newChocolate = {name, country, category, photo};
        console.log(newChocolate);
        fetch("https://chocolate-management-server-lovat.vercel.app/chocolates",{
            method:"POST",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(newChocolate)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Chocolate added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
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
                    <form className='w-full' onSubmit={handleAddChocolate}>
                        {/* Name */}
                        <div>
                            <div>
                            <label className="label">
                                <span className="font-semibold">Name</span>
                            </label>
                            <input type="text"
                            name='name' placeholder="Enter chocolate name" className="w-full inputField" />
                            </div>
                            
                        </div>
                        {/* Country*/}
                        <div className='mt-2'>
                            <div>
                            <label className="label">
                                <span className="font-semibold">Country/Factory</span>
                            </label>
                            <input type="text"
                            name='country' placeholder="Enter chocolate Country/Factory" className="w-full inputField" />
                            </div>
                           
                        </div>
                        {/* Category */}
                        <div className='mt-2'>
                            <div>
                            <label className="label">
                                <span className="font-semibold">Category</span>
                            </label>
                            <input type="text"
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
                            name='photo' placeholder="Enter photo URL" className="w-full inputField" />
                            </div>
                            
                        </div>
                        <input className='myAddBtn w-full my-5' type="submit" value="Add Chocolate" />
                    </form>
                </div>
            </section>
        </main>
    );
};

export default AddChocolate;