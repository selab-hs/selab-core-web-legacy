import dynamic from 'next/dynamic';

const TuiViewer = dynamic(() => import('../../components/TuiViewer'), { ssr: false });

export default function PostWithTuiViewer() {
  return (
    <>
      <TuiViewer />
    </>
  );
}
