import { useEffect } from "react";

const Banner = () => {

    return (
        <section className="bg-white">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Mejores ofertas</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Tu despensa al costo.</p>
                    {/* <a href="#" className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue border border-orange-500 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-gray-100 ">
                        Ver catalogo
                    </a> */}
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="https://minimayorista.s3.amazonaws.com/972e56ba_fb5c_480e_9a9f_90fba0e438b3_ea20995d0d.jpg" alt="mockup" />
                </div>
            </div>
        </section>
    )
}

export default Banner;