interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium text-emerald-300 bg-emerald-400/10 rounded-full mr-2 mb-2">
      {children}
    </span>
  )
} 