import mimosa from './images/mimosa.png';
import martini from './images/martini.png';
import cosmo from './images/cosmo.png';
import manhattan from './images/manhattan.png';
import { Component, useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
    
    return (  
        <div className="Menu">
            <form action="/add-order" method="POST">

                <h2>Selected Drink:</h2>
                <div className="drinks">
                    <input type="radio" id="cosmo" name="type" value="Cosmo"/>
                    <label htmlFor="cosmo"><div className="drinkOption"><img className="cosmo" src={cosmo} alt="Cosmopolitan" /><p>Cosmo</p></div></label>
                    <input type="radio" id="manhattan" name="type" value="Manhattan"/>
                    <label htmlFor="manhattan"><div className="drinkOption"><img className="manhattan" src={manhattan} alt="Manhattan" /><p>Manhattan</p></div></label>
                    <input type="radio" id="mimosa" name="type" value="Mimosa"/>
                    <label htmlFor="mimosa"><div className="drinkOption"><img className="mimosa" src={mimosa} alt="Mimosa" /><p>Mimosa</p></div></label>
                    <input type="radio" id="martini" name="type" value="Martini"/>
                    <label htmlFor="martini"><div className="drinkOption"><img className="martini" src={martini} alt="Martini" /><p>Martini</p></div></label>
                </div>

                <h2>Options:</h2>
                <div className="options">
                    <input type="checkbox" id="rocks" name="rocks" />
                    <label htmlFor="rocks">On the rocks?</label>
                    <label htmlFor="garnish">Garnish: </label>
                    <select name="garnish" id="garnish">
                        <option value="None">None</option>
                        <option value="Lemon Twist">Lemon Twist</option>
                        <option value="Lime Twist">Lime Twist</option>
                        <option value="Marischino Cherry">Marischino Cherry</option>
                        <option value="Olives">Olives</option>
                    </select>
                    <label htmlFor="rim">Rim: </label>
                    <select name="rim" id="rim">
                        <option value="None">None</option>
                        <option value="Salt">Salt</option>
                        <option value="Sugar">Sugar</option>
                    </select>
                </div>

                <h2>Information:</h2>
                <div className="info">
                    <div className="infoForms">
                        <label htmlFor="fname">First Name: </label>
                        <input type="text" id="fname" name="fname"/>
                        <label htmlFor="lname">Last Name: </label>
                        <input type="text" id="lname" name="lname"/>
                        <label htmlFor="phoneNumber">Phone Number: </label>
                        <input type="text" id="phoneNumber" name="phoneNumber"/>
                    </div>
                    <button type="submit">Submit Order</button>
                </div>
                
           </form>
        </div>
    );
}
 
export default Menu;