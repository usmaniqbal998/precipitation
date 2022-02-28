import styled from "styled-components";
import { device } from "../../style/devices";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  height: 100vh;
  min-height: 0;
  margin: 0 auto;
  position: relative;

  @media ${device.mobiles} {
    margin: 0;
  }
`;

export const LogoImage = styled.img`
  width: 24rem;
  position: absolute;
  top: 2.4rem;
  left: 0;

  @media ${device.tablets} {
    top: 2.4rem;
    left: 2.4rem;
  }

  @media ${device.mobiles} {
    width: 14rem;
    top: 2.4rem;
    left: 2.4rem;
  }
`;

export const Card = styled.div`
  width: 20rem;
  background-color: #fff;
  position: absolute;
  top: 1rem;
  border-radius: 10px;
  padding: 1rem;
`;
