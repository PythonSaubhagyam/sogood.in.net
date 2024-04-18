import {
  LinkBox,
  LinkOverlay,
  Card,
  CardBody,
  Image,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  IconButton,
  Box,
  Badge,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import AddToCart from "../utils/addToCart";

export default function ShopProductCard({
  productDetails,
  isInWishlist,
  onClick,
  displayWishlistButton = true,
}) {
  console.log(productDetails);
  return (
    <LinkBox
      as={Card}
      size="md"
      w={{ base: "80vw", sm: "40vw", md: "215px" }}
      border="1px"
      borderColor="gray.300"
      cursor={"pointer"}
    >
      <CardBody align="center" h={{md:280}} py={4} flex={"none"}>
        <Image
          src={productDetails.image1}
          alt={productDetails.name}
          objectFit="contain"
          boxSize={"175px"}
        />
        <Box
          h="60px"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <LinkOverlay
            href={`/products/${productDetails.id}`}
            fontSize="xs"
            fontWeight={600}
            color={"text.300"}
            px={-2}
            pt={4}
            noOfLines={3}
          >
            {productDetails.name}
          </LinkOverlay>
        </Box>
        {(productDetails?.average_rating?.average_rating > 0 ||
          productDetails?.average_rating?.review_count > 0) && (
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Badge
              as={Flex}
              w="fit-content"
              gap={1}
              colorScheme="brand"
              px={2}
              py={0.9}
              color="black"
              display={"inline-flex"}
            >
              <Text fontSize={12}>
                {productDetails?.average_rating?.average_rating}
              </Text>
              <Icon as={AiFillStar} boxSize={4} />
            </Badge>
            <Text
              as="span"
              color="gray.500"
              fontSize={14}
              ms={2}
              align={"center"}
            >
              {productDetails?.average_rating?.review_count + " " + "Reviews"}
            </Text>
          </Flex>
        )}
      </CardBody>
      <Divider />
      <CardFooter justify={"center"} gap={8} alignItems="center" py={2}>
        <Text color="black" fontSize="md">
          ₹{parseFloat(productDetails.base_price).toFixed(2)}
        </Text>
        <ButtonGroup spacing="2">
          <IconButton
            color="brand.700"
            backgroundColor={"brand.500"}
            icon={<FaShoppingCart />}
            size="sm"
            isDisabled={productDetails.available_stock_quantity ? false : true}
            onClick={() => AddToCart(productDetails.id)}
            _hover={{bgColor:"bg.600"}}
          />
          <IconButton
            
            color={isInWishlist ? "#fff" : "brand.700"}
            backgroundColor={isInWishlist ? "red" : "brand.500"}
            icon={<AiFillHeart />}
            size="sm"
            display={displayWishlistButton ? "inline-flex" : "none"}
            onClick={onClick}
            _hover={{bgColor:"bg.600"}}
          />
        </ButtonGroup>
      </CardFooter>
    </LinkBox>
  );
}
