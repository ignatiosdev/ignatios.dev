"use client"


type Props = { text: string; active?: boolean, onClick : React.MouseEventHandler<HTMLButtonElement> };

function NavbarItems({onClick, text, active }: Props) {
    
  return (
    <button 
    onClick={onClick}
      className={
        "font-bold uppercase py-1 px-2 border-2 rounded-xl " +
        (active ? " border-primary" : "border-transparent")
      }
    >
      {text}
    </button>
  );
}

export default NavbarItems;
