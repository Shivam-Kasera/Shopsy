import React from 'react'
import Slider from 'react-slick';
import { TestimonialData } from '../../library';

const Testimonial = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='py-10'>
            <div className='container'>
                {/* header section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-sm text-primary capitalize'>
                        What Our Customers Are Saying
                    </p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold uppercase'>
                        Testimonial
                    </h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400 capitalize'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, provident.
                    </p>
                </div>
                {/* testimonial cards */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {
                            TestimonialData && TestimonialData.map((data) => (
                                <div key={data.id} className='my-6'>
                                    <div
                                        key={data.id}
                                        className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                                    >
                                        <div className="mb-4">
                                            <img
                                                src={data.img}
                                                alt=""
                                                className="rounded-full w-20 h-20"
                                            />
                                        </div>
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="space-y-3">
                                                <p className="text-xs text-gray-500 dark:text-white">{data.text}</p>
                                                <h1 className="text-xl font-bold text-black/80 dark:text-white">
                                                    {data.name}
                                                </h1>
                                            </div>
                                        </div>
                                        <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 dark:text-white">
                                            ,,
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonial