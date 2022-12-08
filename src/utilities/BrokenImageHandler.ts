import { SyntheticEvent } from "react";
import brokenImage from "../assets/broken-image.png";

export const BrokenImageHandler = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = brokenImage;
}