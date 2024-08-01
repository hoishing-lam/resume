import Resume from './resume';
import { resume } from './data';

export default function App() {
  return (
    <main className="box-border md:p-[24px] md:bg-[#000]">
      <Resume resume={resume} />
    </main>
  );
}
