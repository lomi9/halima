

export default function TabButton({ tabButton, isActive, onClick }) {
    return (
      <button
        className={`description__content-right-text-content-buttons-btn ${isActive ? 'active' : ''} flex flex-wrap items-center justify-center text-[#7e755f] bg-[#b8ac8d84] border border-[#a0957a] text-[1.3vw] p-[1vw] rounded-[10px] uppercase cursor-pointer transition duration-100 ease-in hover:bg-[#254127] hover:text-[#FDFEEC] active:scale-95`}
        onClick={onClick}
      >
        {tabButton}
      </button>
    );
  }
  