const Mail = () => {
  return (
    <div className="flex md-mx:hidden text-textColor items-center gap-10 fixed bottom-40 -right-44 rotate-90 ">
      <a
        href="mailto:tamdao1742005@gmail.com"
        data-aos="fade-down-right"
        data-aos-duration="800"
        className="font-mono text-lg tracking-widest hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out"
      >
        tamdao1742005@gmail.com
      </a>
      <hr className="border-[2px] w-40 rounded-full bg-textColor border-textColor" />
    </div>
  );
};
export default Mail;
