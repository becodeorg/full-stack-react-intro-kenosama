const Footer = () => {
    const date = new Date()
      .getFullYear()
      .toString();
  return (
    <footer className="footer">
      Copyright &copy; <span id="copyright">{date}</span> | All rights reserved
    </footer>
  );
};
export default Footer;
