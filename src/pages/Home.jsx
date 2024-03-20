import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import CarouselWithLinks from "../components/CarouselWithLinks";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  FaHeartbeat,
  FaThumbsUp,
  FaUniversalAccess,
  FaUserMd,
  FaUserPlus,
  FaBlind,
  FaHeart,
} from "react-icons/fa";
import { MdWaterDrop } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

import ProductListSection from "../components/ProductListSection";
import ProductListSectionHome from "../components/ProductListSectionHome";
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
} from "@chakra-ui/react";
import client from "../setup/axiosClient";
import CheckOrSetUDID from "../utils/checkOrSetUDID";
import { useNavigate, NavLink as RouterLink } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Testimonials from "../components/testimonials";

const banner = [
  {
    id: 11,
    alt_text: "Image2",
    image: "./SO GOOD/home/cookies.jpg",
    display_status: true,
    image_url: "/products/1970",
  },
  {
    id: 12,
    alt_text: "Image3",
    image: "./SO GOOD/home/peanut butter.jpg",
    display_status: true,
    image_url: "/products/2129",
  },
  {
    id: 13,
    alt_text: "Image3",
    image: "./SO GOOD/home/sweet.jpg",
    display_status: true,
    image_url: "/shop?category=492",
  },
  {
    id: 14,
    alt_text: "Image4",
    image: "./SO GOOD/home/pizza sauce (1).jpg",
    display_status: true,
    image_url: "/products/7521",
  },
  {
    id: 15,
    alt_text: "Image4",
    image: "./SO GOOD/home/khakhra.jpg",
    display_status: true,
    image_url: "/shop?category=648",
  },
];

const imageInfo = [
  {
    src: "./SO GOOD/home/apeda.jpg",
  },
  {
    src: "./SO GOOD/home/msme.jpg",
  },
  {
    src: "./SO GOOD/home/spices board.jpg",
  },
  {
    src: "./SO GOOD/home/fassai 2.png",
  },
  {
    src: "./SO GOOD/home/lPCR_logo.jpg",
  },
];

const Muesli = [
  {
    image1: "./SO GOOD/home/sg_cat_2_01.jpg",
    alt: "",
    name: "Dates Muesli",
  },
  {
    image1: "./SO GOOD/home/sg_cat_2_02.jpg",
    alt: "",
    name: "Dark Cocoa Muesli",
  },
  {
    image1: "./SO GOOD/home/sg_cat_2_03.jpg",
    alt: "",
    name: "Corn Flakes",
  },
  {
    image1: "./SO GOOD/home/sg_cat_2_04.jpg",
    alt: "",
    name: "Oats Flakes",
  },
  {
    image1: "./SO GOOD/home/sg_cat_2_05.jpg",
    alt: "",
    name: "Masala Oats",
  },
  {
    image1: "./SO GOOD/home/sg_cat_2_06.jpg",
    alt: "",
    name: "Nutri Bar",
  },
];

const InstantMix = [
  {
    image1: "./SO GOOD/home/Dalwada.jpg",
    alt: "",
    name: "Dalwada",
    id:2058
  },
  {
    image1: "./SO GOOD/home/Masala Oats Chilla.jpg",
    alt: "",
    name: "Masala Oats Chilla",
  },
  {
    image1: "./SO GOOD/home/Methi Gota.jpg",
    alt: "",
    name: "Methi Gota",
  },
  {
    image1: "./SO GOOD/home/Nylon Khaman.jpg",
    alt: "",
    name: "Nylon Khaman",
  },
  {
    image1: "./SO GOOD/home/Oats Idli.jpg",
    alt: "",
  },
  {
    image1: "./SO GOOD/home/Ragi Dosa.jpg",
    alt: "",
    name: "Ragi Dosa",
  },
];

