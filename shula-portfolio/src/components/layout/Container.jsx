export default function Container({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1180px] px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 ${className}`}
    >
      {children}
    </Tag>
  );
}
