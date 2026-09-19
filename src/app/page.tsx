import Profile from "@/Components/Profile";
import LinkList from "@/Components/LinkList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-neutral-50 px-4 py-12 dark:bg-neutral-950 sm:py-16">
      <div className="flex w-full max-w-sm flex-col items-center gap-8">
        <Profile
          name="동진나무"
          bio="내 모든 링크를 한 곳에 모아 공유해요."
          initials="동"
        />
        <LinkList />
      </div>
    </main>
  );
}
