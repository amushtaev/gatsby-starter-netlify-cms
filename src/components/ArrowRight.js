import React from "react";
import {Arrow} from "./pricing/styledComponents";

const ArrowRight = (props) => {
  const { disabled, onClick } = props;
  const disabeld = disabled ? ' arrow--disabled' : '';
  return (
    <Arrow
      left={false}
      onClick={onClick}
      className={`arrow arrow--right${disabeld}`}
      xmlns='http://www.w3.org/2000/svg'
      width='30'
      height='52'
      viewBox='0 0 30 52'
    >
      <path
        d='M1.02994 50.9823C1.35424 51.3049 1.73951 51.5609 2.16366 51.7355C2.58781 51.9101 3.04251 52 3.50173 52C3.96095 52 4.41566 51.9101 4.83981 51.7355C5.26396 51.5609 5.64922 51.3049 5.97352 50.9823L29.1832 27.954C29.4421 27.6977 29.6475 27.3931 29.7877 27.0579C29.9279 26.7227 30 26.3633 30 26.0004C30 25.6374 29.9279 25.2781 29.7877 24.9428C29.6475 24.6076 29.4421 24.3031 29.1832 24.0467L5.97352 1.0184C4.60496 -0.339472 2.39851 -0.339472 1.02994 1.0184C-0.338619 2.37626 -0.338619 4.56547 1.02994 5.92334L21.2511 26.0142L1.00201 46.1051C-0.338617 47.4353 -0.338623 49.6522 1.02994 50.9823Z'
        fill='white'
      />
    </Arrow>
  );
};

export default ArrowRight
