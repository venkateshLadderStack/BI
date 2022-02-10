import React, { useState } from "react"
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../../images/logo.png"

const navLinks = [
  {
    link: "/home",
    name: "Home",
  },
  {
    link: "/about",
    name: "About",
  },
  {
    link: "/contact",
    name: "Contact",
  },
  {
    link: "/products",
    name: "Products",
  },
  {
    link: "/recipes",
    name: "Recipes",
  },
  {
    link: "/press",
    name: "Press",
  },
]

const Header = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className="navbar">
        <div className="mx-5 nav_logo">
          <a href="/">
            <img src={logo} alt="" width={76.7} height={65} />
          </a>
        </div>
        <div className="nav_content">
          <ul className="nav_links">
            {navLinks.map((item, i) => {
              return (
                <>
                  <li className="nav_item" key={i}>
                    <a href={item.link}>{item.name} </a>
                  </li>
                </>
              )
            })}
          </ul>
          <ul className="nav_group">
            <li className="nav_item ">
              <a
                target="_blank"
                className="text-black social_icon mx-2"
                href="https://www.facebook.com/goblackirish/"
              >
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a
                target="_blank"
                className="text-black social_icon mx-2"
                href="https://www.instagram.com/goblackirish/"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                target="_blank"
                className="text-black social_icon mx-2"
                href="https://twitter.com/goblackirish?lang=en"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>
          </ul>
        </div>
        <>
          <div className="mobile_nav">
            <FontAwesomeIcon
              className="mx-3"
              onClick={() => {
                setToggle(true)
              }}
              icon={faBars}
              size="2x"
            />
          </div>
          <div className={toggle ? "slide_nav active" : "slide_nav"}>
            <FontAwesomeIcon
              className="mx-3 text-white fa_times"
              onClick={() => {
                setToggle(false)
              }}
              icon={faTimes}
              size="2x"
            />
            <ul className="nav_mobile_links">
              {navLinks.map((item, i) => {
                return (
                  <li className="nav_mobile_item" key={i}>
                    <a href={item.link}>{item.name} </a>
                  </li>
                )
              })}
            </ul>
            <div className="mobile_social_icon">
              <ul className="nav_group">
                <li className="nav_item ">
                  <a
                    target="_blank"
                    className="text-white social_icon mx-2"
                    href="https://www.instagram.com/goblackirish/"
                  >
                    <FontAwesomeIcon icon={faFacebookF} size="2x" />
                  </a>
                  <a
                    target="_blank"
                    className="text-white social_icon mx-2"
                    href="https://www.instagram.com/goblackirish/"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  <a
                    target="_blank"
                    className="text-white social_icon mx-2"
                    href="https://twitter.com/goblackirish?lang=en"
                  >
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                  <a
                    target="_blank"
                    className="text-white social_icon mx-2"
                    href="https://www.tiktok.com/@goblackirish"
                  >
                    <FontAwesomeIcon icon={faTiktok} size="2x" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      </div>
    </>
  )
}

export default Header
