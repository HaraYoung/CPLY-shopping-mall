
import styled from 'styled-components';

const Table = styled.table`
    border-collapse: collapse;
    border-top: 3px solid #168;
    font-size: 14px;
    text-align: center;
    margin: auto;
    width: 100%;
    th {
        color: #fff;
        background: #000;
        padding: 10px;
        border: 2px solid #aaa;

        &:first-child {
            border-left:0;
            width: 70%;
        }
        &:last-child {
            border-right: 0;
        }
    }
    td {
        padding: 10px ;
        border: 1px solid #000;
        cursor: pointer;
        &:first-child {
            border-left: 0;
        }
        &:last-child {
            border-right: 0;
        }
    }
`;


export default Table;