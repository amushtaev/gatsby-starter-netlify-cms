import React from "react";
import {Arrow} from "./pricing/styledComponents";

const ArrowLeft = (props) => {
  const { disabled, onClick } = props;
  const disabeld = disabled ? ' arrow--disabled' : '';
  return (
    <Arrow
      left
      onClick={onClick}
      className={`arrow arrow--left${disabeld}`}
      xmlns='http://www.w3.org/2000/svg'
      width='30'
      height='52'
      viewBox='0 0 30 52'
    >
      <path
        d='M28.9701 1.01766C28.6458 0.695079 28.2605 0.439143 27.8363 0.264515C27.4122 0.0898877 26.9575 0 26.4983 0C26.0391 0 25.5843 0.0898877 25.1602 0.264515C24.736 0.439143 24.3508 0.695079 24.0265 1.01766L0.816792 24.046C0.557872 24.3023 0.352455 24.6069 0.212299 24.9421C0.0721433 25.2773 0 25.6367 0 25.9996C0 26.3626 0.0721433 26.7219 0.212299 27.0572C0.352455 27.3924 0.557872 27.6969 0.816792 27.9533L24.0265 50.9816C25.395 52.3395 27.6015 52.3395 28.9701 50.9816C30.3386 49.6237 30.3386 47.4345 28.9701 46.0767L8.74886 25.9858L28.998 5.8949C30.3386 4.56474 30.3386 2.34782 28.9701 1.01766Z'
        fill='white'
      />
    </Arrow>
  );
}

export default ArrowLeft
