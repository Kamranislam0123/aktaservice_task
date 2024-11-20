export default function Ingredients() {
  const ingredients = [
    {
      name: "Rosmarinus Officinalis Leaf Extract",
      description:
        "Cleanses your lash line, removing impurities to unlock the potential of your lashes.",
    },
    {
      name: "Panax Ginseng",
      description:
        "Enhanced circulation, nourishing your lashes for a fuller, more vibrant appearance.",
    },
    {
      name: "Magnolia Officinalis Bark Extract",
      description:
        "Provides essential nutrients, transforming lashes from dormancy to active growth for noticeably longer, fuller results.",
    },
    {
      name: "Biotin",
      description:
        "Strengthens lash fibers, preventing breakage while accelerating growth. This vital nutrient ensures your lashes not only look longer but also remain robust and healthy.",
    },
  ];

  return (
    <section className="bg-pink-50 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mx-auto mb-4">
            Scientifically Proven,
            <br />
            Dermatologically Tested & Safe
          </h2>
          <p className="text-sm sm:text-base text-black max-w-3xl mx-auto">
            Formulated by dermatologists, this Eyelash Enhancing Serum is a
            powerful serum that targets brittle, short, and sparse lashes
            through its proprietary blend of vitamins, extracts, and peptides
            with just one daily swipe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Video Section */}
          <div className="relative aspect-square bg-pink-200 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-300/50 to-pink-100/50" />
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster=""
            >
              <source
                src="/1aba6e79c81945f1a5208fe98440390b.HD-1080p-2.5Mbps-29328729.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Ingredients List */}
          <div className="space-y-8">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-bold text-2xl">{ingredient.name}</h3>
                <p className="text-black leading-relaxed">
                  {ingredient.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
