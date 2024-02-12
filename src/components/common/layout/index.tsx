import styled from "styled-components";

export const CommonLayout = () => {
  return <Common></Common>;
};

export const RowLayout = () => {
  return <Row></Row>;
};

export const ColumnLayout = () => {
  return <Column></Column>;
};

const Common = styled.div`
  display: flex;
`;

const Row = styled(Common)`
  flex-direction: row;
`;

const Column = styled(Common)`
  flex-direction: column;
`;
