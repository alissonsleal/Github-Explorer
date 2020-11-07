import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: #3d3d4d;
  }
`;

export const Main = styled.main`
  margin: 80px auto;
`;
export const Header = styled.header`
  display: flex;
  flex-direction: column;

  main {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  img {
    width: 96px;
    object-fit: contain;
    border-radius: 48px;
  }

  section {
    margin-left: 20px;
    color: #3d3d4d;

    strong {
      font-size: 30px;
    }

    p {
      margin-top: 5px;
    }
  }
`;

export const Status = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;

  section {
    margin: 0;
  }
  section + section {
    margin-left: 100px;
  }
`;

export const Item = styled.div`
  margin-top: 10px;
  width: 100%;

  a {
    text-decoration: none;
  }
`;

export const EachStatus = styled.div`
  margin-top: 10px;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  color: #3d3d4d;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  section {
    max-width: 95%;
  }

  strong {
    font-size: 20px;
    max-width: 100%;
  }
`;
