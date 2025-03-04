import NavBtn from "/src/assets/buttons/nav-btn"

const Navbar = () => {

  return (

  <div className="top-navigation-bar glass-box fixed flex justify-between items-center top-6 inset-x-6 h-[58px] !rounded-full">

  <div className="nav-buttons absolute flex flex-row gap-2 justify-center items-center h-full transform -translate-x-1/2 left-1/2">

    <div className="flex w-fit gap-2">
    <NavBtn path="/" icon="src/assets/images/icons/browse games.png" label="Browse Games" />
    <NavBtn path="/" icon="src/assets/images/icons/store.png" label="Store"/>
    <NavBtn path="/" icon="src/assets/images/icons/faq.png" label="FAQ"/>
    </div>

  </div>

  <a href="/" className="hover:opacity-80 transition-all duration-100 ease-linear !ml-9">
    <img src="src/assets/images/icons/frostchanger.svg" alt="logo" className=" h-[23px]" />
  </a>

  <div className="pfp-nav cursor-pointer hover:opacity-80 transition-all duration-100 ease-linear !mr-[7px]">
    <img src="src/assets/images/pfp.png" alt="pfp" className="w-[45px] h-[45px] rounded-full" />
  </div>

  </div>
  )

}

export default Navbar;