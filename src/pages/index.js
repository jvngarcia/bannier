import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bannier - Generate cover for youtube </title>
        <meta name="description" content="Generate covers for youtube videos with AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className='container mx-auto'>
          <form className='py-12'>
            <div className='grid grid-cols-6 gap-6'>
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-medium font-medium text-gray-700">Background</label>
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-3 py-2 px-4 block w-full rounded-md border-gray-300 shadow-sm text-gray-600 focus-visible:outline-none focus:shadow-md focus-visible:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>


              <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium text-gray-700">Type</label>
                <select id="country" name="country" autocomplete="country-name" class="mt-3 py-2 px-4 block w-full rounded-md border-gray-300 shadow-sm text-gray-600 focus-visible:outline-none focus:shadow-md focus-visible:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  <option>Realistic</option>
                  <option>Oil painting</option>
                  <option>Pencil drawing</option>
                  <option>Hyperrealistic</option>
                </select>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}
