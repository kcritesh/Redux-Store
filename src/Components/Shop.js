import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

export const Shop = () => {
  const dispatch = useDispatch(actionCreators);

  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const balance = useSelector((state) => state.amount);

  return (
    <div>
      <div className="cartItem">
        <h2>Deposit Withdraw</h2>
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(actionCreators.withdrawMoney(200));
          }}
        >
          -
        </button>
        Update Balance :{balance}
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(actionCreators.depositMoney(200));
          }}
        >
          +
        </button>
        {/* Below is with bind action creators */}
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            withdrawMoney(200);
          }}
        >
          -
        </button>
        Update Balance :{balance}
        <button
          className="btn btn-primary"
          onClick={() => {
            depositMoney(200);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
