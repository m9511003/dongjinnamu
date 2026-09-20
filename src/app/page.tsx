import Profile from "@/Components/Profile";
import LinkList from "@/Components/LinkList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-16 sm:py-24">
      <div className="flex w-full max-w-sm flex-col items-center gap-14">
        <Profile
          name="신개발"
          bio="프로젝트 매니저 · 요즘은 하네스 엔지니어링에 관심이 많아요"
          initials="신"
        />
        <LinkList />
      </div>
    </main>
  );
}
