import './Menu.css';

export default function Menu() {
    return (
        <div className="menu_container">
            <div className="menu_row">
                {/* Left Column - Pizza */}
                <div className="menu_category">
                    <h2>------- PIZZA -------</h2>
                    <p>Cheese Pizza <span>$10</span></p>
                    <p>Pepperoni Pizza <span>$12</span></p>
                    <p>Veggie Pizza <span>$11</span></p>
                    <p>Margherita <span>$9</span></p>
                    <p>BBQ Chicken Pizza <span>$13</span></p>
                    <p>Spicy Paneer Pizza <span>$11</span></p>
                </div>

                {/* Right Column - Nachos */}
                <div className="menu_category">
                    <h2>------- NACHOS -------</h2>
                    <p>Classic Nachos <span>$7</span></p>
                    <p>Loaded Nachos <span>$10</span></p>
                    <p>Cheesy Jalapeño Nachos <span>$9</span></p>
                    <p>BBQ Nachos <span>$10</span></p>
                    <p>Spicy Nachos <span>$8</span></p>
                    <p>Guacamole Nachos <span>$9</span></p>
                </div>
            </div>

            <div className="menu_row">
                {/* Left Column - Burgers */}
                <div className="menu_category">
                    <h2>------- BURGERS -------</h2>
                    <p>Classic Beef Burger <span>$11</span></p>
                    <p>Chicken Burger <span>$10</span></p>
                    <p>Veggie Burger <span>$9</span></p>
                    <p>Double Cheeseburger <span>$13</span></p>
                    <p>Spicy Lamb Burger <span>$12</span></p>
                    <p>BBQ Burger <span>$11</span></p>
                </div>

                {/* Right Column - Fries */}
                <div className="menu_category">
                    <h2>------- FRIES -------</h2>
                    <p>Classic Fries <span>$4</span></p>
                    <p>Cheesy Fries <span>$6</span></p>
                    <p>Chili Fries <span>$7</span></p>
                    <p>Curly Fries <span>$5</span></p>
                    <p>Truffle Fries <span>$8</span></p>
                    <p>Loaded Fries <span>$7</span></p>
                </div>
            </div>

            <div className="menu_row_single">
                {/* Centered Single Row - Milkshakes */}
                <div className="menu_category">
                    <h2>------- MILKSHAKES -------</h2>
                    <p>Vanilla Shake <span>$6</span></p>
                    <p>Chocolate Shake <span>$6</span></p>
                    <p>Strawberry Shake <span>$6</span></p>
                    <p>Oreo Shake <span>$7</span></p>
                    <p>Mango Shake <span>$6</span></p>
                    <p>Peanut Butter Shake <span>$7</span></p>
                </div>
            </div>
        </div>
    );
}
