import React, { useState } from 'react'
import { useGetShowNamesQuery } from '../redux/apis/userApi';

const Home = () => {

    const [selected, setSelected] = useState({})
    const { data, error, isLoading, isError } = useGetShowNamesQuery("Get Data")



    return (
        <>

            <div className='md:ps-[242px] w-full text-center'>

                <div className="px-5 mt-10 w-full  ">
                    <div className="grid lg:grid-cols-3 md:gap-5 md:grid-cols-2  w-full">

                        {
                            data && data.map((item: any, i: number) => {

                                console.log(item.show.image);
                                const { show } = item
                                return <div onClick={() => {
                                    document.getElementById('my_modal_4').showModal(),
                                        setSelected(show)
                                }


                                } className="card my-5 md:my-0 md:w-72 text-start bg-base-100  shadow-xl">
                                    <figure>
                                        <img className='md:h-72 h-96 w-full' src={show.image && show.image.original || show.image && show.image.medium} alt="Shoes" />
                                    </figure>   <div className="card-body">
                                        <h2 className="card-title">
                                            {show.name}
                                            <div className="badge badge-secondary">{show.averageRuntime}</div>
                                            <div className="ms-auto text-sm">
                                                {show.language}
                                            </div>
                                        </h2>

                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">{show.weight}</div>
                                            <div className="badge badge-outline">{show.status}</div>
                                        </div>
                                    </div>
                                </div>
                            }
                            )
                        }


                    </div>
                </div>







            </div>


            <button className="btn" >open modal</button>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg my-2">{selected.name}</h3>

                    <div className="flex items-center gap-5">
                        <div className="my-8">
                            <img className='h-96 rounded w-full' src={selected.image && selected.image.original || selected.image && selected.image.medium} alt="Shoes" />
                        </div>
                        <div className="">
                            <p>Name: {selected.name} </p>
                            <p>ended: {selected.ended} </p>
                            <p>language: {selected.language} </p>
                            <p>ended: {selected.ended} </p>
                            <p>type: {selected.type} </p>
                        </div>
                    </div>

                    <p className="py-4">{selected.summary}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


        </>

    )
}

export default Home