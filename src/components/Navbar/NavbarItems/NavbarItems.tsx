"use client"


type Props = { text: string; active?: boolean, onClick : React.MouseEventHandler<HTMLButtonElement> };

function NavbarItems({onClick, text, active }: Props) {
    
  return (
    <button 
    onClick={onClick}
      className={
        "xl:text-xl lg:text-md text-xl font-bold uppercase py-1 px-4 " +
        (active ? "border-2 rounded-xl border-primary" : "")
      }
    >
      {text}
    </button>
  );
}

export default NavbarItems;
