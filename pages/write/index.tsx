import dynamic from 'next/dynamic';

const TuiEditor = dynamic(() => import('@domains/TuiEditor'), { ssr: false });

export default function PostWithTuiEditor() {
  return (
    <>
      <TuiEditor />
    </>
  );
}
