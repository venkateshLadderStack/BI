import React from "react"
import recipe1 from "../../images/recipies/recipie1.png"
import * as recipeStyle from "../../styles/recipe.module.css"
import useWindowSize from "../../../hooks/useWindowSize"

const Recipe = ({ data }) => {
  const { width } = useWindowSize()
  return (
    <>
      {data.map((item, i) => (
        <>
          <div
            key={i}
            className={
              i % 2 == 0
                ? "row d-flex justify-content-center align-items-center"
                : "row d-flex flex-row-reverse justify-content-center align-items-center"
            }
          >
            <div
              className={`${recipeStyle.individual} col-lg-6 col-md-12 col-sm-12 col-12`}
            >
              <h4>{item.title}</h4>
              <h6>{item.subtitleOne}: </h6>
              <ul>
                {item?.pointsOne.map((li, i) => (
                  <li>{li}</li>
                ))}
              </ul>
              <h6>{item.subtitleTwo}: </h6>
              <ul>
                {item?.pointsTwo.map((li, i) => (
                  <li>{li}</li>
                ))}
              </ul>
            </div>
            <div className=" col-lg-6 col-md-12  col-sm-12 col-12">
              <img
                src={item.img}
                width={
                  width < 400
                    ? 300
                    : width < 500
                    ? 350
                    : width < 1800
                    ? 450
                    : 550
                }
                height={
                  width < 400
                    ? 174
                    : width < 500
                    ? 203
                    : width < 1800
                    ? 280
                    : 320
                }
                alt=""
              />
            </div>
          </div>
        </>
      ))}
    </>
  )
}

export default Recipe
