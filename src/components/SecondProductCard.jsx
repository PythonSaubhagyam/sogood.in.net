import React from "react";
import {
  Card,
  CardBody,
  Button,
  CardFooter,
  Heading,
  Image,
  Box,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const SecondProductCard = ({ product }) => {
  const navigate = useNavigate();

  // Helper for navigation path
  const getProductLink = () => {
    if (product?.product) {
      return `/products/${product.product}/${product.product_name.replace(/\s+/g, "-")}`;
    }
    return `/shop?category=${product.category}`;
  };

  // Handle Card Click
  const handleCardClick = (e) => {
    if (e.target.closest("button")) return;
    navigate(getProductLink());
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Card
      m={1}
      border="1px"
      borderColor="brand.100"
      borderRadius="lg"
      onClick={handleCardClick}
      cursor="pointer"
      transition="transform 0.25s cubic-bezier(.4,0,.2,1), box-shadow 0.25s cubic-bezier(.4,0,.2,1)"
      _hover={{
        transform: "scale(1.01)",
        boxShadow: "2xl",
      }}
      _focusWithin={{
        transform: "scale(1.01)",
        boxShadow: "xl",
      }}
    >
      <CardBody backgroundColor="white" borderRadius="lg">
        <Box
          mb={2}
          display="flex"
          justifyContent="center"
        >
          <Image
            src={product?.image1 || product?.image || "/placeholder.png"}
            alt={product.product_name || product.category_name || "Product Image"}
            borderRadius="lg"
            transition="all linear .2s"
            _hover={{
              transform: "scale(1.03)",
            }}
            w="200px"
            h="200px"
            objectFit="contain"
            mx="auto"
            fallbackSrc="/placeholder.png"
          />
        </Box>
      </CardBody>
      <CardFooter
        align="center"
        py={3}
        flexDirection="column"
        backgroundColor="bg.500"
        borderBottomRadius="lg"
      >
        <Box
          h="80px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Heading
            size="sm"
            mb={3}
            noOfLines={3}
            fontWeight="500"
            title={product.product_name || product.category_name}
          >
            {product.product_name || product.category_name}
          </Heading>
        </Box>
        <Button
          as={Link}
          to={getProductLink()}
          fontSize="sm"
          w={{ base: "100%", lg: "80%" }}
          mx="auto"
          backgroundColor="brand.500"
          borderColor="brand.100"
          color="white"
          _hover={{
            backgroundColor: "brand.900",
          }}
          _active={{
            backgroundColor: "brand.900",
            transform: "scale(0.98)",
          }}
          transition="all 0.22s cubic-bezier(.4,0,.2,1)"
          aria-label={
            product.product_name
              ? `View ${product.product_name}`
              : "View Product"
          }
          onClick={(e) => e.stopPropagation()} // Stop card click navigation
        >
          View Product
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SecondProductCard;
