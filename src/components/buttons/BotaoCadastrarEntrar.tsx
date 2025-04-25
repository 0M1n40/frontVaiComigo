const BotaoPrincipal = ({ label = "" }) => {
    return (
      <button className="w-full max-w-[660px] h-[45px] bg-[#4EBCB9] rounded-[8px] text-[#EFEFEF] text-[18px] font-poppins font-normal text-center cursor-pointer hover:opacity-90">
        {label}
      </button>
    );
  };
  
  export default BotaoPrincipal;
  