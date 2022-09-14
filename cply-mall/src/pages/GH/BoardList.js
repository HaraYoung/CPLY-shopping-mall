
import styled from "styled-components";

const BoardList = styled.div`
  margin: 0 3% 0 5%;
  display: flex;
  height: 1000px;
  .board-list-box1 {
    width: 300px;
    background-color: #000;
    color: #fff;
    .menu {
      width: 80%;
      margin: auto;
      > ul {
        list-style: none;
        padding: 0;
        margin: 0;
        .list {
          padding: 7px 0;
          > a {
            padding: 3px;
            color: #fff;
            &:hover {
              background: #fff;
              color: #000;
              border-radius: 3px;
              transition: all 0.3s ease-in-out;
            }
          }
        }
      }
    }
  }
`;

export default BoardList;