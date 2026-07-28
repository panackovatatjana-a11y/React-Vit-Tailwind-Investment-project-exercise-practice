import investmentLogo from '../assets/investmentLogo.png';

export const Header = () => {
  return (
    <header id="header">
      <img src={investmentLogo} alt="Logo" />
      <h1>Meet your Financial InvestMate</h1>
    </header>
  );
};
