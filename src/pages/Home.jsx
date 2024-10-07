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
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import client from "../setup/axiosClient";
import CheckOrSetUDID from "../utils/checkOrSetUDID";
import { useNavigate, NavLink as RouterLink } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Testimonials from "../components/testimonials";
import ScrollToTop from "../components/ScrollToTop";

const banner = [
  {
    id: 11,
    alt_text: "Image2",
    image: "./SO GOOD/Home Page Banners/01.jpg",
    display_status: true,
    image_url: "/products/2019",
  },
  {
    id: 12,
    alt_text: "Image3",
    image: "./SO GOOD/Home Page Banners/02.jpg",
    display_status: true,
    image_url: "/products/2025",
  },
  {
    id: 13,
    alt_text: "Image3",
    image: "./SO GOOD/Home Page Banners/03.jpg",
    display_status: true,
    image_url: "/products/7594",
  },
  {
    id: 14,
    alt_text: "Image4",
    image: "./SO GOOD/Home Page Banners/04.jpg",
    display_status: true,
    image_url: "/products/2028",
  },
  {
    id: 15,
    alt_text: "Image4",
    image: "./SO GOOD/Home Page Banners/05.jpg",
    display_status: true,
    image_url: "/products/2031",
  },
  {
    id: 16,
    alt_text: "Image4",
    image: "./SO GOOD/Home Page Banners/06.jpg",
    display_status: true,
    image_url: "/products/2100",
  },
  {
    id: 17,
    alt_text: "Image4",
    image: "./SO GOOD/Home Page Banners/07.jpg",
    display_status: true,
    image_url: "/products/1976",
  },
  {
    id: 18,
    alt_text: "Image4",
    image: "./SO GOOD/Home Page Banners/08.jpg",
    display_status: true,
    image_url: "/products/7587",
  },
  {
    id: 19,
    alt_text: "Image4",
    image: "./SO GOOD/Home Page Banners/09.jpg",
    display_status: true,
    image_url: "/products/7588",
  },
  {
    id: 20,
    alt_text: "Image4",
    image: "./SO GOOD/Home Page Banners/10.jpg",
    display_status: true,
    image_url: "/products/7589",
  },
];

const imageInfo = [
  {
    src: "./SO GOOD/home/apeda.jpg",
    size: 190,
  },
  {
    src: "./SO GOOD/home/msme.jpg",
    size: 210,
  },
  {
    src: "./SO GOOD/home/spices board.jpg",
    size: 185,
  },
  {
    src: "./SO GOOD/home/fassai 2.png",
    size: 200,
  },
  // {
  //   src: "./SO GOOD/home/lPCR_logo.jpg",
  //   size: 140,
  // },
];

const Muesli = [
  {
    image1: "./SO GOOD/Product-Image/Sugarfree_Muesli.jpg",
    alt: "",
    name: "So Good Sugar Free Dates & Millet Muesli 250gm",
    id: 2050,
  },
  {
    image1: "./SO GOOD/Product-Image/cinnamonnutribar.jpg",
    alt: "",
    name: "So Good Natural Cinnamon Nutri Bar 30gm",
    id: 1967,
  },
  {
    image1: "./SO GOOD/Product-Image/omegafibernutribar.jpg",
    alt: "",
    name: "So Good Natural Omega Fiber Nutri Bar 40gm",
    id: 1968,
  },
  {
    image1: "./SO GOOD/Product-Image/dryfruit_front.jpg",
    alt: "",
    name: "So Good Natural Dry Fruit Chikki Bar 32gm",
    id: 1962,
  },
  {
    image1: "./SO GOOD/Product-Image/cornflakes.jpg",
    alt: "",
    name: "So Good Natural Corn Flakes 250gm",
    id: 2045,
  },
];

