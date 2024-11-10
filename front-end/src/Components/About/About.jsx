// src/Components/About/About.jsx
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container my-3 py-3">
            <h1 className="text-center">About Us</h1>
            <hr />
            <p className="lead text-center about-content">
                Welcome to RUR (Rent Use Return)!
                <br /><br />
                At RUR, we believe in revolutionizing the fashion industry by promoting sustainability and making high-quality fashion accessible to everyone. Our platform is designed to provide a seamless experience for fashion enthusiasts who want to stay trendy while being environmentally conscious.
                <br /><b>Our Mission:</b> RUR aims to reduce fashion waste and promote a circular economy by offering a unique blend of fashion rental and clothing swapping services.
                <br /><b>What We Offer:</b> 
Fashion Rental: Rent your favorite outfits for any occasion. Whether it's a special event, a work meeting, or a casual outing, we have a wide range of stylish options to choose from. Simply rent, wear, and return – it's that easy!
Clothing Swapping: Exchange clothes you no longer wear with others in our community. It's a fantastic way to refresh your wardrobe without the need to buy new clothes, fostering a sense of community and sustainability.
Quality Control: We ensure that all rented and swapped items meet our high standards of quality and cleanliness. Each piece is carefully inspected and professionally cleaned before it reaches you.
Subscription Models: Choose from our flexible subscription plans to enjoy unlimited rentals and swaps each month. Our plans are designed to fit different needs and lifestyles.
Size and Fit Guarantees: We provide detailed size guides and personalized fitting recommendations to ensure you find the perfect fit every time.
User Profiles and Wishlists: Create a profile, save your favorite items, and keep track of your rentals and swaps. Your wishlist helps us understand your style and preferences better.
Sustainability Education: Learn more about sustainable fashion practices and how you can make a positive impact on the environment through our educational resources and blog.
Donation and Recycling Partnerships: We partner with organizations to donate and recycle clothes that are no longer suitable for rental or swapping, ensuring that nothing goes to waste.
Customization and Personalization: Personalize your wardrobe with custom pieces and accessories. Our platform allows you to express your unique style in a sustainable way.
Join us at RUR and be part of a community that values fashion, sustainability, and sharing. Together, we can make a difference, one outfit at a time.
            </p>
            <h5 className="text-center">RUR – Rent, Use, Return. Fashion for a Sustainable Future.</h5>

            <h2 className="text-center py-4">Our Collections</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img className="card-img-top img-fluid" src="https://i.pinimg.com/736x/c9/90/13/c99013e3d27c7e8b373629c0af3fccb6.jpg" alt="Men's Clothing" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Men's Clothing</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img className="card-img-top img-fluid" src="https://blog.kreeva.com/wp-content/uploads/2020/11/long-min-1.jpg" alt="Women's Clothing" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Women's Clothing</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img className="card-img-top img-fluid" src="https://2.bp.blogspot.com/-BsrbZku9-8s/UOf9eO3JCRI/AAAAAAAAIEg/ACBXJbPiYQs/s1600/Black-Cocktail-Dress-Designs.jpg" alt="Party Wears" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Party Wears</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img className="card-img-top img-fluid" src="https://www.stylesgap.com/wp-content/uploads/2016/04/Indian-Designer-Bridal-Dresses-Wedding-Trends-2016-2017-Collection-22.jpg" alt="Bridals" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Bridals</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
