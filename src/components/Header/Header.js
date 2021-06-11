import React from 'react';
import './Header.css'
import banner_1 from '../../Assets/Images/banner-image-1.jpg'
import banner_2 from '../../Assets/Images/banner-image-2.jpg'

const Header = () => {
    return (
            <div className="main-banner">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={banner_1} className="d-block w-100 h-50" alt="banner-image1" />
                            <div class="carousel-caption d-none d-md-block">
                                <h1 style= {{color: '#5f0000'}}>Spanish League Teams</h1>
                                <h5 style= {{color: '#5f0000'}}>Your favourite Team is here! To know about just one click</h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={banner_2} class="d-block w-100 h-50" alt="banner-image2" />
                            <div class="carousel-caption d-none d-md-block">
                                <h1>Sprade happiness</h1>
                                <h5> You can contact to your favourite player using facebook, twitter.</h5>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
    );
};

export default Header;