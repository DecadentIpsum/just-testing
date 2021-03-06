/* eslint-disable react/display-name */
import React, { useRef, useEffect } from "react"
import { gsap, TimelineLite, TweenMax, Back, Power3 } from "gsap"
import SplitText from "../../../../gsap/SplitText"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Arrow from "../../../images/arrow-down.svg"
import Video from "../banner/video/video"

import "./banner.scss"

export default () => {
  let app = useRef(null)
  let header = useRef(null)
  let tl = new TimelineLite({ delay: 0.8 })

  useEffect(() => {
    let mySplitText = new SplitText(header, {
      type: "chars",
    })
    let chars = mySplitText.chars

    // Remove Initial flash
    TweenMax.to(app, 0, { css: { visibility: "visible" } })

    // Header Animation
    tl.staggerFrom(
      chars,
      1,
      {
        opacity: 0,
        transformOrigin: "0% 50% -50",
        rotationX: 180,
        y: 200,
        ease: Back.easeOut,
      },
      0.02,
      "=1.2"
    )
  }, [])

  const bannerImage = useStaticQuery(graphql`
    query BannerImage {
      file(relativePath: { eq: "seventa-header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
    }
  `)

  return (
    <div className="banner-section" ref={el => (app = el)}>
      <div className="banner-section__left">
        <span>Unforgettable experiences & events</span>
        <Arrow />
      </div>
      <div className="banner-section__inner">
        <h1 ref={el => (header = el)} className="banner-text">
          <span>We love experiences.</span>
          <span>We create them.</span>
          {/* <div className="rolling">
          <span className="under-title under1">Event production</span>
          <span className="under-title under2">Conferences</span>
          <span className="under-title under3">Brand activations</span>
          <span className="under-title under4">Event management</span>
          <span className="under-title under5">Venue sourcing</span>
          </div> */}
        </h1>

        <Img
          className="mainBanner"
          fluid={bannerImage.file.childImageSharp.fluid}
          alt={bannerImage.file.childImageSharp.name}
        />
        <Video />
      </div>
    </div>
  )
}

gsap.registerPlugin(TimelineLite)