const International_Cuisins = [
  {
    image1: "./SO GOOD/Product-Image/Schezwan.jpg",
    alt: "",
    name: "So Good Natural Schezwan Sauce 225gm",
    id: 2027,
  },
  {
    image1: "./SO GOOD/Product-Image/fusilli_pasta.png",
    alt: "",
    name: "So Good Natural Fusilli Pasta 250gm",
    id: 2020,
  },
  {
    image1: "./SO GOOD/Product-Image/chilly_front.jpg",
    alt: "",
    name: "So Good Natural Thai Chilli Sauce 200gm",
    id: 2031,
  },
  {
    image1: "./SO GOOD/Product-Image/02.jpg",
    alt: "",
    name: "So Good Natural Strawberry Jam 200gm",
    id: 2002,
  },
  {
    image1: "./SO GOOD/Product-Image/rocksalt_front.jpg",
    alt: "",
    name: "So Good Natural Makhana Rock Salt & Pepper 35gm",
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
  const height = useBreakpointValue({ base: "200", lg: "400" });
  const [banners, setBanners] = useState(banner);
  const [loading, setLoading] = useState(true);
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [homeData, setHome] = useState({});
  const [newArrival, setNewArrival] = useState([]);
  const [mustTry, setMustTry] = useState([]);
  const [sections, setSections] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  // let [isFull] = useMediaQuery("(max-width:1920px)");
  const [blogs, setBlogs] = useState([]);
  const isMobiles = width <= 768;
  const navigate = useNavigate();
  useEffect(() => {
    CheckOrSetUDID();
    // getHomePageData();
    getMustTry();
    //getHomePageData();
    getBestSeller();
    getNewArrival();
    getBlogs();
    getImage(); 
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
  async function getImage() {
    const params = {};
    const response = await client.get("/lower-section", {
      params: params,
    });
    if (response.data.status === true) {
      setSections(response.data.data);
    }
  }
  console.log(sections)


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
      <Container maxW={"container.xl"} mb={8} px={0}>
        <Text
          fontSize={{ base: "xl", sm: "2xl", xl: "3xl" }}
          fontWeight={700}
          color={"text.300"}
          bgColor={"bg.100"}
          textAlign={{ base: "center", md: "justify" }}
          //px={{ base: 2, md: 8 }}
          py={4}
          //my={3}
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
      <Container maxW={"container.xl"} px={2}>
        <Image src="./SO GOOD/home/So_good.jpg" alt="" />
      </Container>
      <Container maxW={"container.xl"}>
        <Text
          fontSize={{ base: "xl", sm: "2xl", xl: "3xl" }}
          fontWeight={700}
          color={"text.300"}
          bgColor={"bg.500"}
          textAlign={{ base: "center", md: "justify" }}
          px={{ base: 2, md: 8 }}
          py={4}
          my={3}
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
          // pl={6}
          // pr={5}
          gap={6}
        >
          {Ethicalsnacks.map((data) => (
            <GridItem
              as={Card}
              border="1px"
              borderColor="text.300"
              borderRadius={"lg"}
              //w={{ base: "80vw", sm: "3xs", lg: "200px", xl: "2xs" }}
              my={5}
              onClick={() => navigate(`/shop?category=${data.id}`)}
              cursor={"pointer"}
            >
              <CardBody backgroundColor={"white"} borderRadius="lg">
                <Image
                  src={data.image1}
                  alt=""
                  borderRadius="lg"
                  boxSize="170px"
                  objectFit={"contain"}
                  my={3}
                />
              </CardBody>
              <CardFooter
                align={"center"}
                py={3}
                flexDirection="column"
                backgroundColor={"bg.100"}
                borderBottomRadius="lg"
              >
                <Box
                  h="100px"
                  display={"flex"}
                  flexDirection={"column"}
                  backgroundColor={"bg.100"}
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
                    _hover={{
                      backgroundColor: "brand.900",
                      textDecoration: "none",
                    }}
                  >
                    View Product
                  </Button>
                </Box>
              </CardFooter>
            </GridItem>
          ))}
        </Grid>
      </Container>
      <ProductListSectionHome
        loading={loading}
        title={"Try Our New Products"}
        products={newArrival}
        type={isMobile && "carousal"}
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
        type={isMobile && "carousal"}
      />

      <Container maxW={"container.xl"} px={2} borderRadius={"10px"}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
        >
          <GridItem>
            <Image src="./SO GOOD/home/khara.jpg" alt="" />
          </GridItem>
          <GridItem>
            <Image src="./SO GOOD/home/chips.jpg" alt="" />
          </GridItem>
        </Grid>
      </Container>
      {/* <ProductListSection
        loading={loading}
        title={"Instant Mixes"}
        products={homeData.instant_mix}
      /> */}
      <Container maxW={"container.xl"} px={2} borderRadius={"10px"}>
        <Text
          fontSize={{ base: "xl", sm: "2xl", xl: "3xl" }}
          bgColor={"bg.500"}
          px={{ base: 2, md: 8 }}
          py={4}
          mb={8}
          textAlign={{ base: "center", md: "start" }}
          fontWeight={500}
        >
          Instant Mixes
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
        >
          <GridItem>
            <Image
              w={"100%"}
              src="./SO GOOD/home/so-good_ready_mix.jpg"
              alt=""
              onClick={() => navigate("/shop?category=297")}
              cursor={"pointer"}
            />
          </GridItem>
          <GridItem mx={2}>
            <Image
              w={"100%"}
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
        type={isMobile && "carousal"}
      />
      <ProductListSectionHome
        loading={loading}
        title={"Must Try : SO GOOD Products"}
        products={mustTry}
        type={isMobile && "carousal"}
      />
      <ProductListSectionHome
        loading={loading}
        title={"All Time Best Sellers"}
        products={bestSeller}
        type={isMobile && "carousal"}
      />

      <Container maxW={"container.xl"}>
        <Heading
          color="brand.500"
          size="lg"
          mx="auto"
          align={"center"}
          mt={3}
          pb={"10px"}
        >
          BLOGS
        </Heading>

        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          }}
          px={2}
          py={3}
          spacing="40px"
        >
          {blogs?.slice(0, 8).map((blog) => (
            <GridItem key={blog.id} m={4}>
              <Card>
                <LinkBox h={400}>
                  <Image
                    src={blog.banner}
                    w="100%"
                    h="300px"
                    loading="lazy"
                    objectFit={"cover"}
                    borderRadius={5}
                    style={{
                      opacity: 1,
                      transition: "opacity 0.7s", // Note the corrected syntax here
                    }}
                  />
                  <LinkOverlay
                    _hover={{ color: "bg.600" }}
                    href={`/blogs/${blog.id}/`}
                  >
                    <Heading size="sm" fontWeight={500} m={2}>
                      {blog.title}
                    </Heading>
                  </LinkOverlay>
                </LinkBox>
                <Flex m={2} justifyContent={"space-between"}>
                  <Text fontSize={"sm"} color="gray.500">
                    {new Intl.DateTimeFormat("en-CA", {
                      dateStyle: "long",
                      timeZone: "Asia/Kolkata",
                    }).format(new Date(blog.published_at))}
                  </Text>
                  <Text
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"bg.600"}
                    onClick={() => navigate(`/blogs/${blog.id}/`)}
                    cursor={"pointer"}
                  >
                    Read more
                    <ChevronRightIcon />
                  </Text>
                </Flex>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Container>
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
              14+
            </StatNumber>
            <StatHelpText color="gray.600">Stores</StatHelpText>
          </Stat>

          <Stat>
            <StatNumber color="text.300" fontSize={{ base: "3xl", md: "3xl" }}>
              100+
            </StatNumber>
            <StatHelpText color="gray.600">No. of Receipes</StatHelpText>
          </Stat>
        </SimpleGrid>
      </Container>

      <Container maxW={{ base: "100vw", md: "container.xl" }} px={0}>
        <Box
          backgroundSize="100%"
          backgroundPosition="50% 100%"
          backgroundRepeat={"no-repeat"}
        >
          <Heading
            color="brand.700"
            size="lg"
            mx="auto"
            align={"center"}
            mt={4}
          >
            {sections?.length > 0 && sections[0].label}
          </Heading>
        </Box>
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
            src={sections?.length > 0 && sections[0]?.images[0].image}
            alt="global-certificate"
            style={{
              opacity: 1,
              transition: "opacity 0.7s", // Note the corrected syntax here
            }}
          />
          <LazyLoadImage
            src={sections?.length > 0 && sections[0]?.images[1].image}
            alt="ciolook-certificate"
            style={{
              opacity: 1,
              transition: "opacity 0.7s", // Note the corrected syntax here
            }}
          />
        </Flex>
      </Container>

      <Container maxW={"container.xl"} centerContent px={0}>
        <Heading color="brand.700" size="lg" mx="auto" align={"center"} mt={3}>
          LICENSES & AFFILIATIONS
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
          {imageInfo?.map((data) => (
            <GridItem>
              <Image
                src={data.src}
                mx={"auto"}
                boxSize={{ md: data.size, base: 130 }}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>

      <Container
        maxW={{ base: "100vw", md: "container.xl" }}
        centerContent
        px={0}
      >
        <Image
          mb={4}
          src={require("../assets/Home/sogood_icon.jpg")}
          w={{ md: "65%" }}
        />

        <Box
          w="100%"
          backgroundSize="100%"
          backgroundPosition="50% 100%"
          backgroundRepeat={"no-repeat"}
        >
          <Heading
            color="brand.700"
            fontSize={{ md: 33, base: 20 }}
            mx="auto"
            align={"center"}
            my={"5"}
          >
            {sections?.length > 0 && sections[1].label}
          </Heading>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <LazyLoadImage
            src={sections?.length > 0 && sections[1]?.images[0].image}
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
            color="brand.700"
            size="lg"
            mx="auto"
            align={"center"}
            my={"5"}
            pb={"10px"}
          >
            {sections?.length > 0 && sections[2].label}
          </Heading>
        </Box>
        <Container maxW={"container.xl"} mb={5} px={0} centerContent>
          <Image
            src={sections?.length > 0 && sections[2]?.images[0].image}
            w={"container.xl"}
            alt=""
            style={{
              opacity: 1,
              transition: "opacity 0.7s", // Note the corrected syntax here
            }}
          />
        </Container>
      </Container>
      <ScrollToTop />
      <Footer />
      {/* </>
      )} */}
    </>
  );
}
