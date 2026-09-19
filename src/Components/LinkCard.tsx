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
      className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
    >
      <span>{title}</span>
      <span className="text-xs text-neutral-400">{clicks}회 클릭</span>
    </a>
  );
}
