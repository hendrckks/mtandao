import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

export const ThumbsUpOutlineRounded: React.FC<SVGProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      transform="scale(1,-1) translate(0,-24)"
      d="M2.115 13.27q-.69 0-1.153-.463Q.5 12.344.5 11.654V5.769q0-.184.077-.354q.077-.169.22-.311l3.4-3.4q.147-.148.316-.213q.17-.064.33-.064q.419 0 .71.308q.293.307.207.794l-.575 2.74h4.93q.598 0 .992.394q.393.393.393.99v.366q0 .15-.025.269t-.075.243l-2.212 5.107q-.136.29-.38.461q-.243.17-.558.17H2.115Zm6.143-1L10.5 7.034v-.15q0-.27-.173-.443t-.442-.173h-5.92l.831-3.738L1.5 5.815v5.839q0 .27.173.442t.442.173h6.143Zm5.627 6.46q-.598 0-.992-.392q-.393-.394-.393-.992v-.365q0-.15.025-.269t.075-.243l2.212-5.107q.142-.29.382-.461q.24-.17.556-.17h6.135q.69 0 1.152.462q.463.463.463 1.153v5.885q0 .184-.074.35q-.074.167-.222.315l-3.4 3.4q-.148.148-.317.213q-.17.064-.33.064q-.419 0-.71-.308q-.293-.307-.207-.794l.575-2.74h-4.93Zm1.857-7L13.5 16.966v.15q0 .27.173.443t.442.173h5.92l-.831 3.738l3.296-3.284v-5.839q0-.27-.173-.442t-.442-.173h-6.143ZM1.5 11.655v-5.84v6.454v-.615Zm21 .692v5.839v-6.454v.615Z"
    />
  </svg>
);
