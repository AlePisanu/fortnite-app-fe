import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { routes } from "../../../communication/routes";

type LogoProps = {
    route?: string;
    size: string;
    src: string;
    altName: string;
}

const Logo: React.FC<LogoProps> = ({
    route = "/",
    size,
    src,
    altName
}) => {
  return (
    <Link to={route}>
      <Box display="flex">
        <Image
          w={size}
          src={src}
          alt={altName}
        />
      </Box>
    </Link>
  );
};

export default Logo;
