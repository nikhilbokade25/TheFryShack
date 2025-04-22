import './Products.css';

import pizzaImg from "../Assets/pizzaImg.jpg";
import burgerImg from "../Assets/burgerImg.jpg";
import nachosImg from "../Assets/nachosImg.jpg";

export default function Products() {

    return (
        <div className="product_container">
            <div className="heading_wrapper">
                <h1 className="main_heading">
                    <span>CRUNCHY </span>
                    <i>CRUNCHY </i>
                    <span>CRUNCHY </span>
                    <i>CRUNCHY </i>
                    <span>CRUNCHY </span>
                    <i>CRUNCHY </i>
                    <span>CRUNCHY</span>
                </h1>
            </div>

            <div className="product_content">

                <div className='product_box first_box'>
                    <div className='product_image'>
                        <img src={pizzaImg} alt='pizza'/>
                    </div>
                    <div className='product_text'>
                        <h1>PIZZA</h1>
                        <p>Cheesy, crispy, and loaded with toppings.</p>
                    </div>
                </div>

                <div className='product_box second_product_box'>
                    <div className='product_text second_box_text'>
                        <h1>BURGER</h1>
                        <p>Juicy beef burger with fresh veggies.</p>
                    </div>
                    <div className='product_image second_box_image'>
                        <img src={burgerImg} alt='burger' />
                    </div>
                </div>

                <div className='product_box third_box'>
                    <div className='product_image'>
                        <img src={nachosImg} alt='nachos' />
                    </div>
                    <div className='product_text'>
                        <h1>NACHOS</h1>
                        <p>Crunchy nachos with gooey cheese and dips.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
