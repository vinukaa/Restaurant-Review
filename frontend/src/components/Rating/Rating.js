import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";


export const Review = (data) =>{
 
    return(
        <div
            style={{
                display:'flex',
                padding:'30px',
                marginTop:'20px',
                marginLeft:'50px',
                marginRight:'50px',
                marginBottom:'20px',
                flexDirection:'column',
                borderBottom:'1px solid black',
                boxShadow:'1px 1px 6px gray'
            }}
        >
            <Row> 
                <Row>
                    <Col
                        style={{
                            fontWeight:'bold',
                            fontSize:'20px',
                            textShadow:'1px 1px 3px gray',
                            marginBottom:'10px'
                        }}
                    >
                        {data.data.userName}
                    </Col>
                    <Col
                        style={{
                                fontWeight:'bold',
                                fontSize:'18px',
                                color:'#a61e51',
                                textShadow:'1px 1px 3px gray',
                                marginBottom:'10px'
                            }}
                    >
                        Rating : {data.data.rating}
                    </Col>
                </Row>
                <Row
                    style={{
                                    color:'#524255', 
                                    marginBottom:'10px',
                                    marginTop:'10px'
                                }}
                >
                    
                    {data.data.description} 
                </Row>
            </Row>
           
        </div>
    );
}