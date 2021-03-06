import React, { useEffect } from "react"
import Layout from "../components/Layout/Layout"
import Banner from "../components/Banner"
import Section from "../components/Section"
import Frame5 from "../components/Frame5"
import Poster from "../components/Poster"
import Frame6 from "../components/Frame6"
import Frame7 from "../components/Frame7"
import Frame61 from "../components/Frame61"
import InstaFeed from "../components/InstaFeed"
import Seo from "../components/seo"
import Aos from "aos"

const Home = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <Seo title="Home" description="Black Irish" />
      <Layout>
        <Banner />
        <div className="my-5">
          <Section />
        </div>
        <div className="my-5">
          <Frame5 />
        </div>
        <div className="my-5">
          <Poster />
        </div>
        <div className="my-5">
          <div className="container">
            <div className="row ">
              <div className="col-lg-12 col-md-6 col-sm-6 col-6">
                <Frame6 />
              </div>
              <div className="col-lg-12 col-md-6 col-sm-6 col-6">
                <Frame61 />
              </div>
            </div>
          </div>
        </div>
        <div className="my-5">
          <Frame7 />
        </div>
        <div className="my-5">
          <InstaFeed />
        </div>
      </Layout>
    </>
  )
}

export default Home
