import { Box, UnorderedList, ListItem, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel } from "@chakra-ui/react";
import { COLOR } from "../../constant";
import { Link } from "react-router-dom";

function Category({category}) {
    const hasSubcategories = category.categories && category.categories.length;

    return (
      <>
        <Box display="flex" fontWeight={"semibold"} mt={'10px'}>
          <Text _hover={{color : "red"}}>
            <Link key={category.categoryId} to={`/category/${category.categoryId}`}> {category.nameCategory}</Link>
          </Text>
        </Box>
        {hasSubcategories && (
          <>
            {category.categories.map((subcategory) => (
              <Box mx={"20px"}>
                <Text _hover={{color : "red"}}>
                  <Link key={subcategory.categoryId} ml={"10px"} to={`/category/${subcategory.categoryId}`}>{subcategory.nameCategory}</Link>
                </Text>
              </Box>
            ))}
          </>
        )}
      </>
    );
}

const ListCategory = ({mainCategories}) => {
    return (
        <Box rounded={"20px"} boxShadow={"xl"} bg="white" mt="20px" padding={"20px"} w={"300px"} minHeight={"800px"}>
          <Text fontFamily={'arial'} fontWeight={'bold'} color={COLOR} fontSize={'xl'} mb={10}>Danh mục sản phẩm</Text>
          <Accordion>
            {mainCategories.map((category) => (
              <AccordionItem>
                  <AccordionButton m="10px">
                    <Link to={`/category/${category.categoryId}`}>
                      {category.nameCategory}
                    </Link>
                  </AccordionButton>
                  <AccordionPanel>
                    {category.categories?.map(subCategory => {
                      return <Category 
                        category={subCategory}
                      />
                    })}
                  </AccordionPanel>
              </AccordionItem>              
            ))}
          </Accordion>
        </Box>
    );
}

export default ListCategory