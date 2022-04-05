import dynamic from 'next/dynamic';

const TuiEditor = dynamic(() => import('../../components/TuiEditor'), { ssr: false });

export default function PostWithTuiEditor() {
  return (
    <>
      <TuiEditor />
    </>
  );
}
