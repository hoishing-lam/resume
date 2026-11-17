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
    <div className="flex flex-col gap-1 md:flex-row md:justify-between md:items-center print:flex-row print:justify-between print:items-center">
      {items.map(item => (
        <span key={item.key}>
          {item.label}: {item.value}
        </span>
      ))}
    </div>
  );
}
