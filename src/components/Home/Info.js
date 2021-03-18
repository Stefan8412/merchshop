import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eu porttitor nibh, eget interdum leo. Sed lacinia, augue at
              pellentesque bibendum, erat arcu porta dui, aliquam iaculis ex
              quam sed odio. Sed at sodales sem. Curabitur fermentum nisl at
              velit vestibulum, vel pharetra ligula porttitor. Proin consectetur
              ante sit amet interdum venenatis. Quisque euismod consectetur
              eros. Aenean tincidunt sed lorem sed volutpat. Vestibulum in
              sapien at odio eleifend molestie vitae a neque. Quisque pretium
              magna sit amet ante vulputate, vel lacinia lorem sodales.
              Vestibulum in molestie odio.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                About page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