const International_Cuisins = [
  {
    image1: "./SO GOOD/home/sg_incu_01.jpg",
    alt: "",
    name: "Strawberry Jam",
    id: 2002,
  },
  {
    image1: "./SO GOOD/home/sg_incu_02.jpg",
    alt: "",
    name: "Fusilli Pasta",
    id: 2020,
  },
  {
    image1: "./SO GOOD/home/sg_incu_03.jpg",
    alt: "",
    name: "Macaroni Pasta",
    id: 2021,
  },
  {
    image1: "./SO GOOD/home/sg_makh_01.jpg",
    alt: "",
    name: "Salted Makhana",
    id: 2083,
  },
  {
    image1: "./SO GOOD/home/sg_makh_02.jpg",
    alt: "",
    name: "Masala Makhana",
    id: 2079,
  },
  {
    image1: "./SO GOOD/home/sg_makh_03.jpg",
    alt: "",
    name: "Pepper Makhana",
    id: 2082,
  },
];

const Ethicalsnacks = [
  {
    image1: "./SO GOOD/home/sg_cat_01.jpg",
    src: "SO GOOD",
    name: "Fried Temptation",
    id: 650,
  },
  {
    image1: "./SO GOOD/home/sg_cat_02.jpg",
    src: "Peanut Butter",
    name: "Peanut Butter",
    id: 318,
  },
  {
    image1: "./SO GOOD/home/sg_cat_03.jpg",
    src: "International Cuisins",
    name: "International Cuisins",
    id: 599,
  },
  {
    image1: "./SO GOOD/home/sg_cat_04.jpg",
    src: "Savoury Namkeen",
    name: "Savoury Namkeen",
    id: 649,
  },
  {
    image1: "./SO GOOD/home/sg_cat_05.jpg",
    src: "Syrup & Drinks",
    name: "Syrup & Drinks",
    id: 714,
  },
  {
    image1: "./SO GOOD/home/sg_cat_06.jpg",
    src: "Ready Mix",
    name: "Ready Mix",
    id: 651,
  },
  {
    image1: "./SO GOOD/home/sg_cat_07.jpg",
    src: "Instant Mix",
    name: "Instant Mix",
    id: 297,
  },
  {
    image1: "./SO GOOD/home/sg_cat_08.jpg",
    src: "Khakhra",
    name: "Khakhra",
    id: 648,
  },
  {
    image1: "./SO GOOD/home/sg_cat_09.jpg",
    src: "Muesli & Cereals",
    name: "Muesli & Cereals",
    id: 310,
  },
  {
    image1: "./SO GOOD/home/sg_cat_10.jpg",
    src: "Tomato Ketchup",
    name: "Tomato Ketchup",
    id: 338,
  },
];

