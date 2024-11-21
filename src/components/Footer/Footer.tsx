("");

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="w-full h-28 mt-20 flex justify-center gap-4 p-6 border-t border-t-zinc-700 items-center font-semibold">
      <div className="flex items-center gap-2">
        <img src="/img/logo_transparent.png" className="w-10 h-10" alt="Ignatios.dev Logo - Ignacio Cattalurda" />
        <span>Ignatios.dev</span></div>
      <span className="">Ignacio Cattalurda 2024</span>
    </footer>
  );
}

export default Footer;
