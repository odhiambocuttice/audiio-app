import "./about.css";
import { ReactComponent as Youtube } from "../../assets/icons/youtube.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/linkedin.svg";

export const About = () => {
  return (
    <div className="about" id="about">
      <div className="aboutLeft">
        <div className="aboutDesc">
          <p className="vl"></p>
          <div>
            <h1>who are we</h1>
            <h1>and what do we do</h1>
            <p style={{ marginLeft: "-25px" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              delectus voluptate quam optio, eveniet tenetur dolor. Dolores
              neque perspiciatis quidem, cum aperiam enim error fugit quae,
              nihil accusantium, suscipit aliquam?Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Natus delectus voluptate quam optio,
              eveniet tenetur dolor. Dolores neque perspiciatis quidem, cum
              aperiam enim error fugit quae, nihil accusantium, suscipit
              aliquam?
            </p>
          </div>
        </div>
        <div className="developer">
          <p>site thanks to</p>
          <ul className="devsocialsList">
            <li>
              <i className="devsocialsListIcon">
                <Github />
              </i>
            </li>
            <li>
              <i className="devsocialsListIcon">
                <LinkedIn />
              </i>
            </li>
          </ul>
        </div>
      </div>
      <div className="aboutRight">
        <div className="">
          <ul className="socialsList">
            <li className="socialsListItem">
              <h3 className="">connect with us via</h3>
              <i className=" socialsListIcon">
                <Instagram />
              </i>
            </li>

            <li className="socialsListItem">
              <h3 className="">watch our latest videos on</h3>
              <i className="socialsListIcon">
                <Youtube />
              </i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
