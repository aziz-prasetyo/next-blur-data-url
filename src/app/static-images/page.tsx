import StaticImagesBreadcrumb from '@/components/breadcrumbs/static-images-breadcrumb';
import LancerEvo from '@/lancer-evo.webp';
import Image from 'next/image';

export default function StaticImagesPage() {
  return (
    <main className='flex min-h-screen flex-col items-center gap-12 p-24'>
      <div className='place-self-start'>
        <StaticImagesBreadcrumb />
      </div>

      <h1 className='text-4xl font-bold'>Static Images Demo</h1>

      <section className='container grid place-items-center'>
        <div className='w-[400px] overflow-hidden rounded-2xl'>
          <Image
            src={LancerEvo}
            alt='Static Images Demo'
            width={3840}
            height={2160}
            sizes='400px'
            placeholder='blur'
            priority
          />
        </div>
      </section>
    </main>
  );
}
