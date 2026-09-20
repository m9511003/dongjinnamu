interface LinkCardProps {
  title: string;
  url: string;
  clicks: number;
  onLinkClick: () => void;
}

export default function LinkCard({ title, url, clicks, onLinkClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onLinkClick}
      className="flex items-center justify-between rounded-2xl border border-black/5 bg-white/80 px-5 py-4 text-sm font-medium text-[#4a3a2f] shadow-sm backdrop-blur-sm transition-shadow duration-200 hover:shadow-md"
    >
      <span>{title}</span>
      <span className="text-xs text-[#a99686]">{clicks}회 클릭</span>
    </a>
  );
}
