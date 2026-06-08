export default function Container({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1180px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 ${className}`}
    >
      {children}
    </Tag>
  );
}
