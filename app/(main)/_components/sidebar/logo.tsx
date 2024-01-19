import Image from 'next/image';

export const Logo = () => {
  // src มาจาก public
  return <Image height={130} width={130} alt="logo" src="/logo.svg" />;
};
