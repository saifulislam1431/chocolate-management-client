import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import icon from "../assets/chocolate-bar.png"
import Header from './Header';
import SingleChocolate from './SingleChocolate';

const Home = () => {
    const loadedChocolate = useLoaderData();
    const [chocolates, setChocolates] = useState(loadedChocolate);
    return (
        <main>
            <section>
                <div className='my-5 lg:my-10 px-5 lg:px-14'>
                    <Header></Header>

                    <Link to="/addChocolate">
                        <button className='inline-flex items-center gap-1 border p-2'>
                            <FaPlus />
                            <span className='font-bold'>New Chocolate</span>
                            <img src={icon} alt="" className='w-7' />
                        </button>
                    </Link>

                    <div className='my-5 lg:my-10'>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Country</th>
                                        <th>Category</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        chocolates.map(chocolate => <SingleChocolate
                                            key={chocolate._id}
                                            chocolate={chocolate}
                                            chocolates={chocolates}
                                            setChocolates={setChocolates}
                                        ></SingleChocolate>)
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </section>
        </main>
    );
};

export default Home;