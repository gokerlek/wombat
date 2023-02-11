import { Text } from "../index.js";

const SectionHeader = ({ children }) => (
  <Text className="text-2xl text-pRed-400 font-medium border-b border-pBorder-200 mb-8 pb-5 w-5/6 text-center">
    {children}
  </Text>
);

export default SectionHeader;
