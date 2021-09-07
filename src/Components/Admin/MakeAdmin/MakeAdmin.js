import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {

    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
        console.log(data)
        const eventData = {
            email: data.email,

        }
        const url = `https://protected-thicket-95007.herokuapp.com/addAdmin`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                if (res) {
                    swal({
                        title: "Admin!",
                        text: "Admin has been added successfully!",
                        icon: "success",
                        button: "Ok",
                    });
                    // alert('Your Admin has been added successfully');
                }
            })
    };

    return (
        <div>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <form className=" justify-content-center align-item-center d-flex mt-5 bg-primary rounded" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-5">
                        <div className="mb-3">
                            <label for="email" className="form-label text-white">Email</label><br />
                            <input name="email"
                                type="text"
                                {...register("email", {
                                    required: true,
                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                })}
                            />
                        </div>
                        <div className="mb-3 justify-content-center align-item-center d-flex">
                            <input className="btn btn-warning" type="submit" />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;