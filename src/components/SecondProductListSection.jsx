import React, { useRef } from 'react'
import {
  Container,
  Text,
  Box,
  Skeleton,
  SkeletonText,
  Grid,
  GridItem,
  IconButton,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SecondProductCard from './SecondProductCard';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const SecondProductListSection = ({ title, products, loading, type }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const isCarousel = type === "carousal" && products?.length > 4;

  return (
    <Container maxW={"container.xl"} px={0} pt={4} pb={6} position={"relative"}>
      <Text
        as="h1"
        fontSize={{ base: "xl", sm: "2xl", xl: "3xl" }}
        bgColor={"bg.500"}
        px={{ base: 2, md: 8 }}
        py={4}
        mb={8}
        textAlign={{ base: "center", md: "start" }}
        fontWeight={500}
      >
        {title}
      </Text>

      {/* Show arrows only for carousel with enough products */}
      {isCarousel && (
        <>
          <IconButton
            aria-label="left-arrow"
            icon={<RiArrowLeftSLine size={25} />}
            _hover={{ opacity: 0.5 }}
            position="absolute"
            top="50%"
            left="20px"
            transform="translateY(-50%)"
            zIndex={100}
            borderRadius="50%"
            boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
            colorScheme="brand"
            size="sm"
            onClick={() => sliderRef.current?.slickPrev()}
          />
          <IconButton
            aria-label="right-arrow"
            icon={<RiArrowRightSLine size={25} />}
            _hover={{ opacity: 0.5 }}
            position="absolute"
            right="20px"
            top="50%"
            transform="translateY(-50%)"
            zIndex={100}
            borderRadius="50%"
            boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
            colorScheme="brand"
            size="sm"
            onClick={() => sliderRef.current?.slickNext()}
          />
        </>
      )}

      {/* CAROUSEL MODE */}
      {isCarousel ? (
        <Box px={10} mt={5}>
          <Slider {...settings} ref={sliderRef}>
            {loading
              ? [0, 1, 2, 3, 4].map((index) => (
                  <Box
                    key={index}
                    padding="6"
                    boxShadow="lg"
                    bg="white"
                    w={{ base: "80vw", sm: "3xs", lg: "2xs" }}
                  >
                    <Skeleton width={150} mx="auto" height={150} />
                    <SkeletonText
                      my="4"
                      noOfLines={1}
                      spacing="4"
                      skeletonHeight="2"
                    />
                    <Skeleton mx="auto" width={100} height={5} />
                  </Box>
                ))
              : products?.map((product) => (
                  <Box key={product.id} px={{ base: "20px", md: "20px" }}>
                    <SecondProductCard product={product} />
                  </Box>
                ))}
          </Slider>
        </Box>
      ) : (
        // GRID MODE
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            xl: "repeat(5, 1fr)",
          }}
          px={5}
          gap={6}
          role="region"
          aria-label={title}
        >
          {loading
            ? [0, 1, 2, 3, 4].map((_, idx) => (
                <GridItem key={idx}>
                  <Box
                    padding="6"
                    boxShadow="lg"
                    bg="white"
                    w={{ base: "80vw", sm: "3xs", lg: "2xs" }}
                  >
                    <Skeleton width={150} mx="auto" height={150} />
                    <SkeletonText
                      my="4"
                      noOfLines={1}
                      spacing="4"
                      skeletonHeight="2"
                    />
                    <Skeleton mx="auto" width={100} height={5} />
                  </Box>
                </GridItem>
              ))
            : products?.map((product) => (
                <GridItem key={product.id}>
                  <SecondProductCard product={product} />
                </GridItem>
              ))}
        </Grid>
      )}
    </Container>
  );
};

export default SecondProductListSection;