export default function Home() {
  const [isFullScreen] = useMediaQuery("(min-width: 768px)");
  const width = useBreakpointValue({ base: "100%", lg: "100%" });
  const height = useBreakpointValue({ base: "300", lg: "400" });
  const [banners, setBanners] = useState(banner);
  const [loading, setLoading] = useState(true);
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [homeData, setHome] = useState({});
  const [newArrival, setNewArrival] = useState([]);
  const [mustTry, setMustTry] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  // let [isFull] = useMediaQuery("(max-width:1920px)");
  const [blogs, setBlogs] = useState([]);
  const isMobiles = width <= 768;
  const navigate = useNavigate();
  useEffect(() => {
    CheckOrSetUDID();
    //getHomePageData();
    getMustTry();
    getHomePageData();
    getBestSeller();
    getNewArrival();
    getBlogs();
  }, []);
  async function getHomePageData() {
    const response = await client.get("/home");
    if (response.data.status === true) {
      //setBanners(response.data.banners);
      setHome(response.data);
    }
    setLoading(false);
  }

  async function getNewArrival() {
    const response = await client.get("newarrival/list");
    if (response) {
      setNewArrival(response.data.data);
    }
    setLoading(false);
  }
  async function getMustTry() {
    const response = await client.get("musttry/list");
    if (response) {
      setMustTry(response.data.data);
    }
    setLoading(false);
  }
  async function getBestSeller() {
    const response = await client.get("bestofalltime/list");
    if (response) {
      setBestSeller(response.data.data);
    }
    setLoading(false);
  }
  async function getBlogs() {
    const params = {};
    const response = await client.get("/home/blogs/", {
      params: params,
    });
    if (response.data.status === true) {
      setBlogs(response.data.blogs);
    }
  }

  return (
    <>
      {/* {loading === true ? (
        <Center h="100vh" w="100vw" backgroundColor={"bg.500"}>
          <Loader site={true} />
        </Center>
      ) : (
        <> */}
      <Navbar />
      <Container maxW={"container.xl"} px={0}>
        <Carousel banners={banners} />
      </Container>
      <Container maxW={"container.xl"} mb={8} mt={2} px={0}>
        <Text
          fontSize={{ base: "xl", sm: "2xl", xl: "3xl" }}
          fontWeight={700}
          color={"text.300"}
          bgColor={"bg.100"}
          textAlign={{ base: "center", md: "justify" }}
          px={{ base: 2, md: 8 }}
          py={4}
          my={7}
        >
          About SO GOOD
        </Text>
        <Text
          color={"text.300"}
          align={{ base: "justify" }}
          px={{ base: 15, lg: 20 }}
          fontSize={{ base: "sm", lg: "lg" }}
        >
          Bharat is an ancient and advanced culture and civilization that has
          with stood the tests of time. A civilization that has excelled in
          every field, be it Krishi (agriculture), Ayurved ('science of life'),
          Kala (arts), Vigyan (science), Yog as well as the Pursuit of Brahman
          (Supreme Reality). We believe in 'वसुधैवकुटुम्बकम्' ('Vasudhaiv
          Kutumbakam') means Whole World Is Family, and by this we want to serve
          a good health, better living and sustainable environment to the whole
          world.
          <br />
          <br />
          So Good on a mission to change the way people think about food and
          offer you safe, ethical, natural, healthy and enjoyable alternatives
          of your dietary needs .
        </Text>

        <Button
          fontWeight={400}
          color={"brand.500"}
          variant={"outline"}
          textDecoration={"none"}
          onClick={() => navigate("/about-us")}
          mx={"45%"}
          border={"1px"}
          borderColor={"brand.500"}
          p={3}
          borderRadius={"25px"}
          _hover={{
            bgColor: "brand.500",
            color: "text.300",
          }}
        >
          Read more
        </Button>
      </Container>
      <Container maxW={"container.xl"} px={2}>
        <Image src="./SO GOOD/home/So_good.jpg" alt="" />
      </Container>
      <Text
        fontSize={{ base: "xl", sm: "2xl", xl: "3xl" }}
        fontWeight={700}
        color={"text.300"}
        bgColor={"bg.100"}
        textAlign={{ base: "center", md: "justify" }}
        px={{ base: 2, md: 8 }}
        py={4}
        my={7}
      >
        Our Ethical Snacks Range
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          xl: "repeat(5, 1fr)",
        }}
        justify="center"
        align="center"
        direction={{ base: "column", md: "row" }}
        // wrap={"wrap"}
        wrap={{ md: "wrap", lg: "nowrap" }}
        px={5}
      >
        {Ethicalsnacks.map((data) => (
          <GridItem
            as={Card}
            border="1px"
            borderColor="text.300"
            borderRadius={"lg"}
            w={{ base: "80vw", sm: "3xs", lg: "200px", xl: "2xs" }}
            my={5}
            onClick={() => navigate(`/shop?category=${data.id}`)}
            cursor={"pointer"}
          >
            <Image
              src={data.image1}
              alt=""
              borderRadius="lg"
              boxSize="150px"
              objectFit={"contain"}
              mx={"auto"}
              my={6}
            />
            <Box
              h="100px"
              display={"flex"}
              flexDirection={"column"}
              backgroundColor={"bg.500"}
              borderBottomRadius="lg"
              alignItems={"center"}
              justifyContent={"center"}
              gap={3}
            >
              <Heading
                size="md"
                mb={3}
                noOfLines={3}
                fontWeight="500"
                title={data.name}
              >
                {data.name}
              </Heading>
              <Button
                as={Link}
                to={`/shop?category=${data.id}`}
                fontSize="sm"
                w={{ base: "100%", lg: "80%" }}
                mx="auto"
                backgroundColor={"brand.500"}
                borderColor={"brand.100"}
                color="black"
                _hover={{ backgroundColor: "brand.900" }}
              >
                View Product
              </Button>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <ProductListSectionHome
        loading={loading}
        title={"New Arrival"}
        products={newArrival}
      />
      <Container maxW={"container.xl"} px={2} borderRadius={"10px"}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
        >
          <GridItem
            onClick={() => navigate("/shop?category=701")}
            cursor={"pointer"}
          >
            <Image src="./SO GOOD/home/tomato_ketchup.jpg" alt="" />
          </GridItem>
          <GridItem
            
            onClick={() => navigate("/shop?category=318")}
            cursor={"pointer"}
          >
            <Image src="./SO GOOD/home/peanut.jpg" alt="" />
          </GridItem>
        </Grid>
      </Container>
      <ProductListSection
        loading={loading}
        title={"Muesli, Cereals & Bars"}
        products={Muesli}
      />
      <Container maxW={"container.xl"} px={2} borderRadius={"10px"}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
        >
          <GridItem >
            <Image src="./SO GOOD/home/khara.jpg" alt="" />
          </GridItem>
          <GridItem >
            <Image src="./SO GOOD/home/chips.jpg" alt="" />
          </GridItem>
        </Grid>
      </Container>
      <ProductListSection
        loading={loading}
        title={"Range of Instant Mix"}
        products={homeData.instant_mix}
      />
      <Container maxW={"container.xl"} px={2} borderRadius={"10px"}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
        >
          <GridItem >
            <Image
              src="./SO GOOD/home/read_mix.jpg"
              alt=""
              onClick={() => navigate("/shop?category=651")}
              cursor={"pointer"}
            />
          </GridItem>
          <GridItem mx={2}>
            <Image
              src="./SO GOOD/home/namkeen.jpg"
              alt=""
              onClick={() => navigate("/shop?category=649")}
              cursor={"pointer"}
            />
          </GridItem>
        </Grid>
      </Container>
      <ProductListSection
        loading={loading}
        title={"International Cuisins"}
        products={International_Cuisins}
      />
      <ProductListSectionHome
        loading={loading}
        title={"Must Try : SO GOOD Products"}
        products={mustTry}
      />
      <ProductListSectionHome
        loading={loading}
        title={"Best Seller Of All Time"}
        products={bestSeller}
      />
      <Container backgroundColor={"bg.500"} maxW={"container.xl"} py={2}>
        <SimpleGrid
          columns={[2, 3, null, 6]}
          px={6}
          maxW={"container.xl"}
          my={6}
          backgroundColor={"bg.500"}
          align="center"
          spacingX={{ base: "10vw", md: "30px" }}
          spacingY="40px"
        >
          <Stat>
            <StatNumber color="text.300" fontSize={{ base: "3xl", md: "3xl" }}>
              132+
            </StatNumber>
            <StatHelpText color="gray.600">Natural Products</StatHelpText>
          </Stat>

          <Stat>
            <StatNumber color="text.300" fontSize={{ base: "3xl", md: "3xl" }}>
              28066+
            </StatNumber>
            <StatHelpText color="gray.600">Satisfied Clients</StatHelpText>
          </Stat>

          <Stat>
            <StatNumber color="text.300" fontSize={{ base: "3xl", md: "3xl" }}>
              1485+
            </StatNumber>
            <StatHelpText color="gray.600">Cities & Towns</StatHelpText>
          </Stat>
          <Stat>
            <StatNumber color="text.300" fontSize={{ base: "3xl", md: "3xl" }}>
              7+
            </StatNumber>
            <StatHelpText color="gray.600">Countries</StatHelpText>
          </Stat>

          <Stat>
            <StatNumber color="text.300" fontSize={{ base: "3xl", md: "3xl" }}>
              15+
            </StatNumber>
            <StatHelpText color="gray.600">Stores</StatHelpText>
          </Stat>

          <Stat>
            <StatNumber color="text.300" fontSize={{ base: "3xl", md: "3xl" }}>
              11th
            </StatNumber>
            <StatHelpText color="gray.600">Generation of Farmers</StatHelpText>
          </Stat>
        </SimpleGrid>
      </Container>

      <Container maxW={{ base: "100vw", md: "container.xl" }}>
        <Box
          backgroundSize="100%"
          backgroundPosition="50% 100%"
          backgroundRepeat={"no-repeat"}
        >
          <Heading
            color="brand.500"
            size="lg"
            mx="auto"
            align={"center"}
            mt={3}
            pb={"10px"}
          >
            Awards & Certificates
          </Heading>
        </Box>
        <Text my={5} textAlign={"center"} color="text.300">
          We are committed to quality and each of our facility is independently
          certified by an industry-accredited agency.
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
              "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/global-certificate.jpg"
            }
            alt="global-certificate"
            style={{
              opacity: 1,
              transition: "opacity 0.7s", // Note the corrected syntax here
            }}
          />
          <LazyLoadImage
            src={
              "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/ciolook-certificate.jpg"
            }
            alt="ciolook-certificate"
            style={{
              opacity: 1,
              transition: "opacity 0.7s", // Note the corrected syntax here
            }}
          />
        </Flex>
      </Container>

      <Container maxW={"container.xl"} centerContent>
        <Heading
          color="brand.500"
          size="lg"
          mx="auto"
          align={"center"}
          mt={3}
          pb={"10px"}
        >
          Licences & Affiliations
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(3, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(5,1fr)",
          }}
          gap={2}
          my={6}
          px={{ md: "12%" }}
        >
          {imageInfo?.map((data) => (
            <GridItem>
              <Image src={data.src} />
            </GridItem>
          ))}
        </Grid>
      </Container>

      <Container maxW={{ base: "100vw", md: "container.xl" }}>
        {/* <Box
          w="100%"
          backgroundImage={
            "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/line.png"
          }
          backgroundSize="100%"
          backgroundPosition="50% 100%"
          backgroundRepeat={"no-repeat"}
        >
          <Heading
            color="brand.500"
            size="lg"
            mx="auto"
            align={"center"}
            mb={"5"}
            mt={3}
            pb={"10px"}
          >
            BRAND PARTNERS
          </Heading>
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            xl: "repeat(6,1fr)",
          }}
          spacing={{ base: 10, md: 14 }}
          py={3}
          px={{ base: 15, md: 20, lg: 24 }}
        >
          {brands?.map((brand, index) => (
            <GridItem as={RouterLink} to={brand?.href ?? "#"}>
              <Image
                as={LazyLoadImage}
                key={index}
                src={brand.src}
                boxSize={{
                  base: "150px",
                  md: "150px",
                  lg: "180px",
                }}
                alt={brand.alt}
                style={{
                  opacity: 1,
                  transition: "opacity 0.7s", // Note the corrected syntax here
                }}
              />
            </GridItem>
          ))}
        </Grid> */}

        <Box
          w="100%"
          backgroundSize="100%"
          backgroundPosition="50% 100%"
          backgroundRepeat={"no-repeat"}
        >
          <Heading
            color="brand.500"
            size="lg"
            mx="auto"
            align={"center"}
            my={"5"}
            pb={"10px"}
          >
            SERVING TO THE COUNTRIES
          </Heading>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <LazyLoadImage
            src={
              "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/Map.webp"
            }
            w={{ base: "100%", md: "100%" }}
            alt=""
            py={4}
            style={{
              opacity: 1,
              transition: "opacity 0.7s", // Note the corrected syntax here
            }}
          />
        </Box>
        <Box
          w="100%"
          backgroundSize="100%"
          backgroundPosition="50% 100%"
          backgroundRepeat={"no-repeat"}
        >
          <Heading
            color="brand.500"
            size="lg"
            mx="auto"
            align={"center"}
            my={"5"}
            pb={"10px"}
          >
            AVAILABLE AT
          </Heading>
        </Box>
        <Container maxW={"container.xl"} mb={5} px={0} centerContent>
          <Image
            src={
              "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/01.jpg"
            }
            w={"container.xl"}
            alt=""
            style={{
              opacity: 1,
              transition: "opacity 0.7s", // Note the corrected syntax here
            }}
          />
        </Container>
      </Container>
      <Footer />
      {/* </>
      )} */}
    </>
  );
}
