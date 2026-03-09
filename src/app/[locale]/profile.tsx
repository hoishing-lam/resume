import { useTranslations } from 'next-intl';
import type { Profile } from './types';

interface ProfileProps {
  profile: Profile;
}

export default function Profile(props: ProfileProps) {
  const { profile } = props;
  const t = useTranslations('base');

  const items = [
    {
      key: 'phone',
      label: t('phone'),
      value: profile.phone
    },
    {
      key: 'email',
      label: t('email'),
      value: profile.email
    },
    {
      key: 'language',
      label: t('language'),
      value: profile.languages?.join('、')
    }
  ];

  return (
    <div className="flex justify-between items-center">
      {items.map(item => (
        <span key={item.key}>
          {item.label}: {item.value}
        </span>
      ))}
    </div>
  );
}
