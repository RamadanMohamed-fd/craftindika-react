import React, { useEffect, useState } from "react";
import "./news.css";
import { FaQuoteLeft } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";
import { useNavigate } from "react-router-dom";

const News = () => {
  const [currNews, setCurrNews] = useState(0);
  const [newsCart, setNewsCart] = useState(false);
  const navigate = useNavigate();

  const newsData = [
    {
      newsContent:
        "From Layoff to Entrepreneurial Triumph: AUK Man's Emotional Journey to Entrepreneurial Success with CraftIndika's CraftPartner Program.",
    },
    {
      newsContent:
        "Unleashing the Power Within: An American Woman's Inspiring Journey from Grief to Entrepreneurial Success and Environmental Change with CraftIndika's CraftPartner Program.",
    },
    {
      newsContent:
        "A Lifesaving Gift of Love: A UAE Father's Failing Business Resurrected by a Thriving Handicraft Venture with CraftIndika's CraftPartner Program.",
    },
    {
      newsContent:
        "United by Craft: An Indian Student's Group Achieves Business Success in Germany with CraftIndika's CraftPartner Program.",
    },
  ];

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCurrNews((currNews + 1) % 4);
    }, 8000);

    return () => clearTimeout(timeOut);
  }, [currNews]);

  const handleBlogClick = () => {
    navigate(`/partnership/blog?q=${currNews + 1}`);
  };

  return (
    <div
      data-aos="zoom-in"
      className="news px-[5rem]  max-sm:px-[1rem] pt-[7rem] pb-[2rem]  "
    >
      <div
        onClick={() => handleBlogClick()}
        className={
          currNews === 0
            ? "news_box  py-[22px] px-[60px] max-sm:pr-[15px] max-sm:pl-[55px] "
            : `news_box  py-[22px] px-[60px] max-sm:pr-[30px]  `
        }
      >
        <h1>
          <span className="quote">
            <FaQuoteLeft />
          </span>
          <p className="containt">
            <span>{newsData[currNews].newsContent.split(":")[0]}</span>
            {newsData[currNews].newsContent.split(":")[1]}
          </p>
        </h1>
        <a href="" className="btn">
          Read now
        </a>
      </div>

      <div
        data-aos="fade-left"
        className="news_pagination my-[1rem] mx-[5rem] max-sm:mx-0"
      >
        {newsData.map((data, i) => (
          <p
            key={i}
            onClick={() => setCurrNews(i)}
            className={
              i === currNews
                ? "news_pagination_active "
                : "news_pagination_notactive"
            }
          >
            {i + 1}
          </p>
        ))}
      </div>
    </div>
  );
};

export default News;
