import Resume from './resume';
import { resume } from './data';

export default function App() {
  return (
    <main className="box-border p-[24px] bg-[#000]">
      <Resume resume={resume} />
    </main>
  );
}
