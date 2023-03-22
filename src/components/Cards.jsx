import React from "react";
import styled from "styled-components";
import Avatar from "../assets/img/avatar.png";
import TwitterLogo from "../assets/img/twitter.svg";

export default function (props) {
  const Frames = styled.section`
    display: flex;
    flex-direction: column;
    padding: 35px 31px;
    gap: 15px;
    background: #ffffff;
    border: 1px solid rgba(29, 161, 242, 0.2);
    box-shadow: 0px 15px 60px rgba(29, 161, 242, 0.15);
    border-radius: 10px;

    @media (max-width: 700px) {
      padding: 35px 20px;
    }
  `;

  const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 400px;

    @media (max-width: 700px) {
      flex-direction: row;
      justify-content: space-center;
      gap: 120px;
    }

    @media (min-width: 300px) {
      flex-direction: row;
      justify-content: space-center;
      gap: 0;
    }
  `;

  const Rows = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 20px;
  `;

  const Heading1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
  `;

  const Heading2 = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.6);
  `;

  const Heading3 = styled.h3`
    width: 539px;
    height: 52px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;

    @media (max-width: 700px) {
      width: 270px;
      height: 52px;
      font-size: 14px;
      margin: 0 0 10px 0;
      text-align: center;
    }
  `;
  return (
    <>
      <Frames>
        <Wrapper>
          <Rows>
            <img
              src={Avatar}
              className="user_avatar"
              alt="User Avatar"
              title="User Avatar"
            />
            <div className="Avatar">
              <Heading1>{props.fullName}</Heading1>
              <Heading2>{props.username}</Heading2>
            </div>
          </Rows>
          <div className="Twitter Logo">
            <img src={TwitterLogo} alt="Twitter Logo" title="Twitter Logo" />
          </div>
        </Wrapper>
        <Heading3>
          {props.tweets}
          <a href="#" className="hashtag">
            {props.hashtag1}
          </a>
          <a href="#" className="hashtag">
            {props.hashtag2}
          </a>
          <a href="#" className="hashtag">
            {props.hashtag3}
          </a>
        </Heading3>
      </Frames>
    </>
  );
}
