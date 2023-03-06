import React from 'react';
import withSVGIconColor from 'hoc/withSVGIconColor';
import { IconConfigProps } from 'types/common';

const SmartCollectionIcon: React.FC<IconConfigProps> = withSVGIconColor(
  ({ statusColor, ...props }) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M6.44232 11.3333H9.55761M7.99996 2V2.66667M12.2426 3.75736L11.7712 4.22876M14 7.99997H13.3333M2.66667 7.99996H2M4.22873 4.22876L3.75732 3.75736M5.64294 10.357C4.34119 9.05529 4.34119 6.94474 5.64294 5.64299C6.94469 4.34125 9.05524 4.34125 10.357 5.64299C11.6587 6.94474 11.6587 9.05529 10.357 10.357L9.99226 10.7218C9.57033 11.1437 9.3333 11.7159 9.3333 12.3126V12.6667C9.3333 13.403 8.73634 14 7.99996 14C7.26359 14 6.66663 13.403 6.66663 12.6667V12.3126C6.66663 11.7159 6.4296 11.1437 6.00767 10.7218L5.64294 10.357Z"
          stroke={statusColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export { SmartCollectionIcon };
