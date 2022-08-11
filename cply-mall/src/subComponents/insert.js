import React from "react";
import { faXmark as Xmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Insert = (params) => {
  let co = params.co;
  let si = params.si;
  let price = params.v.price;

  return (
    <ul className="amount">
      <li>
        {co} {si}
      </li>
      <li>
        <ul>
          <li>
            <input type="number" defaultValue="1" min="1" max="20" />
          </li>
          <li>
            <h4>
              <b>{price}</b>원
            </h4>
          </li>
        </ul>
      </li>
      <button>취소</button>
    </ul>
  );
};

export default Insert;
