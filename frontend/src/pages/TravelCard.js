import React from 'react';
import TravelCardItem from './TravelCardItem';
import './TravelCardItem.css';
import img1 from  "../images/niagara.jpg"
import img2 from  "../images/great.jpg"
import img3 from  "../images/amalfi.jpg"
import img4 from  "../images/santorini.jpg"
import img5 from  "../images/burj.jpg"
import img6 from  "../images/sydney.jpg"
import img7 from  "../images/ella.jpg"
import img8 from  "../images/sigiriya.jpg"



function TravelCard() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <TravelCardItem
                        src={img1}
                        text='Niagara Falls, Ontario, is a Canadian city at the famous
                         waterfalls of the same name, linked with the U.S. by the Rainbow Bridge.'
                         label='Niagara-Falls'
                        //  path="/services"
                          />

                        <TravelCardItem
                        src={img2}
                        text="The Great Barrier Reef is the world's largest coral reef system composed of over 2,900 individual reefs and 900 
                        islands stretching for over 2,300 kilometres over an area of approximately 344,400 square kilometres."
                         label="The Great Barrier Reef"
                        //  path="/services"
                          />
                    </ul>
                    <ul className='cards__items'>
                        <TravelCardItem
                        src={img3}
                        text='The Amalfi Coast is a 50-kilometer stretch of coastline along the southern edge of Italy’s Sorrentine Peninsula, in the Campania region. It’s a popular holiday destination, with sheer cliffs and a rugged shoreline dotted with small beaches and pastel-colored fishing villages.'
                         label='The Amalfi Coast'
                        //  path="/services"
                          />

                        <TravelCardItem
                        src={img4}
                        text="Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater)."
                         label="Santorini"
                        //  path="/services"
                          />

                        <TravelCardItem
                        src={img5}
                        text="Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline."
                         label="Dubai"
                        //  path="/services"
                          />
                    </ul>

                    <ul className='cards__items'>
                    <TravelCardItem
                        src={img6}
                        text="Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design."
                         label="Sydney"
                        //  path="/services"
                          />

                        <TravelCardItem
                        src={img7}
                        text="Ella is a small town in the Badulla District of Uva Province, Sri Lanka governed by an Urban Council. It is approximately 200 kilometres east of Colombo and is situated at an elevation of 1,041 metres above sea level."
                         label="Ella,Sri Lanka"
                        //  path="/services"
                          />

                        <TravelCardItem
                        src={img8}
                        text="Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. The name refers to a site of historical and archaeological significance that is dominated by a massive column of rock around 180 metres high."
                         label="Sigiriya,Sr Lanka"
                        //  path="/services"
                          />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TravelCard;
