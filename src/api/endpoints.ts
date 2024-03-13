type EndpointType = {
  [key: string]: string;
};

export const GetEndpoints = (endpoint: string) => {
  const lang = sessionStorage.getItem("lang");
  const endpoints: EndpointType = {
    newCosmetics: `https://fortnite-api.com/v2/cosmetics/br/new?language=${lang}`,
    news: `https://fortnite-api.com/v2/news?language=${lang}`,
    all: `https://fortnite-api.com/v2/cosmetics/br?language=${lang}`,
  };
  return endpoints[endpoint] || "";
};
