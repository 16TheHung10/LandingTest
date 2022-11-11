import React, { forwardRef, useRef, useState } from "react";
import { NewsWrapper } from "./styled";

function News() {
  return (
    <NewsWrapper className="news">
      <div className="content">
        <div className="content_text">
          <h1 className="content_title">News</h1>
          <a href="" className="view_all">
            View All
          </a>
        </div>

        <div className="content_card">
          {arrNews.map((item, i) => (
            <div className="card_item" key={i}>
              <div className="item_img">
                <img src={item.img} alt="img" width="100%" height="100%" />
              </div>

              <p className="item_text">{item.catalog}</p>

              <div className="item_title_date">
                <p className="item_title">{item.title}</p>
                <p className="item_date">{item.date}</p>
              </div>

              <p className="item_p">{item.text}</p>

              <a href="" className="read_more">
                Read more...
              </a>
            </div>
          ))}
        </div>
      </div>
    </NewsWrapper>
  );
}
export default forwardRef(News);

const arrNews = [
  {
    img: "assets/news/img1.png",
    catalog: "News",
    title: "Lorem Ipsum",
    date: "11/12/2000",
    text: "To reserve your spot on the waitlist, enter your information, connect your wallet and make a $100 USDC refundable deposit. Once payment is complete, you'll be added to the waitlist and be notified once it's time to complete your order. Getting on the waitlist for Saga requires a $100 USDC deposit. The deposit  mount will be deducted from the final purchase price of the Poolsphone.",
  },
  {
    img: "assets/news/img2.png",
    catalog: "News",
    title: "Lorem Ipsum",
    date: "11/12/2000",
    text: "To reserve your spot on the waitlist, enter your information, connect your wallet and make a $100 USDC refundable deposit. Once payment is complete, you'll be added to the waitlist and be notified once it's time to complete your order. Getting on the waitlist for Saga requires a $100 USDC deposit. The deposit  mount will be deducted from the final purchase price of the Poolsphone.",
  },
  {
    img: "assets/news/img3.png",
    catalog: "News",
    title: "Lorem Ipsum",
    date: "11/12/2000",
    text: "To reserve your spot on the waitlist, enter your information, connect your wallet and make a $100 USDC refundable deposit. Once payment is complete, you'll be added to the waitlist and be notified once it's time to complete your order. Getting on the waitlist for Saga requires a $100 USDC deposit. The deposit  mount will be deducted from the final purchase price of the Poolsphone.",
  },
];
