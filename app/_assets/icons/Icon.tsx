type Props = {
  width?: string;
  height?: string;
  color?: string;
};
export const ArrowRight = ({
  width = "12",
  height = "12",
  color = "var(--color-on-primary)",
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.09519 6.18746H0V5.06249H9.09519L4.82307 0.790366L5.62497 0L11.2499 5.62497L5.62497 11.2499L4.82307 10.4596L9.09519 6.18746Z"
        fill={color}
      />
    </svg>
  );
};
export const BurgerIcon = ({
  width = "22",
  height = "15",
  color = "var(--color-on-surface-light)",
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 14.0865V12.2115H21.2499V14.0865H0V14.0865M0 7.98071V6.10576H21.2499V7.98071H0V7.98071M0 1.87495V0H21.2499V1.87495H0V1.87495"
        fill={color}
      />
    </svg>
  );
};
export const CloseIcon = ({
  width = "24",
  height = "24",
  color = "#DAE2FD",
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.75 25.5L8 23.75L15 16.75L8 9.75L9.75 8L16.75 15L23.75 8L25.5 9.75L18.5 16.75L25.5 23.75L23.75 25.5L16.75 18.5L9.75 25.5Z"
        fill={color}
      />
    </svg>
  );
};
