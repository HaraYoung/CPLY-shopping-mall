import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../../slices/SY/CartSlice";

const Test = memo(() => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.CartSlice);
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);
  return loading ? (
    "loading..."
  ) : error ? (
    JSON.stringify(error)
  ) : (
    <>{JSON.stringify(data)}</>
  );
});
export default Test;
