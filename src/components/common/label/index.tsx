import styled from "styled-components";

export const SmallLabel = () => {
  return <Small></Small>;
};

export const CommonLabel = () => {
  return <Common></Common>;
};

export const LargeLabel = () => {
  return <Large></Large>;
};

const Common = styled.label``;

const Small = styled(Common)``;

const Large = styled(Common)``;
