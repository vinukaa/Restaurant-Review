import React from 'react';
import DrinkCardItem from './DrinkCardItem';
import './DrinkCardItem.css';
import img1 from  "../images/CoronaBeer.jpg"
import img2 from  "../images/heineken.jpg"
import img3 from  "../images/victoria.jpg"
import img4 from  "../images/budlight.jpg"
import img5 from  "../images/millerlite.jpg"
import img6 from  "../images/adriana.jpg"
import img7 from  "../images/masseto.jpg"
import img8 from  "../images/Cloudy.jpg"
import img9 from  "../images/old.jpg"
import img10 from  "../images/kilbeggan.jpg"
import img11 from  "../images/tanqueray.jpg"



function DrinkCard() {
    return (
        <div className='cards'>
            <h1>All About Beer!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <DrinkCardItem
                        src={img1}
                        text='Corona Extra is a pale lager produced by Mexican brewery Cervecería Modelo and owned by Belgian company AB InBev. It is often served with a wedge of lime or lemon in the neck of the bottle to add tartness and flavour.'
                         label='Corona'
                        //  path="/services"
                          />

                        <DrinkCardItem
                        src={img2}
                        text="Heineken Lager Beer, or simply Heineken is a pale lager beer with 5% alcohol by volume produced by the Dutch brewing company Heineken N.V.. Heineken beer is sold in a green bottle with a red star."
                         label="Heineken"
                        //  path="/services"
                          />
                    </ul>
                    <ul className='cards__items'>
                        <DrinkCardItem
                        src={img3}
                        text="Victoria Mexican Lager Beer is a delicious, easy-drinking Vienna style lager from Mexico's oldest beer brand. Brewed with water, barley malt, non-malted cereals, and hops, this Mexican beer 12 pack offers aromas of orange blossom honey on toast with a smooth, frothy, light-to-medium body."
                         label='Victoria'
                        //  path="/services"
                          />

                        <DrinkCardItem
                        src={img4}
                        text="Introduced in 1982, Bud Light is a premium light lager with a superior drinkability that has made it the best-selling and most popular beer in the United States. Bud Light is brewed using a blend of premium aroma hop varieties, both American-grown and imported, and a combination of barley malts and rice."
                         label="Bud Light"
                        //  path="/services"
                          />

                        <DrinkCardItem
                        src={img5}
                        text="Back in 1975 we didn’t just brew any light beer—we brewed Miller Lite, a true American Pilsner. It tasted great. It was less filling. It was the original light beer. And that was no accident."
                         label="Miller Lite"
                        //  path="/services"
                          />
                    </ul><br />

                    <h1>All About Wine!</h1><br />

                    <ul className='cards__items'>
                        <DrinkCardItem
                        src={img6}
                        text="The Adrianna vineyard, planted at almost 5,000’ elevation in the Andes foothills, lies on the westernmost border of Tupungato Alto, Mendoza, Argentina, in a small district called Gualtallary.It belongs to the Bodega Catena Zapata."
                         label="The Adrianna vineyard"
                        //  path="/services"
                          />

                        <DrinkCardItem
                        src={img7}
                        text="This prestigious winery was founded by Lodovico Antinori, a man of some pedigree in Tuscany, his aunt having been wife to Marchese Mario, the man who at the Sassicaia estate was responsible for beginning the Super-Tuscan movement. He began as a winemaker in California, but returned to his native homeland in 1981."
                         label="Masseto"
                        //  path="/services"
                          />

                        <DrinkCardItem
                        src={img8}
                        text="Sauvignon Blanc is the flagship varietal of New Zealand, and is typically a very crisp aromatic wine with notes of grapefruit, tropical fruit and cut grass.The much-lauded white wines of New Zealand tend to be slightly sweeter than those from Bordeaux and the Loire Valley, and are hugely influenced by the growing conditions of the country."
                         label="Cloudy Bay"
                        //  path="/services"
                          />
                    </ul><br />

                    <h1>All About Spirits!</h1><br />

                    <ul className='cards__items'>
                        <DrinkCardItem
                        src={img9}
                        text="From the first time we tasted the Old Fitzgerald Fall 2020 release, it was clear this bottle is special. That shouldn’t come as a surprise, given its reputation — this is Heaven Hill’s flagship bourbon, after all — but it had a lot to live up to (namely its price tag, which far exceeds a weeknight dram — expect to pay at least twice the MSRP of $140 at retailers outside control states). Yet, any niggling trepidation is instantly allayed upon the first sniffs and sips of this memorable bourbon."
                         label="OLD FITZGERALD 14 YEARS OLD"
                        //  path="/services"
                          />

                        <DrinkCardItem
                        src={img10}
                        text="This bottle represents both the past and future of Irish whiskey. As a pot still release, a style that’s unique to Ireland, it takes advantage of the provision that allows for up to 5 percent of other cereals that can be included in the mash bill. If corn defines bourbon, and malted barley Scotch, then Kilbeggan proves that other Irish distillers should be embracing oats."
                         label="Kilbeggan"
                        //  path="/services"
                          />

                        <DrinkCardItem
                        src={img11}
                        text="Tanqueray lives up to the bill as “the ultimate cocktail gin.” It is much less juniper-heavy than traditional London Dry gins, and its herbal, citrusy character proves a perfect match for tonic water, delivering an even more refreshing iteration of the classic Highball. “Tanq 10” really comes into its own when mixed with dry vermouth in a Martini, however. "
                         label="Tanqueray"
                        //  path="/services"
                          />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DrinkCard;
