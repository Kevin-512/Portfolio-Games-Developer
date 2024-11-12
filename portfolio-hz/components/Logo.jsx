import Link from "next/link";

const Logo = ({ light = false }) => {
  const colorClass = light ? "text-white" : "text-primary";
  return (
    <Link href="/" className="font-primary font-bold text-2xl tracking-[4px]">
      <span className={colorClass}>Hualiang Zhao</span>
    </Link>
  );
};

export default Logo;
