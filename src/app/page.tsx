import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-12 p-24'>
      <section className='container grid place-items-center'>
        <h1 className='text-4xl font-bold'>Next Image & blurDataUrl</h1>
      </section>

      <section className='container grid place-items-center'>
        <div className='grid flex-col gap-4'>
          <Button
            href='static-images'
            as={Link}
            color='primary'
            variant='shadow'
          >
            Static Images
          </Button>
          <Button
            href='dynamic-images'
            as={Link}
            color='primary'
            variant='shadow'
          >
            Dynamic Images
          </Button>
        </div>
      </section>
    </main>
  );
}
