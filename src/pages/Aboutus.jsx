import Footer from "../components/Footer";
import BreadCrumbCom from "../components/BreadCrumbCom";
import Navbar from "../components/Navbar";
import { Box, Container, VStack, Image, Text, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
const Aboutus = () => {
  let { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const IsMobileView = searchParams.get("mobile") ?? "false";
  return (
    <>
      {IsMobileView !== "true" && <Navbar />}
      <Container maxW={"container.xl"} alignContent={"flex-start"}>
        <BreadCrumbCom second={"About Us"} secondUrl={"/about-us"} />{" "}
      </Container>
      <Container maxW={"container.xl"} mb={4} px={0} centerContent>
         <Image src={require("../assets/About us/about-us.jpg")} />
        <VStack maxW={"6xl"} mt={2}  px={{base:9,md:9}}>
          <Text fontWeight={700} fontSize={{md:24,base:20}} color={"brand.500"} mb={2.5}>
            SO GOOD is proud to be - PRODUCT of भारत
          </Text>
          <Box color={"text.300"} textAlign={"justify"} fontSize={17.5}>
            Bharat is an ancient and advanced culture and civilization that has with stood the tests of time. A civilization that has excelled in every field, be it Krishi (agriculture), Ayurved ('science of life'), Kala (arts), Vigyan (science), Yog as well as the Pursuit of Brahman (Supreme Reality).
            We believe in 'वसुधैवकुटुम्बकम्' ('Vasudhaiv Kutumbakam') means Whole World Is Family, and by this we want to serve a good health, better living and sustainable environment to the whole world.
            <br />
            <br />
            So Good on a mission to change the way people think about food & offer you safe, natural, healthy & enjoyable alternatives  of your dietary needs .  
            <br />
            <br />
            Inspired by:  Bansi Gir Gaushala which has been practicing vedicgaupalan from last 14 years . Bansi Gir's aim is to contribute to the revival of "GauSanskriti" an ancient culture which placed the Gaumata (cow as divine mother) at the center of healthcare ,  agriculture , education, economy & social activity. Know more  www.bansigir.in  
            <br />
            <br />
            So Good snacks are traditionally handmade, using only the highest quality natural ingredients which contains No Preservatives, No Colour or Artificial flavor which can harm your health.
            <br />
            <br />
            Thank You for buying So Good products, your purchase helps to make a difference to the lives of thousands of farmers from all over Bharat. Your purchase also helps to encourage ethical & natural farming practices.    
            <br />
            <br />
            'We sincerely hope this product brings you & your family many moments of joy and years of good health.' 
          </Box>

          <br />
        </VStack>
      </Container>
      {IsMobileView !== "true" && <Footer />}
    </>
  );
};

export default Aboutus;
