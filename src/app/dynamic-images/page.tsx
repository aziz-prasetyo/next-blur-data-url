import DynamicImagesBreadcrumb from '@/components/breadcrumbs/dynamic-images-breadcrumb';
import getBase64 from '@/lib/getLocalBase64';
import Image from 'next/image';

export default async function DynamicImagesPage() {
  const imageBlurDataUrl = await getBase64(
    'https://img.gta5-mods.com/q95/images/mitsubishi-lancer-evo-x-star-wars-livery-8k-6k-4k/4d13b3-RF1.jpg'
  );
  return (
    <main className='flex min-h-screen flex-col items-center gap-12 p-24'>
      <div className='place-self-start'>
        <DynamicImagesBreadcrumb />
      </div>

      <h1 className='text-4xl font-bold'>Dynamic Images Demo</h1>

      <section className='container grid place-items-center'>
        <div className='w-[400px] overflow-hidden rounded-2xl'>
          <Image
            src='https://img.gta5-mods.com/q95/images/mitsubishi-lancer-evo-x-star-wars-livery-8k-6k-4k/4d13b3-RF1.jpg'
            alt='Dynamic Images Demo'
            width={3840}
            height={2160}
            sizes='400px'
            placeholder='blur'
            blurDataURL={imageBlurDataUrl}
            priority
          />
        </div>
      </section>
    </main>
  );
}
