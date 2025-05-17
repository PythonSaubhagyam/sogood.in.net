import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProductListSectionHome from "../components/ProductListSectionHome";
import SecondProductListSection from "../components/SecondProductListSection";
import {
  Container,
  Flex,
  Image,
  Heading,
  Stat,
  StatNumber,
  StatHelpText,
  SimpleGrid,
  Box,
  Link,
  Center,
  useMediaQuery,
  Text,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay,
  useBreakpointValue,
  Card,
  Skeleton,
  Button,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import client from "../setup/axiosClient";
import CheckOrSetUDID from "../utils/checkOrSetUDID";
import { useNavigate, NavLink as RouterLink, Link as ReactRouterLink, } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import MetaHome from "../components/MetaHome";
import ScrollToTop from "../components/ScrollToTop";
import LoginModal from "../components/LoginModal";
import checkLogin from "../utils/checkLogin";
import { initializeAppData } from "../redux/slices/homeApi";
import { useDispatch, useSelector } from "react-redux";
import BlogSliderHome from "../components/BlogSliderHome";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';




export default function Home() {
  const [isFullScreen] = useMediaQuery("(min-width: 768px)");
  const width = useBreakpointValue({ base: "100%", lg: "100%" });
  const height = useBreakpointValue({ base: "200", lg: "400" });
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const loginInfo = checkLogin();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const checkOrSetUDIDInfo = CheckOrSetUDID();
  const [showPopup, setShowPopup] = useState(
    sessionStorage.getItem("hasShownPopup")
  );
  const isMobiles = width <= 768;
  const navigate = useNavigate();
  const [countUp, setCountUp] = useState(false)

  useEffect(() => {
    CheckOrSetUDID();
    if (showPopup === null && !loginInfo.isLoggedIn) {
      setIsLoginModalOpen(true);
    }
  }, []);

  const dispatch = useDispatch();
  const {
    banners,
    upperSection,
    newArrival,
    mustTry,
    bestSeller,
    productSection,
    lowerSection1,
    blogs,
    statisticsSection,
    lowerSection2,
    loading,
    hasFetched,
  } = useSelector((state) => state.home);

  const {
    aboutSection,
    certificateSection,
    ethicalSection,
    arrivalSection
  } = upperSection;

  const {
    upperProductSection,
    muesliSection,
    middleProductSection,
    instantMixSection,
    internationalSection,
  } = productSection;

  const {
    licensesSection,
    nonGmoSection,
  } = lowerSection1;



  const {
    awardsSection,
    servicesSection,
    availableSection,
  } = lowerSection2;

  useEffect(() => {
    if (!hasFetched) {
      dispatch(initializeAppData());
    }
  }, [dispatch, hasFetched]);
  const pageUrl = "/";
  return (
    <>
      <MetaHome pageUrl={pageUrl} />
      {/* <Helmet>
        <title>CO FEE CO - Home</title> 
        <meta
          name="description"
          content="Co Fee Co is committed to bringing you the very best and most 
          refreshing coffee and herbs with minimal impact to the environment."
        />
      </Helmet>  */}
      {/* {loading === true ? (
        <Center h="100vh" w="100vw" backgroundColor={"bg.500"}>
          <Loader site={true} />
        </Center>
      ) : (
        <> */}
      <Navbar />
      <Container maxW={"container.xl"} px={0}>
        <Carousel banners={banners?.length > 0 && banners} />
      </Container>
      {aboutSection?.length > 0 &&
        aboutSection[0]?.is_visible_on_website === true && (
          <Container maxW={"container.xl"} mb={8} px={0}>
            <Text
              as={"h1"}
              fontSize={{ base: "xl", sm: "2xl", xl: "3xl" }}
              fontWeight={700}
              color={"text.300"}
              bgColor={"bg.100"}
              textAlign={{ base: "center", md: "justify" }}
              px={{ base: 2, md: 8 }}
              py={4}
            //my={3}
            >
              {aboutSection[0]?.label}
            </Text>
            <Text
              mt={4}
              color={"text.300"}
              align={{ base: "justify" }}
              px={{ base: 15, lg: 20 }}
              fontSize={{ base: "sm", lg: "lg" }}
              whiteSpace={"pre-line"}
            >
              {aboutSection[0]?.description}
              {/* Bharat is an ancient and advanced culture and civilization that
              has with stood the tests of time. A civilization that has excelled
              in every field, be it Krishi (agriculture), Ayurved ('science of
              life'), Kala (arts), Vigyan (science), Yog as well as the Pursuit
              of Brahman (Supreme Reality). We believe in 'वसुधैवकुटुम्बकम्'
              ('Vasudhaiv Kutumbakam') means Whole World Is Family, and by this
              we want to serve a good health, better living and sustainable
              environment to the whole world.
              <br />
              <br />
              So Good on a mission to change the way people think about food and
              offer you safe, ethical, natural, healthy and enjoyable
              alternatives of your dietary needs . */}
            </Text>

            <Button
              fontWeight={600}
              color={"bg.600"}
              variant={"outline"}
              textDecoration={"none"}
              onClick={() => navigate("/about-us")}
              mx={{ lg: "45%", md: "43%", base: "33%" }}
              border={"1px"}
              borderColor={"bg.600"}
              p={3}
              borderRadius={"8px"}
              _hover={{
                bgColor: "bg.600",
                color: "#fff",
              }}
            >
              Read more
            </Button>
          </Container>
        )}

      {arrivalSection?.length > 0 &&
        arrivalSection[0]?.is_visible_on_website === true && (
          <Container maxW={"container.xl"} mb={5} centerContent>
            <LazyLoadImage
              loading="lazy"
              src={arrivalSection[0]?.image}
              alt={arrivalSection[0]?.label}
              style={{
                opacity: 1,
                transition: "opacity 0.7s", // Note the corrected syntax here
              }}
            />
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
              }}
              gap={6}
              my={6}
              px={15}
            >
              {arrivalSection[0]?.images?.length > 0 &&
                arrivalSection[0]?.images?.map((product) => (
                  <GridItem
                    //key={product.id}
                    onClick={() => navigate(`/products/${product.product}/${product.product_name.replace(/\s+/g, "-")}`)}
                    cursor={"pointer"}
                  >
                    <LazyLoadImage
                      loading="lazy"
                      src={product.image}
                      alt={product?.product_name}
                      style={{
                        opacity: 1,
                        transition: "opacity 0.7s",
                      }}
                    />
                  </GridItem>
                ))}
            </Grid>
          </Container>
        )}
      {certificateSection?.length > 0 &&
        certificateSection[0]?.is_visible_on_website === true && (
          <Container px={0} maxW={"container.xl"} centerContent>
            {certificateSection[0]?.images?.length > 0 ? (
              loading ? (
                <Skeleton h={489} />
              ) : (
                <Carousel banners={certificateSection[0].images} />
              )
            ) : (
              certificateSection[0]?.image && (
                <LazyLoadImage
                  loading="lazy"
                  src={certificateSection[0].image}
                  alt="certificate"
                  style={{
                    opacity: 1,
                    transition: "opacity 0.7s",
                    width: "100%",
                  }}
                />
              )
            )}
          </Container>
        )}

      {ethicalSection?.length > 0 &&
        ethicalSection[0]?.is_visible_on_website === true && (
          <SecondProductListSection
            loading={loading}
            title={ethicalSection[0]?.label}
            products={
              ethicalSection[0]?.images?.length > 0 && ethicalSection[0]?.images
            }
            type={"carousal"}
          />
        )}

      {newArrival?.length > 0 && <ProductListSectionHome
        loading={loading}
        title={"Try Our New Products"}
        products={newArrival}
        type={"carousal"}
      />}
      {upperProductSection?.length > 0 &&
        upperProductSection[0]?.is_visible_on_website === true && (
          <Container maxW={"container.xl"} px={2} borderRadius={"10px"}>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
              }}
            >
              {upperProductSection[0]?.images?.length > 0 &&
                upperProductSection[0]?.images?.map((data) => (
                  <GridItem
                    onClick={() => navigate(`/shop?category=${data?.category}`)}
                    cursor={"pointer"}
                  >
                    <Image src={data.image} alt={data.category_name} loading="lazy" />
                  </GridItem>
                ))}
            </Grid>
          </Container>
        )}
      {muesliSection?.length > 0 &&
        muesliSection[0]?.is_visible_on_website === true && (
          <SecondProductListSection
            loading={loading}
            title={muesliSection[0]?.label}
            products={
              muesliSection[0]?.images?.length > 0 && muesliSection[0]?.images
            }
            type={"carousal"}
          />
        )}

      {middleProductSection?.length > 0 &&
        middleProductSection[0]?.is_visible_on_website === true && (
          <Container maxW={"container.xl"} px={2} borderRadius={"10px"}>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
              }}
            >
              {middleProductSection[0]?.images?.length > 0 &&
                middleProductSection[0]?.images?.map((data) => (
                  <GridItem>
                    <Image src={data.image} alt="Middle image" loading="lazy" />
                  </GridItem>
                ))}
            </Grid>
          </Container>
        )}
      {/* <ProductListSection
        loading={loading}
        title={"Instant Mixes"}
        products={homeData.instant_mix}
      /> */}
      {instantMixSection?.length > 0 &&
        instantMixSection[0]?.is_visible_on_website === true && (
          <Container maxW={"container.xl"} px={2} borderRadius={"10px"}>
            <Text
              as={"h1"}
              fontSize={{ base: "xl", sm: "2xl", xl: "3xl" }}
              bgColor={"bg.500"}
              px={{ base: 2, md: 8 }}
              py={4}
              mb={8}
              textAlign={{ base: "center", md: "start" }}
              fontWeight={500}
            >
              {instantMixSection[0]?.label}
            </Text>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
              }}
            >
              {instantMixSection[0]?.images?.length > 0 &&
                instantMixSection[0]?.images?.map((data) => (
                  <GridItem>
                    <Image
                      w={"100%"}
                      src={data?.image}
                      alt={data.category_name}
                      loading="lazy"
                      onClick={() =>
                        navigate(`/shop?category=${data?.category}`)
                      }
                      cursor={"pointer"}
                    />
                  </GridItem>
                ))}
            </Grid>
          </Container>
        )}
      {internationalSection?.length > 0 &&
        internationalSection[0]?.is_visible_on_website === true && (
          <SecondProductListSection
            loading={loading}
            title={internationalSection[0]?.label}
            products={
              internationalSection[0]?.images?.length > 0 &&
              internationalSection[0]?.images
            }
            type={"carousal"}
          />
        )}
      <ProductListSectionHome
        loading={loading}
        title={"Must Try : SO GOOD Products"}
        products={mustTry}
        type={"carousal"}
      />
      <ProductListSectionHome
        loading={loading}
        title={"All Time Best Sellers"}
        products={bestSeller}
        type={"carousal"}
      />

      <BlogSliderHome blogs={blogs} />

      {statisticsSection?.length > 0 && (
        <Container backgroundColor={"bg.500"} maxW={"container.xl"} py={2}>
          <SimpleGrid
            columns={[2, 3, null, 7]}
            px={6}
            maxW={"container.xl"}
            my={6}
            backgroundColor={"bg.500"}
            align="center"
            spacingX={{ base: "10vw", md: "30px" }}
            spacingY="40px"
          >
            {statisticsSection?.length > 0 &&
              statisticsSection?.map((data) => (
                <Stat>
                  <StatNumber fontSize={{ base: "3xl", md: "3xl" }}>
                    <ScrollTrigger
                      onEnter={() => setCountUp(true)}
                    // onExit={() => setCountUp(false)}
                    >
                      {countUp ? (
                        <CountUp
                          start={0}
                          end={Number(data.value.replace(/[^\d]/g, ''))}
                          duration={2}
                          delay={0}
                        />
                      ) : null}
                      {data?.name === "Positive Feedback" ? "%+" : data?.name === "Generation of Farmers" ? "th" : "+"}


                    </ScrollTrigger>

                  </StatNumber>
                  <StatHelpText color="gray.600">{data?.name}</StatHelpText>
                </Stat>
              ))}
          </SimpleGrid>
        </Container>
      )}
      {awardsSection?.length > 0 &&
        awardsSection[0]?.is_visible_on_website === true && (
          <Container maxW={{ base: "100vw", md: "container.xl" }}>
            <Heading
              as={"h1"}
              color="brand.500"
              fontSize={{ md: 33, base: 20 }}
              mx="auto"
              align={"center"}
              mt={3}
              pb={"10px"}
            >
              {awardsSection[0]?.label}
            </Heading>

            <Text my={5} textAlign={"center"} color="text.300">
              We are committed to quality and each of our facilities is
              independently certified by an industry-accredited agency.
            </Text>
            <Flex
              justifyContent="space-evenly"
              direction={{ base: "column", md: "row" }}
              align="center"
              gap={12}
              pt={1}
              pb={6}
            >
              <LazyLoadImage
                src={
                  awardsSection[0]?.images?.length > 0 &&
                  awardsSection[0]?.images[0]?.image
                }
                alt="global-certificate"
                loading="lazy"
                style={{
                  opacity: 1,
                  transition: "opacity 0.7s", // Note the corrected syntax here
                }}
              />
              <LazyLoadImage
                src={
                  awardsSection[0]?.images?.length > 0 &&
                  awardsSection[0]?.images[1]?.image
                }
                alt="ciolook-certificate"
                style={{
                  opacity: 1,
                  transition: "opacity 0.7s", // Note the corrected syntax here
                }}
              />
            </Flex>
          </Container>
        )}

      {licensesSection?.length > 0 &&
        licensesSection[0]?.is_visible_on_website === true && (
          <Container maxW={"container.xl"} centerContent px={0}>
            <Heading
              as={"h1"}
              color="brand.500"
              size="lg"
              mx="auto"
              align={"center"}
              mt={3}
            >
              {licensesSection[0]?.label}
            </Heading>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4,1fr)",
              }}
              gap={10}
              my={6}
              alignItems={"center"}
            >
              {licensesSection[0]?.images?.length > 0 &&
                licensesSection[0]?.images?.map((data) => (
                  <GridItem>
                    <Image
                      src={data.image}
                      mx={"auto"}
                      boxSize={{ md: 140, base: 130 }}
                      loading="lazy"
                      alt="Lincense Image"
                    />
                  </GridItem>
                ))}
            </Grid>
          </Container>
        )}

      {nonGmoSection?.length > 0 &&
        nonGmoSection[0]?.is_visible_on_website === true && (
          <Container
            maxW={{ base: "100vw", md: "6xl" }}
            centerContent
            px={0}
          >
            <Image
              mb={4}
              src={nonGmoSection[0]?.image}
              loading="lazy"
              alt="Non Gmo Image"
            />
          </Container>
        )}
      {servicesSection?.length > 0 &&
        servicesSection[0]?.is_visible_on_website === true && (
          <Container maxW={{ base: "100vw", md: "container.xl" }}>
            <Heading
              as={"h1"}
              color="brand.500"
              fontSize={{ md: 33, base: 20 }}
              mx="auto"
              align={"center"}
              my={"5"}
              pb={"10px"}
            >
              {servicesSection?.length > 0 && servicesSection[0].label}
            </Heading>

            <Box display={"flex"} justifyContent={"center"}>
              <LazyLoadImage
                src={
                  servicesSection?.length > 0 &&
                  servicesSection[0]?.images[0].image
                }
                w={{ base: "100%", md: "100%" }}
                alt="Service Section"
                loading="lazy"
                py={4}
                style={{
                  opacity: 1,
                  transition: "opacity 0.7s", // Note the corrected syntax here
                }}
              />
            </Box>
          </Container>
        )}
      {!checkLogin().isLoggedIn && (
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />
      )}
      <ScrollToTop />
      <Footer />
      {/* </>
      )} */}
    </>
  );
}
