import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit, } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        console.log(data)
        const eventData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL
        }
        const url = `https://protected-thicket-95007.herokuapp.com/addProduct`
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
                        title: "Service!",
                        text: "Your Service has been added successfully!",
                        icon: "success",
                        button: "Ok",
                    });
                    // alert('Your event has been added successfully');
                }
            })
    };


    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '7684772cfe35d7b1d344467f4a18bdba');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="">
            <div className="row">
                {/* <div className="col-md-4"> */}
                    <Sidebar></Sidebar>
                {/* </div>
                <div className="col-md-8"> */}
                    <form className=" justify-content-center align-item-center d-flex bg-primary rounded" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-5">
                            <div className="mb-3">
                                <label for="name" className="form-label text-white">Product Name</label>
                                <input name="name" className="form-control" defaultValue="Product Name" {...register("name")} />
                            </div>
                            <div className="mb-3">
                                <label for="weight" className="form-label text-white">Weight</label>
                                <input name="weight" type="text" className="form-control" defaultValue="1 KG" {...register("weight")} />
                            </div>
                            <div className="mb-3">
                                <label for="price" className="form-label text-white">Add Price</label>
                                <input name="price" type="number" className="form-control" defaultValue="20" {...register("price")} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleRequired" className="form-label text-white">Choose a Picture</label>
                                <input name="exampleRequired" onChange={handleImageUpload} className="form-control" type="file" />
                            </div>

                            <div className="mb-3 justify-content-center align-item-center d-flex">
                                <input className="btn btn-warning" type="submit" />
                            </div>
                        </div>

                    </form>
                {/* </div> */}
            </div>
        </div>
    );
};

export default AddService;