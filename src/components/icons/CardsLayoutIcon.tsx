import React from 'react';
import withSVGIconColor from 'hoc/withSVGIconColor';
import { IconConfigProps } from 'types/common';

const CardsLayoutIcon: React.FC<IconConfigProps> = withSVGIconColor(({ statusColor, ...props }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.9999 2.40039C3.11625 2.40039 2.3999 3.11674 2.3999 4.00039V5.60039C2.3999 6.48405 3.11625 7.20039 3.9999 7.20039H5.5999C6.48356 7.20039 7.1999 6.48405 7.1999 5.60039V4.00039C7.1999 3.11674 6.48356 2.40039 5.5999 2.40039H3.9999Z"
        fill={statusColor}
      />
      <path
        d="M3.9999 8.80039C3.11625 8.80039 2.3999 9.51674 2.3999 10.4004V12.0004C2.3999 12.884 3.11625 13.6004 3.9999 13.6004H5.5999C6.48356 13.6004 7.1999 12.884 7.1999 12.0004V10.4004C7.1999 9.51674 6.48356 8.80039 5.5999 8.80039H3.9999Z"
        fill={statusColor}
      />
      <path
        d="M8.7999 4.00039C8.7999 3.11674 9.51625 2.40039 10.3999 2.40039H11.9999C12.8836 2.40039 13.5999 3.11674 13.5999 4.00039V5.60039C13.5999 6.48405 12.8836 7.20039 11.9999 7.20039H10.3999C9.51625 7.20039 8.7999 6.48405 8.7999 5.60039V4.00039Z"
        fill={statusColor}
      />
      <path
        d="M8.7999 10.4004C8.7999 9.51674 9.51625 8.80039 10.3999 8.80039H11.9999C12.8836 8.80039 13.5999 9.51674 13.5999 10.4004V12.0004C13.5999 12.884 12.8836 13.6004 11.9999 13.6004H10.3999C9.51625 13.6004 8.7999 12.884 8.7999 12.0004V10.4004Z"
        fill={statusColor}
      />
    </svg>
  );
});

export { CardsLayoutIcon };
