import React from "react";
import { PopularWrapper } from "./PopularStyle";
import Card from ".././Card";
// import Card03 from ".././Card03";
import arthur from "../../images/arthur.png";
// import batman from "../../images/batman.png";
import blackpanter from "../../images/blackpanter.png";
import kashima from "../../images/kashima.png";

export default function PopularCourses() {
  return (
    <PopularWrapper>
      <h1>Popular Courses</h1>
      <div className="container">
        <div className="row">
          <Card
            title="What is Lorem Ipsum?"
            images="https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg"
            old_price="9,999"
            newPrice="9999"
            rupess="$"
            alt="batman"
            exp_date="25-10-2020"
          />
          <Card
            title="What is Lorem Ipsum?"
            images={arthur}
            old_price="599"
            newPrice="500"
            rupess="&#x20B9;"
            alt="blackpanter"
            exp_date="25-10-2020"
          />
          <Card
            title="What is Lorem Ipsum?"
            images={blackpanter}
            old_price="7999"
            newPrice="7000"
            rupess="$"
            alt="arthur"
            exp_date="25-10-2020"
          />
          <Card
            title="What is Lorem Ipsum?"
            images={kashima}
            old_price="999"
            newPrice="500"
            rupess="$"
            alt="kashima"
            exp_date="25-10-2020"
          />
        </div>
      </div>
    </PopularWrapper>
  );
}
