import MYimage from "./pexels-kseniachernaya-3965545.jpg"
import IMAGE from "./1.png"
import myImage from "./2.png"
import Image from "./3.png"
import IMageProduct from "./pexels-frendsmans-1926769.jpg"
import ImageProductTWO from "./pexels-luizclas-170497-1848471.jpg"
import ImageProductTHREE from "./pexels-jansel-ferma-306295-2315303.jpg"
import OpinionOne from "./women_face_one.png"
import OpinionTwo from "./women_face_two.png"
import OpinionThree from "./mane_face.png"
import "./Style.css";
 export default function Header(){
   return (
     <div>
<div id="Header">
 <div>  
 <h1>
    welcome!
 </h1>
 <h5>
 Buy Everything You Need <br/>  In The World Of Clothing <br/>  From One Place.
 </h5>
 <a href="saad">
   Shop
 </a>
 </div>

 
</div>
<div id="Image">
  
<img src={MYimage} alt="My Image" />
</div>
     <div id="Services">
     <div>
     <h1>
     WHAT WE DO
     </h1>
     <h5>
     We Are A Brand Of Casual <br/>  Clothing And Footwear 
      With A Wonderful <br/>And Distinctive Design   
       We Sell Clothes <br/>And We Also Print Your   
        Design On  <br/> Any Type Of 
         Clothing You Choose <br/>
Contact Us For More.
     </h5>
     <a href="saad">
       shop
     </a>
     </div>
    </div>
      <div id="Our_services">
      <div className="Frist_Services">
      <img className="Image" src={IMAGE} alt="My Image" />
      <h1>Good Cmmunication.</h1>
      <h5>
      Lorem ipsum dolor sit amet, consectetur <br/>
       adipiscing elit. Donec at cursus nunc <br/>
       varius dapibus elit Nullam sem velit, efficitur <br/>
        id ullamcorper eu, dignissim a <br/>
         lacus. Sed fermentum.
      </h5>
      </div>
      <div className="Frist_Services">
      <img className="Image" src={myImage} alt="My Image" />
      <h1>Advertisement.

      </h1>
      <h5>
      Lorem ipsum dolor sit amet, consectetur <br/>
       adipiscing elit. Donec at cursus nunc <br/>
       varius dapibus elit Nullam sem velit, efficitur <br/>
        id ullamcorper eu, dignissim a <br/>
         lacus. Sed fermentum.
      </h5>
      </div>
      <div className="Frist_Services">
      <img className="Image" src={Image} alt="My Image" />
      <h1>Good Surveillance.</h1>
      <h5>
      Lorem ipsum dolor sit amet, consectetur <br/>
       adipiscing elit. Donec at cursus nunc <br/>
       varius dapibus elit Nullam sem velit, efficitur <br/>
        id ullamcorper eu, dignissim a <br/>
         lacus. Sed fermentum.
      </h5>
      </div>
      </div>
      <div id="Product">
     <div>
     <h1>
     our products
     </h1>
     <h5>
     Some of our famous <br/>
      and best-selling 
       products locally and <br/>
        internationally.
     </h5>
     </div>
    </div> 
    <div id="Our_Product">
      <div class="FRIST_card">
      <div>
  <h1>White Chemise.</h1>
  <p className="Description">A White Shirt For <br/>
   Women From Adidas <br/>
   Elegant And Distinctive<br/>  For Important 
    Occasions <br/>As Well As For Outings 
    <br/> And Family Gatherings.</p>
  <p className="price">$129.99</p>

  <p><button>Add To Cart</button></p>
  </div>
   <img src={IMageProduct}></img>
</div>
    </div>
    <div id="Our_Product">
      <div class="SECOND_card">
      <img src={ImageProductTWO}></img>
      <div>
  <h1>Long Rope.</h1>
  <p className="Description">A Long Dress For Women <br/>
   From Zara Specially <br/>
    Designed For Important Dates <br/>
     And Parties. It Can Be Worn <br/>
      Alone Or With Short Pants.</p>
  <p className="price">$259.99</p>

  <p><button>Add To Cart</button></p>
  </div>
   
</div>
    </div>
    <div id="Our_Product">
      <div class="THIRD_card">
      
      <div>
  <h1>Black TShirt.</h1>
  <p className="Description">A Black Shirt For  <br/> 
  Men Mrom Nick With <br/> 
   A Wonderful And Luxurious <br/> 
    Design Suitable <br/> 
     For Summer And Spring.</p>
  <p className="price">$79.98</p>

  <p><button>Add To Cart</button></p>
  </div>
   <img src={ImageProductTHREE}></img>
</div>
    </div>
    <div id="Opinion">
        <h1>
        People's opinions about us
             </h1>  
              <h5>
              <h5>
              Some People's Opinions About The <br/>
               High-Quality Products They Offer <br/>
                That Are Distinct From <br/>
                 Other Companies.
      </h5>
      </h5>
    </div>
         <div id="People_Opinion">
         <div>
         <p>
         Lorem ipsum dolor sit amet, consectetur <br/>
       adipiscing elit. Donec at cursus nunc <br/>
       varius dapibus elit Nullam sem velit, efficitur <br/>
        id ullamcorper eu, dignissim a <br/>
         lacus. Sed fermentum.
         </p>
         <img src={OpinionOne}></img>
         <h5>
          Alina Jones.
         </h5>
         <h6>
          England.
         </h6>
         </div>
         <div>
         <p>
         Lorem ipsum dolor sit amet, consectetur <br/>
       adipiscing elit. Donec at cursus nunc <br/>
       varius dapibus elit Nullam sem velit, efficitur <br/>
        id ullamcorper eu, dignissim a <br/>
         lacus. Sed fermentum.
         </p>
         <img src={OpinionTwo}></img>
         <h5>
          Sofia Pena.
         </h5>
         <h5>
          USA.
         </h5>
         </div>
         <div>
         <p>
         Lorem ipsum dolor sit amet, consectetur <br/>
       adipiscing elit. Donec at cursus nunc <br/>
       varius dapibus elit Nullam sem velit, efficitur <br/>
        id ullamcorper eu, dignissim a <br/>
         lacus. Sed fermentum.
         </p>
         <img src={OpinionThree}></img>
         <h5>
          Mark Oles
         </h5>
         <h5>
          China.
         </h5>
         </div>
     </div>
     <div id="Dearer_Ads">
     <h5>
     READY TO TAKE YOUR BUSINESS TO THE NEXT LEVEL?
     </h5>
     <hr/>
     <h1>
Request a demo of any of our products today and <br/>
 see how they can help you streamline your <br/>
  operations & boost revenue!
     </h1>
     <a href="saad">Get Started Today!</a>

     </div>
     <div id="Fotter">
     <h5 href="saad">dearer</h5>
     <div>
     <h1>Menu.</h1>
     <ul>
      <li>
        <a href="##">Home</a>
      </li>
      <li>
        <a href="##">Contact Us</a>
      </li>
      <li>
        <a href="##">About Us</a>
      </li>
      <li>
        <a href="##">Products</a>
      </li>
     </ul>
     </div>
     <div>
     <h1>Quick Links.</h1>
     <ul>
      <li>
        <a href="##">Blog</a>
      </li>
      <li>
        <a href="##">Support
        </a>
      </li>
      <li>
        <a href="##">Careers
</a>
      </li>
      <li>
        <a href="##">Privacy Policy
        </a>
      </li>
     </ul>
     </div>
     <div id="Contact">
     <h1>Contact</h1>
     <ul>
      <li>
        <a href="##">56 Hendford Rd, Warwickshire, BH10 5AU
        </a>
      </li>
      <li>
        <a href="##">contact@info.com
        </a>
      </li>
      <li>
        <a href="##">01202 511337
        </a>
      </li>
     </ul>
     </div>
     </div>
     <div id="FoTTER_Description">
     <h1>Copyright © 2024 Dearer Store | Powered by Dearer Store</h1>
     <h1 className="Name">Saad Anna 2024.</h1>
 
     </div>
     </div>
   
   )



}