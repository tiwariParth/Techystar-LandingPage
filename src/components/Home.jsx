import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillAmazonCircle,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>
            Welcome to Techy Star, the place where you can find all your tech
            needs
          </p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Ghraphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who We Are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            illo magni enim aut numquam atque minus est unde odio. Quisquam cum,
            nulla iusto quia ipsum reprehenderit itaque perferendis non quis
            eveniet voluptates voluptatem illum nihil quae quo officia
            consectetur aut consequatur. Officiis eligendi rerum facilis eum
            possimus sapiente atque ad impedit illum natus, architecto
            voluptatum ipsam labore commodi? Molestias, aliquam. Soluta dolor
            unde quam dicta. Similique, doloremque ipsam? Ullam, quisquam
            aliquid? Est aliquid nam repellendus quisquam, tenetur ad autem eos,
            tempore tempora dolorum quam ducimus error adipisci voluptas.
            Dolorum eaque nesciunt optio nostrum dolores aliquid voluptate culpa
            nulla facere at. Eaque tenetur facilis maiores. Modi, facilis
            doloremque! Maiores quidem dolorum, cum voluptatem sit maxime minima
            ipsum? Maiores sapiente excepturi culpa ipsa debitis aliquid vel
            laborum odit expedita suscipit. Quis quaerat possimus eum dolor
            ipsum adipisci quos aspernatur consequuntur alias, eveniet inventore
            provident temporibus perferendis ut vel blanditiis nesciunt, non
            porro!
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
