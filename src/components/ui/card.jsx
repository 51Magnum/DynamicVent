export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-xl border border-gray-200 shadow-sm bg-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
