const Footer = () => {
    const date = new Date()
      .getFullYear()
      .toString();
  return (
    <footer className=" sticky bottom-0 mt-20 align-middle border-t-2 border-pink-500 drop-shadow-[0_-20px_24px_#fbcfe8] p-5 bg-fuchsia-100 text-center">
      Copyright &copy; <span id="copyright">{date}</span> | All rights reserved
    </footer>
  );
};
export default Footer;
