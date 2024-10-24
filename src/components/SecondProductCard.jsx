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
  return (
    <>
      <Card
        // w={{ base: "80vw", sm: "3xs", xl: "2xs", md: "200px" }}
        border="1px"
        borderColor="brand.100"
        borderRadius={"lg"}
        onClick={() => {
          if (product?.product) {
            navigate(`/products/${product.product}`),
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
          } else {
            navigate(`/shop?category=${product.category}`),
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
          }
        }}
        cursor={"pointer"}
      >
        <CardBody backgroundColor={"white"} borderRadius="lg">
          <Image
            src={product?.image1 ? product?.image1 : product?.image}
            alt={
              product.product_name
                ? product.product_name
                : product.category_name
            }
            borderRadius="lg"
            boxSize="150px"
            objectFit={"contain"}
            mx="auto"
          />
        </CardBody>
        <CardFooter
          align={"center"}
          py={3}
          flexDirection="column"
          backgroundColor={"bg.500"}
          borderBottomRadius="lg"
        >
          <Box
            h="80px"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Heading
              size="sm"
              mb={3}
              noOfLines={3}
              fontWeight="500"
              title={
                product.product_name
                  ? product.product_name
                  : product.category_name
              }
            >
              {product.product_name
                ? product.product_name
                : product.category_name}
            </Heading>
          </Box>
          <Button
            as={Link}
            to={
              product.product
                ? `/products/${product.product}`
                : `/shop?category=${product.category}`
            }
            fontSize="sm"
            w={{ base: "100%", lg: "80%" }}
            mx="auto"
            backgroundColor={"brand.500"}
            borderColor={"brand.100"}
            color="white"
            _hover={{ backgroundColor: "brand.900" }}
          >
            View Product
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default SecondProductCard;
