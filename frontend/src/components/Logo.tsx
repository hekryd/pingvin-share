const Logo = ({ src, height, width }: { src: string, height: number; width: number }) => {
  return <img src={src} alt="logo" height={height} width={width} />;
};
export default Logo;
