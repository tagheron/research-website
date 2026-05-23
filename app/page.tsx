export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#37352f]">
      <div className="mx-auto max-w-4xl px-6 py-14 md:px-10">
        {/* HERO */}
        <section className="mb-12">
          {/* Mobile */}
          <div className="md:hidden">
            <div className="flex items-center justify-center gap-4">
              <img
                src="/theo-headshot.jpg"
                alt="Theo Heron headshot"
                className="h-20 w-20 rounded-full object-cover grayscale"
              />

              <h1 className="text-[2rem] font-semibold tracking-tight">
                Theo Heron
              </h1>
            </div>

            <div className="mt-7 text-center">
              <p className="mx-auto max-w-sm text-lg leading-8">
                Incoming M.S. Chemical Engineering Student, Columbia University
              </p>

              <p className="mx-auto mt-3 max-w-sm text-base leading-8">
                Battery Materials · Solid Electrolytes · X-ray Scattering ·
                Electrochemical Energy Storage
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                <a
                  className="underline underline-offset-4 hover:opacity-70"
                  href="mailto:th3251@columbia.edu"
                >
                  Email
                </a>
                <a
                  className="underline underline-offset-4 hover:opacity-70"
                  href="/cv.pdf"
                >
                  CV
                </a>
                <a
                  className="underline underline-offset-4 hover:opacity-70"
                  href="https://www.linkedin.com/in/theo-heron/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="underline underline-offset-4 hover:opacity-70"
                  href="https://github.com/tagheron"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
</div>

          {/* Desktop */}
          <div className="hidden md:flex md:items-start md:gap-8">
            <img
              src="/theo-headshot.jpg"
              alt="Theo Heron headshot"
              className="h-32 w-32 rounded-full object-cover grayscale"
            />

            <div className="min-w-0">
              <h1 className="text-4xl font-semibold tracking-tight">
                Theo Heron
              </h1>

              <p className="mt-4 text-lg leading-7">
                Incoming M.S. Chemical Engineering Student, Columbia University
              </p>

              <p className="mt-2 text-base leading-7">
                Battery Materials · Solid Electrolytes · X-ray Scattering ·
                Electrochemical Energy Storage
              </p>

              <div className="mt-5 flex flex-wrap gap-4 text-sm">
                <a
                  className="underline underline-offset-4 hover:opacity-70"
                  href="mailto:th3251@columbia.edu"
                >
                  Email
                </a>
                <a
                  className="underline underline-offset-4 hover:opacity-70"
                  href="/cv.pdf"
                >
                  CV
                </a>
                <a
                  className="underline underline-offset-4 hover:opacity-70"
                  href="https://www.linkedin.com/in/theo-heron/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="underline underline-offset-4 hover:opacity-70"
                  href="https://github.com/tagheron"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-4 leading-8 md:leading-7">
            I am an incoming M.S. student in Chemical Engineering at Columbia University interested in
            battery materials, solid electrolytes, and electrochemical energy storage. My research
            background includes X-ray scattering studies of sodium closo-borate solid electrolytes, with
            a focus on structure, ion dynamics, and pressure-dependent behavior.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">Research</h2>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="text-lg font-medium">
                Pressure-Dependent Diffraction of Solid Electrolytes
              </h3>
              <p className="mt-2 leading-8 md:leading-7">
                I study pressure-dependent powder diffraction data from sodium-based solid
                electrolytes to understand how lattice structure, distortion, and phase behavior may
                relate to ion transport.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium">X-ray Scattering and Ion Dynamics</h3>

              <figure className="mx-auto my-4 w-full max-w-xs md:float-right md:ml-6 md:mb-4 md:mt-1 md:w-56">
                <img
                  src="/xpcs-diagram.png"
                  alt="XPCS experimental schematic"
                  className="w-full rounded-md"
                />
                <figcaption className="mb-2 text-center text-xs font-medium text-[#6f6a63]">
                  XPCS schematic
                </figcaption>
              </figure>

              <p className="mt-2 leading-8 md:leading-7">
                My undergraduate research in the Shpyrko Group at UC San Diego involved synchrotron
                X-ray scattering methods, including XPCS, to study dynamic behavior in solid electrolyte
                materials.
              </p>

              <div className="clear-both" />
            </div>

            <div>
              <h3 className="text-lg font-medium">Battery Materials Interests</h3>
              <p className="mt-2 leading-8 md:leading-7">
                I am broadly interested in solid-state batteries, dry-process electrode fabrication,
                battery degradation mechanisms, and novel electrolytes for next-generation energy
                storage.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold">Research Interests</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 md:leading-7">
            <li>Solid-state batteries and fast-ion conductors</li>
            <li>Dry-process electrode fabrication</li>
            <li>Battery degradation mechanisms</li>
            <li>X-ray scattering and diffraction methods</li>
            <li>Electrolyte materials for next-generation energy storage</li>
          </ul>
        </section>

        <section className="mb-0">
          <h2 className="text-2xl font-semibold">To What End?</h2>
          <p className="mt-4 leading-8 md:leading-7">
            My long-term goal is to understand and improve battery materials for safer, faster-charging,
            and more durable energy storage systems.
          </p>
        </section>
      </div>
    </main>
  );
}