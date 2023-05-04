const Footer = () => {
    const date = new Date()
      .getFullYear()
      .toString();
  return (
    <footer className=" sticky bottom-0 mt-60 align-middle border-t-2 border-pink-500 drop-shadow-[0_-20px_24px_#fbcfe8] dark:drop-shadow-[0_-20px_24px_#9f1239] p-5 bg-gradient-to-r from-rose-200 from-10% via-pink-500 via-70% to-rose-200 text-center dark:bg-gradient-to-r from-rose-700 from-10% via-pink-300 via-50% to-rose-700 dark:text-gray-50">
      Copyright &copy; <span id="copyright">{date}</span> | All rights reserved
    </footer>
  );
};
export default Footer;
