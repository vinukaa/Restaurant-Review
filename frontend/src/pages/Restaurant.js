import React, { useRef, useState } from 'react';
import { ViewContainer, ViewContent, ViewItems } from './RestaurantElem';
import "./RestaurantStyles.css";
import Dropzone from "react-dropzone";
import { API_URL } from '../constants/constants';
import axios from 'axios';
 
const initialState = { 
  name: "",
  description: "", 
  images:''
};

const Restaurant = () => { 

    const [images, setFile] = useState(null); // state for storing actual image
    const [previewSrc, setPreviewSrc] = useState(""); // state for storing previewImage
    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
    const dropRef = useRef(); // React ref for managing the hover state of droppable area
    const [state, setState] = useState(initialState);

    const onDrop = (images) => {
        const [uploadedFile] = images;
        setFile(uploadedFile);

        const fileReader = new FileReader();
        fileReader.onload = () => {
        setPreviewSrc(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
        setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
        dropRef.current.style.border = "2px dashed #e9ebeb";
    };

     const handleOnSubmit = async (event) => {
        event.preventDefault();
        try {
        const { name, description} = state;
        if ( 
            name.trim() !== "" &&
            description.trim() !== ""
        ) {
            if (images) {
            const formData = new FormData();
            formData.append("images", images); 
            formData.append("name", name);
            formData.append("description", description); 
            // const data ={
            //     'name':state.name,
            //     'description':state.description,
            //     'images':images
            // }
            console.log(formData)

            await axios.post(`${API_URL}/restaurant/add`, formData, {
                headers: {
                "Content-Type": "multipart/form-data",
                },
            });

            console.log("upload Success");
            } else {
            console.log("Please select a file to add.");
            }
        } else {
            console.log("Please enter all the field values.");
        }
        } catch (error) {
        error.response && console.log(error.response.data);
        }
    };
    const reload = () => {
        setState(initialState);
    };

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setState({
        ...state,
        [event.target.name]: event.target.value,
        });
    };
    
    const updateBorder = (dragState) => {
        if (dragState === "over") {
        dropRef.current.style.border = "2px solid #000";
        } else if (dragState === "leave") {
        dropRef.current.style.border = "2px solid #e9ebeb";
        dropRef.current.style.margin = "0px 0px 10px 0px";
        }
    };
    
    return (
         <div>
            <ViewContainer>
                <ViewContent>
                    <ViewItems>
                        {/* <ViewH1>The Lagoon(Sri Lanka)</ViewH1>
                        <ViewP>If you’ve been fishing for unfiltered happiness, our seafood restaurant,
                            The Lagoon, is where you’ll definitely find it, which takes after the lively atmosphere at
                            seafood markets. We lay out the freshest catch of the day, so you can pick your favourite,
                            and ask our chefs to prepare it in a sauce or curry of your choice.Opt for the way you like
                            it best – sizzling, grilled,steamed, curried, or fried and the aroma that it gives off will leave
                            your mouth watering. Browse through our list of the choicest spirits, pick the one that goes best
                            with your dish and in no time, you’ll find yourself swimming in seventh heaven.While we serve the
                            best Indian, Continental, Chinese and Thai seafood preparations, So, come, let us treat you to an
                            ocean of pure joy.</ViewP> */}
                    </ViewItems>
                </ViewContent>
            </ViewContainer>
            

             <div>
                <div className="jumbotron jumbotron-fluid py-5"
                    style={{ backgroundColor: "#cb202d", color: "#ffffff" }}>
                    <div className="add-container">
                        <h1 className="text-center mb-5" >Add Restaurant</h1>
                        <hr className="mt-3 mb-5" style={{borderTop: '2px solid #ffffff'}} />

                        <form classname="form-add" onSubmit={handleOnSubmit} enctype="multipart/form-data">

                            <div className="form-group row">
                                <label htmlFor="name" className="col-sm-2 col-form-label" style={{ float: 'left' }}>Restaurant Name</label>
                                <div className="col-sm-9" style={{ float: 'left' }}>
                                    <input type="text" className="form-control" name="name" id="name" placeholder="Restaurant name"
                                        required onChange={handleInputChange} value={state.name} />
                                </div>
                            </div>

                            <br />
                            <div className="form-group row">
                                <label htmlFor="review" className="col-sm-2 col-form-label" style={{ float: 'left' }} >Description</label>
                                <div className="col-sm-9" style={{ float: 'left' }}>
                                    <textarea className="form-control" name="description" id="review" placeholder="Your description" rows="5"
                                        required onChange={handleInputChange}>{state.description}</textarea>
                                </div>
                            </div>
                            <br /> 

                            <div className="upload-section">
                                <Dropzone
                                    onDrop={onDrop}
                                    onDragEnter={() => updateBorder("over")}
                                    onDragLeave={() => updateBorder("leave")}
                                >
                                    {({ getRootProps, getInputProps }) => (
                                    <div
                                        {...getRootProps({ className: "drop-zone" })}
                                        ref={dropRef}
                                    >
                                        <input {...getInputProps()} />
                                        <p>Drag and drop a file OR click here to select a file</p>
                                        {images && (
                                        <div>
                                            <strong>Selected file:</strong> {images.name}
                                        </div>
                                        )}
                                    </div>
                                    )}
                                    </Dropzone>
                                    {previewSrc ? (
                                        isPreviewAvailable ? (
                                        <div className="image-preview">
                                            <img
                                            className="preview-image"
                                            src={previewSrc}
                                            alt="Preview"
                                            width="200px"
                                            style={{ maxHeight: "200", maxWidth: "200", margin: "20px" }}
                                            align-item="center"
                                            />
                                        </div>
                                        ) : (
                                        <div className="preview-message">
                                            <p>No preview available for this image</p>
                                        </div>
                                        )
                                    ) : (
                                        <div className="preview-message">
                                        {/* <p>Image preview will be shown here after selection</p> */}
                                        <img
                                            src={'https://rkdfuniversity.org/assets/Assets/images/image-preview.png'}
                                            alt="John"
                                            style={{ width: "250px", height: "200px", margin: "10px" }}
                                        />
                                        </div>
                                    )}
                                    </div>
                
                            <div className="form-group mt-6 mb-0">
                                <div className="">
                                    <button type="submit" className="add-btn">Submit</button>
                                </div>
                            </div>


                        </form>


                        </div>
                    </div>
                </div>
            </div>

            );
};

 export default Restaurant;
