import { Spinner, Box } from "@chakra-ui/react";

type FullScreenLoaderProps = {
  isLoading: boolean;
};

const FullScreenLoader = ({ isLoading = false }: FullScreenLoaderProps) => {
  return (
    <>
      {isLoading && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor="rgba(0, 0, 0, 0.5)"
          zIndex="9999"
        >
          <Spinner size="xl" color="white" />
        </Box>
      )}
    </>
  );
};

export default FullScreenLoader;
