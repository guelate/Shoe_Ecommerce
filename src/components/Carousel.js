/* eslint-disable no-lone-blocks */
import { createPages } from "../utils/functions/main";
import * as AiIcons from "react-icons/ai";

const Carousel = () => {
  return createPages(["1", "2", "3", <AiIcons.AiOutlineArrowRight />]);
};
export default Carousel;
