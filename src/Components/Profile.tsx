interface ProfileProps {
  name: string;
  bio: string;
  initials: string;
}

export default function Profile({ name, bio, initials }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div
        role="img"
        aria-label={`${name} 프로필 사진`}
        className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-orange-200 text-4xl shadow-sm ring-4 ring-white/70"
      >
        <span aria-hidden="true">🐭</span>
        <span className="sr-only">{initials}</span>
      </div>
      <h1 className="text-xl font-bold text-[#4a3a2f]">{name}</h1>
      <p className="max-w-xs text-sm text-[#8a7566]">{bio}</p>
    </div>
  );
}
