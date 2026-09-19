interface ProfileProps {
  name: string;
  bio: string;
  initials: string;
}

export default function Profile({ name, bio, initials }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 text-3xl font-bold text-white shadow-md">
        {initials}
      </div>
      <h1 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
        {name}
      </h1>
      <p className="max-w-xs text-sm text-neutral-500 dark:text-neutral-400">
        {bio}
      </p>
    </div>
  );
}
