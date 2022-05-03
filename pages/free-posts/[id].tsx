import dynamic from 'next/dynamic';

const TuiViewer = dynamic(() => import('@domains/TuiViewer'), { ssr: false });

export default function PostWithTuiViewer() {
  return (
    <>
      <TuiViewer />
    </>
  );
}
