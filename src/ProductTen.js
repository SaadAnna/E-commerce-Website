import "./Style.css";
import { Link } from "react-router-dom";
import ImageProductTen from "./cap-1137677_640.jpg";
export default function ProductTen() {
    return (
        <div>
        <div id="productDescritpion">
                <img  src={ImageProductTen} />
                <div>
                <h1>             
                Usa Cap.
                
                </h1>
                <p> 
                Stylish cap featuring the American flag. Made from durable,<br/>
                breathable fabric for a comfortable fit. Ideal <br/>
                for casual wear.
                </p>
                <span>$10.99</span>
                <div className="Order"><a href="https://api.whatsapp.com/send/?phone=%2B212622885898&text=I+want+this+product+please&type=phone_number&app_absent=0" target="_blank">Order Now</a></div>
                
                </div>
                </div>
                <div id="Fotter">
             <h5>Dearer</h5>
             <div>
             <h1>Menu.</h1>
             <ul>
              <li>
              <Link to="/Home"  id="QiukLink" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link>
              </li>
              <li>
              <Link to="/Contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Contact US</Link>
              </li>
              <li>
              <Link to="/About" id="QiukLink" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>AboutUs</Link>
              </li>
              <li>
              <Link to="/Product" id="QiukLink" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Product</Link>
              </li>
             </ul>
             </div>
             <div>
             <h1>Quick Links.</h1>
             <ul>
              <li>
              <Link to="/Blog" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Blog</Link>
              </li>
              <li>
                <a href="Dearer">Support
                </a>
              </li>
              <li>
                <a href="Dearer">Careers
        </a>
              </li>
              <li>
                <a href="Dearer">Privacy Policy
                </a>
              </li>
             </ul>
             </div>
             <div id="Contact">
             <h1>Contact</h1>
             <ul>
              <li>
                <a href="Dearer">56 Hendford Rd, Warwickshire, BH10 5AU
                </a>
              </li>
              <li>
                <a href="Dearer">dearer@gmail.com
                </a>
              </li>
              <li>
                <a href="Dearer">01202 511337
                </a>
              </li>
              <li>
                <a href="Dearer">
                </a>
              </li>
             </ul>
             </div>
             </div>
              <div id="FOoter">
              <h1>Copyright © 2024 Dearer Store | Powered by Dearer Store</h1>
              <h1 className="Name">Saad Anna 2024.</h1>
              </div>
                </div>
    )
}