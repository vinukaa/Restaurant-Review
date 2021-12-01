import React, { useEffect, useState } from 'react';
import { ViewContainer,ButtonContainer,Button, ViewContent, ViewItems, ViewH1, ViewP } from './RestaurantElements';
import "./RestaurantElements.css";
import "./Styles.css";
import { useHistory } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../../constants/constants';
import { Review } from '../Rating/Rating';

const Products = () => {

    const history = useHistory(); 
    const [AvgRating,setAvgRating] = useState();
    const [RatingData , setRatingData] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user-info")));
    const [state, setState] = useState(
        {
            name:'',
            restaurantId:'',
            userId:'',
            rating:'',
            review:''
        }
    );
    let [restaurant, setRestaurant] = useState( JSON.parse(localStorage.getItem("restaurantData")) );
  
    const orderfood = () => {
        history.push("./order-food");
    }

    useEffect(() => {

        const getUserData = () => {
          const resturentData =  JSON.parse(localStorage.getItem("restaurantData")) 
          console.log(resturentData);
          setRestaurant(resturentData);
          console.log(restaurant);
        };
    
        getUserData();
    
      }, [restaurant]);
     
      useEffect(() => {
            const getFileList = async () => {
            try {
                const  restData  = await axios.get(`${API_URL}/rating/get/`+ restaurant.id, {
                    headers: { 
                    },
                }); 
                setRatingData(restData.data.data); 
            } catch (error) {
                error.response && console.log(error.response.data);
                console.log(error);
            }
            };

            getFileList();
            
      }, [RatingData]);

    const handleForm = (event) =>{
        event.preventDefault();
        const data ={
            name:user.name,
            restaurantId:restaurant.id,
            userId:user._id,
            rating:state.rating,
            review:state.review
        }

        console.log(data)

         axios.post(`${API_URL}/rating/add`, data
        , {
                headers: { 
                },
          });

    }
   const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setState({
        ...state,
        [event.target.name]: event.target.value,
        });
    };
    
    return (
        <div>
            <ViewContainer>
                <ViewContent>
                    <ViewItems>
                    <ButtonContainer>
                        <Button onClick={orderfood}>Order Foods</Button>
                    </ButtonContainer>
                        <Row style={{width:'100%'}}>
                            <Col md={6} >
                                 <ViewH1>{restaurant.name}</ViewH1>
                                <ViewP>{restaurant.description}</ViewP>
                            </Col>
                            <Col md={6}>
                                  <img src={restaurant.images}   style={{maxWidth:'850px',maxHeight:'600px', marginLeft:'50px',boxShadow: '3px 5px #e9ba23'}}/>
                            </Col>

                        </Row>
                      
                    </ViewItems>
                </ViewContent>
            </ViewContainer>


            <div>
                <div className="jumbotron jumbotron-fluid py-5"
                    style={{ backgroundColor: "#cb202d", color: "#ffffff" }}>
                    <div className="rate-container">
                        <h1 className="text-center mb-5" >Write a Review</h1>


                        <form classname="form-rate" onSubmit={handleForm}>
                            <div className="form-group row">
                                <label htmlFor="rating" className="col-sm-2 col-form-label" style={{ float: 'left' }}>Rating</label>
                                <div className="col-sm-10" style={{ float: 'left' }}>

                                    <fieldset className="starability-checkmark" id="rating">
                                        <input type="radio" id="no-rate-checkmark" className="input-no-rate" name="rating" value="0"
                                         aria-label="No rating."  onChange={handleInputChange}/>

                                        <input type="radio" id="checkmark-rate1" name="rating" value="1" onChange={handleInputChange} />
                                        <label htmlFor="checkmark-rate1" title="Terrible">1 star</label>

                                        <input type="radio" id="checkmark-rate2" name="rating" value="2"  onChange={handleInputChange}/>
                                        <label htmlFor="checkmark-rate2" title="Not good">2 stars</label>

                                        <input type="radio" id="checkmark-rate3" name="rating" value="3"  onChange={handleInputChange} />
                                        <label htmlFor="checkmark-rate3" title="Average">3 stars</label>

                                        <input type="radio" id="checkmark-rate4" name="rating" value="4"  onChange={handleInputChange} />
                                        <label htmlFor="checkmark-rate4" title="Very good">4 stars</label>

                                        <input type="radio" id="checkmark-rate5" name="rating" value="5"  onChange={handleInputChange} />
                                        <label htmlFor="checkmark-rate5" title="Amazing">5 stars</label>

                                        <span className="starability-focus-ring"></span>
                                    </fieldset>
                                </div>
                            </div>


                            <br />
                            <div className="form-group row">
                                <label htmlFor="review" className="col-sm-2 col-form-label" style={{ float: 'left' }} >Review</label>
                                <div className="col-sm-9" style={{ float: 'left' }}>

                                    <textarea className="form-control"  onChange={handleInputChange} name="review" id="review" placeholder="Your Review" rows="5"
                                        required></textarea>
                                </div>
                            </div>


                            <div className="form-group mt-5 mb-0">
                                <div className="">
                                    <button type="submit" className="rate-btn">Post Review</button>
                                </div>
                            </div>


                        </form>
                            {AvgRating}

                    </div>
                </div>
            </div>

        <div>
            {
                     RatingData.map((item) =>
                     item.hotelId === restaurant.id?(
                        <> 
                          <Review data = {item}/>
                        </>
                     ):null
                       
                    )
           }
        </div>
        </div>


    );
};
export default Products;
