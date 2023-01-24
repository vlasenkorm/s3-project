import { useState } from "react";
import { Dot } from "./canvas/dot";

const Node: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <svg>
          <circle
            cx="150"
            cy="75"
            r="70"
            fill="transparent"
            stroke="orange"
            stroke-width="10px"
          />
        </svg>
      </div>
      <div>
        <svg>
          <circle
            cx="150"
            cy="75"
            r="70"
            fill="transparent"
            stroke="orange"
            stroke-width="10px"
          />
        </svg>
        <svg>
          <circle
            cx="150"
            cy="75"
            r="70"
            fill="transparent"
            stroke="orange"
            stroke-width="10px"
          />
        </svg>
      </div>
    </div>
  );
};

export default Node;
