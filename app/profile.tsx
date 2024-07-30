import type { Profile } from './types';

interface ProfileProps {
  profile: Profile;
}

export default function Profile(props: ProfileProps) {
  const { profile } = props;
  return (
    <div className="grid grid-cols-3">
      <span>姓名: {profile.name}</span>
      <span className="text-center">电话: {profile.phone}</span>
      <span className="text-right">邮箱: {profile.email}</span>
    </div>
  );
}
