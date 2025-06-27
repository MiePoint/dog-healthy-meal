import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Features Section */}
      <section
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          maxWidth: "1440px",
          minWidth: "320px",
          minHeight: "400px",
          paddingTop: "clamp(40px, 8vw, 60px)",
          paddingBottom: "clamp(40px, 8vw, 60px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(24px, 5vw, 48px)",
        }}
      >
        {/* Top Heading */}
        <div className="text-center w-full max-w-lg">
          <h2
            className="text-gray-900 mx-auto"
            style={{
              fontFamily: "Inter Tight",
              fontWeight: 600,
              fontSize: "clamp(28px, 5vw, 40px)",
              lineHeight: "120%",
              letterSpacing: "0.25px",
              textAlign: "center",
            }}
          >
            What makes us different
            <br />
            makes them stronger
          </h2>
        </div>

        {/* Main Layout Container */}
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-center">
            {/* Left Features */}
            <div className="flex flex-col gap-8 lg:gap-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Image src="/icons/food.png" alt="Pet bowl icon" width={48} height={48} className="w-full h-full" />
                </div>
                <div>
                  <h3
                    className="text-gray-900 mb-2"
                    style={{
                      fontFamily: "Inter Tight",
                      fontWeight: 600,
                      fontSize: "clamp(16px, 3vw, 19px)",
                      lineHeight: "150%",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Real Food
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Inter Tight",
                      fontWeight: 400,
                      fontSize: "clamp(14px, 2.5vw, 16px)",
                      lineHeight: "150%",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Wholesome recipes for dogs with real meat and veggies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/icons/pet-bowl.png"
                    alt="Premium ingredients icon"
                    width={48}
                    height={48}
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h3
                    className="text-gray-900 mb-2"
                    style={{
                      fontFamily: "Inter Tight",
                      fontWeight: 600,
                      fontSize: "clamp(16px, 3vw, 19px)",
                      lineHeight: "150%",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Premium Ingredient
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Inter Tight",
                      fontWeight: 400,
                      fontSize: "clamp(14px, 2.5vw, 16px)",
                      lineHeight: "150%",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Elevating pet care with unmatched safety and quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex justify-center items-center order-first lg:order-none">
              <div
                className="relative rounded-full overflow-hidden border-4 border-gray-200"
                style={{
                  width: "clamp(250px, 50vw, 370px)",
                  height: "clamp(250px, 50vw, 370px)",
                }}
              >
                <Image
                  src="/images/food-comparison.png"
                  alt="Raw meat and vegetables vs dog kibble comparison"
                  width={370}
                  height={370}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Features */}
            <div className="flex flex-col gap-8 lg:gap-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/icons/pet-food.png"
                    alt="Pet food bag icon"
                    width={48}
                    height={48}
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h3
                    className="text-gray-900 mb-2"
                    style={{
                      fontFamily: "Inter Tight",
                      fontWeight: 600,
                      fontSize: "clamp(16px, 3vw, 19px)",
                      lineHeight: "150%",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Made Fresh
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Inter Tight",
                      fontWeight: 400,
                      fontSize: "clamp(14px, 2.5vw, 16px)",
                      lineHeight: "150%",
                      letterSpacing: "0.5px",
                    }}
                  >
                    We prioritize maintaining the integrity of whole foods and nutrition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/icons/vet.png"
                    alt="Veterinary developed icon"
                    width={48}
                    height={48}
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h3
                    className="text-gray-900 mb-2"
                    style={{
                      fontFamily: "Inter Tight",
                      fontWeight: 600,
                      fontSize: "clamp(16px, 3vw, 19px)",
                      lineHeight: "150%",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Vet Developed
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{
                      fontFamily: "Inter Tight",
                      fontWeight: 400,
                      fontSize: "clamp(14px, 2.5vw, 16px)",
                      lineHeight: "150%",
                      letterSpacing: "0.5px",
                    }}
                  >
                    We raise the bar for dog nutrition, surpassing industry expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 w-full max-w-2xl">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-lg mb-6 w-full sm:w-auto">
            {"Get your dog's healthy meal today!"}
          </Button>

          <div className="flex items-center justify-center gap-4 text-sm text-gray-600 flex-wrap">
            <span className="flex items-center gap-2">
              <Image
                src="/icons/shield-check.png"
                alt="Security guarantee"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              30-day money back guarantee
            </span>
            <div className="flex gap-2">
              <Image src="/payment/paypal.png" alt="PayPal" width={30} height={20} className="h-5 w-auto" />
              <Image src="/payment/visa.png" alt="Visa" width={30} height={20} className="h-5 w-auto" />
              <Image src="/payment/mastercard.png" alt="Mastercard" width={30} height={20} className="h-5 w-auto" />
              <Image src="/payment/apple-pay.png" alt="Apple Pay" width={30} height={20} className="h-5 w-auto" />
              <Image src="/payment/google-pay.png" alt="Google Pay" width={30} height={20} className="h-5 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Foundation Section */}
      <section
        className="bg-gray-50 px-4 sm:px-6 lg:px-8"
        style={{
          minHeight: "500px",
          paddingTop: "clamp(40px, 8vw, 80px)",
          paddingBottom: "clamp(40px, 8vw, 80px)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content Container */}
            <div className="space-y-6 lg:space-y-8">
              {/* Main Heading */}
              <h2
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 600,
                  fontSize: "clamp(28px, 5vw, 40px)",
                  lineHeight: "120%",
                  letterSpacing: "0.25px",
                  color: "#161723",
                }}
              >
                Nutrition is the foundation for longer, healthier lives in dogs.
              </h2>

              {/* Sub Text */}
              <p
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 2.5vw, 16px)",
                  lineHeight: "150%",
                  letterSpacing: "0.5px",
                  color: "#424153",
                }}
              >
                Invest in your dog's future with our scientifically formulated superfood-powered supplements. Give them
                the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer,
                healthier life.
              </p>

              {/* Key Points Container */}
              <div className="space-y-4">
                {/* Key Points Heading */}
                <h3
                  style={{
                    fontFamily: "Inter Tight",
                    fontWeight: 600,
                    fontSize: "clamp(16px, 3vw, 19px)",
                    lineHeight: "150%",
                    letterSpacing: "0.5px",
                    color: "#161723",
                  }}
                >
                  Key Points:
                </h3>

                {/* Percentage Items */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span
                      style={{
                        fontFamily: "Inter Tight",
                        fontWeight: 700,
                        fontSize: "clamp(24px, 4vw, 33px)",
                        lineHeight: "150%",
                        letterSpacing: "0.25px",
                        color: "#F97316",
                        minWidth: "60px",
                      }}
                    >
                      97%
                    </span>
                    <p
                      style={{
                        fontFamily: "Inter Tight",
                        fontWeight: 400,
                        fontSize: "clamp(14px, 2.5vw, 16px)",
                        lineHeight: "150%",
                        letterSpacing: "0.5px",
                        color: "#424153",
                      }}
                    >
                      Dogs choose our dog food over leading brands because of its real functional ingredients and
                      delicious flavor.
                    </p>
                  </div>

                  <div
                    style={{
                      width: "538px",
                      borderWidth: "1px",
                      border: "1px solid #E3E3E8",
                      margin: "16px 0",
                    }}
                  ></div>

                  <div className="flex items-start gap-4">
                    <span
                      style={{
                        fontFamily: "Inter Tight",
                        fontWeight: 700,
                        fontSize: "clamp(24px, 4vw, 33px)",
                        lineHeight: "150%",
                        letterSpacing: "0.25px",
                        color: "#F97316",
                        minWidth: "60px",
                      }}
                    >
                      84%
                    </span>
                    <p
                      style={{
                        fontFamily: "Inter Tight",
                        fontWeight: 400,
                        fontSize: "clamp(14px, 2.5vw, 16px)",
                        lineHeight: "150%",
                        letterSpacing: "0.5px",
                        color: "#424153",
                      }}
                    >
                      Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.
                    </p>
                  </div>

                  <div
                    style={{
                      width: "538px",
                      borderWidth: "1px",
                      border: "1px solid #E3E3E8",
                      margin: "16px 0",
                    }}
                  ></div>

                  <div className="flex items-start gap-4">
                    <span
                      style={{
                        fontFamily: "Inter Tight",
                        fontWeight: 700,
                        fontSize: "clamp(24px, 4vw, 33px)",
                        lineHeight: "150%",
                        letterSpacing: "0.25px",
                        color: "#F97316",
                        minWidth: "60px",
                      }}
                    >
                      92%
                    </span>
                    <p
                      style={{
                        fontFamily: "Inter Tight",
                        fontWeight: 400,
                        fontSize: "clamp(14px, 2.5vw, 16px)",
                        lineHeight: "150%",
                        letterSpacing: "0.5px",
                        color: "#424153",
                      }}
                    >
                      Our dog food's high protein and fat digestibility contribute to ideal stool quality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto px-8 py-3 rounded-md transition-colors"
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 600,
                  fontSize: "clamp(14px, 2.5vw, 16px)",
                  lineHeight: "150%",
                  letterSpacing: "0.5px",
                }}
              >
                Give your furry friend the gift of wholesome nutrition
              </button>
            </div>

            {/* Image Container */}
            <div className="order-first lg:order-last">
              <Image
                src="/images/happy-dog-product.png"
                alt="Happy dog with Happy Dog Bites organic product package"
                width={570}
                height={570}
                className="w-full h-auto rounded-lg object-cover"
                style={{
                  maxWidth: "570px",
                  aspectRatio: "1/1",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Combined Prebiotics and Gastrointestinal Health Section */}
      <section
        className="px-4 sm:px-6 lg:px-8"
        style={{
          minHeight: "800px",
          paddingTop: "clamp(40px, 8vw, 80px)",
          paddingBottom: "clamp(40px, 8vw, 80px)",
        }}
      >
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-20">
          {/* First Frame - Gastrointestinal Health */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Gastrointestinal Image */}
            <div>
              <Image
                src="https://res.cloudinary.com/dbbmsqzrz/image/upload/v1751045341/9a4409f684a5519dabc916a48f3dd3616198aa78_1_bgni7z.gif"
                alt="Two dogs eating from bowls with Happy Dog Bites product package"
                width={570}
                height={480}
                className="w-full h-auto rounded-lg object-cover"
                style={{
                  maxWidth: "570px",
                  aspectRatio: "570/480",
                }}
              />
            </div>

            {/* Gastrointestinal Content */}
            <div className="space-y-4 lg:space-y-6">
              <h2
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 600,
                  fontSize: "clamp(28px, 5vw, 40px)",
                  lineHeight: "120%",
                  letterSpacing: "0.25px",
                  color: "#111827",
                }}
              >
                Improve overall gastrointestinal health for better nutrient absorption
              </h2>

              <p
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 2.5vw, 16px)",
                  lineHeight: "150%",
                  letterSpacing: "0.5px",
                  color: "#424153",
                }}
              >
                Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough
                formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our
                customers have reported significant improvements in their dogs' health after incorporating our product
                into their diet.
              </p>
            </div>
          </div>

          {/* Second Frame - Prebiotics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Prebiotics Content */}
            <div className="space-y-4 lg:space-y-6 order-last lg:order-first">
              <h2
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 600,
                  fontSize: "clamp(28px, 5vw, 40px)",
                  lineHeight: "120%",
                  letterSpacing: "0.25px",
                  color: "#424153",
                }}
              >
                Prebiotics nourish the beneficial gut bacteria, supporting digestive health
              </h2>

              <p
                style={{
                  fontFamily: "Inter Tight",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 2.5vw, 16px)",
                  lineHeight: "150%",
                  letterSpacing: "0.5px",
                  color: "#424153",
                }}
              >
                Our dog food formula contains carefully selected prebiotics that work in harmony with the gut
                microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria,
                ultimately supporting digestive health.
              </p>
            </div>

            {/* Prebiotics Image */}
            <div className="order-first lg:order-last">
              <Image
                src="/images/kibble-texture.jpeg"
                alt="Close-up texture of premium dog kibble showing quality ingredients"
                width={570}
                height={480}
                className="w-full h-auto rounded-lg object-cover"
                style={{
                  maxWidth: "570px",
                  aspectRatio: "570/480",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
